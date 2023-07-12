import React from "react";
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from '../images/datesheet.jpeg'
import Adminpanel from "./Adminpanel";
function Datesheet() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      pdate: "", class1: "", class2: "", class3: "", class4: "", class5: "", class6: "", class7: "", class8: ""
    },
    onSubmit: (value) => {
      axios.post('/datesheet', value)
        .then(res => {
          window.alert('Datesheet added Successfully ')

        })
        .catch(error => {
          window.alert('Subject already Exist')
        })
    },
    validationSchema: Yup.object({
      pdate: Yup.date(),
      class1: Yup.string(),
      class2: Yup.string(),
      class3: Yup.string(),
      class4: Yup.string(),
      class5: Yup.string(),
      class6: Yup.string(),
      class7: Yup.string(),
      class8: Yup.string(),
    })
  })
  return (
    <div>
      <Adminpanel /><br/>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-3">
                    {t('EDD')}
                  </p>
                  <br />

                  <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-4 col-sm-12">
                    <div className="form-outline mb-4">
                      <br></br>
                      <img src={img1} alt="results" style={{ width: '300px', height: '300px' }} />
                    </div>
                  </div>
                      {/* right half of fform */}
                      <div className="col-12 col-lg-7 col-sm-12">                        
                        <div className="row">
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.pdate}
                            name="pdate"
                            type="date"
                            className="form-control form-control-lg"
                            id="pdate"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Date')}</label>
                          <p className="error">{formik.errors.pdate}</p>
                        </div>
                        <div className="col-12 col-lg-5 col-sm-12">
                        
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class1}
                            name="class1"
                            type="text"
                            className="form-control form-control-lg"
                            id="class1"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class One')}</label>
                          <p className="error">{formik.errors.from}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class2}
                            name="class2"
                            type="text"
                            className="form-control form-control-lg"
                            id="class2"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Two')} </label>
                          <p className="error">{formik.errors.class2}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class3}
                            name="class3"
                            type="text"
                            className="form-control form-control-lg"
                            id="class3"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Three')} </label>
                          <p className="error">{formik.errors.class3}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class4}
                            name="class4"
                            type="text"
                            className="form-control form-control-lg"
                            id="class4"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Four')} </label>
                          <p className="error">{formik.errors.class4}</p>
                        </div>
                        </div>
                        <div className="col-12 col-lg-5 col-sm-12">
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class5}
                            name="class5"
                            type="text"
                            className="form-control form-control-lg"
                            id="class5"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Five')}</label>
                          <p className="error">{formik.errors.class5}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class6}
                            name="class6"
                            type="text"
                            className="form-control form-control-lg"
                            id="class6"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Six')}</label>
                          <p className="error">{formik.errors.class6}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class7}
                            name="class7"
                            type="text"
                            className="form-control form-control-lg"
                            id="class7"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Seven')}</label>
                          <p className="error">{formik.errors.class7}</p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.class8}
                            name="class8"
                            type="text"
                            className="form-control form-control-lg"
                            id="class8"
                            onBlur={formik.handleBlur}
                          />
                          <label className="form-label">{t('Enter Paper of Class Eight')} </label>
                          <p className="error">{formik.errors.class8}</p>
                        </div>

                        </div>

                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
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
  );
}

export default Datesheet;
