import React, {useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/form.css"
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/apiRequest'

function Login() {
  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  //redux state

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onSubmitLogin = (e) => {
    e.prevenDefault()
    let userCredentials = {
      email, password
    }
    dispatch(loginUser(userCredentials,dispatch,navigate))
  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='m-auto text-center'>
              <form action="" className="form mb-5" onSubmit={(e) => onSubmitLogin(e.target.value)}>
                <div className="form__group">

                  <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <div className="form__group">
                  <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                <button type="submit" className='addTOCart__btn'>
               Login
                </button>
             
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