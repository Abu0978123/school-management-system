import React from 'react'
import { useTranslation } from 'react-i18next'
import Menu from './Menu'

function AnnualFunction() {
    
  const { t } = useTranslation();
    return (
        <>
            <Menu />
            <div className='container'>
            <h1>{t('Notification for Annual Function')}</h1><br/><br/>
                <p className='about-wmsc'>
                {t('18 December 2017')} <br/>
                {t('Green Lyceum Global School, Peshawar')} <br/>
                {t('Notice')}<br/>
                {t('Annual Day')}<br/><br/>


                {t('This is to inform the students that the ANNUAL FUNCTION is going to be held on March 5, 2018 from 11:30 a.m. to 2:30 p.m. at the school auditorium. The entry is strictly by the pass that will be issued to each student by his/her respective class teacher on January 1, 2018 during the Class-teacher period.')}<br/><br/>

                {t('Vice-Principal')}<br/>
                </p>
            </div>
        </>
    )
}

export default AnnualFunction