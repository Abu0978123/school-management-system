import React from "react";
import img0 from "../images/Ourschool/0.jpg";
import img1 from "../images/Ourschool/1.jpg";
import img2 from "../images/Ourschool/2.jpg";
import img4 from "../images/Ourschool/4.jpg";
import img3 from "../images/Ourschool/3.jpg";
import img5 from "../images/Ourschool/5.jpg";
import img6 from "../images/Ourschool/6.jpg";
import img7 from "../images/Ourschool/7.jpg";
import img8 from "../images/Ourschool/8.jpg";
import img9 from "../images/Ourschool/9.jpg";
import img10 from "../images/Ourschool/10.jpg";
import img11 from "../images/Ourschool/11.jpg";
import img12 from "../images/Ourschool/12.jpg";
import img13 from "../images/Ourschool/13.jpg";
import img14 from "../images/Ourschool/14.jpg";
import Menu from "./Menu";

function OurSchool() {
  const openFullscreen = (e) => {
    let id = e.currentTarget.id;
    document.getElementById(id).requestFullscreen();
  };

  return (
    <>
      <Menu />
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image"
            src={img0}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image12"
            src={img1}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image1"
            src={img2}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image2"
            src={img3}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image3"
            src={img4}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image4"
            src={img5}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image5"
            src={img6}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image6"
            src={img7}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image7"
            src={img8}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image8"
            src={img9}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image9"
            src={img10}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image0"
            src={img11}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image10"
            src={img12}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image11"
            src={img13}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
        <div className="col-12 col-lg-2 col-sm-12 image-div">
          <img
            id="image14"
            src={img14}
            alt="results"
            className="our-school-image"
            onClick={openFullscreen}
          />
        </div>
      </div>
    </>
  );
}

export default OurSchool;
