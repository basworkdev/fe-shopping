import React , {useState , useEffect} from "react";
import { useHistory } from "react-router-dom";

// Comp
import SlideComp from '../componenst/SlideComp'
import CardProductComp from '../componenst/CardProductComp'
import SpinnerComp from "../componenst/SpinnerComp"

// API
import apis from "../apis/ProductsApi";

// CSS
import '../assets/css/home-page.css'

export default function HomePage(props) {
    let history = useHistory();
    const [spinnerState,setSpinnerState] = useState(false);
    const [frontBumperState , setFronBumperState] = useState([])
    const [rearBumperState , setRearBumperState] = useState([])
    const [rollBarState , setRollBarState] = useState([]);
    const [roofRackState , setRoofRackState] = useState([])
    const [sideStepState , setSideStepState] = useState([])
    const [roofTopTentStete , setRooftoptentState] = useState([])


    useEffect(async () => {
        setSpinnerState(true)
        let ROOF_TOP_TENT = await getProductByType("ROOF_TOP_TENT");
        let FRONT_BUMPER = await getProductByType("FRONT_BUMPER");
        let REAR_BUMPER = await getProductByType("REAR_BUMPER");
        let ROLL_BAR = await getProductByType("ROLL_BAR");
        let ROOF_RACK = await getProductByType("ROOF_RACK");
        let SIDE_STEP = await getProductByType("SIDE_STEP");

        setRooftoptentState(ROOF_TOP_TENT);
        setFronBumperState(FRONT_BUMPER);
        setRearBumperState(REAR_BUMPER);
        setRollBarState(ROLL_BAR)
        setRoofRackState(ROOF_RACK)
        setSideStepState(SIDE_STEP)
        setSpinnerState(false)

    }, [])

    const getProductByType = async (typeId) => {
        let productByType = await apis.doserviceGetProductByType(typeId);
        return productByType;
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

    return(
        <>
            <SpinnerComp spinner={spinnerState}/>
            <div className="slide-container">
                <SlideComp className=""/>
                <div className="slide-top-left">
                    <img src="../image/slide-top2.png" width="100%"/>
                </div>
                <div className="slide-bottom-left">
                    <img src="../image/slide-bottom.png" width="100%"/>
                </div>
            </div>

            <div className="logo-brand">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-6 col-md-3 text-center">
                        </div> */}
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/twi.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/paa.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/friends_camp.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/tty.png" width="50%"/>
                        </div>
                        {/* 
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/arc-teryx.png" width="50%"/>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="main-rooftop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{paddingRight : "30px"}}>
                                <br/>
                                <img src="https://firebasestorage.googleapis.com/v0/b/rodxoffroadshop.appspot.com/o/product%2Frooftop_friends_camp_1_6%2Fmain-rooftop_friends_camp_1_6?alt=media&token=363ae20a-bc6f-4934-afb2-6fd6dd380272" width="100%"/>
                            </div>
                            <br/>
                        </div>
                        <div className="col-md-6 card-promotion1" >
                            <h3>สินค้าแนะนำ</h3>
                            <div className="card-promotion shadow-sm">
                                {/* <div className="a-promotion1">
                                    <div className="b-promotion1">
                                    <div className="triangle-topright"></div>
                                    <p className="triangle-topright-number font-weight-bold">-20%</p>
                                    </div>
                                </div> */}
                                <h4 className="card-title" style={{marginTop:"20px"}}>เต็นท์หลังคา rooftop tent 1.6 เมตร</h4>
                                <p className="card-text text-black-50 card-product-detail">
                                   เต็นท์หลังคาหลังแข็ง ขนาดกว้าง นอนได้ 2-3 คน กันน้ำกันฝนได้ดี ที่นอนนุ่มสบาย เต็นท์มีหน้าต่างที่ใหญ่ช่วยระบายอากาศได้ดี
                                </p>
                            {/* <p style={{textDecoration: "line-through"}} className="text-secondary">37,9000</p> */}
                            {/* <p style={{fontSize : "2rem",marginTop:"-20px"}} className="font-weight-bold">37,9000</p> */}
                            <p style={{fontSize : "2rem"}} className="font-weight-bold">37,9000</p>
                            {/* <div style={{width:"100%",marginTop:"-60px"}} className="text-right"> */}
                            <div style={{width:"100%",marginTop:"-30px"}} className="text-right">
                                <a href="/product/rooftop_friends_camp_1_6" className="btn btn-primary" style={{width:"100px"}}>รายละเอียด</a>
                            </div>
                            </div>
                            
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {setCardProduct(roofTopTentStete)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/roof_top_tent" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
                <br/>
            </div>
            <div className="bg-camping1">
            </div>
            <br/>
            <div className="container">
                <div className="line-product-title">
                    <h4>กันชนหน้า</h4>
                    <p className="p-product-title text-secondary">กันชนหน้าเพิ่มความหล่อ ดุดัน แข็งแรง แถมป้องกันรถของถ่านได้อย่างดี</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(frontBumperState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/front_bumper" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="line-product-title">
                    <h4>กันชนหลัง</h4>
                    <p className="p-product-title text-secondary">กันชนหลังคุณภาพ ปกป้องรถของท่านจากเหตุการต่างๆ</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(rearBumperState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/rear_bumper" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="line-product-title">
                    <h4>โรลบาร์</h4>
                    <p className="p-product-title text-secondary">เพิ่มความหล่อดุดัน และนำไปใช้ประโยชน์ได้จริง ด้วยโรลบาร์คุณภาพ</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(rollBarState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/roll_bar" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="line-product-title">
                    <h4>แร็คหลังคา</h4>
                    <p className="p-product-title text-secondary">เพิ่มพื้นที่ใช้สอยบนหลังคารถของท่าน และยังเพิ่มความโหด หล่อ บึกบึน ด้วยแร็คหลังคาคุณภาพ</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(roofRackState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/roof_rack" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>
            <div className="container">
                <div className="line-product-title">
                    <h4>บันไดข้าง</h4>
                    <p className="p-product-title text-secondary">ป้องกันการเบียด และมันใจทุกครั้งในการก้าวขึ้นรถของท่าน ด้วยบันไดเหล็กคุณภาพ</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(sideStepState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/side_step" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}