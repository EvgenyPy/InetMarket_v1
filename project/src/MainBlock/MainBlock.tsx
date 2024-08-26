// @ts-nocheck

import { Route, Routes } from "react-router-dom";
import MainBlockHome from "./MainBlockHome/MainBlockHome";
import MainBlockError from "./MainBlockError/MainBlockError";
import MainBlockProduct from "./MainBlockProduct/MainBlockProduct.js";
import {bdAirPods} from '../../database/bdAirPods.js';
import {bdBY} from '../../database/bdBY.js';
import {bdGame} from '../../database/bdGame.js';
import {bdIphone} from '../../database/bdIphone.js';
import {bdMac} from '../../database/bdMac.js';
import {bdSale} from '../../database/bdSale.js';
import {bdWatch} from '../../database/bdWatch.js';
import HomeProduct from "./MainBlockHome/MainBlockHomeProducts/HomeProduct/HomeProduct.js";
import MainHeaderInfoSale from "./MainHeaderInfo/MainHeaderInfoSale/MainHeaderInfoSale.js";
import MainDefaultPage from "./MainDefaultPage.js";
import MainHeaderInfoContacts from "./MainHeaderInfo/MainHeaderInfoContacts/MainHeaderInfoContacts.js";
import MainPageBlog from "./MainHeaderInfo/MainPageBlog/MainPageBlog.js";
import MainPageONas from "./MainHeaderInfo/MainPageONas/MainPageONas.js";
import MainPageDostavka from "./MainHeaderInfo/MainPageDostavka/MainPageDostavka.js";
import MainPageTradeIn from "./MainHeaderInfo/MainPageTradeIn/MainPageTradeIn.js";
import MainPageOtzyv from "./MainHeaderInfo/MainPageOtzyv/MainPageOtzyv.js";

function MainBlock() {
    return (
        <Routes>
                {/* Products */}
                <Route path='/' element={<MainBlockHome/>}>
                    <Route index element={<HomeProduct homePage bd={bdIphone} name={'iPhone'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                    <Route path='home-mac' element={<HomeProduct homePage bd={bdMac} name={'Mac'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                    <Route path='home-watch' element={<HomeProduct homePage bd={bdWatch} name={'Watch'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                    <Route path='home-airpods' element={<HomeProduct homePage bd={bdAirPods} name={'AirPods'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                    <Route path='home-game' element={<HomeProduct homePage bd={bdGame} name={'Все для игр'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                </Route>
				<Route path='/sale'   element={<MainBlockProduct bd={bdSale} name={'Скидки %'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/used'   element={<MainBlockProduct bd={bdBY} name={'Идеальное БУ'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/85/11x_jpg.webp'}/>}/>
                <Route path='/iphone'   element={<MainBlockProduct bd={bdIphone} name={'iPhone'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/mac'   element={<MainBlockProduct bd={bdMac} name={'Mac'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/watch'   element={<MainBlockProduct bd={bdWatch} name={'Watch'}  banner={'https://kalix.club/uploads/posts/2023-03/1677763649_kalix-club-p-eppl-votch-zastavka-krasivo-47.png'}/>}/>
                <Route path='/airpods'   element={<MainBlockProduct bd={bdAirPods} name={'AirPods'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/game'   element={<MainBlockProduct bd={bdGame} name={'Все для игр'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='*'   element={<MainBlockError/>}/>


                {/* Page header */}
                <Route path='/page-blog' element={<MainDefaultPage namePage={'Блог Maxmobiles - об Apple с любовью!'} navName={'Блог Maxmobiles - об Apple с любовью!'} navHref={'/page-blog'} mainChild={<MainPageBlog/>}/>} />
                <Route path='/page-sale' element={<MainDefaultPage namePage={'Акции и скидки в Maxmobiles'} navName={'Акции и скидки'} navHref={'/page-sale'} mainChild={<MainHeaderInfoSale/>}/>} />
                <Route path='/page-o-nas' element={<MainDefaultPage namePage={'О нас'} navName={'О нас'} navHref={'/page-o-nas'} mainChild={<MainPageONas/>}/>} />
                <Route path='/page-contacts' element={<MainDefaultPage namePage={'Контакты'} navName={'Контакты'} navHref={'/page-contacts'} mainChild={<MainHeaderInfoContacts/>}/>} /> 
                <Route path='/page-dostavka' element={<MainDefaultPage namePage={'Оплата и доставка'} navName={'Оплата и доставка'} navHref={'/page-dostavka'} mainChild={<MainPageDostavka/>}/>} />
                <Route path='/page-trade-in' element={<MainDefaultPage namePage={'Apple Trade In'} navName={'Apple Trade In'} navHref={'/page-trade-in'} mainChild={<MainPageTradeIn/>}/>} />
		</Routes>
    );
}

export default MainBlock;