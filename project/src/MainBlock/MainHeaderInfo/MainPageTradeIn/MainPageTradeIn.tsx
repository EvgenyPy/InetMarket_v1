import "./MainPageTradeIn.sass";
import TradeInItemPrice from "./TradeInItemPrice/TradeInItemPrice";
import TradeInItemQuestion from "./TradeInItemQuestion/TradeInItemQuestion";
import TradeInItemStep from "./TradeInItemStep/TradeInItemStep";

function MainPageTradeIn() {
    document.title = "Акции и скидки - Скидки на товары Apple | Подборки Maxmobiles";
    return (
        <div className='main-block-page-tadein'>
            <div className='container-page-tadein'>
                <div className="page-tradeIn-startLogo-box">
                    <div>
                        <img src="https://maxmobiles.ru/images/companies/1/tradein/apple-trade-in-logo-202303.png?1684322415220" alt="" />
                    </div>
                </div>
                <h2 className="page-tradeIn-text-underLogo">Обновляй. Экономь.</h2>
                <h2 className="page-tradeIn-text-underLogo">Это так просто с Maxmobiles!</h2>
                <p className="page-tradeIn-text-underLogo-p">
                    С помощью Trade In от Максмобаилс вы можете получить выгодную цену за свое текущее
                    устройство и применить ее к новому. И все это вы можете сделать онлайн или в нашем
                    фирменном магазине. Если ваше устройство не подходит для получения средств, мы 
                    утилизируем его бесплатно. Это хорошо для вас и для планеты.
                </p>
    
                <TradeInItemPrice block={1} img={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/49/iphones-value-tradein-202303_GEO_US_png.webp'}/>
                <TradeInItemPrice block={2} img={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/49/watches-value-tradein-202303_png.webp'}/>
                
                <h1 className="page-tadeIn-how-work-text">Как работает трейд-ин?</h1>

                <TradeInItemStep step={1} img={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/49/instore-step1-card-tradein-202303_png.webp'}/>
                <TradeInItemStep step={2} img={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/49/instore-step2-card-tradein-202303_png.webp'}/>
            
                <TradeInItemQuestion />


                <p className="page-tradeIn-undertext-details">
                    <p className="page-tradeIn-undertext-details-width">Условия акции:</p>
                    Срок действия акции не ограничен.<br />

                    Акция действует при покупке в розничном магазине, при заказе в интернет-магазине при условии
                    самовывоза, а также с помощью услуги «Выездной выкуп». В акции могут принять участие 
                    физические лица, достигшие 18-летнего возраста.<br/>

                    Сдать по акции можно все модели iPhone, iPad, Apple Watch, ноутбуки Mac а также смартфоны и 
                    планшеты других производителей. Приобрести — любую технику и аксессуары из ассортимента
                    Maxmobiles, при условии, что общая сумма покупки будет равна или больше выкупной стоимости 
                    сданной техники.<br/>

                    Чтобы узнать возможный размер скидки, нужно обратиться в розничный магазин с паспортом и 
                    с устройством к сдаче.<br/>
                    
                    Новые устройство может быть приобретено по действующей на момент заключения договора
                    программе кредитования или рассрочки. Подробности и условия можно уточнить у консультантов
                    в магазине. Акция не суммируется с другими скидками и специальными предложениями. Бонусная
                    программа действует только на начисление, списание бонусов недоступно. Оплата нового 
                    устройства может быть произведена наличными средствами, платежной картой.<br/>

                    Компания оставляет за собой право на завершение акции без предварительного уведомления 
                    покупателей.
                </p>
            </div>
        </div>
    );
}

export default MainPageTradeIn;