import me from '../hero/me2.jpg'
import mepc from '../hero/me2-comp.jpg'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



function Hero() {

    useGSAP(() => {
        gsap.to(".my__photo", {
            scrollTrigger: {
                trigger: ".my__photo",
                start: "top 100%",
                end: "bottom 70%",
                scrub: true,
                // markers: true
            },
            duration: .5,
            ease: "power1.inOut",
            width: "100%",
        })
        if (window.innerWidth <= 768) {
            gsap.fromTo(".bottom_to_top", {
                delay: 1.7,
                y: 150,
                opacity: 0,
              },{
                y: 0,
                stagger: .1,
                duration: 1,
                opacity: 1,
                ease: "power1.inOut",
              })
        }else{
            gsap.fromTo(".bottom_to_top", {
                delay: 1.7,
                x: -150,
                opacity:0,
              },{
                x: 0,
                stagger: .1,
                duration: 1,
                opacity:1,
                ease: "power1.inOut"
              })
        }
    }, [])
    return (
        <div className="hero">
            <div className="hero__content">
                <div className='hero__text'>
                    <div className='bottom_to_top color__orange'>Front-End Developer</div>
                    <h1 className='bottom_to_top'>Hello {`I'm`} <span className='color__orange'>ZURA</span>  BERIDZE</h1>
                    <p className='bottom_to_top'>{`My name is Zura, and I'm a front-end developer with experience in creating responsive and interactive user interfaces.`}</p>
                    <div className='content__btn bottom_to_top'>
                        <a href='#contact' className="btn">Contact Me</a>
                    </div>
                </div>
                <div  className='photo'>
                    <img className='my__photo' src={me} alt="my picture" />
                    <img className='my__photo__comp'  src={mepc} alt="my picture" />

                </div>

                {/* next part */}
                <div id="aboutme"></div>
            </div>
        </div>
    )
}

export default Hero
