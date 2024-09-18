function contact() {
    return (
        <div className="contact">
            <h2 className="main__head">3.Contact</h2>
            <p className="contact__p">I believe that collaboration and creativity are the cornerstones of progress, and I am dedicated to bringing a fresh perspective.</p>
            <div className="contact__flex">
                <div className="contact__info">
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
                {/* <form>
                    <div>
                        <p className="or">Or Text Message</p>
                    </div>
                    <input type="text" placeholder="Enter Name" />
                    <input type="email"  name="" id=""placeholder="Enter Email" />
                    <textarea placeholder="text" name="" id=""></textarea>
                    <div className='content__btn form__btn'>
                    <a href='#' className="btn contact__btn ">Send</a>
                </div>
                </form> */}
            </div>
        </div>
    )
}

export default contact
