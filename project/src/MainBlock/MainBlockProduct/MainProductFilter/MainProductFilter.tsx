import { useForm } from 'react-hook-form';
import FilterColor from './FilterColor/FilterColor';
import FilterMemorySize from './FilterMemorySize/FilterMemorySize';
import FilterModel from './FilterModel/FilterModel';
import FilterPrice from './FilterPrice/FilterPrice';
import FilterSizeDisplay from './FilterSizeDisplay/FilterSizeDisplay';
import './MainProductFilter.sass'

function MainProductFilter({}) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            age: 18
        }
    });
    
    const submit = data => console.log(data);
    
    
    return (
        <div className='categori-menu-filter'>

            <div className='categori-menu-filter-filt'>
                <p>Фильтр:</p>
            </div>

            <form action="" onSubmit={handleSubmit(submit)}>
                <FilterPrice />
                <FilterModel />
                <FilterColor />
                <FilterMemorySize />
                <FilterSizeDisplay /> 
                <button onClick={el => {
                    el.preventDefault()

                }}>Отправить</button>
            </form>
            
        </div>
    );
}

export default MainProductFilter;