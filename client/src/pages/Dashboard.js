import React from 'react'
import { useTranslation } from 'react-i18next'
import Adminpanel from './Adminpanel'

function Dashboard() {
  const { t } = useTranslation();
  return (
    <>
    <Adminpanel/>
        <div className='dashboard'>
        <div className="child">
        <h1>{t('WTAD')}</h1>
        </div>

    </div>
    </>
  )
}

export default Dashboard