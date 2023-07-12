import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import Menu from './Menu'
function Showdatesheet() {
    const { t } = useTranslation();
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/datesheet")
        const data = await res.json()

        if (res.status === 422 || !data) {
            window.alert('No results  found ')
            console.log("No results found")
            // navigate.push("/home")
        } else {
            setShowDs(data)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (

        <div>
            <Menu />
            <table className="table mt-2">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">{t('Date')}</th>
                        <th scope="col">{t('Class One')}</th>
                        <th scope="col">{t('Class Two')}</th>
                        <th scope="col">{t('Class Three')}</th>
                        <th scope="col">{t('Class Four')}</th>
                        <th scope="col">{t('Class Five')}</th>
                        <th scope="col">{t('Class Six')}</th>
                        <th scope="col">{t('Class Seven')}</th>
                        <th scope="col">{t('Class Eight')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showds.map((datesheet, id) => {
                            return (
                                <>
                                    <tr>
                                        <td >{moment(`${datesheet.pdate}`).format("DD-MM-YYYY")}</td>
                                        <td >{datesheet.class1}</td>
                                        <td >{datesheet.class2}</td>
                                        <td >{datesheet.class3}</td>
                                        <td >{datesheet.class4}</td>
                                        <td >{datesheet.class5}</td>
                                        <td >{datesheet.class6}</td>
                                        <td >{datesheet.class7}</td>
                                        <td >{datesheet.class8}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Showdatesheet