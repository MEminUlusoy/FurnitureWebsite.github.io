import React from 'react'
import { data } from './data';

function FurnitureProductSlider() {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className="slider-outter-container">
        <div className="slider-container">

          <i onClick={slideLeft} className="fa-solid fa-chevron-left icon left"></i>
          <div id='slider' className="slider-inner-container">
            {data.map((item) => {
              const { img, title, comment, cost, id } = item;
              return (
                <div key={id} className="slider-item">
                  <a href="./product">
                  <div className="slider-item-image">
                      <img src={img} alt="/" />
                  </div>
                  <div className="slider-item-title mt-5 ml-4">
                      <p >{title}</p>
                  </div>
                  <div className="slider-item-comment mt-3 ml-4">
                    <div className="item-comment-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>{`${comment} Yorum`}</p>
                  </div>
                  <div className="slider-item-cost mt-3 ml-4">
                    <p>{`${cost} TL`}</p>
                  </div></a>
                </div>
              );
            })}
          </div>

          <i onClick={slideRight} className="fa-solid fa-chevron-right icon right"></i>
        </div>
      </div>
    </div>
  );
}

export default FurnitureProductSlider;