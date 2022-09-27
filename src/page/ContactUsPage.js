import React , {useState , useEffect} from "react";

// css
import '../assets/css/contact-us.css'

export default function ContactUsPage(props) {

    return <>
    <div className="slide-container">
    <div className="bg-contact">
        <div className="container" style={{color:"#fff"}}>
            <div style={{paddingTop:"150px"}}>
                <h1 className="font-weight-bold" style={{fontSize : "3rem"}}>UFO4x4 Accessories</h1>
                <p className="font-weight-bold" style={{fontSize : "2rem" , marginTop : "-10px"}}>นึกถึงอุปกรณ์ตกแต่งรถยนต์ออฟโรด และอุปกรณ์คาร์แคมป์ นึกถึงเรา</p>
            </div>
        </div>
    </div>
    <div className="slide-top-left">
        <img src="../image/slide-top2.png" width="100%"/>
    </div>
    <div className="slide-bottom-left">
        <img src="../image/slide-bottom.png" width="100%"/>
    </div>
    </div>
    
    <div style={{marginTop : "60px"}}>
        <div className="container">
            <center>
                <p style={{fontSize : "2rem"}} className="font-weight-bold">SOCIAL MEDAI</p>
                <div className="row" style={{marginTop : 30}}>
                    <div className="col-md-3"></div>
                    <div className="col-md-2 col-4">
                        <a href="https://web.facebook.com/ufo4x4accessories" className="float-element" target="_back">
                            <div className="box-soial-contact">
                                <div className="soial-contact">
                                    <i className="fab fa-facebook"></i>
                                </div>
                                <p>UFO4x4</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-2 col-4">
                        <a href="https://m.me/109283075234392" className="float-element" target="_back">
                            <div className="box-soial-contact">
                                <div className="soial-contact">
                                    <i className="fab fa-facebook-messenger"></i>
                                </div>
                                <p>UFO4x4</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-2 col-4">
                        <a href="https://lin.ee/xdm4N6q" className="float-element" target="_back">
                            <div className="box-soial-contact">
                                <div className="soial-contact">
                                    <i className="fab fa-line"></i>
                                </div>
                                {/* <p>RodX-Offroad</p> */}
                            </div>
                        </a>
                    </div>
                    {/* <div className="col-md-2 col-4">
                        <div className="box-soial-contact">
                            <div className="soial-contact">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <p>RodX-Offroad</p>
                        </div>
                    </div> */}
                    {/* <div className="col-md-2 col-4">
                        <div className="box-soial-contact">
                            <div className="soial-contact">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <p>RodX-Offroad</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <div className="box-soial-contact">
                            <div className="soial-contact">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <p>RodX-Offroad</p>
                        </div>
                    </div> */}
                </div>
                <br/>
                <br/>
                <p style={{fontSize : "2rem"}} className="font-weight-bold">ติดต่อ</p>
                <p style={{marginTop : "15px"}}><i className="fas fa-mobile-alt"></i> : 098-4708144</p>
                <p><i className="fas fa-envelope"></i> : ufo4x4accessories@gmail.com</p>
            </center>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
}