import React, { useState } from 'react'
import "../styles/product-detail.css"
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/products'
import {useParams} from 'react-router-dom'
function FoodDetails() {
  const { id } = useParams();
const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  console.log(">>>Check prveuew",product);
  return (
    <Helmet title="product-detail">
      <CommonSection title="product 01" />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item mb-3" onClick={()=>setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>
                <div className="img__item  mb-3" onClick={()=>setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className='w-50' />
                </div>
                <div className="img__item  mb-3" onClick={()=>setPreviewImg(product.image03)}>
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
                <h2 className="product__title">Pizza with mushroom</h2>
                <p className="product__price">Price: <span>$34</span></p>
                <p className='mb-5 category'>Category: <span>Burger</span></p>
                <button className='addTOCART__btn '>Add to CART</button>
              </div>
            </Col>
            <Col lg="12" md="12">
              <div className='tabs d-flex align-items-center gap-3 py-2'>
                <h6 className='tab__active'>Description</h6>
                <h6>Review</h6>
              </div>
              <div className='tab__content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi, reiciendis laboriosam corrupti ex magnam doloremque quam debitis fugit amet sed autem, sit eaque, mollitia placeat quos ut praesentium dolor.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails