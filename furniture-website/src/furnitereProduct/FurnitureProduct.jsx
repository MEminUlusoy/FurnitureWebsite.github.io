import React from 'react';
import "./FurnitureProduct.css";
import "./FurnitureProduct.js"
import { useState } from 'react';
import {dataTop} from './dataTop';
import { furnitureColor } from './furnitureColor';
import FurnitureProductSlider from './FurnitureProductSlider';


function FurnitureProduct() {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  
  var sectionIndex = 0;
  

  const rightSlide = () => {
    const slider = document.querySelector('.product-left-image-slider');
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' +  (sectionIndex) * -20 + '%)';
  }

  const leftSlide = () => {
    const slider = document.querySelector('.product-left-image-slider');
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 4;
    slider.style.transform = 'translate(' +  (sectionIndex) * -20 + '%)';
  }
  
  //Ana ürünün renkleri 
  document.querySelectorAll('.product-right-clothe-circle-container li').forEach(function(indicator){
    indicator.addEventListener('click', function(){

      document.querySelector('.product-right-clothe-circle-container .selected').classList.remove('selected');
      indicator.classList.add('selected');
        
    });
  });



  //Ana ürünün ayak renkleri
  document.querySelectorAll('.product-right-foot-circle-container li').forEach(function(indicator){
    indicator.addEventListener('click', function(){
      
      document.querySelector('.product-right-foot-circle-container .selected').classList.remove('selected');
      indicator.classList.add('selected');
        
    });
  });

  
 
  
  


  return (
    <div>
      <div className="space-top"></div>
      <div className='product-container'>
        <div className="product-inner-container">
          <div className="product-inner-left-container">

            <div className="product-left-image-container">
              <div className="product-left-image-carousel">
                <div className="product-left-image-slider">
                  {
                    dataTop.map((item) => {
                      
                      return(
                        <section key={item.id}>
                          <img key={item.id} src={item.img} alt="/" />
                        </section>
                        
                      );
                    })  
                      
                  }
                  
                </div>
                <div className="controls">
                  <span onClick={leftSlide} className="arrow left"><i className="fa-solid fa-arrow-left-long"></i></span>
                  <span onClick={rightSlide}  className="arrow right"><i className="fa-solid fa-arrow-right-long"></i></span>
                </div>
              </div>
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

              <div onClick={() => setShow1(!show1)} className="product-left-hidden-card-item1">
                <h1>Malzeme Bilgisi</h1>
                <hr/>
                {show1 ? <i  style={{transform:"rotate(90deg)"}} className="fa-solid fa-chevron-right"></i> : <i  className="fa-solid fa-chevron-right"></i> }
              </div>
           
              {
                show1 && 
                <div className="hidden-card-item1">
          
                  <table>
                    <tr>
                      <td className='firstTd'>Kumaş</td>
                      <td>Kadife dokulu, 100% polyester kumaş. Ekrandaki renkler değişiklik gösterebilir, kararını sağlıklı verebilmen için numune istemeni öneririz.</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Dayanıklılık</td>
                      <td>35,000 Martindale</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Gramaj</td>
                      <td>585 gr/m</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Boncuklanma</td>
                      <td>4 (5 üzerinden)</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Işık Haslığı</td>
                      <td>4 (5 üzerinden)</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Oturum Minderi</td>
                      <td>300 gr elyaf içinde 35 DNS premium HR (yüksek elastikiyetli) sünger kullanılmıştır.</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Oturum Hissiyatı</td>
                      <td>300 gr'lık elyaf yumuşak bir oturum konforu sağlarken 35 DNS HR sünger de bu konforun yıllarca kusursuz kalmasını sağlar. Oturum minderleri çelik S yay sistemi üzerine oturur ve böylece oturum konforu standardize edilir. Konforunun yıllar boyunca süreceğinden emin olabilirsin!</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Sırt Minderi</td>
                      <td>%100 boncuk silikon ile dayanıklı bir yumuşaklık hissi sağlanır.</td>
                    </tr>      
                    <tr>
                      <td className='firstTd'>İskelet</td>
                      <td>Tüm iskelet masif kayın kontra malzemeden oluşur. Bağlantı yerlerinde çelik bağlantı malzemeleri kullanılmıştır. Oturum minderleri çelik S yay sistemi üzerine oturur.</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Ayaklar</td>
                      <td>Masif kayın ağacı</td>
                    </tr>
                  </table>
                  <p>Not: Ürünlerimiz konfor odaklı tasarlanmaktadır. Oldukça zengin elyaf ve elastikiyeti yüksek premium süngerler kullanıldığı için dikişler sert ve düz çizgiler şeklinde olmayabilir.</p>
                  
            
                </div> 
                
              }  
             
                 
              <div onClick={() => setShow2(!show2)} className="product-left-hidden-card-item2">
                <h1>Temizlik ve Bakım</h1>
                {show2 ? <i  style={{transform:"rotate(90deg)"}} className="fa-solid fa-chevron-right"></i> : <i  className="fa-solid fa-chevron-right"></i> }
              </div>
              
              {
                show2 && 
                <div className="hidden-card-item2">
                  <table>
                    <tr>
                      <td className='firstTd'>Kumaş</td>
                      <td>Nemli bezle temizleyebilirsin. Oturum ve sırt minderlerinin kılıflarını çıkarıp elde temizleyebilirsin. Kumaşlar hafif nemliyken ütüleyebilirsin. Ayda bir (evcil hayvan sahipleri için haftada bir) fırçasız başlıklı süpürge ile süpürüp tozunu almanı tavsiye ederiz, böylece kumaş atkılarının arasına toz-kir yerleşmesini ve kokmasını engellemiş olursun.</td>
                    </tr>
                    <tr>
                      <td className='firstTd'>Oturum ve Sırt Minderi</td>
                      <td>Sık sık minderleri elinle patpalayıp formunu düzeltebilirsin. 2-3-4'lü koltuklarda ayda bir oturum minderleri ve sırt minderlerini kendi aralarında yer değiştirirsen oturum sıklığı tüm minderlere eşit dağılmış olur.</td>
                    </tr>
                  </table>
                </div> 
              } 

              <div  onClick={() => setShow3(!show3)} className="product-left-hidden-card-item3">
                <h1>Aletsiz Kurulum</h1>
                {show3 ? <i  style={{transform:"rotate(90deg)"}} className="fa-solid fa-chevron-right"></i> : <i  className="fa-solid fa-chevron-right"></i> }
              </div>

              {
                show3 && 
                <div className="hidden-card-item3">
                  <p>Normod koltuklarını 15 dakikada kurabilirsin. Tüm modüllerimiz kurulum kılavuzu ile birlikte teslim ediliyor. Tavsiyemiz kurulumu 2 kişi yapmanız, böylece kaldırma-indirme gibi işlemleri kolayca yapabilirsiniz. Kurulumla ilgili detaylı bilgilere buradan ulaşabilirsin.</p>          
                </div> 
              } 


            </div>   
          </div> 

          <div className="product-inner-right-container ">
            <div className="product-right-shopping-container ">

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
                      {
                        furnitureColor.map((item,ind) => {
                          
                          return(
                            <li 
                              
                              key={ind}                              
                              className={item.situation} 
                              style={{backgroundColor: item.color}}>

                            </li>  
                            
                          );
                        })
                      } 
                    </ul>
                  </div>
                </div>


                <div className="product-right-foot-container">
                  <div className="product-right-foot-name-container">
                    <p>Ayak-Açık</p>
                  </div>
                  
                  <div className="product-right-foot-circle-container">
                    <ul>
                      <li className='selected' style={{backgroundColor: "#D9B68B"}}></li>
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
      <div className="slider-title">
        <p>Bunlar da İlgini Çekebilir</p>
      </div>
      <FurnitureProductSlider/>
      <div className="space-last"></div>
    </div>
  );

}

export default FurnitureProduct;

