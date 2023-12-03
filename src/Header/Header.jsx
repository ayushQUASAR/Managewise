import React from 'react'
import logo from '../Images/logo.png'
import './header.css'
import sv from '../Images/SVG.png'
const Header = () => {
    return (
        <div className='Header'>
            <div className="head">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-optn">
                    <div className="nav-wrapper">
                        <div className="nav">
                            Features
                        </div>
                        <div className="dot"> <img src={sv} alt="" /></div>
                        <div className="nav">FAQ</div>
                        <div className="dot">
                            <img src={sv} alt="" />
                        </div>
                        <div className="nav">Pricing</div>

                        <div className="dot"> <img src={sv} alt="" /></div>
                        <div className="nav">Testimonials</div>


                    </div>
                    <div className="buy-btn">
                    <div >Buy Template</div></div>
                </div>
            </div>

        </div>
    )
}

export default Header