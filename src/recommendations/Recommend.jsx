import Buttons from '../components/Buttons'
import './recommend.css'

function Recommend({handleClick}) {
  return (
    <div>
    <h2 className='recommend-title'>Recommended</h2>
    <div className='recommend-btns '>
   <Buttons onClickHandler={handleClick} value="" title="All Products"/>
   <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
   <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
   <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
   <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
    </div>
    </div>
  )
}

export default Recommend