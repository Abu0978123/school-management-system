import React from 'react'
import img1 from '../images/images (1).jpg'
import img2 from '../images/images (2).jpg'
import img3 from '../images/images (3).jpg'
import img4 from '../images/images (4).jpg'
import img5 from '../images/images (5).jpg'
function Foot() {
    const openFullscreen =  ()=> {
        document.getElementById('image').requestFullscreen()
      }
    return (
        <div >
            <div className='d-flex justify-content-center'>                                             
                <div className='w-300px border border-primary m-3'>
                    <img id='image' src={img5} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen}/>
                </div>                                
                <div className='w-300px border border-primary m-3'>
                    <img src={img1} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen} />
                </div>                                
                <div className='w-300px border border-primary m-3'>
                    <img src={img2} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen}/>
                </div>                                
                <div className='w-300px border border-primary m-3'>
                    <img src={img3} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen}/>
                </div>                                
                <div className='w-300px border border-primary m-3'>
                    <img src={img4} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen}/>
                </div>                                
                <div className='w-300px border border-primary m-3'>
                    <img src={img5} alt="results" style={{ width: '300px', height: '350px' }} onClick = {openFullscreen}/>
                </div>                       
            </div>            

        </div>
    )
}

export default Foot