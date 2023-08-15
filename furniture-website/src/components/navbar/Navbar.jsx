import React, { useState, Fragment } from 'react';
import "./Navbar.css";

import { Dialog, Popover, Tab, Transition } from '@headlessui/react';


const categoriess = [
  {
    id: 1,
    name: 'Köşe Koltuk',
    title: 'Köşe Koltuk',
  },
  {
    id: 2,
    name: 'Koltuk Takımı',
    title: 'koltuk takımı',
  },
  {
    id: 3,
    name: 'Koltuk & Kanepe',
    title: 'koltuk ve kanepe',
  },
  {
    id: 4,
    name: 'Tekliler',
    title: 'Tekliler',
  },
  {
    id: 5,
    name: 'Puf & Bench',
    title: 'Puf & Bench',
  },
  {
    id: 6,
    name: 'Halı',
    title: 'Halı',
  },
  {
    id: 7,
    name: 'Sehba',
    title: 'Sehba',
  },
  {
    id: 8,
    name: 'Aksesuar',
    title: 'Aksesuar',
  }
];



const navigation = {
  categories: [
    {
      id: 1,
      name: 'Köşe Koltuk',
      featured: [
        {
          name: 'Uzanmalı Köşe',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/gecemavisi_mese_1540_rel_klor3_result-848272_540x.jpg?v=1678692624',
          imageAlt: 'Uzanmalı Köşe',
        },
        {
          name: 'L Köşe',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/2900_2100_klor_klem_ahsap_mese_kadife_paslikirmizi_sonuc-526660_966x.progressive.png?v=1678445491',
          imageAlt: 'L Köşe',
        },
        {
          name: 'Uzanmalı L Köşe',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/2100_3460_relklor_result_ceviz-556929_966x.progressive.jpg?v=1675705225',
          imageAlt: 'Uzanmalı L Köşe',
        },
        {
          name: 'Çift Uzanmalı Köşe',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/rel_3620_relklor-Copy_6__result_ceviz-774110_966x.progressive.jpg?v=1678705582',
          imageAlt: 'Çift Uzanmalı Köşe',
        },
        {
          name: 'U Köşe',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/3030_2830_2830_klmd_leg_gi_toro_klemslim_metal_altin_kadife_caglayesili_sonuc-690603_966x.progressive.png?v=1675707897',
          imageAlt: 'U Köşe',
        },
      ],
    },
    {
      id: 3,
      name: 'Koltuk & Kanepe',
      featured: [
        {
          name: 'Üçlü Koltuk',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/klem-uclu-koltuk-ahsap-ayak-kadifekiremitmesenormod-788848_966x.progressive.jpg?v=1678796879',
          imageAlt: 'Üçlü Koltuk',
        },
        {
          name: 'İkili Koltuk',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/hardal_1540_klor2_result-109848_540x.jpg?v=1689258816',
          imageAlt: 'İkili Koltuk',
        },
        {
          name: 'Loveseat',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/zumrutYesili_mese_1000_klor2_result-225298_862x.progressive.jpg?v=1678719645',
          imageAlt: 'Loveseat',
        },
        {
          name: 'Dörtlü Koltuk',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/1-2860_klem-or_klemslim_kadife_ahsap_mese_caglayesili_sonuc-359636_862x.progressive.png?v=1678791423',
          imageAlt: 'Dörtlü Koltuk',
        },
      ],

    },
    {
      id: 4,
      name: 'Tekliler',
      featured: [
        {
          name: 'Tekli Koltuk',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/hardal_mese_640_klor2_result-907877_540x.jpg?v=1678794413',
          imageAlt: 'Tekli Koltuk',
        },
        {
          name: 'Berjer',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/Modsy_Bergere_Velvet_02_mese_kiremit_sonuc_862x.progressive.png?v=1671892434',
          imageAlt: 'Berjer',
        },
        {
          name: 'Dinlenme Koltuğu',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/rel_toro_zumrutyesili_ceviz_c097e536-b4f4-49a8-b2ac-6f3dd6087f67_540x.jpg?v=1623709768',
          imageAlt: 'Dinlenme Koltuğu',
        },
      ],

    },
    {
      id: 5,
      name: 'Puf & Bench',
      featured: [
        {
          name: 'Puf',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/zumrutyesili_mese_otto_klor2_result-553801_540x.jpg?v=1675706956',
          imageAlt: 'Puf',
        },
        {
          name: 'Bench',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/ben_1_or_bench_kadife_ahsap_ceviz_hardal_sonuc-450032_540x.png?v=1675705815',
          imageAlt: 'Bench',
        },
      ],

    },
    {
      id: 8,
      name: 'Aksesuar',
      featured: [
        {
          name: 'Baş Desteği',
          href: '/category',
          imageSrc: 'https://www.normod.com/cdn/shop/products/Neckroll_C_Velvet_01_GeceMavisi_sonuc-292197_540x.png?v=1675715069',
          imageAlt: 'Baş Desteği',
        },
        {
          name: 'Kırlent',
          href: '/category',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0083/3375/4432/files/vivenseStraw_3c20e282-25bd-4a9c-b6f8-b14a61683cf5_1.jpg?v=1672327529',
          imageAlt: 'Kırlent',
        },
      ],

    },
  ],
  pages: [
    {
      name: 'Koltuk Takımı',
      href: './category',
    },
    {
      name: 'Halı',
      href: './category',
    },
    {
      name: 'Sehba',
      href: './category',
    },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar() {

  const [open, setOpen] = useState(false);

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

      <div className='Nav_container'>
        <div className="Nav_inner_container">
          <div className="nav-menu">
            <div className="bg-white flex justify-center w-full h-full">
              {/* Mobile menu */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                          <button
                            type="button"
                            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close menu</span>

                          </button>
                        </div>

                        {/* Links */}
                        <Tab.Group as="div" className="mt-2">
                          <div className="border-b border-gray-200">
                            <Tab.List className="-mb-px flex space-x-8 px-4">
                              {navigation.categories.map((category) => (
                                <Tab
                                  key={category.name}
                                  className={({ selected }) =>
                                    classNames(
                                      selected ? 'border-slate-500 text-slate-600' : 'border-transparent text-gray-100',
                                      'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                    )
                                  }
                                >
                                  {category.name}
                                </Tab>
                              ))}
                            </Tab.List>
                          </div>
                          <Tab.Panels as={Fragment}>
                            {navigation.categories.map((category) => (
                              <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                <div className="grid grid-cols-2 gap-x-4">
                                  {category.featured.map((item) => (
                                    <div key={item.name} className="group relative text-sm">
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                      </div>
                                      <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>


                              </Tab.Panel>
                            ))}
                          </Tab.Panels>
                        </Tab.Group>

                        <div className="space-y-6 border-t border-red-100 px-4 py-6">
                          {navigation.pages.map((page) => (
                            <div key={page.name} className="flow-root">
                              <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                {page.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <header className="relative bg-white w-full h-full">
                <nav aria-label="Top" className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center">
                    <button
                      type="button"
                      className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                      onClick={() => setOpen(true)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>

                    </button>
                    {/* Logo */}
                    <div className="ml-4 flex lg:ml-0 ">
                      <div className="nav-logo">
                        <div className="nav-inner-logo">
                          <img href="#" className="" src="https://media.discordapp.net/attachments/1126598761183973497/1127011653972672562/pngaaa.com-8945021.png" />
                          <a href="./">FURNAMA</a>
                        </div>
                      </div>
                    </div>

                    {/* Flyout menus */}
                    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? ' text-slate-500'
                                        : 'border-transparent text-gray-700 hover:text-gray-400',
                                      'relative z-10 -mb-px flex items-center pt-px text-sm font-medium duration-200 ease-out'
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">

                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="flex py-16 justify-center items-center">
                                          <div className="flex py-16 ">
                                            {category.featured.map((item) => (
                                              <div key={item.name} className="group relative text-base sm:text-sm flex flex-col justify-around">
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg  group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center w-60 "
                                                  />
                                                </div>
                                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                  {item.name}
                                                </a>
                                                <p aria-hidden="true" className="mt-1">
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                    <div className="ml-auto flex items-center justiy-around">
                      <div className="nav-user-icons lg:ml-8 lg:flex justify-between">
                        <div className="icon-container ">
                          <a href="#"><i className="fa-solid fa-bag-shopping m-5"></i></a>
                          <a href="#"><i className="fa-solid fa-magnifying-glass m-5"></i></a>
                          <a href="#"><i className="fa-solid fa-user m-5"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>
      <div className='Call_container'>
        <div className="Call_inner_container">
          <button className='call'>
            <div className="inner_button">
              <i className="fa-solid fa-phone"></i><p> Hemen Ara 0000 000 00 00 </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;