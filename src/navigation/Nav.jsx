import '../navigation/nav.css'
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'


function Nav() {
  return (
    <nav className='nav'>
     <div className='nav-container'>
     <input className='search-input' placeholder='Enter your search shoes'/>
     </div>
     <div className='profile-container'>
     <a href='#'>
     <AiFillHeart className='nav-icons'/>
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