import React from 'react'
import "./sec.css"
const ThirdSec = () => {
    return (
        <>
            <div className='sec-container'>
                <div className='mt-5'>

                    <h1 className='text-center fs-1 mt-4' >Why choose a PractiCal Meal Plan?</h1>
                </div>
                <div className='Mycard-container'>
                    <div className='MYcard' >
                        <img className='image' src='https://practical.me/_next/image?url=https%3A%2F%2Fpractical-app-assets-staging.s3.me-south-1.amazonaws.com%2Fpublic%2FsecImages%2Fdining-out-ordering-in-image.jpg&w=1920&q=75' />
                        <hr />
                        <h2>Dining Out & Ordering In</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>

                    </div>
                    <div className='MYcard'>
                        <img className='image' src='https://practical.me/_next/image?url=https%3A%2F%2Fpractical-app-assets-staging.s3.me-south-1.amazonaws.com%2Fpublic%2FsecImages%2FHow-it-works.png&w=1920&q=75' />
                        <hr />
                        <h2>How It Works</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>

                    </div>
                    <div className='MYcard'>
                        <img className='image' src='https://practical.me/_next/image?url=https%3A%2F%2Fpractical-app-assets-staging.s3.me-south-1.amazonaws.com%2Fpublic%2FsecImages%2FOur-Awesome-Food.jpg&w=1920&q=75' />
                        <hr />
                        <h2>Our Meal Plan Menu</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>
                    </div>
                   
                </div>


            </div>
                <div className='partners d-flex justify-content-center align-items-center'>
                <h1>Our Resturant & <br/> Delivery  Partners</h1>
                </div>
                <div className='types d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-center text-light fw-bold fs-1'>Know the type of Meal Plan, <br/> Calories & Macros that you want <br/> already? </h1>
                    <p className='text-center mt-4 text-light'>Our Meal Plans start from as little as 300 AED per week, <br/> so what are you waiting for!</p>
                    <button className='Btnn'>Quick Sign Up</button>
                </div> 
        </>
    )
}

export default ThirdSec