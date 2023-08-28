import React, { useState } from 'react'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product-cart/ProductCart"
import "../styles/all-foods.css"
import ReactPaginate from "react-paginate"
import "../styles/paginate.css"

function AllFood() {
   
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const searchedProduct = products
    ?.filter((item) => {
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return item;
    })
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input type="text" name="" placeholder="i am looking for..." id="" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className='mb-5'>
              <div className="sorting__widget text-end">
                <select name="" id="" className='w-50' >
                  <option>Default</option>
                  <option value="ascending">A-Z</option>
                  <option value="descending">Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {
              displayPage.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className='mb-4'>
                  <ProductCard item={item} />
                </Col>

              ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFood