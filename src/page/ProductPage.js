import React , {useState , useEffect} from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useHistory , useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import apis from "../apis/ProductsApi";
import apisMain from "../apis/MainApi"
import tc from '../config/text.json'
import bootbox from 'bootbox';

// CSS
import "../assets/css/product-page.css"

// Comp
import CardProductComp from "../componenst/CardProductComp"
import SpinnerComp from "../componenst/SpinnerComp"
import CartAlertComp from "../componenst/CartAlertComp"
import ProductImageComp from "../componenst/ProductImageComp";
import ModalContact from "../componenst/ModalContact";

// ACT
import { CartAct } from "../actions/CartAct";

// config
import webConfig from "../config/webConfig";


const n = 0;
export default function ProductPage(props) {
    const {key} = useParams();
    let history = useHistory();
    const location = useLocation()
    let _ = require('lodash');
    const tcv = tc.validate;
    const dispatch = useDispatch();
    const numeral = require('numeral');
    const [spinnerState,setSpinnerState] = useState(false);
    const [productState,setProductStae] = useState();
    const [productTypeState , setProductTypeState ] = useState([])
    const [modelCarsState , setModelCarsState] = useState([])
    const [detailPopUpCartState, setDetailPopUpCartState] = useState();

    const [productImageState , setProductImageState] = useState();
    const [colorActiveState , setColorActiveState] = useState();
    const [subDetailState , setSubDetailState] = useState(false);
    const [orderState , setOrderState] = useState(1);
    const [stockFullAlertState , setStockFullAlertState] = useState(false);
    const [popupCartState , setPopUpCartState] = useState(false);
    const [showContactState , setShowContactState] = useState(false);

    const inStore = useSelector(state => {
        return state.CsCartRedu;
    });

    useEffect(()=>{
        getProductByKey();
        console.log("inStore",inStore)
    },[])

    const getProductByKey = async () => {
        setSpinnerState(true)
        let product = await apis.doserviceGetProductByKey(key);
        if(product.length > 0){
            product = product[0];
            console.log(product)
            let productByType = await apis.doserviceGetProductByType(product.typeId);
            product.img = product.img.split(",");
            product.color = product.color.split(",");
            if(product.carModel) {
                let model = product.carModel.split(",")
                model = model.map((data)=>{
                    return {
                        value : data,
                        selected : false
                    }
                })
                if(model.length===1) {
                    model[0].selected = true
                }
                setModelCarsState(model)
            }
            
            setColorActiveState(product.color[0])
            setProductImageState(product.img[0]);
            setProductStae(product);
            setProductTypeState(productByType);
        }
        setSpinnerState(false)
    }

    const clickViewImage = (img) => {
        setProductImageState(img);
    } 
    const colorActive = (color) => {
        setColorActiveState(color);
    }

    const setCardProduct = (data) => {
        return data.map((data , index) => {
            return <>
                <div className="col-md-3 col-6">
                    <CardProductComp product={data}/>
                </div>
            </>
        })
    }

    const showSubDetail = () => {
        setSubDetailState(!subDetailState);
    }

    const setOrderChange = (t) => {
        let order = orderState;
        if(t === "+") {
            if(order >= productState.stock) {
                order = productState.stock;
                setStockFullAlertState(true);
            } else {
                order += 1;
                setStockFullAlertState(false);
            }
        } else {
            order -= 1;
            setStockFullAlertState(false);
        }
        if(order <= 0) {
            order = 1;
        }
        
        setOrderState(order);
    }

    const buyNow = () => {
        let next = false;
        let selectedModelCar = _.find(modelCarsState , {"selected" : true})
        if(!selectedModelCar) {
            if(modelCarsState.length>0) {
                bootbox.alert(tc.validate.reqCarModel);
                return
            } else {
                next = true
            }
        } else {
            next = true
        }
        if(next) {
            addtoCart(false);
            window.location.href = '/cart'
        }
    }

    const addtoCart = (popup) => {
        try {
            let product = {}
            let payload = inStore
            let order = 0;
            let Cart = {};
            product = _.find(payload.listForCart, ['id', productState.id]);
            let selectedModelCar = _.find(modelCarsState , {"selected" : true})
            let carModel = ""
            if(!selectedModelCar) {
                if(modelCarsState.length>0) {
                    bootbox.alert(tc.validate.reqCarModel);
                    return
                } 
            } else {
                carModel = selectedModelCar.value
            }
            if(product) {
                order = product.order;
                let listCart = [];
                payload.listForCart.map((data)=>{
                    if(data.id !== product.id) {
                        listCart.push(data)
                    }
                })
                payload.listForCart = listCart;
            } 
            Cart = {
                productKey : productState.productKey,
                color : colorActiveState,
                price : productState.price,
                fullPrice : productState.fullPrice,
                order : orderState,
                stock : productState.stock,
                mainImg : productState.mainImg,
                id : productState.id,
                name : productState.name,
                brandId : productState.brandId,
                brandName_th : productState.brandName_th,
                deliveryCost : productState.deliveryCost,
                carModel : carModel
            }
            setDetailPopUpCartState({...Cart , order : orderState});
            Cart.order = orderState + order
            let listForCart = payload.listForCart ? payload.listForCart : []
            listForCart.push(Cart);
            payload.listForCart = listForCart
            localStorage.setItem("listForCart" , JSON.stringify(payload.listForCart))
            dispatch({ type: CartAct.LOAD_DATA, payload });
            if(popup) {
                setPopUpCartState(true)
            }
            
        } catch (error) {
            alert(tcv.fullStock)
        }
        
    }

    const setButtonContact = () => {
        return <button style={{marginTop:"30px"}} type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>setShowContactState(true)}>
        <i className="fas fa-comment"></i> สั่งซื้อและสอบถามเกี่ยวกับสินค้า
    </button>
    } 

    const setButton = () => {
        if(productState.salesType === "PREORDER") {
            return <div style={{marginTop : 50}}>
                <div className="pre-order-button ">เป็นสินค้าพรีออเดอร์ กรุณาสอบถามกับทางร้านก่อนสั่งซื้อ</div>
            </div>
        } else {
            if(productState.stock > 0) {
                return <>
                <div className="row">
                    <div className="col-12">
                        <h5 style={{paddingTop : "1.2rem"}} className="font-weight-bold">จำนวน</h5>
                        <div>
                            <span className="input-number-decrement" onClick={()=>setOrderChange("-")}>–</span><input className="input-number" type="text" value={orderState}/><span className="input-number-increment" onClick={()=>setOrderChange("+")}>+</span>
                        </div>
                        <span className="text-danger">{stockFullAlertState ? `${tcv.fullStock} ${productState.stock} ชิ้น` : ""}</span>
                    </div>
                    <div className="col-12">
                        {productState.deliveryCost>0?<p style={{marginTop : "5px"}}>( ค่าส่ง {numeral(productState.deliveryCost).format('0,0')} บาท/ชิ้น )</p>:<></>}
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-6">
                        <button style={{marginTop:"30px"}} type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>addtoCart(true)}>
                            <i className="fas fa-shopping-cart"></i> เพิ่มในรถเข็น
                        </button>
                    </div>
                    <div className="col-6">
                        <button style={{marginTop:"30px"}} type="button" className="btn btn-danger btn-lg btn-block shadow" onClick={()=>buyNow()}>ซื้อ</button>
                    </div>
                </div>
                </>
            } else {
                return 
            }
        }
    }

    const selectedModelCar = (i) => {
        let modelCar = modelCarsState;
        modelCar = modelCarsState.map((data,index)=>{
            if(i === index) {
                data.selected = true
            } else {
                data.selected = false
            }
            return data
        })
        setModelCarsState(modelCar)
    }

    const setModelCars = () => {
        if(modelCarsState.length>0) {
            return modelCarsState.map((data,index)=>{
                    return <button onClick={()=>selectedModelCar(index)} key={index} class={`product-variation product-variation${data.selected ? '--selected' : ''}`} aria-label="39" aria-disabled="false">
                        {data.value}
                        {data.selected ? 
                        <div class="product-variation__tick">
                            <svg enable-background="new 0 0 12 12" viewBox="0 0 12 12" x="0" y="0" class="product-variation-svg-icon icon-tick-bold"><g><path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path></g></svg>
                        </div>
                        : <></>}
                    </button>
            })

        }
    }

    return (
        <>
        <CartAlertComp status={popupCartState} data={detailPopUpCartState} getStatus={(e) => setPopUpCartState(e)} />
        <ModalContact show={showContactState} onChange={(e)=>setShowContactState(e)}/>
        <SpinnerComp spinner={spinnerState}/>
        
        {productState ? 
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                {/* <ProductImageComp/> */}

                <div className="pro-img-page">
                    <div className="pro-container-discount-persen-page">
                        <img src={`${productImageState}`} width="100%"/>
                        {
                            productState.fullPrice !== productState.price ? 
                            <div className="pro-discount-persen-page">
                                <p className="pro-box-discount-persen-page shadow font-weight-bold">
                                    -{numeral(apisMain.percentSell(productState.fullPrice,productState.price)).format('0')}%
                                </p>
                            </div>
                            :
                            ""
                        }
                        
                    </div>
                    <div className="row" style={{marginTop : "30px"}}>
                        {productState.img.map((data,index)=>{
                            return <>
                                <div className="col-2 col-md-2">
                                    <div 
                                        style={{marginBottom : "15px"}}
                                        className={`pro-sum-img-page ${data === productImageState ? "active" : ""}`}
                                        onClick={()=>{clickViewImage(data)}}
                                    >
                                        <img src={`${data}`} width="100%"/>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
                
            </div>
            <div className="col-md-6">
                <div className="pro-product-page">
                    <h1 className="pro-name-page font-weight-bold">{productState.name}</h1>
                    <p>{productState.brandName_th}</p>
                    {productState.salesType === "PREORDER" ? <div className="pre-order-box">สินค้าพรีออเดอร์</div> : <></>}
                    <h5 style={{paddingTop : "0.5rem"}} className="font-weight-bold">รายละเอียด</h5>
                    <p>{productState.detail}</p>
                    <div hidden={!subDetailState} style={{paddingBottom : "20px"}}>
                        <div dangerouslySetInnerHTML={{ __html: productState.subDetail }} />
                    </div>
                    {productState.subDetail ? <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>showSubDetail()}>{subDetailState ? "ดูน้อยลง" : "ข้อมูลเพิ่มเติม"}</button> : ""}
                    
                    <p className="pro-price-page font-weight-bold">{numeral(productState.price).format('0,0')}.-</p>
                    {numeral(productState.fullPrice).format('0,0') !== numeral(productState.price).format('0,0') ? <p className="pro-discount-page">{numeral(productState.fullPrice).format('0,0')}</p> : ""}
                    
                    {modelCarsState.length>0 ? 
                        <div>
                            <h5 style={{paddingTop : "0.3rem"}} className="font-weight-bold">รุ่นรถ</h5>
                            {setModelCars()}
                        </div> :
                    <></>}
                    
                    <h5 style={{paddingTop : "0.3rem"}} className="font-weight-bold">สี</h5>
                    <div className="pro-color-box-page">
                        <div className="row">
                            {productState.color.map((data,index)=>{
                                return <div className="col-1 col-md-1">
                                    <div 
                                        className={`pro-color-page ${colorActiveState === data ? "active" : ""}`} 
                                        style={{backgroundColor:`${data}` , cursor : "pointer"}}
                                        onClick={()=>colorActive(data)}
                                    >
                                    </div>
                                </div>
                            })}
                            
                        </div>
                        {webConfig.system.btnBuy ? setButton() : setButtonContact()}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    : 
    <div className="container text-center" style={{paddingTop : "70px" , paddingBottom : "70px" , fontSize : "2rem"}}>
        ไม่พบสินค้า
    </div>
    }
        <hr/>
    <br/>
    {productState ?
        <div className="container">
            <div className="line-product-title">
                <h4>{productState.typeName}</h4>
                <p className="p-product-title text-secondary">{productState.typeDetail}</p>
            </div>
            <br/>
            <div className="row">
                {setCardProduct(productTypeState)}
            </div>
            <div className="text-right other-btn">
                <a href={`/catalog/${productState.typeId.toLowerCase()}`} type="button" className="btn btn-primary">เพิ่มเติม</a>
            </div>
        </div>
    :
    ""
    }
    <br/>
    <br/>
    <br/>
    <br/>
        </>
    )
}