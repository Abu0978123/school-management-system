import React from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import img1 from '../images/results.jpg'
import Adminpanel from '../pages/Adminpanel'

function AddTestResults() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      marks: "", ApplicantCnic: ""
    },
    onSubmit: (value) => {
      axios.post('/testresult', value)
        .then(res => {
          console.log(res)
          
          if(res.status===201) {
            window.alert('Result added Successfully ')
          }
        })
        .catch(error => {
          const err = error.response   
          console.log(err)       
          const message= err.data
          if(err.status===404) {
            window.alert(`${message.error}`)
          }
          else {
            window.alert(` ${err.statusText} Code : ${err.status}`)
          }
        })
    },
    validationSchema: Yup.object({
      marks: Yup.number().required().max(100),
      ApplicantCnic: Yup.string().required().min(13).max(13),
    })
  })
  return (
    <div>
    <Adminpanel/>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <div>
                <p className="text-center h1 fw-bold mb-3 pb-4">
                 {t('AETR')}
                </p>
              </div>

              <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                <div className="row  d-flex justify-content-center">

                  <div className="col-12 col-lg-4 col-sm-12">
                    <div className="form-outline mb-4">
                      <br></br>
                      <img src={img1} alt="results" style={{ width: '300px', height: '300px' }} />
                    </div>
                  </div>

                  {/* right half of fform */}

                  <div className="col-12 col-lg-7 col-sm-12">

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.marks}
                        name="marks"
                        type="number"
                        className="form-control form-control-lg"
                        id="marks"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='marks' className="form-label">{t('Marks')}</label>
                      <p className="error">{formik.errors.marks}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.ApplicantCnic}
                        name="ApplicantCnic"
                        type="text"
                        className="form-control form-control-lg"
                        id="ApplicantCnic"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='ApplicantCnic' className="form-label">{t('ApplicantCnic')}</label>
                      <p className="error">{formik.errors.ApplicantCnic}</p>
                    </div>
                  </div>
                </div>
                <div className="row row-form">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg mb-1"
                  >
                    {t('Submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTestResults