import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Team() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className='about'>
                <h2>THE TEAM</h2>
                <p>The ones who runs this company</p>
            </div>

            <Carousel
                showDots={true}
                infinite={true}
                autoPlay={true}
                swipeable={true}
                responsive={responsive}>
                <div className='team_inner'>
                    <img src='images/team1.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className='team_inner'>
                    <img src='images/team2.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className='team_inner'>
                    <img src='images/team3.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className='team_inner'>
                    <img src='images/team4.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className='team_inner'>
                    <img src='images/team1.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className='team_inner'>
                    <img src='images/team1.jpg' />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
            </Carousel>
            <div className='team-innerSection'>
                <div>
                    <h2>14+</h2>
                    <p>Partners</p>
                </div>
                <div>
                    <h2>55+</h2>
                    <p>Projects Done</p>
                </div>
                <div>
                    <h2>89+</h2>
                    <p>Happy Clients</p>
                </div>
                <div>
                    <h2>150+</h2>
                    <p>Meetings</p>
                </div>
            </div>
        </div>
    )
}

export default Team
