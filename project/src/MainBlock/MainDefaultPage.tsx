import './MainDefaultPage.sass'

type TypeProps = {
    navName: string;
    navHref: string;
    namePage: string;
    mainChild: JSX.Element
}

function MainDefaultPage({navName, navHref, namePage, mainChild} : TypeProps) {
    return (
        <div className="container">
            <nav className="page-nav-bar">
                <a href="/">Главная</a>
                <p>/</p>
                <a href={navHref}>{navName}</a>
            </nav>
            <h1 className="page-name">{namePage}</h1>

            {mainChild}
        </div>
    );
}

export default MainDefaultPage;