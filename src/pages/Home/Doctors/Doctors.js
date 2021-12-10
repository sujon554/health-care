import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Doctor.css'
import doctors from  '../../images/doctor.jpeg'
const Doctors = () => {
    return (
        <div className="container py-5">
            <img src={doctors} alt="" />
            <h1 className="py-5">Our Doctor's</h1>
            <Row xs={1} md={3} className="g-4">
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                    <h3>Dr. William</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY=" />
                    <h3>Dr. Myles</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKRYJYNTZDvUtzoQTdI2gneG1QlpHn1bm5g&usqp=CAU" />
                    <h3>Dr. Fouad. M</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" />
                    <h3>Dr. Khalid Abbed</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFtpxOrDHj9v7LolWDxw3h4rOQolOUt4zyQsitBL1HNC0K5nQ-7lkR7yGIWIP0nNdYfc&usqp=CAU" />
                    <h3>Dr. Naresh Trehan</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFeqXdQEMmVrqC44y-1WpCyBqSpWQmwFcccEZum1GuZTDi0pQ6kBHKT80LpF9t1cbprE&usqp=CAU" />
                    <h3>Dr. Arthur Reese</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_2yrCOq9Q0joZK8TRFCmHcxDtoUPdXsu5AepayL4molUb7PhYnZG_8QOnBMBgJpeepU&usqp=CAU" />
                    <h3>Dr. T.M Anderson</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
                <Col className="card">
                <Card.Img className="drPhoto" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfuUt5gwIX8pNv5XxRaPqJMOIPuM5n0C54ZKOypb_NquVW7_-XGMFgoudsHgu2CqL25w&usqp=CAU" />
                    <h3>Dr.  F. Aaron, M.D</h3>
                    <h6>Designation: MBBS, Health, DMCH </h6>
                </Col>
            </Row>
            
        </div>
    );
};

export default Doctors;