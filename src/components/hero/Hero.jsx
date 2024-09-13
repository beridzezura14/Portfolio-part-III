import me from '../hero/me2.jpg'

function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className='hero__text'>
                    <div>Front-End Developer</div>
                    <h1>Hello {`I'm`} <span className='span__name'>ZURA</span>  BERIDZE</h1>
                    <p>{`My name is Zura, and I'm a front-end developer with experience in creating responsive and interactive user interfaces.`}</p>
                    <div className='content__btn'>
                        <a href='' className="btn">Contact Me</a>
                    </div>
                </div>
                <div  className='photo'>
                    <img className='my__photo' src={me} alt="my picture" />
                </div>

                {/* next part */}
                <div id="aboutme"></div>
            </div>
        </div>
    )
}

export default Hero
