import React from 'react'
import img0 from '../images/co-curricular/0.jpg'
import img1 from '../images/co-curricular/1.jpg'
import img2 from '../images/co-curricular/2.jpg'
import img4 from '../images/co-curricular/4.jpg'
import img3 from '../images/co-curricular/3.jpg'
import img5 from '../images/co-curricular/5.jpg'
import img6 from '../images/co-curricular/6.jpg'
import img7 from '../images/co-curricular/7.jpg'
import img8 from '../images/co-curricular/8.jpg'
import img9 from '../images/co-curricular/9.jpg'
import img10 from '../images/co-curricular/10.jpg'
import img11 from '../images/co-curricular/11.jpg'
import img12 from '../images/co-curricular/12.jpg'
import img13 from '../images/co-curricular/13.jpg'
import Menu from './Menu'

function CoCurricular() {
    const openFullscreen = (e) => {
        let id = e.currentTarget.id
        document.getElementById(id).requestFullscreen()
    }

    return (
        <>
            <Menu />
            <div className='row justify-content-center '>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image' src={img0} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
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
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image0' src={img11} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image10' src={img12} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
                <div className='col-12 col-lg-2 col-sm-12 image-div'>
                    <img id='image11' src={img13} alt="results" className='our-school-image' onClick={openFullscreen} />
                </div>
            </div>
        </>
    )
}

export default CoCurricular