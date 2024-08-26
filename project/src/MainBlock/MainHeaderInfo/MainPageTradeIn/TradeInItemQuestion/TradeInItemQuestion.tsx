import './TradeInItemQuestion.sass'

function TradeInItemQuestion() {
    return (
        <div className='page-tadeIn-question'>
            <div className='page-tadeIn-question-text-big'>
                Остались вопросы?<br />
                Позвоните нам!
            </div>

            <div className='page-tadeIn-question-text-opi'>
                Мы проконcультируем вас по программе Apple Trade-In и ответим на все ваши вопросы!<br/>
                Это абсолютно бесплатно!
            </div>
            
            <div className='page-tadeIn-question-btn'>
                <a href="#" className=''>
                    <button>Позвонить</button>
                </a>
            </div>
            
        </div>
    );
}

export default TradeInItemQuestion;