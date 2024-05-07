import React from "react";

function Poster() {
    return (
        <div className="poster">
            <img src="images/bg1.jpg" alt="poster" />
            <div className='inner_container'>
                <div className="test">
                    <h1>Start something that matters</h1>
                    <p>Stop wasting valuable time with projects that just isn't you.</p>
                    <button>Learn more and start today</button>
                </div>
            </div>
        </div>
    )
}

export default Poster;