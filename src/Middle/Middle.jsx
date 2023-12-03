import React, { useEffect, useRef } from 'react'
import './middle.css'
import mafter from '../Images/after.png'
import emp from '../Images/emp.png'
import cont from '../Images/cont.png'
import content from '../Images/content.png'
import mid from '../Images/mid.png'
import left from '../Images/left.png'
import right from '../Images/right.png'
import left_f from '../Images/left-frame.png'
import right_f from '../Images/right-f.png'
import middle_f from '../Images/middle-f.png'
import optn_content from '../Images/option-content.png'
import left_optn from '../Images/left-optn.png'
import right_optn from '../Images/right-optn.png'
import apps from '../Images/apps.png'
import starsh1 from '../Images/starsh1.png'
import starshead from '../Images/starshead.png'
import starsp from '../Images/starsp.png'
import starsinp from '../Images/starsinp.png'
import answ from '../Images/answer.png'
import sales from '../Images/sales.png'
import happyleft from '../Images/happy-left.png'
import happyright from '../Images/happy.png'
import left_sale from '../Images/leftsales.png'
import test from '../Images/test.png'
import right_sale from '../Images/right-sales.png'
import mid_optn from '../Images/mid-optn.png'
import mid_sale from '../Images/mid-sales.png'
import { frame, motion, useScroll, useAnimation, useTransform } from 'framer-motion'


import stra from '../Images/stra.png'
import Bottom from './Bottom'
import Testimonial from '../Test/Testimonial'
const Middle = () => {
    const ref = useRef(null)
    // const huref = useRef(null)





    const midvariant = {
        hidden: {
            opacity: 0,
            y: 60,

        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {

                staggerChildren: 0.4,
                delay: 0.1, ease: 'easeIn', type: 'spring', duration: 0.7, stiffness: 50
            }
        }
    }
    const salesvariant = {
        hidden: {
            opacity: 0,
           

        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {

                staggerChildren: 0.4,
                ease: 'easeInOut', duration: 0.8
            }
        }
    }
    const { scrollY } = useScroll({
        target: ref,
        offset: ["0.2 1", " 1.2 1"]
    })


    // useEffect(()=>{
    //     console.log(ref,ref2)

    //     // console.log(scrollY,scrollY2) 

    // },[ref,scrollY,ref2])

    const framevariant = {

        visible: {
            opacity: 1,
            x: 0,

            transition: {
                duration: 0.3,
                staggerChildren: 0.4,
            },

        }
    }

    const scaleprogress = useTransform(scrollY, [0, 1], [1, 1.1])
    const rotateprogress = useTransform(scrollY, [0, 1], [60, 0])


    // const scal2=useTransform(scrollY2, [0, 1], [0, 300]) 

    return (
        <div className='middle' >
   <div className='top-top
   '>
            <motion.div className="top-h"
                variants={midvariant}
                whileInView='visible'
                viewport={{ once: false, amount: 0.3 }}
                initial='hidden'

            >
                <motion.img variants={midvariant} src={mafter} alt="" className="after" />

                <motion.div variants={midvariant} className="bot-h">
                    <motion.img



                        src={emp} alt="" className="bot" />
                    <motion.img


                        src={stra} alt="" className="bot" />

                    <img src={cont} alt="" className='bot' />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}

                translate={{ delay: 0.7, duration: 0.6 }}
                className="btnss">
                <motion.div className="start"
                    
                ><p>Get Started</p></motion.div>
                <div className="start"><p>Watch Demo</p></div>
            </motion.div>
            </div>

            <motion.div ref={ref} style={{
                scale: scaleprogress,
                rotateX: rotateprogress,
                transition: 'all 0.6s'
            }} className="m-content">
                <img src={content} alt="" />
            </motion.div>
            <div className="n-content">
                <img src={mid} alt="" />
            </div>
            <motion.div whileInView='visible' initial='hidden' variants={framevariant} viewport={{ once: false, amount: 0.4 }} className="low-content">
                <motion.img initial={{ opacity: 0, x: -100 }} variants={framevariant} src={left} alt="" className="left-c" />
                <motion.img initial={{ opacity: 0, x: 100 }} variants={framevariant} src={right} alt="" className="left-c" />
            </motion.div>
            <motion.div viewport={{ once: false, amount: 0.4 }} className='schedule'>
                <motion.img initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }} src={left_f} alt="" className="left-f" />
                <motion.img initial={{ opacity: 0, Y: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }} src={middle_f} alt="" className="left-f" />
                <motion.img initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }} src={right_f} alt="" className="left-f" />
            </motion.div>

            <motion.div initial={{ scale: 0.6 }} whileInView={{ scale: 1 }}
                transition={{ duration: .7 }} className="below-option">
                <div className="optn-header">
                    <div className='optn-content'>
                        <img src={optn_content} alt="" className="" />

                    </div>
                    <motion.div className="optn-option">
                        <motion.div className="left-optn">
                            <img src={left_optn} alt="" className="" />
                        </motion.div>
                        <motion.div className="mid-optn">
                            <img src={mid_optn} alt="" className="" />
                        </motion.div>
                        <motion.div className="right-optn">
                            <img src={right_optn} alt="" className="" />
                        </motion.div>
                    </motion.div>
                </div>

            </motion.div>
            <Bottom />
            {/* <motion.div className="apps"> */}
            {/* <motion.div ref={ref2}className='stars'>
                    <motion.div  
                    //   style={{top:scal2}} 
               
                
           
                       className='apps-img'> <img src={apps} alt="" 
                      /></motion.div>
                    <motion.div className="stars-h1"> <img src={starsh1}alt="" /></motion.div>
                    <motion.div className="stars-h1"><img src={starshead}alt="" /></motion.div>
                    <motion.div className="stars-h1"><img src={starsp}alt="" /></motion.div>
                 
                </motion.div>
                <div className="stars-h1"><img src={starsinp}alt="" /></div>
            </motion.div> */}
            <div className='ans'>
                <div className="ans-left">
                    <img src={answ} alt="" />
                </div>
            </div>
            <motion.div className="sales-cont">
                <img src={sales} alt="" className="sales" />
                <motion.div variants={salesvariant} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.4 }} className="sales-optn">
                    <motion.img initial={{ y: 50 }} variants={salesvariant} src={left_sale} alt="" className="left-sales" />
                    <motion.img  initial={{ y: 50 }}variants={salesvariant} src={mid_sale} alt="" className="left-sales" />
                    <motion.img initial={{ y: 50 }} variants={salesvariant} src={right_sale} alt="" className="left-sales" />
                </motion.div>
            </motion.div>
            <div className="test-cont">
                <img src={test} alt="" />
                <Testimonial />

            </div>
            <motion.div className='happy'>
                <div className='happy-left-wrapper'>  <img src={happyleft} alt="" /></div>
                <div className='happy-right-wrapper'>  <img src={happyright} alt="" /></div>

            </motion.div>
        </div >
    )
}

export default Middle