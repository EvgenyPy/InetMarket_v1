import './AdressItem.sass'
function AdressItem({cityName, cutyAddress, telephoneHref, telephone, hrefMap, workSchedule}) {
    return (
        <div className='adress-item'>
            <p className='adress-item-city'>{cityName}</p>
            <p className='adress-item-address'>{cutyAddress}</p>
            <a href={'tel: '+ telephoneHref} className='adress-item-phone'>{telephone}</a>
            <a href={hrefMap} className='adress-item-map'>показать на карте</a>
            <p className='adress-item-work-schedule'>{workSchedule}</p>
        </div>
    );
}

export default AdressItem;