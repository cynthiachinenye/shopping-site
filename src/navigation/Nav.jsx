import './nav.css'
import {AiFillHeart} from 'react-icons/ai'

function Nav() {
  return (
    <nav className='nav'>
     <div className='nav-container'>
     <input className='search-input' placeholder='Enter your search shoes'/>
     </div>
     <div className='profile-container'>
     <a href='#'></a>
     </div>
    </nav>
  )
}

export default Nav