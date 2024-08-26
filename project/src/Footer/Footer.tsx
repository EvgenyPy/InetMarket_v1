import './Footer.sass'

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-block">
                    <div className='footer-item'>
                        <p>Покупательский сервис</p>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Акции и скидки</a></li>
                        <li><a href="">Блог Maxmobiles</a></li>
                        <li><a href="">Бонусная программа</a></li>
                        <li><a href="">Оплата и доставка</a></li>
                        <li><a href="">Гарантия</a></li>
                        <li><a href="">Возврат</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Как оставить отзыв о нас?</a></li>
                        <li><a href="">Политика конфиденциальности</a></li>
                        <li><a href="">Контакты</a></li>
                    </div>

                    <div className='footer-item'>
                        <p>Интернет-магазин</p>
                        <li><a href="">Идеальное БУ</a></li>
                        <li><a href="">iPhone</a></li>
                        <li><a href="">Watch</a></li>
                        <li><a href="">AirPods</a></li>
                        <li><a href="">MacBook</a></li>
                        <li><a href="">Игровые приставки</a></li>
                        <li><a href="">Dyson</a></li>
                        <li><a href="">iPad</a></li>
                        <li><a href="">Гаджеты</a></li>
                        <li><a href="">Аксессуары</a></li>
                    </div>

                    <div className='footer-item'>
                        <p>Сервис</p>
                        <li><a href="">Ремонт Apple</a></li>
                        <li><a href="">Ремонт iPhone</a></li>
                        <li><a href="">Ремонт MacBook</a></li>
                        <li><a href="">Ремонт iPad</a></li>
                        <li><a href="">Ремонт Apple Watch</a></li>
                    </div>

                    <div className='footer-item'>
                        
                        <p>Для покупателя</p>
                        <li><a href="">Ваши заказы</a></li>
                        <li><a href="">Ваши бонусы</a></li>
                        <li><a href="">Отложенные</a></li>
                        <li><a href="">Список сравнения</a></li>
                        <li><a href="">Подарочные сертификаты</a></li>
                        <li><a href="">Магазины и пункты выдачи</a></li>
                        <a href="/"><img width={'176.89px'} src="https://maxmobiles.ru/images/logos/73/logo__.svg" style={{position: 'absolute'}} alt="" /></a>
                    </div>

                    <div className='footer-item'>
                        <p>Контакты</p>
                        <li className='footer-item-li-not-a'>г. Севастополь, пр-т Нахимова 19</li>
                        <li><a href="" className='footer-item-a-line'>Посмотреть на карте</a></li>
                        <li><a href="">8 800 250-81-58 (звонок бесплатный)</a></li>
                        <li><a href="">7 978 222-01-23 (Магазин)</a></li>
                        <li><a href="">7 978 820-30-01 (Сервис)</a></li>
                        <li className='footer-item-li-not-a'>Пн-Вс 10.00 - 20.00</li>
                        <li><a href="" className='footer-item-a-line'>store@maxmobiles.ru</a></li>
                        <div className='footer-item-social'>
                            <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-vk-40.png" alt="" /></a>
                            <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-instagram-40.png" alt="" /></a>
                            <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-телеграм-40.png" alt="" /></a>
                            <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-yandex-zen-40.png" alt="" /></a>
                            <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-facebook-40.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;