import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import Adminpanel from '../Adminpanel'
function Student() {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/student")
        const data = await res.json()

        if (res.status === 422 || !data) {
            window.alert('No results  found ')
            console.log("No results found")
        } else {
            setShowDs(data)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    ///////////DELETE///////////////

    const deletestd = async (id) => {
        axios.delete(`/deletestudent/${id}`)
            .then(res => {
                if (res.status === 201) {
                    window.alert('Student Deleted successfully')
                }
                navigate("/addstudent")
            })
            .catch(error => {
                window.alert('Failed to Delete student')
            })
    }


    return (
        <div className='m-2'>
            <Adminpanel />
            <div className="row row-content justify-content-center">
                <div className="col-12 col-lg-11 col-md-11 col-sm-12">
                    <div className="table-responsive ">
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
                                    <th scope="col">Action</th>
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
                                                    <td>
                                                        <Link to={`/updatestudent/${student.id}`}><button type="button" className="btn btn-primary  mx-2 p-0"><BiEdit /></button>
                                                        </Link>
                                                        <button type="button" className="btn btn-danger mx-2 p-0" onClick={() => deletestd(student.id)}><AiOutlineDelete /></button>
                                                    </td>
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

export default Student