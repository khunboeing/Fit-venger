
import '../NavComponent/NavComponent.css'
import Logo from '../../img/icon-runworker.png'
import {Link} from 'react-router-dom'

function NavComponent (){
    return(
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={Logo} alt="RUN-DEV" /><h1>RUN-DEV{'/>'}</h1>
            </div>
            <div className='nav-btn'>
                <Link to='/'>Home</Link>
                <Link to="/editprofile">Profile</Link>
                <Link to="#">About Me</Link>
            </div>
        </div>
    )
}

export default NavComponent;