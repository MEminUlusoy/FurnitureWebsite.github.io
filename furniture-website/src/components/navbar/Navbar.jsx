import React from 'react';
import "./Navbar.css";
import "./Navbar.js"

function Navbar() {
  return (
    <div className='Navbar'>
      
      <div className='Adv_container'>
        <div className="Adv_inner_container">
          <button className="adv">
            <div className="inner_button">
              <i className="fa-regular fa-credit-card"></i><p>Tüm alışverişlerinde vade farksız 3 taksit seçeneği seninle!</p>
            </div>
          </button>
        </div>
      </div>
      <div className='Map_container'>
        <div className="Map_inner_container">
          <div className="header-menu">
            <a href="#" className="header-menu__link">Showroomlar</a>
            <a href="#" className="header-menu__link">Gerçek Yorumlar</a>
            <a href="#" className="header-menu__link">Ücretsiz Numune</a>
            <a href="#" className="header-menu__link">İletişim</a>
            <a href="#" className="header-menu__link">İptal / İade</a>
			      <a href="#" className="header-menu__link">Sipariş Takibi</a>
            <a href="#" className="header-menu__link">Blog</a>
            <a href="#" className="header-menu__link">Hızlı Teslimat</a>
            <a href="#" className="header-menu__link">En Yeniler</a>
            <a href="#" className="header-menu__link">Ücretsiz Tasarım Danışmanlığı</a>
          </div>
        </div>
      </div>
      <div className="Nav-container">
        <div className="menu-space" >
          <div className="topnav" id="myTopnav">
            <a href="/" className="active">
              <div className="nav-logo">
                <div className="nav-inner-logo">
                  <img src="https://media.discordapp.net/attachments/1126598761183973497/1127011653972672562/pngaaa.com-8945021.png"/>
                  <p>FURNAMA</p>
                </div>
              </div>
            </a>
            <div className="nav-items">
              <div className="dropdown">
                <button className="dropbtn" href="category">
                  <a href="category" className="nav-menu__link">Köşe Koltuk 
                    <i class="fa-solid fa-chevron-down"></i>
                  </a>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <a href="category" className="nav-menu__link">Koltuk Takımı</a>
              <div className="dropdown">
                <button className="dropbtn" href="category">
                  <a href="category" className="nav-menu__link">Koltuk & Kanepe
                    <i class="fa-solid fa-chevron-down"></i>
                  </a>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>  
              <div className="dropdown">
                <button className="dropbtn" href="category">
                  <a href="category" className="nav-menu__link">Tekliler
                    <i class="fa-solid fa-chevron-down"></i>
                  </a>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn" href="category">
                  <a href="category" className="nav-menu__link">Puf & Bench
                    <i class="fa-solid fa-chevron-down"></i>
                  </a>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <a href="category" className="nav-menu__link">Halı</a>
              <a href="category" className="nav-menu__link">Sehpa</a>
              <div className="dropdown">
                <button className="dropbtn" href="category">
                  <a href="category" className="nav-menu__link">Aksesuar
                    <i class="fa-solid fa-chevron-down"></i>
                  </a>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              
            </div>
            <div className="nav-user-icons">
              <div className="icon-container">
                <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
                <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href="#"><i className="fa-regular fa-user"></i></a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className='Call_container'>
        <div className="Call_inner_container">
          <button className='call'>
            <div className="inner_button">
              <i className="fa-solid fa-phone"></i><p className='paragraf'> Hemen Ara 0000 000 00 00 </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;