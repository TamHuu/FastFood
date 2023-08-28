import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'

import "../styles/form.css"
function Register() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const onSubmitRegister = (e) => {
    e.prevenDefault()

  }
  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='m-auto text-center'>
              <form action="" className="form mb-5" onSubmit={(e) => onSubmitRegister(e.target.value)}>
                <div className="form__group">

                  <input type="text" placeholder='FullName' required ref={nameRef} /></div>
                <div className="form__group">

                  <input type="email" placeholder='Email' required ref={emailRef} /></div>
                <div className="form__group">
                  <input type="password" placeholder='Password' required ref={passwordRef} /></div>
                <button type="submit" className='addTOCart__btn'>Register</button>
              </form>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register