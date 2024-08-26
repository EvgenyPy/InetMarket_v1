import './TradeInItemPrice.sass'

function TradeInItemPrice({img, block}) {
    return (
        <div className='page-tradeIn-item-price'>
            

           { block == 1?
           <>
                <div className='page-tradeIn-item-price-elem tradeIn-item-price-elem-text'>
    
                    <div>
                        <p className='page-tradeIn-item-price-name'>Получи от 5500 до 75000 руб <br /> по программе трейд-ин на свой iPhone</p>
                        <div className='page-tradeIn-item-price-list'>
                            <p>iPhone 13 Pro Max ----- до 60000 руб;</p>
                            <p>iPhone 13 Pro ------------ до 55000 руб;</p>
                            <p>iPhone 13 ----------------- до 46000 руб;</p>
                            <p>iPhone 13 mini ----------- до 40000 руб;</p>
                        </div>
                        <button className='page-tradeIn-item-price-btn'>Найти свой трейд-ин</button>
                    </div>
    
                </div>
    
                <div className='page-tradeIn-item-price-elem'>
                    <img src={img} alt="" height={400}/>
                </div>
            </> :
            
            <>
                <div className='page-tradeIn-item-price-elem tradeIn-item-price-elem-text'>
    
                    <div>
                        <p className='page-tradeIn-item-price-name'>Получи от 4000 до 16000 руб<br />
                        по программе трейд-ин на новые Apple Watch</p>
                        <div className='page-tradeIn-item-price-list'>
                            <p>Apple Watch Series 7 -- до 16000руб;</p>
                            <p>Apple Watch Series 6 -- до 14000 руб;</p>
                            <p>Apple Watch SE ----------- до 12000 руб;</p>
                            <p>Apple Watch Series 5 -- до 9000 руб;</p>
                        </div>
                        <button className='page-tradeIn-item-price-btn'>Найти свой трейд-ин</button>
                    </div>
    
                </div>
    
                <div className='page-tradeIn-item-price-elem'>
                    <img src={img} alt="" height={400}/>
                </div>
            </>
            }
        </div>

        
    );
}

export default TradeInItemPrice;