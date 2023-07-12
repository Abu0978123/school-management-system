import React, { useContext } from "react";
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import img1 from '../images/login2.png'
import Menu from "./Menu";
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { LoginContext } from "../Context/LoginContext"

function Login() {

  const {setLoggedIn} = useContext(LoginContext)
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "", password: ""
    },
    onSubmit: (value) => {
      axios.post('/login', value)
        .then(res => {
          if (res.status === 201) {
            setLoggedIn(true)            
          }
          navigate('/admin')
        }
        
        )
        .catch(error => {
          window.alert('Invalid credentials')
        })
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    })
  })

  return (
    <div>
      <Menu />
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                {t('Login')}
              </p>
              <p className="text-center mb-5 mx-1 mx-md-4 mt-4">{t('EAD')}</p>

              <form method="POST" className="px-md-2" id="studentform" onSubmit={formik.handleSubmit}>
                <div className="row d-flex justify-content-center">

                  <div className="col-12 col-lg-4 col-sm-12">
                    <div className="form-outline mb-4">
                      <img src={img1} alt="results" style={{ width: '300px', height: '300px' }} />
                    </div>
                  </div>

                  {/* right half of fform */}

                  <div className="col-12 col-lg-7 col-sm-12">

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        name="username"
                        type="text"
                        className="form-control form-control-lg"
                        id="username"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='username' className="form-label">{t('UserName')}</label>
                      <p className="error">{formik.errors.username}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        name="password"
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor='password' className="form-label">{t('Password')}</label>
                      <p className="error">{formik.errors.password}</p>
                    </div>
                  </div>
                </div>
                <div className="row row-form">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg mb-1"
                  >
                    {t('Login')}
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

export default Login
