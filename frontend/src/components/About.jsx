import React from 'react'
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const About = () => {
    // const location =useLocation();
    return (
        <>
            <div className="about_section_wrap">
                <div className="about_wrap" >
                    <div className="content">
                        <h4>Know About DeVerse </h4>
                        <p>As the name suggest “Knowledge Sharing & Earning Platform”, this made with two term 1. Knowledge Sharing. i.e. if any developer face any kind of problem when they code so they simply paste it over the platform and you will find your solution for that error over the website. 

                        <br></br><br></br>
                        And during find your solution if you see any syntax error problems so you can give the step-by-step answer too. In this way you are sharing your knowledge with developers and coders.
<br></br><br></br>
                            And if we talk about second term “Earning Platform” i.e. it mean you can earn money and lots of prize if you answers is most helpful. And liked by more and more developers.
                        </p>
                        <button><a href="#about-wrap">Learn more <i class="fas fa-angle-right"></i></a></button>
                    </div>
                    <div className='team_image'>
                        <img src="Images/about.svg" alt="uy" />
                    </div>
                </div>

            </div>
        </>
    )
}
{/* <a href='https://pngtree.com/so/Male'>Male png from pngtree.com/</a> */ }
export default About