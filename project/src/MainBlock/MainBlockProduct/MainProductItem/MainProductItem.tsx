// @ts-nocheck
import { MdOutlineDelete } from "react-icons/md";
import { FiHeart, FiBarChart2 } from "react-icons/fi";
import './MainProductItem.sass'
import { store } from "../../../store/store";
import { useEffect, useReducer } from "react";
import { BsFire } from "react-icons/bs";




export function MainProductItem({src, name, price, id, beforePrice, top}) {
    const [,forsUpdeta] = useReducer((x) => x + 1, 0)



    useEffect(() => {
        store.subscribe(() => {
            forsUpdeta();
        });
    },[])


    function isBasket(num) {
        const result = store.getState().basket.some(el => {
            return el.id == num;
        })
        return result
    }



    return(
            <div className="categori-menu-tovar-item">
                {beforePrice && <div className="categori-menu-tovar-item-sale">
                    <button>скидка 15 %</button>
                </div>}
                <img src={src} width={200} alt="" />
                <p className="categori-menu-tovar-item-name">{name}</p>

                {top && <p className="categori-menu-tovar-item-stars"><BsFire className="item-stars"/></p>}

                <div className="item-heart-addchart">
                    <FiHeart className="item-heart" />
                    <FiBarChart2 className="item-heart"/>    
                </div>
                
                
                <div className="categori-menu-tovar-item-price-block" >
                    <p className="categori-menu-tovar-item-price">{price.toLocaleString()} ₽
                        {beforePrice && <p className="categori-menu-tovar-item-price-before">{beforePrice.toLocaleString()} ₽</p>}
                    </p>
                    {!isBasket(id)   ?
                        <button className="categori-menu-tovar-item-btn tovar-item-btn-add"
                            onClick={() => store.dispatch({type: 'AddBasket',value:{'src': src, 'name': name, 'price': price, 'id': id, 'count': 1, fullPrice: price}})}>
                            В корзину
                        </button>
                        :
                        <button className="categori-menu-tovar-item-btn tovar-item-btn-delete" 
                            onClick={() => store.dispatch({type: 'RemoveBasket',value:{'id': id}})}>
                            Удалить
                        </button>
                    }
                </div>

            </div>
    )
}