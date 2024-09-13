function contact() {
    return (
        <div className="contact">
            <h2 className="main__head">3.Contact</h2>
            <p className="contact__p">I believe that collaboration and creativity are the cornerstones of progress, and I am dedicated to bringing a fresh perspective.</p>
            <div className="contact__info">
                <div>
                    <h3>Email:</h3>
                    <p>beridzezura12Gmail.com</p>
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
            <div>
                <p className="or">Or Text Message</p>
            </div>
            <form>
                <input type="text" placeholder="Enter Name" />
                <input type="email"  name="" id=""placeholder="Enter Email" />
                <textarea placeholder="text" name="" id=""></textarea>
                <div className='content__btn contact__btn'>
                    <a href='' className="btn">Send</a>
                </div>
            </form>
        </div>
    )
}

export default contact
