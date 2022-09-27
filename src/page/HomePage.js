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
    const [campingAccessoriesState,setCampingAccessoriesState] = useState([])
    const [assistiveDeviceOffRoadState , setAssistiveDeviceOffRoadState] = useState([])
    const [awningsAndAccessoriesState , setAwningsAndAccessoriesState] = useState([])

    useEffect(async () => {
        // setSpinnerState(true)
        try {
            let ROOF_TOP_TENT = await getProductByType("ROOF_TOP_TENT");
            let FRONT_BUMPER = await getProductByType("FRONT_BUMPER");
            let REAR_BUMPER = await getProductByType("REAR_BUMPER");
            let ROLL_BAR = await getProductByType("ROLL_BAR");
            let ROOF_RACK = await getProductByType("ROOF_RACK");
            let SIDE_STEP = await getProductByType("SIDE_STEP");
            let CAMPING_ACCESSORIES = await getProductByType("CAMPING_ACCESSORIES");
            let ASSISTIVE_DEVICE_OFF_ROAD = await getProductByType("ASSISTIVE_DEVICE_OFF_ROAD");
            let AWNINGS_AND_ACCESSORIES = await getProductByType("AWNINGS_AND_ACCESSORIES");

            setRooftoptentState(ROOF_TOP_TENT);
            setFronBumperState(FRONT_BUMPER);
            setRearBumperState(REAR_BUMPER);
            setRollBarState(ROLL_BAR)
            setRoofRackState(ROOF_RACK)
            setSideStepState(SIDE_STEP)
            setCampingAccessoriesState(CAMPING_ACCESSORIES)
            setAssistiveDeviceOffRoadState(ASSISTIVE_DEVICE_OFF_ROAD)
            setAwningsAndAccessoriesState(AWNINGS_AND_ACCESSORIES)
            // setSpinnerState(false)
        } catch (error) {
            setSpinnerState(false)
            console.log(error)
        }
        

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
            <div style={{marginTop:"50px"}}>
                <div className="slide-container">
                    
                        <SlideComp className=""/>
                    
                    <div className="slide-top-left">
                        <img src="../image/slide-top2.png" width="100%"/>
                    </div>
                    <div className="slide-bottom-left">
                        <img src="../image/slide-bottom.png" width="100%"/>
                    </div>
                </div>
            </div>

            <div className="logo-brand">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-6 col-md-3 text-center">
                        </div> */}
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/ironman4x4.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/tjm.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/option.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/twi.png" width="50%"/>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <img src="../image/paa.png" width="50%"/>
                        </div>
                        {/* <div className="col-6 col-md-3 text-center">
                            <img src="../image/alu-cab.png" width="50%"/>
                        </div> */}
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
                                <img src="https://firebasestorage.googleapis.com/v0/b/rodxoffroadshop.appspot.com/o/product%2Fironman4x4_rooftop_tent_nomad_1300%2Fironman4x4_rooftop_tent_nomad_1300-0?alt=media&token=e2e379d3-e61a-41d6-87d8-733a8f9e631d" width="100%"/>
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
                            <p style={{fontSize : "2rem"}} className="font-weight-bold">65,000</p>
                            {/* <div style={{width:"100%",marginTop:"-60px"}} className="text-right"> */}
                            <div style={{width:"100%",marginTop:"-30px"}} className="text-right">
                                <a href="/product/ironman4x4_rooftop_tent_nomad_1300" className="btn btn-primary" style={{width:"100px"}}>รายละเอียด</a>
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

            <div className="container">
                <div className="line-product-title">
                    <h4>กันสาดและอุปกรณ์เสริม</h4>
                    <p className="p-product-title text-secondary">กันสาดข้างตัวรถและอุปกรณ์เสริมต่างๆ จะช่วยอำนวยความสะดวกให้กับการไปตั้งแคมป์ของคุณได้อย่างมาก</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(awningsAndAccessoriesState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/awnings_and_accessories" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>

            <div className="container">
                <div className="line-product-title">
                    <h4>อุปกรณ์แคมป์ปิ้ง</h4>
                    <p className="p-product-title text-secondary">อุปกร์แคมป์ปิ้งคุณภ่าพ ทนทาน แข็งแรง</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(campingAccessoriesState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/camping_accessories" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
            </div>


            <div className="container">
                <div className="line-product-title">
                    <h4>อุปกรณ์ช่วยเหลือในเส้นทางออฟโรด</h4>
                    <p className="p-product-title text-secondary">อุปกรณ์ช่วยเหลือในเส้นทางออฟโรด เพื่อให้เราไปถึงเส้นชัยและเป่าหมายที่เราตั้งไว้</p>
                </div>
                <br/>
                <div className="row">
                    {setCardProduct(assistiveDeviceOffRoadState)}
                </div>
                <div className="text-right other-btn">
                    <a href="/catalog/assistive_device_off_road" type="button" className="btn btn-primary">เพิ่มเติม</a>
                </div>
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