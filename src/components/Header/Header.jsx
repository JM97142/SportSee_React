import '../Header/header.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo-img.svg'
import logoName from '../../assets/logo-name.svg'

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