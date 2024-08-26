// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit"

const stateDef = {
  basket: (JSON.parse(localStorage.getItem('basket') || '[]')),
  heart: [{id: 5, img: 'wffscs'}],
  basketActive: false
}


const reducer = (state = stateDef, {type, value}: {type: string, value: any}) => {

  switch (type) {
    case 'AddBasket':
      localStorage.setItem('basket', JSON.stringify([...state.basket,value]));
      return {...state,basket: [...state.basket,value]};

    case 'RemoveBasket':
      const filtArray = state.basket.filter(el => el.id !== value.id)
      localStorage.setItem('basket', JSON.stringify(filtArray));
      if (filtArray.length) return {...state,basket: filtArray}
      return {...state,basket: filtArray,basketActive: false}

    case 'BasketActive':
      if (state.basket.length) return {...state,basketActive: !state.basketActive};
      else return {...state}
      
    case 'BasketCleare':
      localStorage.setItem('basket','[]')
      return {...state,basket: [],basketActive: false}

    case 'BasketCountMinus':
      const elementBasketIndex1 = state.basket.findIndex(el => el.id == value.id)
      const elementBasketFind1 = state.basket.find(el => el.id == value.id)
      const elementBasket1 = state.basket

      if (elementBasketFind1.count == 1) {
        const filtArray = state.basket.filter(el => el.id !== value.id)
        localStorage.setItem('basket', JSON.stringify(filtArray));
        if (filtArray.length) return {...state,basket: filtArray}
        return {...state,basket: filtArray,basketActive: false}
      }

      elementBasket1[elementBasketIndex1] = {
        ...elementBasketFind1,count: elementBasketFind1.count - 1,fullPrice: (elementBasketFind1.count - 1) * elementBasketFind1.price
      }
    
      localStorage.setItem('basket', JSON.stringify(elementBasket1));
      return {...state,basket: elementBasket1}

    case 'BasketCountPlus':
      const elementBasketIndex2 = state.basket.findIndex(el => el.id == value.id)
      const elementBasketFind2 = state.basket.find(el => el.id == value.id) 
      const elementBasket2 = state.basket

      elementBasket2[elementBasketIndex2] = {
        ...elementBasketFind2,count: elementBasketFind2.count + 1,fullPrice: (elementBasketFind2.count + 1) * elementBasketFind2.price
      }

    
      localStorage.setItem('basket', JSON.stringify(elementBasket2));
      return {...state,basket: elementBasket2}

    

    default:
      return state;
  }
}

export const store = configureStore({
  reducer: reducer,
})


