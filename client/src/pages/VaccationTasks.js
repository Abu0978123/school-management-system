import React from 'react'
import { useTranslation } from 'react-i18next'
import nursery from '../documents/nursary.pdf'
import preNursery from '../documents/pre-nursary.pdf'
import kg from '../documents/kg.pdf'
import one from '../documents/one.pdf'
import two from '../documents/two.pdf'
import three from '../documents/three.pdf'
import four from '../documents/four.pdf'
import five from '../documents/five.pdf'
import Menu from './Menu'

function VaccationTasks() {
  
  const { t } = useTranslation();

  return (
    <>
    <Menu/>
        <div className='container'>
            <div>
                <a href={nursery} className='nav-link'>{t('Nursery Class Summer Vaccation Tasks')}</a>
                <a href={preNursery} className='nav-link'>{t('Pre Nursery Class Summer Vaccation Tasks')}</a>
                <a href={kg} className='nav-link'>{t('KG Class Summer Vaccation Tasks')}</a>
                <a href={one} className='nav-link'> {t('Class One Summer Vaccation Tasks')}</a>
                <a href={two} className='nav-link'> {t('Class Two Summer Vaccation Tasks')}</a>
                <a href={three} className='nav-link'> {t('Class Three Summer Vaccation Tasks')}</a>
                <a href={four} className='nav-link'> {t('Class Four Summer Vaccation Tasks')}</a>
                <a href={five} className='nav-link'> {t('Class Five Summer Vaccation Tasks')}</a>
            </div>
        </div>
    </>
  )
}

export default VaccationTasks