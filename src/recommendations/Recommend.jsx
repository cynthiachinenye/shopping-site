import Buttons from '../components/Buttons'
import './recommend.css'

function Recommend({handleClick}) {
  return (
    <div>
    <h2 className='recommend-title'>Recommended</h2>
    <div className='recommend-btns '>
   <Buttons className="btn" onClickHandler={handleClick} value="" title="All Products"/>
   <Buttons className="btn" onClickHandler={handleClick} value="Nike" title="Nike"/>
   <Buttons className="btn" onClickHandler={handleClick} value="Adidas" title="Adidas"/>
   <Buttons className="btn" onClickHandler={handleClick} value="Puma" title="Puma"/>
   <Buttons className="btn" onClickHandler={handleClick} value="Vans" title="Vans"/>
    </div>
    </div>
  )
}

export default Recommend