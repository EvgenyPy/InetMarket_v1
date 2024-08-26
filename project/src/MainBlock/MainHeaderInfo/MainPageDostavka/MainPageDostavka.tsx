import "./MainPageDostavka.sass";
import { FaAddressCard } from "react-icons/fa";
import { FaCreditCard, FaWallet } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import AdressItem from "./AdressItem/AdressItem";
import { TbTruckDelivery } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";


function MainPageDostavka() {
    document.title = "Оплата и доставка - Maxmobiles";
    return (
        <div className='main-block-page-dostavka'>

                <div className="container-page-dostavka">
                    <div className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <FaAddressCard/>
                            <p>Оплата</p>
                        </div>
                    </div>
    
                    <div className="page-dostavka-type-pay page-dostavka-block">
    
                        <div>
                            <div className="page-dostavka-name-categories">
                                <FaWallet/>
                                <p>Наличный расчет</p>
                            </div>
                            <p className="page-dostavka-type-pay-cash-text">
                                При оформлении заказа выберите способ оплаты «Наличный платеж».
                                Произвести оплату наличными можно в магазине или курьеру при
                                доставке, стоимость соответствует заявленной на сайте.
                            </p>
                        </div>
    
                        <div>
                            <div className="page-dostavka-name-categories">
                                <FaCreditCard/>
                                <p>Безналичный расчет</p>
                            </div>
                            <p className="page-dostavka-type-pay-cash-text">
                                Оплатить заказ банковской картой можно в магазине.
                            </p>
                        </div>
                    </div>
    
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <IoLocationOutline/>
                            <p>Доставка</p>
                        </div>
                        <p className="page-dostavka-location-text">
                            Получить свой заказ можно в любом городе Крыма и России в пункте выдачи
                            СДЭК. Курьерская доставка заказа нашим сотрудником осуществляется в городах
                            Севастополе и Москве.
                        </p>
                    </div>
    
    
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <p style={{paddingLeft: '0px'}}>Самовывоз</p>
                        </div>
                        <p className="page-dostavka-location-text">
                            Вы также можете забрать ваш заказ в одном из наших пунктов выдачи и магазинах в 
                            городах Севастополе, Симферополе, Ялте и Москве.
                        </p>
                    </div>
    
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1a08d0b26d420034fb18a7b864eff6aefdc767661f30d8ebeda5b1f1cbac3bc&amp;source=constructor" width="1200" height="465" frameborder="0"></iframe>
                
    
    
                    <div className="page-dostavka-address-block">
                        <AdressItem cityName={'Севастополь | Maxmobiles'} cutyAddress={'г. Севастополь, пр-т Нахимова, 19 – ТЦ Детский мир'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–20:00), без выходных'} />
                        <AdressItem cityName={'Москва | Точка выдачи'} cutyAddress={'г. Москва, ул. Барклая, 8 – БЦ Рубин'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–19:00), без выходных'}  />
                        <AdressItem cityName={'Симферополь | Точка выдачи'} cutyAddress={'г. Симферополь, Евпаторийское шоссе, 8 – ТЦ Меганом'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–21:00), без выходных'}  />
                        <AdressItem cityName={'Ялта | Точка выдачи'} cutyAddress={'г. Ялта, ул. Киевская, 6 – ТЦ Дом Торговли'} telephoneHref={'88002508158'} telephone={'8-800-250-81-58'} hrefMap={'#'} workSchedule={'График работы: Пн-Вс (10:00–20:00), без выходных'}  />
                    </div>
    
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <MdOutlineDeliveryDining />
                            <p>Курьерская доставка по городу Севастополь</p>
                        </div>
                        <p className="page-dostavka-location-text">
                            Осуществляется с Пн.-Пт. с временным интервалом с 12:00 – 20:00. После звонка 
                            оператора  и утверждения заказа, курьер предварительно свяжется с Вами для уведомления
                            о своем прибытии по адресу доставки.
                        </p>
                    </div>
    
    
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <p style={{paddingLeft: '0px'}}>Стоимость доставки:</p>
                        </div>
                        <ul className="page-dostavka-delever-price">
                            <li><LuDot />По городу бесплатно при заказе от 5000 рублей</li>
                            <li><LuDot />Балаклава - 350 ₽</li>
                            <li><LuDot />Инкерман - 700 ₽</li>
                            <li><LuDot />Северная сторона - 1000 ₽</li>
                        </ul>
                    </div>
                
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <p style={{paddingLeft: '0px'}}>Курьерская доставка по городу Москва</p>
                        </div>
                        <p className="page-dostavka-location-text">
                            Осуществляется ежедневно интервале с 11:00 до 20:00 часов. После звонка оператора  и утверждения 
                            заказа, курьер предварительно свяжется с Вами для уведомления о своем прибытии по адресу доставки.
                        </p>
                    </div>
                    
                    
                    
                    <div  className="page-dostavka-block">
                        <div className="page-dostavka-name-categories">
                            <TbTruckDelivery />
                            <p>Доставка товаров по территории России</p>
                        </div>
                        <p className="page-dostavka-location-text">
                            Осуществляется курьерскими службами «Почта России», «СДЭК», «Деловые Линии» и «Major Expres».
                        </p>
                        <div className="page-dostavka-icon-deliver">
                            <img src="https://maxmobiles.ru/images/companies/1/pages/Оплата%20и%20доставка/pochta-rossii.jpg?1652945244290" alt="" />
                            <img src="https://maxmobiles.ru/images/companies/1/pages/Оплата%20и%20доставка/logo-sdek.png?1652945261650" alt="" />
                            <img src="https://maxmobiles.ru/images/companies/1/pages/Оплата%20и%20доставка/dellin-logo.jpg?1652945277564" alt="" />
                            <img src="https://maxmobiles.ru/images/companies/1/pages/Оплата%20и%20доставка/majore.png?1652945291921" alt="" />
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default MainPageDostavka;