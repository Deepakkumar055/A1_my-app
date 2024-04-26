import React from 'react'

function OurWork() {
    return (
        <div>
            <div className='about'>
                <h2>OUR WORK</h2>
                <p>What we've done for people</p>
                
            </div>
            <div className='work_gallery'>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>
                    <div className='work_gallery_inner'>
                        <img src='images/mic.png' />
                    </div>

                </div>
            <div className='about_desgin'>
                <div className='skillDetail'>
                    <h2>Our Skills..</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='work_skill'>
                    <div>
                        <p>Photography</p>   
                    <progress id="file" value="32" max="100"> 32% </progress>
                    </div>
                    <div>
                    <p>Web Design</p> 
                    <progress id="file" value="62" max="100"> 62% </progress>
                    </div>
                    <div>
                    <p>Photoshop</p>
                    <progress id="file" value="82" max="100"> 92% </progress>
                    </div>
                    <div>
                    <p>Photoshop</p>
                    <progress id="file" value="96" max="100"> 98% </progress>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork
