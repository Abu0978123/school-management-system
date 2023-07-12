import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import Adminpanel from '../pages/Adminpanel'
function Applicants() {
    const { t } = useTranslation();

    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/applicant")
        const data = await res.json()

        console.log(data)

        if (res.status === 422 || !data) {
            window.alert('No results  found ')
        } else {
            setShowDs(data)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Adminpanel />
            <div className="row row-content justify-content-center">
                <div className="col-12 col-lg-11 col-sm-12">
                    <div className="table-responsive ">
                        <table className="table mt-2 ">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">{t('S.NO')}</th>
                                    <th scope="col">{t('ApplicantCnic')}</th>
                                    <th scope="col">{t('Name')}</th>
                                    <th scope="col">{t('fathername')}</th>
                                    <th scope="col">{t('DateOfBirth')}</th>
                                    <th scope="col">{t('Nationality')}</th>
                                    <th scope="col">{t('CurrentAddress')}</th>
                                    <th scope="col">{t('ParmanentAddress')}</th>
                                    <th scope="col">{t('PhoneNo')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showds.map((applicant, id) => {
                                        return (
                                            <>
                                                <tr key={id}>
                                                    <th key={id + 1} scope="row">{id + 1}</th>
                                                    <td key={applicant.cnic}>{applicant.cnic}</td>
                                                    <td key={applicant.name}>{applicant.name}</td>
                                                    <td key={applicant.fathername}>{applicant.fathername}</td>
                                                    <td key={applicant.dob}>{moment(`${applicant.dob}`).format("DD-MM-YYYY")}</td>
                                                    <td key={applicant.nationality}>{applicant.nationality}</td>
                                                    <td key={applicant.caddress}>{applicant.caddress}</td>
                                                    <td key={applicant.paddress}>{applicant.paddress}</td>
                                                    <td key={applicant.phoneno}>{applicant.phoneno}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applicants