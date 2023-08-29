import React, { useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row, Spinner } from 'reactstrap'
import { useForm } from 'react-hook-form'
import "../styles/form.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Register() {
const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
      return
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()

  }

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='m-auto text-center'>
              <form action="" className="form mb-5" onSubmit={handleSubmit(submitForm)}>
                <div className="form__group">

                  <input type="text" placeholder='FullName'   {...register('firstName')}
                    required /></div>
                <div className="form__group">

                  <input type="email" placeholder='Email'   {...register('email')}
                    required /></div>
                <div className="form__group">
                  <input type="password" placeholder='Password'  {...register('password')}
                    required /></div>
                 <div className="form__group">

        <input
          type='password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
              <button type='submit' className='button' disabled={loading}>
        {loading ? <Spinner /> : 'Register'}
      </button>
              </form>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register