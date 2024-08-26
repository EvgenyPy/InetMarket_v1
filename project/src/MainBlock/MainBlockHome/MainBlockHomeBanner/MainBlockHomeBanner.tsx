import "./MainBlockHomeBanner.sass";


function MainBlockHomeBanner({twoElement, img1, img2}: {twoElement: boolean; img1: string; img2: string}) {
    const style1 = {
        backgroundImage: `url(${img1})`,
        backgroundSize: `${twoElement? '100%' : '200%'}`,
        backgroundPosition: 'center'
    }
    const style2 = {
        backgroundImage: `url(${img2})`,
        backgroundSize: `${twoElement? '100%' : '200%'}`,
        backgroundPosition: 'center'
    }
    return (
        <div className="main-block-banner">
            <div className="main-block-banner-flexbox">
                <div className="main-block-banner-item"><div style={style1} className="main-block-banner-item-img1"></div></div>
                <div className="main-block-banner-item"><div style={style2} className="main-block-banner-item-img2"></div></div>
                {!twoElement && <div className="main-block-banner-item"><div className="main-block-banner-item-img3"></div></div>}
                
            </div>
        </div>
    );
}

export default MainBlockHomeBanner;