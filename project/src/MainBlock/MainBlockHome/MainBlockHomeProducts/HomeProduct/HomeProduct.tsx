import { MainProductItem } from "../../../MainBlockProduct/MainProductItem/MainProductItem";
import './HomeProduct.sass'


function HomeProduct({bd}) {
    return (
        <>
            { bd.map((el,ind) => {
                if (ind > 9) return false
                return <MainProductItem src={el.src} top={el.top} name={el.name} price={el.price} key={el.id} id={el.id} beforePrice={el.beforePrice}/>
            })}
        </>
    );
}

export default HomeProduct;