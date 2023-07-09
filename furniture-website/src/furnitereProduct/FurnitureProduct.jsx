import React from 'react';
import "./FurnitureProduct.css";
import "./FurnitureProduct.js"
import { useState } from 'react';
function FurnitureProduct() {

  const [show, setShow] = useState(true);

  const handleClick = (event) => {
      if(event.currentTarget.classList.contains("product-left-hidden-card-item1")){
        
        setShow(!show);

      }
  }


  return (
    <div>
      <div className="space-top"></div>
      <div className='product-container'>
        <div className="product-inner-container">
          <div className="product-inner-left-container">

            <div className="product-left-image-container">
              <img src="https://www.normod.com/cdn/shop/products/1540_rel_klor2_klem_ahsap_mese_kadife_caglayesili_sonuc-816324_900x.png?v=1678692624" alt="" />
            </div>

            <div className="product-left-explanation-container">

              <div className="product-left-explanation-title-container">
                <h3>Ürün Ölçüleri</h3>
              </div>

              <div className="product-left-explanation-image-container">
                <img src="https://cdn.shopify.com/s/files/1/0083/3375/4432/files/1540_rel_klor1.jpg?v=1629058096" alt="" />
              </div>

              <div className="product-left-explanation-features-container">

                <div className="product-left-explanation-features-title-container">
                  <ul>
                    <li>Genişlik</li>
                    <li>Derinlik</li>
                    <li>Yükseklik</li>
                    <li>Oturum Genişliği</li>
                    <li>Oturum Derinliği</li>
                    <li>Oturum Yüksekliği</li>
                    <li>Ayak Yüksekliği</li>
                  </ul>
                </div>

                <div className="product-left-explanation-features-values-container">
                  <ul>
                    <li>280 cm</li>
                    <li>171 cm</li>
                    <li>84 cm</li>
                    <li>236 cm</li>
                    <li>59 cm</li>
                    <li>43 cm</li>
                    <li>16 cm</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="product-left-hidden-card-container">

              <div onClick={handleClick} className="product-left-hidden-card-item1">
                <h1>Malzeme Bilgisi</h1>
                <i  className="fa-solid fa-chevron-right"></i>
              </div>
           
              {
                show && <div className="hidden-card-item1"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui autem odio enim doloribus officia eum culpa alias dolore adipisci ea. Molestias beatae aliquid repellendus asperiores quasi sapiente reprehenderit adipisci dolore ducimus, odio animi? Nesciunt ea facilis voluptates iste reiciendis quod quisquam totam nihil. Minima beatae tempora nobis ullam eligendi saepe ea ducimus animi illo debitis ratione quas modi neque iure qui molestiae dolor dignissimos, aspernatur voluptatibus dolore voluptatem perspiciatis hic sed. Praesentium aut magni, sunt voluptas eligendi molestias repudiandae officia voluptate asperiores possimus, incidunt officiis optio, consequuntur facilis repellat cum. Consequatur rerum voluptas, nulla praesentium tempore iure dolorem ad harum?</p></div> 
              }  
             
                 
         

             
              <div className="product-left-hidden-card-item2">
                <h1>Temizlik ve Bakım</h1>
                <i className="fa-solid fa-chevron-right"></i>
              </div>


              <div className="product-left-hidden-card-item3">
                <h1>Aletsiz Kurulum</h1>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div> 

          <div className="product-inner-right-container">
            <div className="product-right-shopping-container">

              <div className="product-right-shopping-left-container">

              </div>
              <div className="product-right-shopping-right-container">
                <div className="product-right-description-container">
                  <div className="product-right-name-container">
                    <p>Klem 280 x 171 Köşe Ahşap Ayak - Kadife</p>
                  </div>
                  <div className="product-right-rating-container">
                    <div className="product-right-rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="product-right-rating-comment">
                      <p>326 yorum</p>
                    </div>
                  </div>
                </div>
                

                <div className="product-right-clothe-container">

                  <div className="product-right-clothe-name-container">
                    <p>Kumaş - Çağla Yeşili</p>    
                  </div>
                  <div className="product-right-clothe-circle-container">
                    <ul>
                      <li style={{backgroundColor: "#AACFBD"}}></li>
                      <li style={{backgroundColor: "#F2E6D8"}}></li>
                      <li style={{backgroundColor: "#B34640"}}></li>
                      <li style={{backgroundColor: "#C7A209"}}></li>
                      <li style={{backgroundColor: "#3A4012"}}></li>
                      <li style={{backgroundColor: "#999999"}}></li>
                      <li style={{backgroundColor: "#6A6561"}}></li>
                      <li style={{backgroundColor: "#011C40"}}></li>
                      <li style={{backgroundColor: "#01401C"}}></li>
                      <li style={{backgroundColor: "#7F151D"}}></li>
                      <li style={{backgroundColor: "#F2F2F2"}}></li>
                    </ul>
                  </div>
                </div>


                <div className="product-right-foot-container">
                  <div className="product-right-foot-name-container">
                    <p>Ayak-Açık</p>
                  </div>
                  
                  <div className="product-right-foot-circle-container">
                    <ul>
                      <li style={{backgroundColor: "#D9B68B"}}></li>
                      <li style={{backgroundColor: "#593A28"}}></li>
                      <li style={{backgroundColor: "#0D0D0D"}}></li>
                    </ul>
                  </div>
                </div>
                
                <div className="product-right-cb-container">
                  <div className="product-right-cost">
                    <p>22.980 TL</p>
                  </div>
                  <div className="product-right-button">
                    <button>Sepete ekle</button>
                  </div>
                </div>
                

                <div className="product-right-cargo">
                  <div className="product-right-cargo-time">
                    <ul>
                      <li>Tahmini Teslim Aralığı: 8-10 Hafta</li>
                    </ul>
                  </div>
                  <div className="product-right-cargo-icon">
                    <i className="fa-regular fa-credit-card"></i>
                    <p>Ödeme Seçenekleri</p>
                  </div>
                  <div className="product-right-cargo-icon">
                    <i className="fa-solid fa-truck"></i>
                    <p>Ücretsiz Teslimat</p>
                  </div>
                  <div className="product-right-cargo-icon">
                    <i className="fa-solid fa-truck-ramp-box"></i>
                    <p>30 Gün Sorgusuz İade</p>
                  </div>
                </div>
              </div>

              

            </div>
          </div> 
        </div>  
      </div>
      
    </div>
  );

}

export default FurnitureProduct;