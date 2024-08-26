import './FilterPrice.sass'

function FilterPrice() {
    return (
        <div className='categori-menu-filter-block'>
            <p className='categori-menu-filter-name'>Цена</p>
            <div className='categori-menu-filter-price-input'>
                <div><input type="text" value={'12490'} id='filter-price-start'/><label htmlFor="filter-price-start">₽</label></div>
                <div className='categori-menu-filter-price-input-line'></div>
                <div><input type="text"  value={'542490'} id='filter-price-finish'/><label htmlFor="filter-price-finish">₽</label></div>
            </div>
        </div>
    );
}

export default FilterPrice;