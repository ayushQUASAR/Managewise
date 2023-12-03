import React from 'react'
import './middle.css'
import { useEffect, useRef } from 'react'
import './middle.css'

import apps from '../Images/apps.png'
import starsh1 from '../Images/starsh1.png'
import starshead from '../Images/starshead.png'
import starsp from '../Images/starsp.png'
import starsinp from '../Images/starsinp.png'


import { frame, motion, useScroll, useAnimation, useTransform, easeInOut, delay } from 'framer-motion'
const Bottom = () => {
    const ref = useRef(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ["1 1", " 1.5 1"]
    })
    const starvar = {
        hidden: { opacity: 0.4, y: 30 },
        visible: {

            opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.4,
                ease: 'easeInOut', 
                duration: 1,
                
            
            }
        },

    }

    console.log(ref, scrollY)
    const scal2 = useTransform(scrollY, [0, 1], [0, -300])
    return (
        <motion.div>
            <motion.div className="apps">
                <motion.div className='stars'>
                    <motion.div ref={ref}
                        // style={{ top: scal2, transition: 'all 0.6s' }}



                        className='apps-img'> <img src={apps} alt=""
                        />
                    </motion.div>
                    <motion.div variants={starvar} initial='hidden' whileInView='visible' viewport={{ once: false, amount: 0.2 }}>
                        <motion.div className="stars-h1"> <img src={starsh1} alt="" /></motion.div>
                        <motion.div className="stars-h1"><img src={starshead} alt="" /></motion.div>
                        <motion.div className="stars-h1"><img src={starsp} alt="" /></motion.div>
                    </motion.div>


                </motion.div>
                <motion.div  initial= {{ opacity: 0.4, y: 80 }}
        whileInView={ {opacity: 1, y: 0,translateY:56}}    transition= {{
            delay:0.2,
            ease: 'easeInOut', 
            duration: 0.8,
            }} viewport={{once:true,amount:0.2}}className="stars-h1"><img src={starsinp} alt="" /></motion.div>
            </motion.div>


        </motion.div>
    )
}

export default Bottom