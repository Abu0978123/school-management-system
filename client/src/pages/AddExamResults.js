import React from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import img1 from '../images/results.jpg'
import Adminpanel from './Adminpanel'

function AddExamResults() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      StudentId: "", year: "", computer: "", nazira: "", islamiat: "", urdu: "", math: "", pakstudy: "", science: "", english: ""
    },
    onSubmit: (value, onSubmitProps) => {
      axios.post('/result', value)
        .then(res => {

          window.alert('Result added Successfully ')
          // onSubmitProps.resetForm()
        })
        .catch(error => {
          const err = error.response
          const message = err.data
          if (err.status === 404) {
            window.alert(`${message.error}`)
          }
          if (err.status === 422) {
            window.alert(`${message.error}`)

          }
        })
    },
    validationSchema: Yup.object({
      computer: Yup.number().required().max(50),
      nazira: Yup.number().required().max(50),
      islamiat: Yup.number().required().max(50),
      urdu: Yup.number().required().max(100),
      pakstudy: Yup.number().required().max(100),
      math: Yup.number().required().max(100),
      science: Yup.number().required().max(100),
      english: Yup.number().required().max(100),
      year: Yup.string().required(),
      StudentId: Yup.number().required(),
    })
  })
  return (
    <div>
      <Adminpanel />

      <div className="row  d-flex justify-content-center">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <div>
                <p className="text-center h1 fw-bold mb-3 pb-4">
                  {t('AddExamResults')}
                </p>

              </div>

              <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                <div className="row d-flex justify-content-center">

                  <div className="col-12 col-lg-4 col-sm-12">
                    <div className="form-outline mb-4">
                      <br></br>
                      <img src={img1} alt="datesheet" style={{ width: '300px', height: '300px' }} />
                    </div>
                  </div>

                  {/* right half of fform */}

                  <div className="col-12 col-lg-7 col-sm-12">
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.StudentId}
                        name="StudentId"
                        type="number"
                        className="form-control form-control-lg"
                        id="StudentId"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='StudentId' className="form-label">{t("StudentId")}</label>
                      <p className="error">{formik.errors.StudentId}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.year}
                        name="year"
                        type="number"
                        className="form-control form-control-lg"
                        id="year"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='year' className="form-label">{t("Class")}</label>
                      <p className="error">{formik.errors.year}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.computer}
                        name="computer"
                        type="number"
                        className="form-control form-control-lg"
                        id="computer"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='computer' className="form-label">{t('Computer')}</label>
                      <p className="error">{formik.errors.computer}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.nazira}
                        name="nazira"
                        type="number"
                        className="form-control form-control-lg"
                        id="nazira"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='nazira' className="form-label">{t('Nazira')}</label>
                      <p className="error">{formik.errors.nazira}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.islamiat}
                        name="islamiat"
                        type="number"
                        className="form-control form-control-lg"
                        id="islamiat"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='islamiat' className="form-label">{t('Islamiat')}</label>
                      <p className="error">{formik.errors.islamiat}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.urdu}
                        name="urdu"
                        type="number"
                        className="form-control form-control-lg"
                        id="urdu"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='urdu' className="form-label">{t('Urdu')}</label>
                      <p className="error">{formik.errors.urdu}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.math}
                        name="math"
                        type="number"
                        className="form-control form-control-lg"
                        id="math"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='math' className="form-label">{t('Math')}</label>
                      <p className="error">{formik.errors.math}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.pakstudy}
                        name="pakstudy"
                        type="number"
                        className="form-control form-control-lg"
                        id="pakstudy"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='pakstudy' className="form-label">{t('Pak Study')}</label>
                      <p className="error">{formik.errors.pakstudy}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.science}
                        name="science"
                        type="number"
                        className="form-control form-control-lg"
                        id="science"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='science' className="form-label">{t('Science')}</label>
                      <p className="error">{formik.errors.science}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.english}
                        name="english"
                        type="number"
                        className="form-control form-control-lg"
                        id="english"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='english' className="form-label">{t('English')}</label>
                      <p className="error">{formik.errors.english}</p>
                    </div>

                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg mb-1"
                  >
                    {t("Submit")}
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

export default AddExamResults