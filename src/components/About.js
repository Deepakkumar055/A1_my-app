import React from 'react'

function About() {
    return (
        <div className='about'>
            <h2>ABOUT THE COMPANY</h2>
            <p>Key features of our company </p>
            <div className='about_card'>
                <div className='about_card_item'>
                    <img src='images/icons8-responsive-50.png' alt='responsive' />
                    <p>Responsive</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='about_card_item'>
                    <img src='images/icons8-passion-64.png' alt='responsive' />
                    <p>Passion</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='about_card_item'>
                    <img src='images/icons8-diamond-50.png' alt='responsive' />
                    <p>Design</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='about_card_item'>
                    <img src='images/icons8-setting-50.png' alt='responsive' />
                    <p>Support</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
            <div className='about_desgin'>
                <div>
                    <h2>We know design.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore.</p>
                </div>
                <div>
                    <img src='images/phone_buildings.jpg' alt='phone' />
                </div>
            </div>
        </div>
    )
}

export default About
