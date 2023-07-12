import React from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Menu from './Menu'
function ApplicantForm() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      cnic: "", name: "", fathername: "", nationality: "",  dob: "", caddress: "", paddress: "", phoneno: ""
    },
    onSubmit: (value, onSubmitProps) => {
      axios.post('/applicant', value)
        .then(res => {
          window.alert('Applicant added Successfully ')
          onSubmitProps.resetForm()   
          
        })
        .catch(error => {
          window.alert('Failed to add Applicant')
        })
    },
    validationSchema: Yup.object({
      cnic: Yup.string().required().min(13).max(13),
      name: Yup.string().required().min(3),
      fathername: Yup.string().required().min(3),
      nationality: Yup.string().required(),
      dob: Yup.date().required(),
      caddress: Yup.string().required(),
      paddress: Yup.string().required(),
      phoneno: Yup.number()
        .positive()
        .integer()
        .required(),
    })
  })
  return (
    <div>
    <Menu/>      
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-3">
                    {t('OAF')}
                  </p>

                  <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 col-lg-5 col-sm-12">

                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.cnic}
                            name="cnic"
                            type="text"
                            className="form-control form-control-lg"
                            id="cnic"
                            onBlur={formik.handleBlur}
                          />
                          <label htmlFor='cnic' className="form-label">{t('Cnic')}</label>
                          <p className="error">{formik.errors.cnic}</p>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            name="name"
                            type="text"
                            className="form-control form-control-lg"
                            id="name"
                          />
                          <label htmlFor='name' className="form-label">{t('Name')}</label>
                          <p className="error">{formik.errors.name}</p>
                        </div>
                        
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.dob}
                            name="dob"
                            type="date"
                            className="form-control form-control-lg"
                            id="dob"
                          />
                          <label htmlFor='dob' className="form-label">{t('DateOfBirth')}</label>
                          <p className="error">{formik.errors.dob}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.caddress}
                            name="caddress"
                            type="text"
                            className="form-control form-control-lg"
                            id="caddress"
                          />
                          <label htmlFor='caddress' className="form-label">{t('CurrentAddress')}</label>
                          <p className="error">{formik.errors.caddress}</p>
                        </div>

                      </div>

                      {/* right half of fform */}

                      <div className="col-12 col-lg-5 col-sm-12">
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.fathername}
                            name="fathername"
                            type="text"
                            className="form-control form-control-lg"
                            id="fathername"
                          />
                          <label htmlFor='fathername' className="form-label">{t('fathername')}</label>
                          <p className="error">{formik.errors.fathername}</p>
                        </div>

                        
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.nationality}
                            name="nationality"
                            type="text"
                            className="form-control form-control-lg"
                            id="nationality"
                          />
                          <label htmlFor='nationality' className="form-label">{t('Nationality')}</label>
                          <p className="error">{formik.errors.nationality}</p>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.paddress}
                            name="paddress"
                            type="text"
                            className="form-control form-control-lg"
                            id="paddress"
                          />
                          <label htmlFor='paddress' className="form-label">{t('ParmanentAddress')}</label>
                          <p className="error">{formik.errors.paddress}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.phoneno}
                            name="phoneno"
                            type="text"
                            className="form-control form-control-lg"
                            id="phoneno"
                          />
                          <label htmlFor='phoneno' className="form-label">{t('PhoneNo')}</label>
                          <p className="error">{formik.errors.phoneno}</p>
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

export default ApplicantForm