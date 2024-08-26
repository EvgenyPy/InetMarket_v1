import "./MainPageONas.sass";
import MainPageONasWorker from "./MainPageONasWorker/MainPageONasWorker";
import { workersArr } from "./workersArr";

function MainPageONas() {
    document.title = "Акции и скидки - Скидки на товары Apple | Подборки Maxmobiles";
    return (
        <div className="main-block-page-o-nas">
            <div className="container-page-o-nas">
                <div>
                    <img width={1200} src="https://maxmobiles.ru/images/companies/1/Фото%20сотрудников/rounded-in-photoretrica.png?1667381773324" alt="" />
                </div>
                <p className="page-o-nas-opisanie">
                    <span>Maxmobiles</span> – это старейший эксперт в области техники Apple в Крыму и Севастополе. Главный продукт
                    Apple – это iPhone, и мы были первыми, кто ввозил и продавал телефоны Apple напрямую из США.
                    Мы начали свою работу еще в 2010 году, и с тех пор в нашем магазине постоянно появляются самые
                    последние новинки. Кроме того, у нас представлен широкий ассортимент Б/У техники Apple,
                    которая проходит комплексную проверку и предпродажную подготовку, чтобы в ваших руках 
                    оказался надежный и качественный гаджет.
                    За столько лет у нас были тысячи довольных клиентов, многие из которых стали нашими
                    постоянными покупателями и даже друзьями, поэтому со многими посетителями мы знакомы лично. 
                    Наш логотип узнаваем далеко за пределами Севастополя – фирменные наклейки очень популярны и 
                    часто встречаются на стеклах или бамперах автомобилей.
                    Если вы являетесь давним поклонником продукции Apple, то, скорее всего, по крайней мере один
                    iPhone, iPad или MacBook вы покупали в нашем магазине. И мы всегда будем рады видеть вас 
                    снова!
                </p>
                <p className="page-o-nas-opisanie">
                    <span>Сервисный центр Maxmobiles</span> – это самый старый и опытный сервис Apple 
                    в Крыму и Севастополе. Устройствам, которые вернулись к жизни благодаря нашим специалистам, 
                    просто нет числа – по крайней мере, мы уже много лет назад сбились со счёта. Надеемся, вам 
                    никогда не придётся обращаться в ремонт, но если это произойдёт – вы знаете где нас искать.
                </p>

                <div className="page-o-nas-our-workers">
                    <p className="page-o-nas-our-workers-name">Наши сотрудники</p>
                    <p className="page-o-nas-our-workers-opi">г. Севастополь, пр-т Нахимова, 19 – ТЦ «Детский мир» – фирменный магазин и сервисный центр Apple</p>
                    
                    <div className="page-o-nas-our-workers-iconbox">
                        {workersArr.map((el) => <MainPageONasWorker img={el.img} name={el.name} />)}
                    </div>

                    <div className="page-o-nas-our-workers-data-company">
                        <span>Наши юридические и банковские реквизиты</span><br /><br />
                        ИП Муленко Максим Александрович<br />
                        ИНН: 920150984872<br />
                        ОГРНИП: 315920400039693<br />
                        Юридический адрес: 299053,г. Севастополь, ул. Вакуленчука, дом 21, кв. 88.<br />
                        Почтовый адрес: 299053,г. Севастополь, ул. Вакуленчука, дом 21, кв. 88.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPageONas;