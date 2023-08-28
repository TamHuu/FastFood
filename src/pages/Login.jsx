import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/form.css"
function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const onSubmitLogin = (e) => {
    e.prevenDefault()

  }
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='m-auto text-center'>
              <form action="" className="form mb-5" onSubmit={(e)=>onSubmitLogin(e.target.value)}>
                <div className="form__group">
                
                  <input type="email" placeholder='Email' required  ref={emailRef}/></div>
                <div className="form__group">
                  <input type="password" placeholder='Password' required ref={passwordRef}/></div>
                <button type="submit" className='addTOCart__btn'>Login</button>
              </form>
              <Link to="/register">
                Already have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login