import MainBlockHomePromo from "../../MainBlockHome/MainBlockHomePromo/MainBlockHomePromo";
import "./MainHeaderInfoSale.sass";
function MainHeaderInfoSale() {
    document.title = "Акции и скидки - Скидки на товары Apple | Подборки Maxmobiles";
    return (
        <div className="main-block-page-sale">
            <div className="container-page-sale">
                <MainBlockHomePromo />
                <div className="page-sale-tradeIn">
                    <div className="page-sale-tradeIn-text">
                        <div>
                            <div className="page-sale-tradeIn-text-name">
                                Трейд-ин<br />
                                <span>Обменяй старый iPhone на новый</span>
                            </div>
                            <p className="page-sale-tradeIn-text-opi">Обновить выгодно свой iPhone. Это так просто с Maxmobiles</p>
                        </div>
                    </div>
                    <img src="https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/8/ubfun8p0az00k275jfwb3uv6ept9uzkz121_jpg.webp" alt="" />
                </div>
                <div className="page-sale-under-promo">
                    <div><img src="https://maxmobiles.ru/images/ab__webp/thumbnails/330/200/promotion/23/PlayStation_111_jpg.webp" alt="" /></div>
                    <div><img src="https://maxmobiles.ru/images/ab__webp/thumbnails/330/200/promotion/23/ММ51_jpg.webp" alt="" /></div>
                    <div><img src="https://maxmobiles.ru/images/ab__webp/thumbnails/330/200/promotion/23/prozapas_jpeg.webp" alt="" /></div>
                    <div><img src="https://maxmobiles.ru/images/ab__webp/thumbnails/330/200/promotion/23/ММ9_jpg.webp" alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default MainHeaderInfoSale;