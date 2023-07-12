import React from 'react'
import { useTranslation } from 'react-i18next'
import Menu from './Menu'

function ExamNotification() {
    
  const { t } = useTranslation();

    return (
        <>
        <Menu/>
            <div className='container'>
            <h1>{t('Notification for Final Exam')}</h1><br/><br/>
                <p className='about-wmsc'>
                   {t(' Dear Parents/Guardians,')}<br /><br />

                    {t('It is hereby notified that The First Terminal Examination-2075 for Grade Nursery to VIII will commence from 2022/03/21, Thursday to 2022/03/29, Friday.')}

                    {t('We humbly request our respected parents and guardians to prepare their child/children for the exam  and encourage them to revise the course content thoroughly.')} 

                    {t('For detailed  information,the class teachers have  attached the syllabus and exam routine for Grade Nursery to U.K.G students. The students of Grade I to VIII are well informed about the exam routine and the syllabus by the class and subject teachers.')}<br /><br />

                    {t('Thank you for your co-operation.')}<br />

                    {t('School Management')}<br />

                    2022/03/18<br />


                </p>
            </div>
        </>
    )
}

export default ExamNotification