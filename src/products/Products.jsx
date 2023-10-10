import './product.css'
import {AiFillStar} from 'react-icons/ai'

function Products() {
  return (
    <div>
    <section className='card-container'>
    <section className='card'>
    <img src='https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4=' alt='shoe'/>
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