import '../navigation/nav.css'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'


function Nav() {
  return (
    <nav className='nav'>
     <div className='nav-container'>
     <input className='search-input' placeholder='Enter your search shoes'/>
     </div>
     <div className='profile-container'>
     <a href='#'>
     <AiOutlineHeart className='nav-icons'/>
     </a> 
     <a href="#">
     <AiOutlineShoppingCart className='nav-icons'/>
     </a>
     <a href='#'>
     <AiOutlineUserAdd className='nav-icons'/>
     </a>
    
     </div>
    </nav>
  )
}

export default Nav