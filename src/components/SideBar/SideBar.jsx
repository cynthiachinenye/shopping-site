import './sidebar.css'
import Price from './price/Prices'
import Color from './colors/Colors'
import Category from './category/Category'

function SideBar({handleChange}) {
  return (
    <div>
    <section className='sidebar'>
    <div className='logo-container'>
    <h1>🛒</h1>
    </div>
    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Color handleChange={handleChange}/>
    </section>
    </div>
  )
}

export default SideBar