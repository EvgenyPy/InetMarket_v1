import './FilterMemorySize.sass'
import {modelMemorySize} from '../../../../../database/modelMemorySize.js';

function FilterMemorySize() {
    return (
        <div className='categori-menu-filter-block'>
            <p className='categori-menu-filter-name'>Обьем памяти</p>
            <div className='categori-menu-filter-checkbox'>
                {modelMemorySize.map(el => <div className='categori-menu-filter-checkbox-item'><input type="checkbox"/><p>{el}</p></div>)}
            </div>
        </div>
    );
}

export default FilterMemorySize;