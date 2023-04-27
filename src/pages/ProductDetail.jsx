
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/SearchContext'
import useGetData from '../hooks/useGetData'
import '../styles/productDetail.scss'

// Importa Imagen

import imageDefault from '../assets/default.jpg'

const ProductDetail = () => {
  const context = useProductContext()
  const { id } = useParams()
  const { data, loading } = useGetData(`http://localhost:3000/items/${id}`)
  console.log(data)
  console.log(context.search)
  const addDefaultSrc = (ev) => {
    ev.target.src = imageDefault
  }

  return (
    <>
      {
  loading
    ? <p className='text-center py-2'>Cargando...</p>
    : (
      <div className=' container-fluid '>
        <div className='contenedor container '>
          <div className='contenedor__cardImage py-4 px-3 '>
            <img onError={addDefaultSrc} src={data.image ? data.image : imageDefault} className='contenedor__image img-fluid' alt='...' />
          </div>
          <div className='contenedor__cardInfo my-4 py-4 px-4'>
            <h1 className='contenedor__textName text-center mb-3'>{data.product_name}</h1>
            <h3 className='contenedor__textPrice text-center mb-4'>$ {data.price}</h3>
            <p className='contendor__textDescription'> Description: {data.description}</p>
            <p className='contenedor__textCategory'>Category: {data.category}</p>
            <p className='contenedor__textBrand mb-5'>Brand: {data.brand}</p>
            <button className='contenedor__button' disabled>Comprar ahora</button>

          </div>
        </div>
      </div>
      )
}
    </>
  )
}
export default ProductDetail
