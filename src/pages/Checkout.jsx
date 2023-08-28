import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import "../styles/check-out.css"
import { useSelector } from 'react-redux'
const Checkout = () => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)
  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPhoneNumber, setEnterPhoneNumber] = useState([])
  const [enterCountry, setEnterCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const shippingInfo = []
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const userShippingAdress = {
      name: enterName,
      email: enterEmail,
      phone: enterPhoneNumber,
      country: enterCountry,
      code: postalCode,

    }
    shippingInfo.push(userShippingAdress)
  
  }
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <form className="checkout__form" onSubmit={onSubmitHandler}>
                <h6 className="mb4">Shipping Address</h6>
                <div className="form__group">
                  <input type="text" placeholder='Enter your name' id="" onChange={(e)=>setEnterName(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="email" placeholder='Enter your email' id="" onChange={(e)=>setEnterEmail(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="number" placeholder='Phone number' id="" onChange={(e)=>setEnterPhoneNumber(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="text" placeholder='Country' id="" onChange={(e)=>setEnterCountry(e.target.value)}/>
                </div>

                <div className="form__group">
                  <input type="number" placeholder='Postal code' id="" onChange={(e)=>setPostalCode(e.target.value)}/>
                </div>
                <button className='addTOCart__btn'>Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className='checkout__bill'>
                <h6 className='d-flex justify-content-between align-items-center' >
                  SubTotal:  <span>${cartTotalAmount}</span>
                </h6>
                <h6 className='d-flex justify-content-between align-items-center'>Shipping:
                  <span>${shippingCost}</span>
                </h6>
                <div className='checkout__total'>
                  <h5 className='d-flex justify-content-between align-items-center'>Total: <span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout