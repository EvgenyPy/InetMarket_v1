import './FilterColor.sass'
import {modelColor} from '../../../../../database/modelColor.js';

function FilterColor() {
    return (
        <div className='categori-menu-filter-block'>
            <p className='categori-menu-filter-name'>Цвет</p>
            <div className='categori-menu-filter-checkbox'>
                {modelColor.map(el => <div className='categori-menu-filter-color' style={{backgroundColor: el}}></div>)}
            </div>
        </div>
    );
}

export default FilterColor;