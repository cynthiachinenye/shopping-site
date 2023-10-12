import'./category.css'

function Category() {
  return (
    <div>
    <h2 className='sidebar-title'>Category</h2>

    <div>
    <label className='sidebar-label-container'>
    <input type='radio' name='test'/>
    <span className='checkmark'>All</span>
    </label>
    <label className='sidebar-label-container'>
    <input type='radio' name='test'/>
    <span className='checkmark'>Sneakers</span>
    </label>
    <label className='sidebar-label-container'>
    <input type='radio' name='test'/>
    <span className='checkmark'>Flats</span>
    </label>
    <label className='sidebar-label-container'>
    <input type='radio' name='test'/>
    <span className='checkmark'>Sandals</span>
    </label>
    <label className='sidebar-label-container'>
    <input type='radio' name='test'/>
    <span className='checkmark'>Heels</span>
    </label>
    </div>
    </div>
  )
}

export default Category