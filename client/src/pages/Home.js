import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../images/carosel/1.jpg'
import img2 from '../images/carosel/2.jpg'
import img3 from '../images/carosel/3.jpg'
import img4 from '../images/carosel/4.jpg'
import img5 from '../images/carosel/5.jpg'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/jquery/dist/jquery.slim.min.js"
import "../../node_modules/popper.js/dist/umd/popper.min.js"
import Menu from './Menu'
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'
function Home() {
    
  const { t } = useTranslation();
    return (

        <>
            <Menu />
            <div>
                <br />
                <div>
                    <div className="row row-content">
                        <div className="col-12 col-lg-8 col-sm-12">
                            <div id="mycarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid"
                                            id='carousel'
                                            src={img3}
                                            alt="img3" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block img-fluid"
                                            src={img2}
                                            id='carousel'
                                            alt="1mg2" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block img-fluid"
                                            src={img1}
                                            id='carousel'
                                            alt="img1" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block img-fluid"
                                            src={img4}
                                            id='carousel'
                                            alt="img1" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block img-fluid"
                                            src={img5}
                                            id='carousel'
                                            alt="img1" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                </div>
                                <ol className="carousel-indicators">
                                    <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#mycarousel" data-slide-to="1"></li>
                                    <li data-target="#mycarousel" data-slide-to="2"></li>
                                    <li data-target="#mycarousel" data-slide-to="3"></li>
                                    <li data-target="#mycarousel" data-slide-to="4"></li>
                                </ol>
                                <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-sm-12 ' id='overflow'>

                            <div className='row '>
                                <h3 className='notification'>{t('NEWS AND EVENTS')}</h3>
                            </div>
                            <hr />
                            <div className='row slidebar overflow-auto'>
                                <div className='col-12 col-sm-11 m-4 align-self-center'> <Link className="nav-link" to='/exam-notification'><FaStar /> {t('Notification for Final Exam')}</Link></div>
                                <div className='col-12 col-sm-11 m-4 '> <Link className="nav-link" to='/annual-function'><FaStar /> {t('Notification for Annual Function')}</Link></div>
                                <div className='col-12 col-sm-11 m-4 align-self-center'> <Link className="nav-link" to='/exam-notification'><FaStar /> {t('Notification for Final Exam')}</Link></div>
                                <div className='col-12 col-sm-11 m-4 '> <Link className="nav-link" to='/annual-function'><FaStar /> {t('Notification for Annual Function')}</Link></div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>

    )
}

export default Home