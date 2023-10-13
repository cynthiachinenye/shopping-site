import Inputs from '../../Inputs'
import'./category.css'

function Category({handleChange}) {
  return (
    <div>
    <h2 className='sidebar-title'>Category</h2>

    <div>
    <label className='sidebar-label-container'>
    <input onChange={handleChange} type= 'radio' value="" name=""/>
    <span className='checkmark'></span>All
    </label>
    <Inputs
     handleChange={handleChange}
     value="sneakers"
     title="Sneakers"
     name="test"
    />
    <Inputs
     handleChange={handleChange}
     value="falts"
     title="Sneakers"
     name="test"
    />
    <Inputs
    handleChange={handleChange}
    value="sneakers"
    title="Sneakers"
    name="test"
   />

    </div>
    </div>
  )
}

export default Category