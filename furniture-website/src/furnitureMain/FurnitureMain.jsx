import React, { useState } from 'react';
import "./FurnitureMain.css";
import FurnitureProductSlider from '../furnitereProduct/FurnitureProductSlider.jsx'

const slides = [
  {
    id: 1,
    header: '%100 Modüler İskandinav',
    description: 'Ekle, çıkar, değiştir!',
    button: 'Koltukları Keşfet',
    url: 'https://www.normod.com/cdn/shop/files/1_1__1_900x.jpg?v=1667315322',
    imgAlt: '',
    class: 'selected',
    href: './category',
  },
  {
    id: 2,
    header: 'Ahşap ürünlerimiz Levy Berjer ve Norac Sehpalar Yeniden Satışta!',
    description: '',
    button: 'Ürünleri İncele',
    url: 'https://www.normod.com/cdn/shop/files/Adsiz_tasarim_9_f5e6afe6-42d9-4720-9fe4-a6308f4acbaf_900x.png?v=1682337802',
    imgAlt: '',
    class: 'selected',
    href: './category',
  },
  {
    id: 3,
    header: 'Modern ve Şık Tasarımlar',
    description: '',
    button: 'Koltuk Takımlarını Keşfet',
    url: 'https://www.normod.com/cdn/shop/files/cord-sofa-set-hp_2_900x.jpg?v=1679566997',
    imgAlt: '',
    class: 'selected',
    href: './category',
  },

  {
    id: 4,
    header: 'Yaşam Alanını Halılarla Tanımla!',
    description: '',
    button: 'Halıları Keşfet',
    url: 'https://www.normod.com/cdn/shop/files/Hali_anasayfa_desktop_2_1_1800x_edd42356-8a84-4692-8c65-2b24daab6dcb_900x.webp?v=1670578200',
    imgAlt: '',
    class: 'selected',
    href: './category',
  },
];
const callouts = [
  {
    name: 'En Sevilen Kadife Koltuklar',
    description: 'Pati dostu, kolay temizlenen, yumuşacık ve canlı renkli koltuklar.',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0083/3375/4432/files/pet_friendly.jpg?v=1661798801',
    imageAlt: 'En Sevilen Kadife Koltuklar',
    href: './category',
  },
  {
    name: 'Modüler Uzanmalı Köşe Koltuklar',
    description: 'Rahat ve özelleşebilir uzanmalı köşe koltuklar.',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0083/3375/4432/files/uzanmali-kose-gif.gif?v=1664892942',
    imageAlt: 'Modüler Uzanmalı Köşe Koltuklar',
    href: './category',
  },
  {
    name: 'Hızlı Teslimat Seçeneği',
    description: 'Seçili ürünlerde 7-10 gün arası teslimat.',
    imageSrc: 'https://www.normod.com/cdn/shop/products/FILIFERA8_result_509b061e-f763-4cd5-91a1-df199c6d26aa-817077_686x.progressive.png?v=1675715170',
    imageAlt: 'Hızlı Teslimat Seçeneği',
    href: './category',
  },
];
const connectionList = [
  {
    name: 'Köşe Koltuklar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/gecemavisi_mese_1540_rel_klor3_result_6349352f-213f-47c6-ba46-636c75f10c34_300x.png?v=1670578393',
    imageAlt: 'Köşe Koltuklar',
    href: './category',
  },
  {
    name: 'Koltuk Takımları',
    imageSrc: 'https://www.normod.com/cdn/shop/files/2440_klor_klem_ahsap_mese_kadife_caglayesili_sonuc_2fbe8fd5-ba9a-48ae-a70e-dd65b01a953e_300x.png?v=1670578423',
    imageAlt: 'Koltuk Takımları',
    href: './category',
  },
  {
    name: 'Kanepeler',
    imageSrc: 'https://www.normod.com/cdn/shop/files/ekru_mese_1800_klor3_result_4f43ce4d-334d-4243-902e-8d605b5eb505_300x.png?v=1670578457',
    imageAlt: 'Kanepeler',
    href: './category',
  },
  {
    name: 'Tekliler',
    imageSrc: 'https://www.normod.com/cdn/shop/files/levy_berjer_menu_ikon_2_170x.jpg?v=1672817552',
    imageAlt: 'Tekliler',
    href: './category',
  },
  {
    name: 'Puflar & Banklar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/kiremit_mese_otto_klor2_result_300x.jpg?v=1672321537',
    imageAlt: 'Puflar & Banklar',
    href: './category',
  },
  {
    name: 'Halılar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/Untitled_design_9_4575ec3d-ac5b-4f9b-bdaa-227424465c59_300x.png?v=1670579945',
    imageAlt: 'Halılar',
    href: './category',
  },
  {
    name: 'Sehpalar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/Untitled_design_6_7e64b996-8227-4c66-8525-56a9fe0aec4e_300x.png?v=1670578555',
    imageAlt: 'Sehpalar',
    href: './category',
  },
  {
    name: 'Aksesuarlar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/Untitled_design_10_f97ad2fb-02f2-4854-8525-7708294725b6_300x.png?v=1670578577',
    imageAlt: 'Aksesuarlar',
    href: './category',
  },
  {
    name: 'Tüm Koltuklar',
    imageSrc: 'https://www.normod.com/cdn/shop/files/2100_2100_kl_legs_Pr6gi_kadife_ekru_metal_siyah_300x_1_e831e165-2e2c-445d-a8cc-03258235703b_300x.jpg?v=1670579982',
    imageAlt: 'Tüm Koltuklar',
    href: './category',
  },
];

function FurnitureMain() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

  };

  return (
    <div className='main'>

      <div className="slider">
        <div className='w-full h-[580px] m-auto relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='slider-control w-full h-full bg-center bg-cover '
          >
            <div className="slider-text absolute flex items-center justify-center h-full w-full">
              <div className="text flex items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center m-10 h-full w-full">
                  <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg  text-white sm:text-6xl">
                    {slides[currentIndex].header}
                  </h1>
                  <p className="mt-4 text-xl text-white drop-shadow-lg ">
                    {slides[currentIndex].description}
                  </p>
                  <a
                    href="./category"
                    className="opacity-70 inline-block border border-transparent drop-shadow-lg  bg-white px-8 py-3 text-center font-medium text-slate-700 hover:bg-white  mt-10"
                  >
                    {slides[currentIndex].button}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl p-2 text-white cursor-pointer'>
            <i className="fa-solid fa-chevron-left" onClick={prevSlide} size={30} ></i>
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl  p-2 text-white cursor-pointer'>
            <i className="fa-solid fa-chevron-right" onClick={nextSlide} size={30}></i>
          </div>
        </div>

      </div>
      <div className="categories">
        <div className="relative overflow-hidden flex flex-col justify-start m-20 ">

          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-col items-start justify-start">
            <h1 className="text-3xl font-normal text-slate-600 sm:text-4xl mr-20 ml-20">Normod Ürünlerini İncele</h1>
            <div className="mt-6 grid grid-cols-4">
              {connectionList.map((call) => (
                <div key={call.name} className="group relative col-span-1 row-span-1">
                  <div className="flex flex-col items-center justify-center h-80 w-96 overflow-hidden ">
                    <a href='./category'>

                      <img
                        src={call.imageSrc}
                        alt={call.imageAlt}

                        className="object-fill object-center cursor-pointer max-w-full max-h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                      /></a>
                    <div className="text-area ">
                      <h3 className=" text-base font-semibold mt-6 ml-5 text-slate-500">
                        <a href={call.href}>
                          <span className="inset-0" />
                          {call.name} <i className="fa-solid fa-chevron-right text-slate-500 m-2"></i>
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="icons">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex items-center justify-center p-5">
              <img
                className="rounded-full border-2 border-slate-500 w-32 h-32 col-span-2  object-scale-down lg:col-span-1 "
                src="https://www.normod.com/cdn/shop/files/Untitled_design_15_c35df685-1d6a-4996-9a10-6bec8e083d97_300x.png?v=1670580168"
                alt="Transistor"
                width={158}
                height={48}
              />
              <p className="mt-4 text-xl text-gray-500 p-5">5 Yıl Garanti</p>
            </div>
            <div className="flex items-center justify-center p-5">
              <img
                className="rounded-full border-2 border-slate-500 w-32 h-32  col-span-2  object-scale-down lg:col-span-1"
                src="https://www.normod.com/cdn/shop/files/Untitled_design_11_0cc9557e-47da-42ba-bb73-582a3fb036dc_300x.png?v=1670580201"
                alt="Reform"
                width={158}
                height={48}
              />
              <p className="mt-4 text-xl text-gray-500 p-5">%100 Modüler</p>
            </div>
            <div className="flex items-center justify-center p-5">
              <img
                className="rounded-full border-2 border-slate-500  w-32 h-32 col-span-2  object-scale-down lg:col-span-1"
                src="https://www.normod.com/cdn/shop/files/ucfretsizteslimat_c18b1484-6df0-44da-b04f-ce529a938ff0_300x.png?v=1670580220"
                alt="Tuple"
                width={100}
                height={100}
              />
              <p className="mt-4 text-xl text-gray-500 p-5">Ücretsiz Teslimat</p>
            </div>
            <div className="flex items-center justify-center p-5">
              <img
                className="rounded-full border-2 border-slate-500 w-32 h-32 col-span-2  object-scale-down lg:col-span-1"
                src="https://www.normod.com/cdn/shop/files/Untitled_design_17_131f1ff6-c33e-4494-99c5-2c348c0b4fab_300x.png?v=1670580239"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <p className="mt-4 text-xl text-gray-500 p-5">Aletsiz Kurulum</p></div>
          </div>
        </div>
      </div>

      <div className="product-slider m-20">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="text-3xl font-normal text-slate-600 sm:text-4xl mr-52 ml-52 mt-20">Çok Satanlar</h1>
          <div className="slider-inner w-5/6 h-5/6">
            <FurnitureProductSlider />
          </div>
          

        </div>

      </div>

      <div className="grid-img">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative brightness-90  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000  flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <div className="text-area absolute">
                      <h3 className=" text-base font-semibold mt-6 ml-5 text-white">
                        <a href={callout.href}>
                          <span className="inset-0 drop-shadow-lg" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-sm ml-5 text-white">{callout.description}</p>
                    </div>
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white">
        <div className="pt-8 sm:pt-12 lg:pt-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex items-center justify-start ">

            <div className="grid grid-cols-2 grid-rows-3 gap-20">

              <div className="first-img">
                <div className="img row-span-1 col-span-1">
                  <div className="object-cover">
                    <img src="https://www.normod.com/cdn/shop/files/discount_page_2_3_9525e709-3e90-49a8-bf7e-c49a33f7326b_600x.png?v=1670580723" alt="" />
                  </div>
                </div>
              </div>
              <div className="first-text">
                <div className="text row-span-1 col-span-1">
                  <div className="flex flex-col items-start justify-start m-10">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                      Dokun, Hisset, Test Et!
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      Uzun süre seninle olacak koltuklarının kumaşına karar vermeden önce adresine ücretsiz numune iste.
                    </p>
                    <a
                      href="#"
                      className="inline-block border border-transparent bg-slate-600 px-8 py-3 text-center font-medium text-white hover:bg-slate-700  mt-10"
                    >
                      Ücretsiz Numune İste
                    </a>
                  </div>
                </div>
              </div>

              <div className="second-text">
                <div className="text row-span-1 col-span-1">
                  <div className="flex flex-col items-start justify-start ">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                      Deneyim Merkezlerimiz
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      Randevuya gerek olmadan deneyim merkezlerimize gel, ürünlerimizi dene!
                    </p>
                    <a
                      href="#"
                      className="inline-block border border-transparent bg-slate-600 px-8 py-3 text-center font-medium text-white hover:bg-slate-700 mt-10"
                    >
                      Adresi Gör
                    </a>
                  </div>
                </div>
              </div>
              <div className="second-img">
                <div className="img row-span-1 col-span-1">
                  <div className="object-cover">
                    <img src="https://www.normod.com/cdn/shop/files/hp_mobil_22_340270a7-2f52-477f-b8dc-1ac9ba863e91_900x.png?v=1670580781" alt="" />
                  </div>
                </div>
              </div>

              <div className="third-img">
                <div className="img row-span-1 col-span-1">
                  <div className="object-cover">
                    <img src="https://www.normod.com/cdn/shop/files/tasarim-danismanligi_700x.png?v=1679912438" alt="" />
                  </div>
                </div>
              </div>
              <div className="third-text">
                <div className="text row-span-1 col-span-1">
                  <div className="flex flex-col items-start justify-start m-10">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                      Ücretsiz Tasarım Danışmanlığı
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      Hayalindeki koltuğu Normod ile evine en uygun şekilde oluşturmaya hazır mısın? Normod ücretsiz tasarım desteği ile sana ve ihtiyaçlarına en uygun salonu oluşturmak için çok heyecanlıyız!
                    </p>
                    <a
                      href="#"
                      className="inline-block border border-transparent bg-slate-600 px-8 py-3 text-center font-medium text-white hover:bg-slate-700  mt-10"
                    >
                      Tasarım Danışmanlığı Al
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-adv w-full h-[750px] flex items-center justify-center">
        <div className="w-4/5 h-4/5  flex items-center justify-center">
          <div className="text-area absolute">
            <h3 className=" text-base font-semibold  text-white flex flex-col ">
              <a href='./'>
                <span className="inset-0 drop-shadow-lg" />
                Mobilya, Ev Dekorasyonu ve Daha Fazlası...
              </a>
              <a
                href="./"
                className="opacity-70 inline-block border border-transparent drop-shadow-lg  bg-white px-8 py-3 text-center font-medium text-slate-700 hover:bg-white  mt-10"
              >
                Rehberi İncele
              </a>
            </h3>
          </div>
          <img
            src="https://www.normod.com/cdn/shop/articles/Klem_Silindir_1000x.jpg?v=1686656464"
            alt="adv"
            className="h-full w-full object-cover object-center m-36"
          />
        </div>
      </div>


    </div>
  );
}

export default FurnitureMain;