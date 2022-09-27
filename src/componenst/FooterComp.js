import React , {useState , useEffect} from "react";
import ContactFooterComp from "./ContactComp";
export default function FooterComp(props) {
    return (
        <>
            <img src="../image/footer.png" width="100%"  style={{marginBottom:"-6px"}}/>
            <div className="footer text-white-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" style={{paddingBottom : "4rem"}}>
                            <center>
                                <img src={`../image/logo_footer.png`} width="200px"/>
                                {/* <img src={`${process.env.REACT_APP_WEB}image/logo_footer.png`} width="200px"/> */}
                            </center>
                            
                        </div>
                        <div className="col-md-4" style={{paddingBottom : "4rem"}}>
                            <center>
                            <h5>แบรนด์ที่จำหน่าย</h5>
                            <div className="row" style={{marginTop : "1.5rem"}}>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/ironman4x4.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/tjm.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/option2.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/twi.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/paa.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/friends_camp.png`} className="footer-brand-image"/>
                                </div>
                                <div className="col-3 col-md-3 footer-brand">
                                    <img src={`../image/tty.png`} className="footer-brand-image"/>
                                </div>
                                
                                
                                
                            </div>
                            </center>
                        </div>
                        <div className="col-md-4" style={{paddingBottom : "4rem"}}>
                        <center>
                            <h5>SOCIAL MEDAI</h5>
                            <div className="row footer-icon">
                                <div className="col-3"></div>
                                <div className="col-2">
                                    <a href="https://web.facebook.com/ufo4x4accessories" className="float-element" target="_back">
                                        <i className="fab fa-facebook social-footer-icon" ></i>
                                    </a>
                                </div>
                                {/* <div className="col-2">
                                    <i className="fab fa-instagram social-footer-icon"></i>
                                </div> */}
                                {/* <div className="col-2">
                                    <i className="fab fa-youtube social-footer-icon"></i>
                                </div> */}
                                {/* <div className="col-2">
                                    <i className="fab fa-twitter social-footer-icon"></i>
                                </div> */}
                                <div className="col-2">
                                    <a href="https://m.me/109283075234392" className="float-element" target="_back">
                                        <i className="fab fa-facebook-messenger social-footer-icon" ></i>
                                    </a>
                                </div>
                                <div className="col-2">
                                    <a href="https://lin.ee/xdm4N6q" className="float-element" target="_back">
                                        <i className="fab fa-line social-footer-icon"></i>
                                    </a>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            
                            <h5 style={{marginTop:"25px"}}>ติดต่อเรา</h5>
                            
                            <p style={{marginBottom : "0px"}}><i className="fas fa-mobile-alt"></i> : 098-4708144</p>
                            <p><i className="fas fa-envelope"></i> : ufo4x4accessories@gmail.com</p>
                            </center>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end text-white-50">
                <div className="container">
                    09/01/2020
                </div>
            </div>
        </>
    )
}