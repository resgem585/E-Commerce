/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import imageDefault from '../assets/default.jpg'
import '../styles/home.scss'
// eslint-disable-next-line camelcase
const CardProducts = ({ product_name, image, price, _id }) => {
  return (
    <>
      <Link to={`${_id}`}>
        <div className='card' style={{ width: '18rem' }}>
          <img src={image || imageDefault} className='card-img-top' alt='...' />
          <div className='card-body'>
            <p className='card-text'>{product_name}</p>
            <span className='card-text'>${price}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardProducts
