import { Link } from 'react-router-dom';
import '../css/nav.css';
import logonav from'../assets/redbull.png'

function Navigation() {
    return(
    <div class="bagian w-full fixed top-0 left-0 z-50"> 
        <header class="header">
            <h1 class="logo flex flex-row">
                <img src={logonav} className='h-12 w-13 mt-2'/>
                <a href="#">RedBull</a></h1>
          <ul class="main-nav">
              <li><a href="/">Beranda</a></li>
              <li><a href="#">Visi</a></li>
              <li><a href="#">Misi</a></li>
              <li><a href="/about">Tentang</a></li>
              <li><a href="/contact">Contact</a></li>
              <button><a href='/Login'>LOG IN</a></button>
          </ul>
        </header> 
    </div>
    );
}

export default Navigation;