// @ts-nocheck
import { FiBarChart2, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HeaderMainIcons.sass'
import { store } from '../../../store/store';
import { useEffect, useReducer, useRef } from 'react';
import HeaderBasketItem from './HeaderBasketItem/HeaderBasketItem';

function HeaderMainIcons() {
    const [,forsUpdeta] = useReducer((x) => x + 1, 0)
    const ref = useRef(null);

    type TypeProduct = {
        id: number;
        src: string;
        name: string;
        price: number,
        fucn: (name: string, age?: number, city?: string) => void  
    }

    
    


    useEffect(() => {
        store.subscribe(() => {
            forsUpdeta();
        });
        
    },[])

    const basket = store.getState().basket;
    const basketActive = store.getState().basketActive;

    


    function basketPrice() {
        let count = 0
        basket.map((el: TypeProduct) => count += el.fullPrice);
        return count
    }

    useEffect(()=>{
        if (!basketActive) return ref.current.classList.add('basket-hidden');
        else ref.current.classList.remove('basket-hidden')
    },[basketActive])

    
    return (
        <div className='header-main-info-icons'>
            <Link to="/error"><FiBarChart2 className='header-main-info-icon'/></Link>

            <Link to='/heart'  style={{position: 'relative'}}>
                <FiHeart className='header-main-info-icon' />
            </Link>
            
            <Link to="/user"><FiUser className='header-main-info-icon'/></Link>

            <Link to="/basket" 
            onClick={(e) => {
                e.preventDefault();
                store.dispatch({type: 'BasketActive'})
            }} style={{position: 'relative'}}>
                <FiShoppingCart className={'header-main-info-icon'}/>
               {basket.length ? <div className='shopBasket-count'>{basket.length}</div> : ''}
            </Link>

            <div className='header-basket' ref={ref}>
                
                <div className='header-basket-products'>
                    {basket.map((el: TypeProduct) => {
                        return <HeaderBasketItem key={el.id} src={el.src} name={el.name} price={el.price} id={el.id} fullPrice={el.fullPrice} count={el.count}/>
                    })}
                </div>
                

                <div className='header-basket-footer'>
                    <p>{'Итог: '+basketPrice().toLocaleString() + ' ₽'}</p>
                    <p onClick={() => {
                        store.dispatch({type: 'BasketCleare'})
                    }}>Очистить корзину</p>
                </div>
            </div>

        </div>
    );
}

export default HeaderMainIcons;