import React from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Adminpanel from './Adminpanel'

function StudentForm() {
  
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      id: "", studentname: "", year: "", fathername: "",
      dob: "", city: "", caddress: "", province: "", paddress: "", phoneno: ""
    },
    onSubmit: (value) => {
      axios.post('/student', value)
        .then(res => {
          console.log(res)
          window.alert('Student added Successfully ')
        })
        .catch(error => {
          window.alert('Failed to add student')
        })
    },
    validationSchema: Yup.object({
      id: Yup.number().required(),
      studentname: Yup.string().required(),
      year: Yup.number().required(),
      fathername: Yup.string().required(),
      dob: Yup.date(),
      city: Yup.string().min(3),
      caddress: Yup.string().required(),
      province: Yup.string().required(),
      paddress: Yup.string().required(),
      phoneno: Yup.number()
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('A phone number is required'),
    })
  })
  return (
    <div>
      <Adminpanel />

      <div className='p-5'><Link type="button" className="btn btn-primary" to="/showstudents">{t('ShowStudents')}</Link></div>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <p className="text-center h1 fw-bold mb-3">
                {t('Add New Student')}
              </p>

              <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-lg-5 col-sm-12">

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        name="id"
                        type="number"
                        className="form-control form-control-lg"
                        id="id"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='id' className="form-label">{t('StudentId')}</label>
                      <p className="error">{formik.errors.id}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.studentname}
                        name="studentname"
                        type="text"
                        className="form-control form-control-lg"
                        id="studentname"
                      />
                      <label htmlFor='studentname' className="form-label">{t('Name')}</label>
                      <p className="error">{formik.errors.studentname}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.year}
                        name="year"
                        type="number"
                        className="form-control form-control-lg"
                        id="year"
                      />
                      <label htmlFor='year' className="form-label">{t('Class')}</label>
                      <p className="error">{formik.errors.year}</p>
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
                        value={formik.values.city}
                        name="city"
                        type="text"
                        className="form-control form-control-lg"
                        id="city"
                      />
                      <label htmlFor='city' className="form-label">{t('city')}</label>
                      <p className="error">{formik.errors.city}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.province}
                        name="province"
                        type="text"
                        className="form-control form-control-lg"
                        id="province"
                      />
                      <label htmlFor='province' className="form-label">{t('Province')}</label>
                      <p className="error">{formik.errors.province}</p>
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
                    {formik.errors.phoneno}

                  </div>
                </div>
                <div className="d-flex justify-content-center ">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg mb-1 px-4"
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

export default StudentForm