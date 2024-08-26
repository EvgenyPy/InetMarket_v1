import './TradeInItemStep.sass'
function TradeInItemStep({step, img}: {step: number, img: string}) {
    return (
        <div className='page-tradeIn-step-item'>
            <div className='page-tradeIn-step-item-text'>
                {step == 1?
                <div>
                    <p className='page-tradeIn-step-item-text-name'>ШАГ 1: Проверяем ваше устройство</p>
                    <p className='page-tradeIn-step-item-text-list'>- Продиагностируем ваше устройство и оценим его;</p>
                    <p className='page-tradeIn-step-item-text-list'>- Сохраним ваши данные со старого устройства;</p>
                    <p className='page-tradeIn-step-item-text-list'>- Сделаем резервную копию ваших приложений;</p>
                </div>
                :
                <div>
                    <p className='page-tradeIn-step-item-text-name'>Шаг 2: Выбирайте ваше новой устройство</p>
                    <p className='page-tradeIn-step-item-text-list'>- Подскажем с выбором устройства;</p>
                    <p className='page-tradeIn-step-item-text-list'>- Перенесем ваши данные;</p>
                    <p className='page-tradeIn-step-item-text-list'>- Вы доплачиваете разницу по трейд-ин;</p>
                </div>}
            </div>

            <div className={step == 1?'page-tradeIn-step-item-icon':'page-tradeIn-step-item-icon page-tradeIn-step-item-icon2'}>
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default TradeInItemStep;