import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Footer from "./pages/Footer"
import StudentResults from "./pages/StudentResults"
import ApplicantForm from "./pages/ApplicantForm"
import SemesterResults from "./pages/SemesterResults"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Showdatesheet from "./pages/Showdatesheet"
import TestResults from "./pages/TestResults"
import AddTestResults from "./pages/AddTestResults"
import AddExamResults from "./pages/AddExamResults"
import Datesheet from "./pages/Datesheet"
import Message from "./pages/Message"
import AddAdmin from "./pages/AddAdmin"
import StudentForm from "./pages/StudentForm"
// import Student from "./pages/Student"
import Students from "./pages/AdminPages/Students"
import Applicants from "./pages/Applicants"
import img1 from './images/left.png'
import img2 from './images/right.png'
import DirectorMessage from "./pages/DirectorMessage"
import Vision from "./pages/Vision"
import RulesRegulations from "./pages/RulesRegulations"
import Contactus from "./pages/Contactus"
import UpdateStudent from "./pages/UpdateStudent"
import OurSchool from "./pages/OurSchool"
import AnnualDay from "./pages/AnnualDay"
import CoCurricular from "./pages/CoCurricular"
import StudentTour from "./pages/StudentTour"
import ExamNotification from "./pages/ExamNotification"
import AnnualFunction from "./pages/AnnualFunction"
import VaccationTasks from "./pages/VaccationTasks"
import Protected from "./pages/Protected"
import LoginState from "./Context/LoginState"
import Results from "./pages/AdminPages/Results"
import UpdateResults from "./pages/UpdateResults"


function App() {

  return (

    <div>
      {/* <AddAdmin/> */}
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-6 col-sm-11 mr-7" >
          <img src={img1} alt="logo" style={{ width: '100%', height: '100px' }} />
        </div>
        <div className="col-12 col-lg-5 col-sm-11 ml-7">
          <img src={img2} alt="logo" style={{ width: '100%', height: '100px' }} />
        </div>
      </div>
      {/* <div className="header justify-content-center">
        <h1 className="text-center p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1>
      </div> */}
      <LoginState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="applicant/registration" element={<ApplicantForm />} />
            <Route exact path="/result/student" element={<StudentResults />} />
            <Route exact path="/result/class" element={<SemesterResults />} />
            <Route exact path="/admission/testresult" element={<TestResults />} />
            <Route exact path="/datesheet" element={<Showdatesheet />} />
            <Route exact path="/director-message" element={<DirectorMessage />} />
            <Route exact path="/director-message" element={<DirectorMessage />} />
            <Route exact path="/vision-mission" element={<Vision />} />
            <Route exact path="/our-school" element={<OurSchool />} />
            <Route exact path="/about-us" element={<Aboutus />} />
            <Route exact path="/co-curricular" element={<CoCurricular />} />
            <Route exact path="/annual-day" element={<AnnualDay />} />
            <Route exact path="/student-tour" element={<StudentTour />} />
            <Route exact path="/rules-regulations" element={<RulesRegulations />} />
            <Route exact path="/contact-us" element={<Contactus />} />
            <Route exact path="/exam-notification" element={<ExamNotification />} />
            <Route exact path="/annual-function" element={<AnnualFunction />} />
            <Route exact path="/summer-vaccaton" element={<VaccationTasks />} />
            <Route exact path="/login" element={<Login />} />

            {/* ROUTES OF ADMIN PORTION */}

            <Route element={<Protected />}>
              <Route exact path="/admin" element={<Dashboard />} />
              <Route exact path="/addresults" element={<AddExamResults />} />
              <Route exact path="/adddatesheet" element={<Datesheet />} />
              <Route exact path="/sendmessages" element={<Message />} />
              <Route exact path="/addadmin" element={<AddAdmin />} />
              <Route exact path="/addstudent" element={<StudentForm />} />
              <Route exact path="/addtestresults" element={<AddTestResults />} />
              <Route exact path="/result" element={<Results />} />
              <Route exact path="/showstudents" element={<Students />} />
              <Route exact path="/showapplicants" element={<Applicants />} />
              <Route exact path="/updatestudent/:id" element={<UpdateStudent />} />
              <Route exact path="/updateresult/:id" element={<UpdateResults />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </LoginState>
    </div>
  );
}

export default App;
