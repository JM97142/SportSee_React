import { Link } from 'react-router-dom'

import iconNav1 from '../../assets/icon-nav1.svg'
import iconNav2 from '../../assets/icon-nav2.svg'
import iconNav3 from '../../assets/icon-nav3.svg'
import iconNav4 from '../../assets/icon-nav4.svg'
import '../Sidebar/sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <nav className='sidebar-nav'>
                <Link><img src={iconNav1} alt='' /></Link>
                <Link><img src={iconNav2} alt='' /></Link>
                <Link><img src={iconNav3} alt='' /></Link>
                <Link><img src={iconNav4} alt='' /></Link>
            </nav>
            <div className='copyright'>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </div>
    )
}

export default Sidebar