import React from 'react'
import './test.css'
import { motion } from 'framer-motion'
import item from '../Images/item.png'
import item2 from '../Images/item2.png'
const Testimonial = () => {
    return (
        <motion.div className='testimony'>

            <div className="track">

            <img src={item} alt="" />
            <img src={item2} alt="" />
            <img src={item} alt="" />
            <img src={item2} alt="" />
            <img src={item} alt="" />
            <img src={item2} alt="" />
            <img src={item2} alt="" />
            <img src={item} alt="" />
            <img src={item2} alt="" />
            <img src={item} alt="" />
            <img src={item} alt="" />
            <img src={item2} alt="" />
            <img src={item} alt="" />
            </div>
           
        </motion.div>
    )
}

export default Testimonial