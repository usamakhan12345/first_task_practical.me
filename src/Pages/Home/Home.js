import React from 'react'
import Header from "../../Components/Header/Header"
import Section from '../../Components/SecondSec/index'
import ThirdSec from '../../Components/ThrSection/index'
import './Home.css'
const Home = () => {
  return (
   <>
   <div className='container-fluid'>
    <div className='text'>
        <h1>Helping You Eat <br/>  better , every day</h1>
        <button className='GetStartedbtn'>Get Started</button>
    </div>
    </div>
    <Section/>
    <ThirdSec/>
    </>
  )}

export default Home