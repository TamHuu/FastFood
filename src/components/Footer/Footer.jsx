import React from "react";
import { Container, ListGroup, Row, Col, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>MyPizza</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat nam tempore incidunt nulla deserunt!</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__item-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">

                <span>Friday - Tuesday</span>
                <p>10:00am - 11:00pm</p>

              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item  border-0 ps-0">

                <span>Wednesday - Thursday</span>
                <p>Off day</p>


              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__item-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <p>Location: Pham Van Chieu, Go Vap</p>
                <span>Phone: 012.331.232</span>
         

              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item  border-0 ps-0">

                <span>Email: lehuutamdev2000@gmail.com</span>
               


              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">   <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
           
              <input type="email" name="email" placeholder="Enter your email" id="" />
              <span>
                <i className="ri-send-plane-line"></i>
           </span>
            </div></Col>
         
        </Row>
     
      </Container>

    </footer>
  );
};

export default Footer;