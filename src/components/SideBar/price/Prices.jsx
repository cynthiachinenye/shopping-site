import './price.css'

function Prices() {
  return (
    <div className='ml'>
    <h2 className='sidebar-title price-title'>Price</h2>

    <label className='sidebar-label-container' for="test">
    <input type='radio' name='test2'  /> 
     <span className='checkmark'></span>All
     </label>

     <label className='sidebar-label-container' for="test">
    <input type='radio' name='test2'  /> 
     <span className='checkmark'></span>₦0 - ₦50k
     </label>

     <label className='sidebar-label-container' for="test">
    <input type='radio' name='test2'  /> 
     <span className='checkmark'></span>₦50 - ₦100k
     </label>

     <label className='sidebar-label-container' for="test">
    <input type='radio' name='test2'  /> 
     <span className='checkmark'></span>₦100 - ₦150k
     </label>

     <label className='sidebar-label-container' for="test">
    <input type='radio' name='test2'  /> 
     <span className='checkmark'></span>₦150 - ₦200k
     </label>
    </div>
  )
}

export default Prices