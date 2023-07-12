import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import Adminpanel from '../Adminpanel'

function Results() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/result")
        const data = await res.json()
        console.log(data)

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

    const deleteresult = async (id) => {
        axios.delete(`/deleteresult/${id}`)
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
        <>
            <Adminpanel />

            <table className="table mt-2">
                <thead className='table-light'>
                    <tr >
                        <th scope="row">{t("StudentId")}</th>
                        <th scope="row">{t("Computer")}</th>
                        <th scope="row">{t("Nazira")}</th>
                        <th scope="row">{t("Islamiat")}</th>
                        <th scope="row">{t("Urdu")}</th>
                        <th scope="row">{t("Math")}</th>
                        <th scope="row">{t("Pak Study")}</th>
                        <th scope="row">{t("Science")}</th>
                        <th scope="row">{t("English")}</th>
                        <th scope="row">{t("Total")}</th>
                        <th scope="row">{t("Action")}</th>
                    </tr>

                </thead>
                {
                    showds.map((res, id) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        {/*  */}
                                        <td>{res.StudentId}</td>
                                        <td>{res.computer}</td>
                                        <td>{res.nazira}</td>
                                        <td>{res.islamiat}</td>
                                        <td>{res.urdu}</td>
                                        <td>{res.math}</td>
                                        <td>{res.pakstudy}</td>
                                        <td>{res.science}</td>
                                        <td>{res.english}</td>
                                        <td>{res.english + res.science + res.english + res.pakstudy + res.math + res.urdu + res.islamiat + res.nazira}</td>
                                        <td>
                                            <Link to={`/updateresult/${res.id}`}><button type="button" className="btn btn-primary  mx-2 p-0"><BiEdit /></button>
                                            </Link>
                                            <button type="button" className="btn btn-danger mx-2 p-0" onClick={() => deleteresult(res.id)}><AiOutlineDelete /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}

export default Results