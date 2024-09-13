import web_1 from './img/web_1.png'
import mob_1 from './img/mob_1.png'

import web_2 from './img/web_2.png'
import mob_2 from './img/mob_2.png'

import web_3 from './img/web_3.png'
import mob_3 from './img/mob_3.png'

import web_4 from './img/web_4.png'
import mob_4 from './img/mob_4.png'

import web_5 from './img/web_5.png'
import mob_5 from './img/mob_5.png'

import web_6 from './img/web_6.png'
import mob_6 from './img/mob_6.png'


const portfolioList = [
    {
        id: 1,
        img: web_1,
        img_mobile: mob_1,
        name: 'Your Hotel',
        link: 'https://incomparable-cajeta-d5db83.netlify.app/'
    },
    {
        id: 2,
        img: web_2,
        img_mobile: mob_2,
        name: 'Thalby (copy)',
        link: 'https://beridzezura14.github.io/thalby_copy/'
    },
    {
        id: 3,
        img: web_3,
        img_mobile: mob_3,
        name: 'film.ge',
        link: 'https://beridzezura14.github.io/Film.ge/index.html'
    },
    {
        id: 4,
        img: web_4,
        img_mobile: mob_4,
        name: 'Marco Restorant',
        link: 'https://beridzezura14.github.io/Marco-Restaurant/index.html'
    },
    {
        id: 5,
        img: web_5,
        img_mobile: mob_5,
        name: 'Your Lawyer',
        link: 'https://beridzezura14.github.io/Your-Lawyer/'
    },
    {
        id: 6,
        img: web_6,
        img_mobile: mob_6,
        name: 'NFT Project',
        link: 'https://beridzezura14.github.io/NFT-project/'
    },
]


function Portfolio() {
    return (
        <div className="portfolio">
            <div className='portfolio__content'>
                <h2 className="main__head">2.Portfolio</h2>


                <div className='portfolio__items'>

                    {
                        portfolioList.map((item) => (
                            <div className='item' key={item.id}>
                                <img src={item.img_mobile} alt={item.img_mobile} className="mobile__absolute" />
                                <img className='portf__img' src={item.img} alt={item.img} /> 
                                <h3>{item.name}</h3>   

                                <div className='portfolio__link'>
                                    <a href={item.link} target="_blank">Link</a>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                {/* next part */}
                <div id='contact'></div>
            </div>
        </div>
    )
}

export default Portfolio
