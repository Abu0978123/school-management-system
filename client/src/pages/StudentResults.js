import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Menu from './Menu'
import { t } from 'i18next'
function StudentResults() {
    ///FormSection//
    const [record, setRecord] = useState([])
    const formik = useFormik({
        initialValues: {
            year: ""
        },
        onSubmit: (value) => {
            axios.post('/studentresult', value)
                .then(res => {
                    if (res.status === 422 || !res) {
                        window.alert('No record  found ')
                    } else {
                        if (res.data !== 'undefined' && res.data.length === 0) {
                            document.getElementById("errorMessage").innerHTML = "Result does not exist"
                        } else {
                            document.getElementById("errorMessage").innerHTML = ""
                        }
                        setRecord(res.data)
                    }

                })
                .catch(error => {
                    window.alert('No Result found')
                })
        },
        validationSchema: Yup.object({
            id: Yup.string().required("this field is required"),
        })
    })

    var response = record

    return (
        <div>
            <Menu />
            <div className='container'>
                {/* FormSection */}

                <div className='container'>
                    <div className="card-body p-md-5">

                        <form method="POST" className="px-md-2" id="result-from" onSubmit={formik.handleSubmit}>
                            <p className="text-center h1 fw-bold mb-3">
                                {t('SROS')}
                            </p>
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 col-lg-5 col-sm-12">

                                    <div className="form-outline mb-4">
                                        <input
                                            placeholder='Enter class ie. 1,2,3...'
                                            onChange={formik.handleChange}
                                            value={formik.values.id}
                                            name="id"
                                            type="number"
                                            className="form-control form-control-lg"
                                            id="id"
                                        />
                                        <label htmlFor='id' className="form-label">{t('StudentId')}</label>
                                    </div>
                                </div>
                            </div>
                            <p id='errorMessage'></p>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg mb-1"
                                >
                                    {t('SearchResult')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Data Retreval section */}

                {
                    response.map((res, id) => {
                        var result = res.Results
                        return (
                            <>
                                <table className="table mt-2">
                                    <thead className='table-light'>
                                        <tr >
                                            <th scope="col">Student ID: {"  " + res.id}</th>
                                            <th scope="col">Name: {"  " + res.studentname}</th>
                                        </tr>
                                        <tr>
                                            <th scope="col">Father Name: {"  " + res.fathername}</th>
                                            <th scope="col">Date of Birth: {"  " + res.dob}</th>
                                        </tr>
                                        <tr>
                                            <th>Subjects</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>                                       

                                        {
                                            result.map(results => {
                                                return (
                                                    <>
                                                    <tr>
                                                        <td>Computer</td>
                                                        <td>{results.computer}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Computer</td>
                                                        <td>{results.nazira}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Islamiat</td>
                                                        <td>{results.islamiat}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Urdu</td>
                                                        <td>{results.urdu}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Math</td>
                                                        <td>{results.math}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pak Study</td>
                                                        <td>{results.pakstudy}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Science</td>
                                                        <td>{results.science}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>English</td>
                                                        <td>{results.english}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Marks : 650</td>
                                                        <td> Obtained Marks : {results.english + results.science + results.english + results.pakstudy + results.math + results.urdu + results.islamiat + results.nazira} </td>
                                                    </tr>
                                                        
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StudentResults