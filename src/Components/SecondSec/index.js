import React from 'react'
import './Section.css'
import PaginationOutlined from '../Pagination/Pagination'
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
const section = () => {
  return (
    <>
      <div className='secContianer'>

        <div className='textContainer center-text'>
          <h1 >The best home delivery Meal Plan in Dubai, <br /> Abu Dhabi and the rest of the UAE </h1>


        </div >
        <div>
          <h2>Let's get started</h2>
        </div>
        <p style={{ textAlign: 'center' }}>There are 7 key things we need to know to recommend the best Plan for you. </p>
        <div className='pagination'>
          <PaginationOutlined />
        </div>
        <div className='center-text' >
          <h1 className='gender-text'>Please tell us <br /> if you are Male or Female</h1>
        </div>

        <div className='gender-container'>
          <div className='gender'>
              <IoMdMale className='male-icon' />
              <h5 className='gender-heading'>Male</h5>
          </div>
          <div className='gender female'>
            <IoMdFemale className='male-icon' />
            <h5 className='gender-heading'>Female</h5>
          </div>

        </div>
        <div className='quiz'>
          <div className='text-center'>
            <h1>Want to start PractiCal without <br /> doing this quiz?</h1>
          </div>
          <div className='btnContainer'>

            <button className='btn'>Quick Sign Up Instead</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default section