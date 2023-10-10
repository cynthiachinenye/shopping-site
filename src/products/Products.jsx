import './product.css'
import {AiFillStar} from 'react-icons/ai'

function Products() {
  return (
    <div>
    <section className='card-container'>
    <section className='card'>
    <img src='https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    alt='shoe'/>
    <div className='card-details'>
    <h3 className='card-title'>Shoe</h3>
    <section className='card-reviews'>
    <AiFillStar/>
    </section>
    </div>
    </section>
    </section>
    </div>
  )
}

export default Products