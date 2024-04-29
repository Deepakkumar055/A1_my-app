import React from 'react'

function Contact() {
    return (
        <div className='Contact'>
            <div className='inner_container'>
            <div className='about'>
                <h2>CONTACT</h2>
                <p>Lets get in touch.Send us a message</p>
            </div>
            <div>
                <div className='contact_Icon'>
                    <img src="images/location.png" />
                    <p>Location</p>
                </div>
                <div className='contact_Icon'>
                    <img src="images/telephone.png"></img>
                    <p>Phone</p>
                </div>
                <div className='contact_Icon'>
                    <img src="images/mail.png"></img>
                    <p>Emails</p>
                </div>
            </div>
            <div className='contact_form'>
                <input placeholder='Name' type='text' />
                <input placeholder='Email' type='text' />
                <input placeholder='Subject' type='text' />
                <input placeholder='Message' type='text' />
                <button className='btn'> View Our Works</button>
                <button>clear  Message</button>
            </div>
            <div className='city_img'>
                <img src='images/city.png' />
            </div>
            </div>      
        </div>
    )
}

export default Contact
