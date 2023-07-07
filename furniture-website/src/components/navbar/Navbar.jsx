import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='Navbar'>
      
      <div className='Adv_container'>
        <div className="Adv_inner_container">
          <button className="adv">
            <div className="inner_button">
              <i class="fa-regular fa-credit-card"></i><p>Tüm alışverişlerinde vade farksız 3 taksit seçeneği seninle!</p>
            </div>
          </button>
        </div>
      </div>
      <div className='Map_container'>
        <div className="Map_inner_container">
          <div class="header-menu">
            <a href="#" class="header-menu__link">Showroomlar</a>
            <a href="#" class="header-menu__link">Gerçek Yorumlar</a>
            <a href="#" class="header-menu__link">Ücretsiz Numune</a>
            <a href="#" class="header-menu__link">İletişim</a>
            <a href="#" class="header-menu__link">İptal / İade</a>
			      <a href="#" class="header-menu__link">Sipariş Takibi</a>
            <a href="#" class="header-menu__link">Blog</a>
            <a href="#" class="header-menu__link">Hızlı Teslimat</a>
            <a href="#" class="header-menu__link">En Yeniler</a>
            <a href="#" class="header-menu__link">Ücretsiz Tasarım Danışmanlığı</a>
          </div>
        </div>
      </div>
      <div className='Nav_container'>
        <div className="Nav_inner_container">
          <div className="nav-logo">
            <div className="nav-inner-logo">
              <img src="https://media.discordapp.net/attachments/1126598761183973497/1127011653972672562/pngaaa.com-8945021.png"/>
              <p>FURNAMA</p>
            </div>
          </div>
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Köşe Koltuk
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Koltuk Takımı
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Koltuk & Kanepe
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Tekliler
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Puf & Bench
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Halı
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Sehpa
                </a>
              </li>
              <li class="nav-menu__item">
                <a href="#" class="nav-menu__link">Aksesuar
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-user-icons">
            <div className="icon-container">
              <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
              <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
              <a href="#"><i class="fa-solid fa-user"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className='Call_container'>
        <div className="Call_inner_container">
          <button className='call'>
            <div className="inner_button">
              <i class="fa-solid fa-phone"></i><p> Hemen Ara 0000 000 00 00 </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;