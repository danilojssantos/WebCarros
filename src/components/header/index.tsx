import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiUser} from 'react-icons/fi'

export function Header(){
const signed = false;
const loadingAuth = false;


  return(
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
          <header className="flex e-full max-w-7x1 items-center justify-between px-4 mx-auto">
            <Link to="/"> 
                <img src={logoImg} 
                alt="logo do site" 
                
                />
            
            </Link>

            <Link to='/dashboard'>
              <FiUser size={24} color='#000' />          
            </Link>
          </header>
    </div>
  )
}
