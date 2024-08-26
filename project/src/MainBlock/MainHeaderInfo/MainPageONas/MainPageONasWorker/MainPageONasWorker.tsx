import './MainPageONasWorker.sass'


function MainPageONasWorker({img, name}) {
    return (
        <div className='page-o-nas-our-worker'>
            <div className='page-o-nas-our-worker-icon'>
                <img width={222} src={img} alt="" />
            </div>
            
            <p>{name}</p>
        </div>
    );
}

export default MainPageONasWorker;