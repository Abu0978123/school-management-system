import {useEffect} from 'react'
import i18next from "i18next"
import { FaGlobe } from "react-icons/fa"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
function Adminpanel() {
  const currentLanguageCode = Cookies.get('i18next') ||'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation();
  useEffect(()=>{
    document.body.dir = currentLanguage.dir || 'ltr'
  },[currentLanguage])
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark">
      <h3 className='welcome mx-5'>{t('Admin')}</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav"> 
          <li className="nav-item">
              <Link className="nav-link" to="/admin">{t('Dashboard')}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Student')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/addstudent">{t('AddStudent')}</Link>
                <Link className="dropdown-item" to="/showstudents">{t('ShowStudents')}</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Admissions')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/addtestresults">{t('AddTestResults')}</Link>
                <Link className="dropdown-item" to="/showapplicants">{t('ShowApplicants')}</Link>
                <Link className="dropdown-item" to="/sendmessages">{t('SendMessage')}</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Examination')}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/result">{t('Results')}</Link>
                <Link className="dropdown-item" to="/addresults">{t('AddResult')}</Link>
                <Link className="dropdown-item" to="/adddatesheet">{t('AddDatesheet')}</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addadmin">{t('AddAdmin')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{t('Logout')}</Link>
            </li>
            <div class="dropdown float-right">
              <button class="btn btn-language dropdown-toggle ml-10" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t('Language')}<FaGlobe className="mx-3"/>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
  )
}

export default Adminpanel