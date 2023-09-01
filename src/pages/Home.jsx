import React,{useState,useEffect} from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import "../styles/main.css";
import featureImg01 from "../assets/images/service-01.png"
import featureImg02 from "../assets/images/service-02.png"
import featureImg03 from "../assets/images/service-03.png"
import products from "../assets/fake-data/products.js"
import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"
import WhyImg from '../assets/images/location.png'
import networkImg from "../assets/images/network.png"
import "../styles/home.css"
import ProductCart from "../components/UI/product-cart/ProductCart";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
const Home = () => {
  const [category, setCategory] = useState('All')
  const [allProducts, setAllProducts] = useState(products)
  const [hottPizza, setHottPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza")
    const slicePizza = filteredPizza.slice(0, 4)
    setHottPizza(slicePizza)
},[])
  useEffect(() => {
    if (category === "All") {
      setAllProducts(products)
    }
    if (category === "Burger") {
      const filteredProducts = products.filter((item) => item.category === "Burger")
      setAllProducts(filteredProducts)
    }
     if (category === "Bread") {
      const filteredProducts = products.filter((item) => item.category === "Bread")
      setAllProducts(filteredProducts)
    }
     if (category === "Pizza") {
      const filteredProducts = products.filter((item) => item.category === "Pizza")
      setAllProducts(filteredProducts)
    }
  },[category])
  const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita aut nulla."
    },
    {
      title: "Super Dine In",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita aut nulla."
    },
    {
      title: "Easy Pick up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita aut nulla."
    }
  ]

  
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>Hurry?</span> Just wait food <span>
                    at your door
                  </span>
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem eum dignissimos, reprehenderit inventore natus! Quia, temporibus! Amet soluta quaerat molestiae veritatis, enim magnam consequatur voluptatibus? Facilis beatae eius natus!</p>
                <div className="content__order__btn ">
                  <button className="order__btn  ">
                    <Link to="/pizzas">
                      Order now <i className="ri-arrow-right-s-line"></i>
                    </Link>

                  </button>
                  <button className="order__btn  ">
                    <Link to="/pizzas">
                      See all foods
                    </Link>

                  </button>
                </div>


              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">We will <span>take care</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita aut nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorum!</p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{ item.desc}</p>
             </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category  align-items-center justify-content-center">
                <button className={`all__btn  ${category === "All" ? "foodBtnActive" : ""}`} onClick={()=>setCategory("All")}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category==="Burger"?"foodBtnActive":""}`} onClick={() => setCategory("Burger")}>
                  <img src={foodCategoryImg01} alt="" />Burger
                </button>
                   <button className={`d-flex align-items-center gap-2 ${category==="Pizza"?"foodBtnActive":""}`}  onClick={() => setCategory("Pizza")}>
                  <img src={foodCategoryImg02} alt="" />Pizza
                </button>
                   <button className={`d-flex align-items-center gap-2 ${category==="Bread"?"foodBtnActive":""}`}  onClick={() => setCategory("Bread")}>
                  <img src={foodCategoryImg03} alt="" />Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index} className="mt-5">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img className="w-100" src={WhyImg} alt="why tasty treat" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title">Why tasty Treat ?</h2>
           <p className="tasty__treat-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium dolor sed distinctio unde modi.</p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2 choose__us-title">
                      <i className="ri-checkbox-circle-line"></i>Fresher and tasty food
                    </p>
                    <p className="tasty__treat-desc d-flex align-items-center gap-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, commodi?</p>
                  </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                    <p  className="d-flex align-items-center gap-2 choose__us-title">
                      <i className="ri-checkbox-circle-line"></i>Quantity support
                    </p>
                      <p className="tasty__treat-desc d-flex align-items-center gap-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, commodi?</p>
                  </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                    <p  className="d-flex align-items-center gap-2 choose__us-title">
                      <i className="ri-checkbox-circle-line"></i>Order from any location
                    </p>
                      <p className="tasty__treat-desc d-flex align-items-center gap-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, commodi?</p>
                  </ListGroupItem>
             </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
             
            </Col>
             <h2>Hot Pizza</h2>
              {hottPizza.map((item) => (
                <Col lg="3" md="4" key={item.id}>
                  <ProductCart item={item} />
              </Col>
              ))}

          </Row>
        </Container>
      </section>

      {/* Carousel */}
      <section>
        <Container>
          <Row>
             <Col lg="6" md="6">

              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">
                  Testionial
                </h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem similique officiis provident, odit, dicta iure, id earum porro vel veritatis hic. Sunt, neque! Sunt commodi nostrum voluptate provident aspernatur repudiandae?</p>
             <TestimonialSlider/>
              </div>
            </Col>
              <Col lg="6" md="6">
              <img src={networkImg} alt="" className="w-100"/>
              </Col>
           
          
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;