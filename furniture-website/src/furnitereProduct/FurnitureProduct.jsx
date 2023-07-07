import React from 'react';
import "./FurnitureProduct.css";

function FurnitureProduct() {
  return (
    <div>
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
              <div className="product-left-hidden-card-item">
                <h1>Malzeme Bilgisi</h1>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="product-left-hidden-card-item">
                <h1>Temizlik ve Bakım</h1>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="product-left-hidden-card-item">
                <h1>Aletsiz Kurulum</h1>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div> 

          <div className="product-inner-right-container">
            <div className="product-right-shopping-container">


              <div className="product-right-description-container">
                <div className="product-right-name-container">
                  <p>Klem 280 x 171 Köşe Ahşap Ayak - Kadife</p>
                </div>
                <div className="product-right-rating-container">
                  <div className="product-right-rating-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>


              <div className="product-right-foot-container">
                <div className="product-right-foot-name-container">
                
                </div>
                
                <div className="product-right-foot-circle-container">
                  
                </div>
              </div>
              
              <div className="product-right-cb-container">
                <div className="product-right-cost">
                
                </div>
                <div className="product-right-button">
                  
                </div>
              </div>
              

              <div className="product-right-cargo">
                <div className="product-right-cargo-time">
    
                </div>
                <div className="product-right-cargo-icon">
    
                </div>
                <div className="product-right-cargo-icon">
    
                </div>
                <div className="product-right-cargo-icon">
    
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