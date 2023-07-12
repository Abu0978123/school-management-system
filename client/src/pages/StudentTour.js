import React from 'react'
import img1 from '../images/StudentTour/1.jpg'
import img2 from '../images/StudentTour/2.jpg'
import img4 from '../images/StudentTour/4.jpg'
import img3 from '../images/StudentTour/3.jpg'
import img5 from '../images/StudentTour/5.jpg'
import img6 from '../images/StudentTour/6.jpg'
import img7 from '../images/StudentTour/7.jpg'
import img8 from '../images/StudentTour/8.jpg'
import img9 from '../images/StudentTour/9.jpg'
import img10 from '../images/StudentTour/10.jpg'
import Menu from './Menu'

function StudentTour() {

    const openFullscreen = (e) => {
        let id = e.currentTarget.id
        document.getElementById(id).requestFullscreen()
    }

    return (
        <>
            <Menu />
            <div className='row justify-content-center '>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image0' src={img1} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image1' src={img2} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image2' src={img3} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image3' src={img4} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image4' src={img5} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image5' src={img6} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image6' src={img7} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image7' src={img8} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image8' src={img9} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image9' src={img10} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>                
            </div>

        </>
    )
}

export default StudentTour