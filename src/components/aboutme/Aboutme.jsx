import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const peesonalInfo = [
    {   
        id: 1,
        name: "Name",
        answer: "Zura Beridze"
    },
    {   
        id: 2,
        name: "Address",
        answer: "Georgia, Tbilisi"
    },
    {   
        id: 3,
        name: "Stady",
        answer: "Georgian Tecnical University"
    },
    {   
        id: 4,
        name: "Degree",
        answer: "Telecomunication Specialist"
    },
    {   
        id: 5,
        name: "Current Specialty",
        answer: "Front-End Developer"
    },
    {   
        id: 6,
        name: "Mail",
        answer: "zuraberidze12@gmail.com"
    },
    {   
        id: 7,
        name: "Phone",
        answer: "+995 558 29 43 64"
    },
    {   
        id: 8,
        name: "Freelancer",
        answer: "Avalable"
    },
    
]
const skills = [
    {   
        id: 1,
        name: "HTML",
        percentage: "95"
    },
    {   
        id: 2,
        name: "CSS",
        percentage: "90"
    },
    {   
        id: 3,
        name: "Javascript",
        percentage: "40"
    },
    {   
        id: 4,
        name: "React.JS",
        percentage: "30"
    },
    {   
        id: 5,
        name: "Python",
        percentage: "10"
    },
    {   
        id: 6,
        name: "SCSS",
        percentage: "70"
    },
   
]
const experience = [
    {   
        id: 1,
        name: "Global-Erty",
        position: "instalator",
        date: "2018-2020"
    },
    {   
        id: 2,
        name: "Architectural Service",
        position: "Technical Specialist",
        date: "2020-2022"
    },
    {   
        id: 3,
        name: "Ministry of Defence",
        position: "Informaco Tecnology Specialist (IT specialist)",
        date: "2022 - today"
    },
   
]


function Aboutme() {

    useGSAP(() => {
        gsap.from( ".knowledge__level", {
            delay: 0.5,
            x: '-100%',
            duration: 1,
            stagger: 0.1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".knowledge__level",
            }
        },
        gsap.fromTo(".about_anim", {
            delay: 1.7,
            y: 60,
            opacity: 0,
          },{
            scrollTrigger: {
                trigger: ".about_anim",
            },
            y: 0,
            stagger: .1,
            duration: 1,
            opacity: 1,
            ease: "power1.inOut"
          })
    )
    })

    return (
        <div  className="about">
            <h2 className="main__head about_anim">1. About</h2>
            <p className="about__p about_anim">
                {`I'm Zura, a  front-end developer with a strong foundation in HTML, CSS, and JavaScript. I enjoy creating responsive websites using modern frameworks like React.js, and I have experience in adding dynamic animations using GSAP. I'm currently working on building my portfolio site with Sass, focusing on delivering smooth, user-friendly experiences across different devices. Along with web development, I'm also exploring Python and enhancing my freelancing skills`}
            </p>

            <div className='content__btn about_anim'>
                <a href='../cv.pdf' download='cv.pdf' className="btn contact__btn">Download CV</a>
            </div>

            <div className="personal__info fade">
                <div className="detail__info about_anim">
                    <h2 className="about__heads">Personal Info:</h2> 
                    <div className="per__info" >
                        {
                            peesonalInfo.map(item => (
                                <div className="per__item" key={item.id}>
                                    <div> <b>{item.name}: </b> {item.answer}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="detail__info about_anim">
                    <h2 className="about__heads">Skills:</h2> 
                    <div className="per__info" >
                        {
                            skills.map(item => (
                                <div className="lines" key={item.id}>
                                    <div className="name__percentage">
                                        <div>{item.name}</div>  
                                        <div>{item.percentage}%</div>
                                    </div>
                                    <div className="percentage__line">
                                        <div className="knowledge__level"
                                            style={
                                                {
                                                    width: `${item.percentage}%`,
                                                    backgroundColor: `#E64833`,
                                                    height: `4px`,
                                                    position: `relative`,
                                                    zIndex: `-1`,
                                                    borderRadius: `50px`,
                                                }
                                            }
                                        ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="detail__info details__grid about_anim">
                    <h2 className="about__heads">Work Experionce:</h2> 
                        <div className="per__info" >
                        {
                                experience.map(item => (
                                    <div className="exp__item" key={item.id}>
                                        <h3><b>{item.name}</b></h3>
                                        <div className="position__date">
                                            <div className="exp__position">{item.position}</div>
                                            <div className="connect__line"></div>
                                            <div className="exp__date">{item.date}</div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                    {/* next part */}
                    <div id='portfolio'></div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
