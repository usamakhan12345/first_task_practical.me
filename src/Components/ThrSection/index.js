import React from 'react'
import "./sec.css"
import firstImage from '../../Assets/first.jpeg'
import secondImage from '../../Assets/second.png'
import thirdImage from '../../Assets/third.jpeg'
const ThirdSec = () => {
    return (
        <>
              <div className='mt-5'>

<h1 className='text-center fs-1 mt-4' >Why choose a PractiCal Meal Plan?</h1>
</div>
            <div className='sec-container'>
              
                {/* <div className='Mycard-container'> */}
                    <div className='MYcard' >
                        <img className='image' src={firstImage}/>
                        <hr />
                        <h2>Dining Out & Ordering In</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>

                    </div>
                    <div className='MYcard'>
                        <img className='image'  src={secondImage} />
                        <hr />
                        <h2>How It Works</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>

                    </div>
                    <div className='MYcard'>
                        <img className='image'  src={thirdImage} />
                        <hr />
                        <h2>Our Meal Plan Menu</h2>
                        <p className='fs-4'>Want to go out for a meal or order in ? No problem  ! Our trusted resturant & delivery parters have got you coverd Plus , You will never waste to meal a again with our unique 'Pasuse Pass' </p>
                    </div>
                   
                {/* </div> */}
                <div className='partners d-flex justify-content-center align-items-center mt-5'>
                <h1>Our Resturant & <br/> Delivery  Partners</h1>
                </div>
                <div className='types d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='bottom-text text-center text-light fw-bold fs-1'>Know the type of Meal Plan, <br/> Calories & Macros that you want <br/> already? </h1>
                    <p className='bottom-para text-center mt-4 text-light'>Our Meal Plans start from as little as 300 AED per week, <br/> so what are you waiting for!</p>
                    <button className='Btnn'>Quick Sign Up</button>
                </div> 
                    
            </div>
               
        </>
    )
}

export default ThirdSec