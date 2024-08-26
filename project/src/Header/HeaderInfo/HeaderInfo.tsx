import { NavLink } from 'react-router-dom'
import './HeaderInfo.sass'



export function HeaderInfo() {
    return(
        <>
            <div className='header-info'>
                <div className="container">
                    <div className='header-nav'>
                        <NavLink to="/page-blog">Блог Maxmobiles</NavLink>
                        <NavLink to="/page-sale">Акции и скидки</NavLink>
                        <NavLink to="/page-o-nas">О нас</NavLink>
                        <NavLink to="/page-contacts">Контакты</NavLink>
                        <NavLink to="/page-dostavka">Доставка и оплата</NavLink>
                        <NavLink to="/page-trade-in">Трейд-Ин</NavLink>
                    </div>
                </div>
            </div>
        </>
    )  
}