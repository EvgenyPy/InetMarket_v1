import { MdOutlineDelete } from 'react-icons/md';
import './HeaderBasketItem.sass'
import { store } from '../../../../store/store';

function HeaderBasketItem({src, name, price, id, count, fullPrice}) {
    
    
    return (
        <div className='header-basket-item'>
            <img height={70} src={src} alt="" />
            <p className='header-basket-item-name'>{name}</p>
            <div className='header-basket-item-count-block'>
                <button className='header-basket-item-btn' 
                onClick={(): void => {
                    store.dispatch({type: 'BasketCountMinus',value:{'id': id}})
                }}>
                -</button>

                <button className='header-basket-item-btn-count'>{count}</button>

                <button className='header-basket-item-btn'
                onClick={(): void => {
                    store.dispatch({type: 'BasketCountPlus',value:{'id': id}})
                }}>
                +</button>

            </div>
            <p className='header-basket-item-price'>{fullPrice.toLocaleString() + ' ₽'}</p>
            <button className='header-basket-item-delete'
                onClick={(): void => {
                    store.dispatch({type: 'RemoveBasket',value:{'id': id}})
                }}>
            <MdOutlineDelete/>
            </button>

        </div>
    );
}

export default HeaderBasketItem;