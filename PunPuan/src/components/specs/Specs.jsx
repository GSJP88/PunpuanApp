import React from 'react'
import '../../Styles/specs.css'

const Specs = () => {
  return (
    <div className="specs">
        <div className="specs-wrapper container">
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-bed content data'></i>
                    <p className="room content">Bed Room: </p>
                    <p className="number content data">3</p>
                </div>
            </div>
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-bath content data'></i>
                    <p className="room content">Bath Room: </p>
                    <p className="number content data">3</p>
                </div>
            </div>
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-car content data'></i>
                    <p className="room content ">Parking: </p>
                    <p className="number content data">1</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specs
