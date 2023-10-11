import './sidebar.css'
import Price from './price/Prices'
import Color from './colors/Colors'
import Category from './category/Category'

function SideBar() {
  return (
    <div>
    <section className='sidebar'>
    <div className='logo-container'>
    <h1>Logo</h1>
    </div>
    <Category/>
    <Price/>
    <Color/>
    </section>
    </div>
  )
}

export default SideBar