import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Menu from './Menu'
function SemesterResults() {
    const { t } = useTranslation();
    ///FormSection//

    const [record, setRecord] = useState([])
    const formik = useFormik({
        initialValues: {
            year: ""
        },
        onSubmit: (value) => {
            axios.post('/semesterresult', value)
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
                    document.getElementById("errorMessage").innerHTML = "No result found"
                })
        },
        validationSchema: Yup.object({
            year: Yup.number().required("this field is required")
        })
    })
    console.log(record)
    var response = record
    var result

    return (
        <div>
            <Menu />
            <div className='container'>
                {/* FormSection */}

                <form method="POST" className="px-md-2" id="result-from" onSubmit={formik.handleSubmit}>
                    <p className="text-center h1 fw-bold mb-3">
                        {t('SROC')}
                    </p>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-5 col-sm-12">
                            <div className="form-outline mb-4">
                                <input
                                    placeholder='Enter class ie. 1,2,3...'
                                    onChange={formik.handleChange}
                                    value={formik.values.year}
                                    name="year"
                                    type="number"
                                    className="form-control form-control-lg"
                                    id="year"
                                />
                                <label htmlFor='year' className="form-label">{t('Class')}</label>
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



            {/* Data Retreval section */}
            

            <table className="table mt-2">
                <thead className='table-light'>
                    <tr >
                        <th scope="row">Student ID</th>
                        <th scope="row">Name</th>
                        <th scope="row">Father Name</th>
                        <th scope="row">Computer</th>
                        <th scope="row">Nazira</th>
                        <th scope="row">Islamiat</th>
                        <th scope="row">Urdu</th>
                        <th scope="row">Math</th>
                        <th scope="row">Pak-Study</th>
                        <th scope="row">Science</th>
                        <th scope="row">English</th>
                        <th scope="row">Total</th>
                    </tr>

                </thead>
                {


                    response.map((res, id) => {
                        result = res.Results
                        return (
                            <>
                                <tbody>

                                    {
                                        result.map(results => {
                                            return (
                                                <>
                                                    <tr>
                                                        {/*  */}
                                                        <td>{res.id}</td>
                                                        <td>{res.studentname}</td>
                                                        <td>{res.fathername}</td>
                                                        <td>{results.computer}</td>
                                                        <td>{results.nazira}</td>
                                                        <td>{results.islamiat}</td>
                                                        <td>{results.urdu}</td>
                                                        <td>{results.math}</td>
                                                        <td>{results.pakstudy}</td>
                                                        <td>{results.science}</td>
                                                        <td>{results.english}</td>
                                                        <td>{results.english + results.science + results.english + results.pakstudy + results.math + results.urdu + results.islamiat + results.nazira}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default SemesterResults