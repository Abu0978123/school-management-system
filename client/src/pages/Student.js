import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import Adminpanel from './Adminpanel'
function Student() {
    const { t } = useTranslation();
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/student")
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
        <div className='m-2'>
            <Adminpanel />

            <table className="table mt-2">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">{t('S.NO')}</th>
                        <th scope="col">{t('StudentId')}</th>
                        <th scope="col">{t('Name')}</th>
                        <th scope="col">{t('fathername')}</th>
                        <th scope="col">{t('Class')}</th>
                        <th scope="col">{t('DateOfBirth')}</th>
                        <th scope="col">{t('city')}</th>
                        <th scope="col">{t('Province')}</th>
                        <th scope="col">{t('CurrentAddress')}</th>
                        <th scope="col">{t('ParmanentAddress')}</th>
                        <th scope="col">{t('PhoneNo')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showds.map((student, id) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{id + 1}</th>
                                        <td>{student.id}</td>
                                        <td>{student.studentname}</td>
                                        <td>{student.fathername}</td>
                                        <td>{student.year}</td>
                                        <td>{moment(`${student.dob}`).format("DD-MM-YYYY")}</td>
                                        <td>{student.city}</td>
                                        <td>{student.province}</td>
                                        <td>{student.caddress}</td>
                                        <td>{student.paddress}</td>
                                        <td>{student.phoneno}</td>
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

export default Student