import { NavLink, Outlet } from "react-router-dom";
import './MainBlockHomeProducts.sass'
function MainBlockHomeProducts() {
    return (
        <>
            <div className='main-block-home'>
                <h1>Выбирай то, что по душе</h1>
                <div className='main-block-home-buttons'>
                    <NavLink className='main-block-home-button' to={'/'} style={{color: '#000'}}><button>iPhone</button></NavLink>
                    <NavLink className='main-block-home-button' to={'/home-mac'} style={{color: '#000'}}><button>Mac</button></NavLink>
                    <NavLink className='main-block-home-button' to={'/home-watch'} style={{color: '#000'}}><button>Watch</button></NavLink>
                    <NavLink className='main-block-home-button' to={'/home-airpods'} style={{color: '#000'}}><button>AirPons</button></NavLink>
                    <NavLink className='main-block-home-button' to={'/home-game'} style={{color: '#000'}}><button>Все для игр</button></NavLink>
                </div>
            </div>
            
            <div className="main-block-home-product">
                <Outlet />
            </div>
            
            <button className='main-block-home-button-see-all'>Смотреть больше</button>
        </>
    );
}

export default MainBlockHomeProducts;