import React, { useEffect } from "react"
import i18next from "i18next"
import { useTranslation } from 'react-i18next'
import { FaGlobe, FaHome } from "react-icons/fa"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/flag-icon-css/css/flag-icons.min.css"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

const languages = [
  {
    code: 'ur',
    name: 'اردو',
    country_code: 'pk',
    dir:'rtl'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }
]
function Menu() {
  const currentLanguageCode = Cookies.get('i18next') ||'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation();
  useEffect(()=>{
    document.body.dir = currentLanguage.dir || 'ltr'
  },[currentLanguage])

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">< FaHome className="mx-2" />{t('Home')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/director-message">{t('Director’s Message')}</Link>
            </li>            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('School Info')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/about-us">{t('aboutus')}</Link>
                <Link className="dropdown-item" to="/our-school">{t('Our School')}</Link>
                <Link className="dropdown-item" to="/vision-mission">{t('Vision & Mission')}</Link>
                <Link className="dropdown-item" to="#">{t('Dress Code')}</Link>
                <Link className="dropdown-item" to="/rules-regulations">{t('Rules and regulations')}</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Gallery')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/annual-day">{t('Annual Day')}</Link>
                <Link className="dropdown-item" to="/co-curricular">{t('co-curricular activity')}</Link>
                <Link className="dropdown-item" to="#">{t('Sport Day')}</Link>
                <Link className="dropdown-item" to="/student-tour">{t('Student Tour')}</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Examination')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/datesheet">{t('ShowDatesheet')}</Link>
                <Link className="dropdown-item" to="/result/student">{t('StudentResult')}</Link>
                <Link className="dropdown-item" to="/result/class">{t('ClassResult')}</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Admission')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/applicant/registration">{t('ApplyforAdmission')}</Link>
                <Link className="dropdown-item" to="/admission/testresult">{t('TestResults')}</Link>
              </div>
            </li>            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Results')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/result/student">{t('StudentResult')}</Link>
                <Link className="dropdown-item" to="/result/class">{t('ClassResult')}</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://cloud.bisep.edu.pk/">{t('Bisep Result')}</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/summer-vaccaton">{t('Summer Vacation Task')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">{t('Contact Us')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">{t('login')}</Link>
            </li>

            <div className="dropdown float-right">
              <button className="btn btn-language dropdown-toggle ml-10" type="link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Language')}<FaGlobe className="mx-3"/>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {languages.map(({ code, name, country_code }) => (
                  <button className="dropdown-item"
                   onClick={() => i18next.changeLanguage(code)}
                   disabled={code===currentLanguageCode}>
                    <span 
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                    style={{ opacity: code===currentLanguageCode ? 0.5:1}}>                      
                    </span>
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
