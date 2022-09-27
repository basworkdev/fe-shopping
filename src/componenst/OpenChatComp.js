import React , {useState , useEffect} from "react";
import '../assets/css/open-chat.css'
export default function OpenChatComp(props) {
    return (
        <>
            <div className="floating-container">
                <div className="floating-button">
                    <div className="font-icon">
                    <i className="fas fa-comment"></i>
                    </div>
                </div>
                <div className="element-container">
                    <a href="https://lin.ee/xdm4N6q" className="float-element" target="_back">
                    <span>
                    <i className="fab fa-line font-icon2"></i>
                    </span>
                    </a>
                    <a href="https://m.me/109283075234392" className="float-element tooltip-left" target="_back">
                    <span>
                    <i className="fab fa-facebook-messenger font-icon2"></i>
                    </span>
                    </a>
                    <a href="https://web.facebook.com/ufo4x4accessories" className="float-element" target="_back">
                    <span>
                    <i className="fab fa-facebook-square font-icon2"></i>
                    </span>
                    </a>
                </div>
                </div>
        </>
    )
}