import './FilterSizeDisplay.sass'
import {modelSizeDisplay} from '../../../../../database/modelSizeDisplay.js';

function FilterSizeDisplay() {
    return (
        <div className='categori-menu-filter-block'>
            <p className='categori-menu-filter-name'>Диагональ экрана</p>
            <div className='categori-menu-filter-checkbox'>
                {modelSizeDisplay.map(el => <div className='categori-menu-filter-checkbox-item'><input type="checkbox"/><p>{el}</p></div>)}
            </div>
        </div>
    );
}

export default FilterSizeDisplay;