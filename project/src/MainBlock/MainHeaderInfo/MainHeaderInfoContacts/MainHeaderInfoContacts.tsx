import AdressItem from '../MainPageDostavka/AdressItem/AdressItem';
import './MainHeaderInfoContacts.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

function MainHeaderInfoContacts() {

    const jsonplaceholder = axios.create();
    jsonplaceholder.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'


    const faker = axios.create();
    faker.defaults.baseURL = 'https://fakerapi.it/api/v1/'


    jsonplaceholder.interceptors.response.use(resp => {
        console.log('before then json');
    })

    const c = jsonplaceholder.get('users',{
        timeout: 10000,
    })
    .then(data => console.log('then json'))




    faker.interceptors.response.use(resp => {
        console.log('before then faker');
    })

    const y = faker.get('companies',{
        timeout: 10000,
    })
    .then(data => console.log('then faker'))
    









    
    document.title = "Акции и скидки - Скидки на товары Apple | Подборки Maxmobiles";
    return (
        <div>
            <div className='container-page-contacts'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1a08d0b26d420034fb18a7b864eff6aefdc767661f30d8ebeda5b1f1cbac3bc&amp;source=constructor" width="1200" height="465" frameborder="0"></iframe>
            
                <div className="page-dostavka-address-block">
                    <AdressItem cityName={'Севастополь | Maxmobiles'} cutyAddress={'г. Севастополь, пр-т Нахимова, 19 – ТЦ Детский мир'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–20:00), без выходных'} />
                    <AdressItem cityName={'Москва | Точка выдачи'} cutyAddress={'г. Москва, ул. Барклая, 8 – БЦ Рубин'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–19:00), без выходных'}  />
                    <AdressItem cityName={'Симферополь | Точка выдачи'} cutyAddress={'г. Симферополь, Евпаторийское шоссе, 8 – ТЦ Меганом'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–21:00), без выходных'}  />
                    <AdressItem cityName={'Ялта | Точка выдачи'} cutyAddress={'г. Ялта, ул. Киевская, 6 – ТЦ Дом Торговли'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–20:00), без выходных'}  />
                </div>

                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop

        autoplay
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/5_nysb-m0_png.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/4_jg4r-7f_png.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/3_8nfy-hq_png.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/9_o4r8-qs_png.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/7_wskm-7u_png.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img width={250} src="https://maxmobiles.ru/images/ab__webp/thumbnails/320/240/detailed/75/6_au1k-tu_png.webp" alt="" /></SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
}

export default MainHeaderInfoContacts;