// @ts-nocheck

import { useEffect, useReducer } from 'react';
import { Decrement, Increment, store } from '../../store/store';
import './MainBlockProduct.sass'
import { MainProductItem } from './MainProductItem/MainProductItem';
import MainProductFilter from './MainProductFilter/MainProductFilter';


function MainBlockProduct({bd, name, banner}) {

    const style = {
        backgroundImage: `url(${banner})`
    }
    
    return (
        <div className="main-block-product">
            <div className="container">
                <h1>{name}</h1>
                

                <div className="main-block-product-banner" style={style}></div>


                <div className='categori-menu-block'>
                    <MainProductFilter bd={bd}/>
                    <div className="categori-menu-tovar">
                        { bd.map((el) => <MainProductItem src={el.src} top={el.top} name={el.name} price={el.price} key={el.id} id={el.id} beforePrice={el.beforePrice}/>)}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default MainBlockProduct;