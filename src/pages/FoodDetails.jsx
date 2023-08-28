import React, { useEffect, useState } from 'react'
import "../styles/product-detail.css"
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {cartActions} from "../store/shopping-cart/cartSlice"
function FoodDetails() {
    const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product?.image01);
  const { title, price, desc, category } = product
  const [tab, setTab] = useState("desc")

    const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01:previewImg,
      price,
    }))
  }

  useEffect(() => { 
    setPreviewImg(product.image01)
  }, [product])
  useEffect(() => { window.scrollTo(0, 0) }, [product])
 
  return (
    <Helmet title="product-detail">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item mb-3" onClick={() => setPreviewImg(product?.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>
                <div className="img__item  mb-3" onClick={() => setPreviewImg(product?.image02)}>
                  <img src={product.image02} alt="" className='w-50' />
                </div>
                <div className="img__item  mb-3" onClick={() => setPreviewImg(product?.image03)}>
                  <img src={product.image03} alt="" className='w-50' />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__images">
                <div className="img__item">
                  <img src={previewImg} alt="" className='w-100' />
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title">{title}</h2>
                <p className="product__price">Price: <span>${price}</span></p>
                <p className=' category'>Category: <span>{category}</span></p>
                <button className='addTOCART__btn ' onClick={addToCart}>Add to CART</button>
              </div>
            </Col>
            <Col lg="12" md="12" className='container__tab'>
              <div className='tabs d-flex align-items-center gap-3 py-2'>
                <h6 className={tab==="desc"?'tab__active':'tab__review' } onClick={() => setTab('desc')}>Description</h6>
                <h6 className={tab==="desc"?'tab__review':'tab__active' } onClick={() => setTab('rev')}>Review</h6>
              </div>
              {tab==="desc" ? <div className='tab__content'>
                <p>{desc}</p>
              </div> :
                <div className='tab__form mb-3'>
                  <div className="review">
                    <p className="user__name mb-0">Tam Huu</p>
                    <p className="user__email">tam@gmail.com</p>
                    <p className="feedback__text">great product</p>

                  </div>
            
                  <form className="form" >

                    <div className="form__group">
                      <input type="text" name="" id="" placeholder='Enter your name' />
                    </div>
                    <div className="form__group">
                      <input type="text" name="" id="" placeholder='Enter your name' />
                    </div>
                    <div className="form__group">
                      <textarea rows={5} type="text" placeholder='Enter your name' />
                    </div>
                    <button type='submit'  className='submit'>Submit</button>
                  </form>

                </div>

                }

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails