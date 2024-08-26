import './FilterModel.sass'
import {modelIphone} from '../../../../../database/modelIphone.js';

function FilterModel() {
    
    return (
        <div className='categori-menu-filter-block'>
            <p className='categori-menu-filter-name'>Модель</p>
            <div className='categori-menu-filter-checkbox'>
                {modelIphone.map(el => <div className='categori-menu-filter-checkbox-item'><input type="checkbox"/><p>{el}</p></div>)}
            </div>
        </div>
    );
}

export default FilterModel;