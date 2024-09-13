function Footer() {
    return (
        <div className="footer">
            <div>
                <h1 className='logo__footer'>Be</h1>
            </div>
            <div className="footer__item footer__item__menu">
                <h4>Menu</h4>
                <ul>
                    <li className='item'><a href="#header">Home</a></li>
                    <li className='item'><a href="#aboutme">About</a></li>
                    <li className='item'><a href="#portfolio">Portfolio</a></li>
                    <li className='item'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div  className="footer__item footer__item__contact">
                <h4>contact</h4>
                <div className="footer__contact__info">
                    <div>
                        <h3>Email:</h3>
                        <p>beridzezura12@gmail.com</p>
                    </div>
                    <div>
                        <h3>Adress:</h3>
                        <p>Georgia, Tbilisi</p>
                    </div>
                    <div>
                        <h3>Phone:</h3>
                        <p>+995 558 29 43 64</p>
                    </div>
                </div>
            </div>
            <div  className="footer__item footer__item__newslatters">
                <h4>Newslatters</h4>
                <p>Stay Update With Us</p>
                <form>
                    <input type="email" placeholder="Enter Email" name="" id="" />
                    <button className="footer__btn"> Send </button>
                </form>

            </div>
        </div>
    )
}

export default Footer
