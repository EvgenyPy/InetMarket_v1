import './MainBlockHome.sass'
import MainBlockHomeBanner from './MainBlockHomeBanner/MainBlockHomeBanner';
import MainBlockHomeInfo from './MainBlockHomeInfo/MainBlockHomeInfo';
import MainBlockHomeProducts from './MainBlockHomeProducts/MainBlockHomeProducts';
import MainBlockHomePromo from './MainBlockHomePromo/MainBlockHomePromo';
import MainBlockHomeСategories from './MainBlockHomeСategories/MainBlockHomeСategories';



function MainBlockHome() {
    return (
        <div className="main-block">
            <div className="container">
                
                <div className="salider">
                    <h1>iPhone 15Pro Max - Titan</h1>
                </div>

                <MainBlockHomePromo />

                <MainBlockHomeСategories />
                <MainBlockHomeBanner twoElement={false} img1={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/73/Game_jpg.webp'} img2={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/73/dyson_jpg.webp'}/>

                <MainBlockHomeProducts />

                <MainBlockHomeBanner twoElement img1={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/73/1_jpg.webp'} img2={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/73/212_jpg.webp'}/>

                <MainBlockHomeInfo />

            </div>
        </div>
    );
}

export default MainBlockHome;