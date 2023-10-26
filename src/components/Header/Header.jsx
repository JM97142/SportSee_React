import { Link } from 'react-router-dom'

import Logo from '../../assets/Group (1).svg'
import logoName from '../../assets/logo-name.svg'
import '../Header/header.css'

function Header() {
    return (
        <header>
            <div className="logo-sportsee">
                <img src={Logo} alt='' />
                <img src={logoName} alt='' />
            </div>
            <nav className='nav-menu'>
                <Link>Accueil</Link>
                <Link>Profil</Link>
                <Link>Réglage</Link>
                <Link>Communauté</Link>
            </nav>
        </header>
    )
}

export default Header