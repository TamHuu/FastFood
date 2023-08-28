import React from 'react'
import "../../../styles/product-cart.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function ProductCart(props) {
    const navigate = useNavigate();
  const { id, title, image01, price } = props.item

  
  const handleDetail = () => {
    navigate(`/foods/${id}`);
  };

  return (
      <div className='product__item'>
          <div className="product__img">
              <img className='w-50' src={image01} alt="product-img" />
          </div>
          <div className="product__content">
              <h5><Link className='text-decoration-none ' to={`/foods/${id}`}>{ title}</Link></h5>
              <div className='d-flex align-items-center justify-content-between'>
                  <span className="product__price">
                    ${price}
                  </span>
      <button onClick={() => { handleDetail(); }} className="addTOCART__btn">
Add To Cart
</button>

              </div>
          </div>
    </div>
  )
}

export default ProductCart