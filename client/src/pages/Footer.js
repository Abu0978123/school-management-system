import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer bg-dark-50">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-3 col-sm-5">
          <h3 className="Links mt-4">{t("Links")}</h3>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mx-2" to="/vision-mission">
                {t("Vision & Mission")}
              </Link>
            </li>
            <li>
              <Link className="nav-link mx-2" to="/our-school">
                {t("Our School")}
              </Link>
            </li>
            <li>
              <Link className="nav-link mx-2" to="/result/class">
                {t("ClassResult")}
              </Link>
            </li>
            <li>
              <Link className="nav-link mx-2" to="/about-us">
                {t("aboutus")}
              </Link>
            </li>
            <li>
              <Link className="nav-link mx-2" to="/result/student">
                {t("StudentResult")}
              </Link>
            </li>
            <li>
              <Link className="nav-link mx-2" to="/rules-regulations">
                {t("Rules and regulations")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 col-sm-5 align-self-center">
          <h3 className="Links mt-4">{t("OurAddress")}</h3>
          <br />
          <ul className="list-unstyled">
            <li className="mt-2">Warsak road mathra peshawar</li>
            <br />
            <br />
            <br />
            <li className="mt-2">
              <FaPhoneAlt className="mx-2" />
              0342 9007900, +92 333 0964809
              <br />
            </li>
            <br />
            <li className="mt-2">
              <FaEnvelope className="mx-2" />
              <Link to="mailto:confusion@food.net">
                faizanfasal20@gmail.com
              </Link>
            </li>
            <br />
          </ul>
        </div>
        <div className="col-12 col-lg-3 col-sm-5">
          <h3 className="Links mt-4"> {t("Gallery")}</h3>
          <br />
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mx-1" to="/annual-day">
                {t("Annual Day")}
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link mx-1" to="/co-curricular">
                {t("co-curricular activity")}
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link mx-1" to="#">
                {t("Sport Day")}
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link mx-1" to="/student-tour">
                {t("Student Tour")}
              </Link>
            </li>
            <br />
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 align-self-center">
          <a href="https://www.facebook.com/warsakOffical/?_rdc=1&_rdr">
            <i>
              <FaFacebook size={50} className=" m-2" />
            </i>
          </a>
          <a href="https://www.instagram.com/wmspsh/">
            <i>
              <FaInstagram size={50} className=" m-2" />
            </i>
          </a>
          <a href="https://twitter.com/wmsc1994/">
            <i>
              <FaTwitter size={50} className=" m-2" />
            </i>
          </a>
          <a href="mailto:wmspsh@gmail.com">
            <i>
              <FaEnvelope size={50} className=" m-2" />
            </i>
          </a>
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-auto">
          <p>Copyright © 2022 Muhammad Hassan ICP</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
