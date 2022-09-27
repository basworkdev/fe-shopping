import React , {useState , useEffect} from "react";
import { Modal } from 'react-bootstrap';
import ContactComp from "./ContactComp";
export default function ModalContact(props) {

    return (
        <>
        <Modal show={props.show} size="lg" centered onHide={()=>{props.onChange(false)}}>
            <Modal.Header closeButton>
            <Modal.Title style={{fontSize:"1.2rem"}}><b><span className="text-primary"><i class="fas fa-shopping-cart"></i></span> ติดต่อสอบถามเพื่อติดตั้งหรือสั่งซื้อได้ที่</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactComp/>
            </Modal.Body>
        </Modal>
        </>
    )
}