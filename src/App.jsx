import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showMessage, setShowMessage]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameError&&!emailError && !phoneError&&!schoolError&&!titleError&&!companyError&&!positionError&&!responsibilityError) {
      setShowMessage(true)
    }
    else {
      document.querySelector('#errorMessage').textContent=`Enter valid ${
        nameError?'Name':(
          emailError?'Email':(
            phoneError?'Phone':(
              schoolError? 'School Name':(
                titleError? 'Title of Study':(
                  companyError?'Company Name':(
                    positionError?'Position Title':(
                      responsibilityError?'Responsibilities':'End date'
                      )
                    )
                  )
                )
              )
            ))}`;
    }
  }
  const [name_value,setName]=useState('Candidate Name')
  const [nameError, setNameError] = useState(true)
  const nameRegex = /^[A-Za-z ,.'-]+$/;
  const [email,setEmail]=useState('example@example.com')
  const [emailError, setEmailError]=useState(true)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [phone,setPhone]=useState('9876543210')
  const [phoneError, setPhoneError] = useState(true)
  const phoneRegex = /^[6-9]+[0-9]{9}$/;
  const textRegex = /^[a-zA-Z0-9,'!%. ]*$/;
  const [school, setSchool] = useState('ABC Business School')
  const [schoolError, setSchoolError] = useState(true)
  const [study_title, setStudyTitle] = useState('MBA')
  const [titleError, setTitleError] = useState(true)
  const [completionDate, setCompletionDate] = useState('')
  const [company, setCompany] = useState('ABC Digital Solutions')
  const [companyError, setCompanyError] = useState(true)
  const [position, setPosition] = useState('Business Analyst')
  const [positionError, setPositionError] = useState(true)
  const [responsibilities, setResponsibilities] = useState('Analyse the business')
  const [responsibilityError, setResponsibilityError] = useState(true)
  const [startDate, setStartDate]=useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [endDate, setEndDate]=useState('')
  const handleName = (event)=> {
    setName(event.target.value);
    if (nameRegex.test(event.target.value)) {
      setNameError(false)
    }
    else {
      setNameError(true)
    }
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (emailRegex.test(event.target.value)) {
      setEmailError(false)
    }
    else {
      setEmailError(true)
    }
  }
  //doubt!! 1. Do I need to set the state, onChange function individually for each element?
  // 2. What if I need to include the inset button and dynamically add the fieldset?
  const handlePhone = (event) => {
    setPhone(event.target.value)
    if (phoneRegex.test(event.target.value)) {
      setPhoneError(false)
    }
    else {
      setPhoneError(true)
    }
  }
  const handleSchool = (event) => {
    setSchool(event.target.value);
    if (textRegex.test(event.target.value)) {
      console.log(textRegex.test(event.target.value))
      setSchoolError(false)
    }
    else {
      setSchoolError(true)
    }
  }
  const handleStudyTitle = (event) => {
    setStudyTitle(event.target.value)
    if (textRegex.test(event.target.value)) {
      setTitleError(false)
    }
    else {
      setTitleError(true)
    }
  }
  const handleCompletionDate = (event) => {
    setCompletionDate(event.target.value)
  }
  const handleCompany = (event) => {
    setCompany(event.target.value)
    if(textRegex.test(event.target.value)) {
      setCompanyError(false)
    }
    else {
      setCompanyError(true)
    }
  }
  const handlePosition = (event) => {
    setPosition(event.target.value)
    if (textRegex.test(event.target.value)) {
      setPositionError(false)
    }
    else {
      setPositionError(true)
    }
  }
  const handleResponsibilities = (event) => {
    setResponsibilities(event.target.value)
    if (textRegex.test(event.target.value)) {
      setResponsibilityError(false)
    }
    else {
      setResponsibilityError(true)
    }
  }
  const handleStartDate = (event) => {
    setStartDate(event.target.value)
  }
  const handleEndDate = (event) => {
    if (event.target.value>startDate) {
      setEndDate(event.target.value)
    }
    else {
      document.querySelector('#dateError').textContent = 'End date must be after the start date'
      setEndDate('')

    }
  }
  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
    setEndDate('Present')
  }
  return (
    <>
      {!showMessage && (
        <div>
          <h1>Make your CV</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>General Information</legend>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' value={name_value} onChange={handleName}></input>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' value={email} onChange={handleEmail} required></input>
              {/*DOUBT!!! 3. Why 'required' attribute is not working? */}
              <label htmlFor='phone'>Phone</label>
              <input type='number' id='phone' value={phone} onChange={handlePhone}></input>
              
            </fieldset>
            <fieldset id='educational_experience'>
              <legend>Educational Experience</legend>
              <label htmlFor='school'>School Name</label>
              <input type='text' id='school' value={school} onChange={handleSchool}></input>
              <label htmlFor='study_title'>Title of Study</label>
              <input type='text' id='study_title' value={study_title} onChange={handleStudyTitle}></input>
              <label htmlFor='completion_date'>Date of Completion</label>
              <input type='date' id='completion_date' value={completionDate} onChange={handleCompletionDate}></input>
            </fieldset>
            <fieldset>
              <legend>Practical Experience</legend>
              <label htmlFor='company'>Company Name</label>
              <input type='text' id='company' value={company} onChange={handleCompany}></input>
              <label htmlFor='position_title'>Position Title</label>
              <input type='text' id='position_title' value={position} onChange={handlePosition}></input>
              <label htmlFor='responsibilities'>Main responsibilities</label>
              <textarea rows={5} value={responsibilities} onChange={handleResponsibilities}></textarea>
              <label htmlFor='start_date'>Start date</label>
              <input type='date' id='start_date' value={startDate} onChange={handleStartDate}></input>
              <label htmlFor='currently_working' id='checkbox_label'><input type='checkbox' id='currently_working' value={isChecked} onChange={handleCheckbox}></input>Currently Working</label>
              {!isChecked?<><label htmlFor='end_date'>End date</label><input type='date' id='end_date' value={endDate} onChange={handleEndDate}></input></>:null}
              <p id="dateError" className='errors'></p>
            </fieldset>
            <button onClick={handleSubmit}>Submit</button>
            <p id="errorMessage" className='errors'></p>
          </form>
        </div>
      )}
      {showMessage && (
        <>
          <div id='cv'>
            <div id='header'>
              <h1 id='entered_name'>{document.querySelector('#name').value}</h1>
              <div className="inline">
                <h3 id="entered_email">{document.querySelector('#email').value}</h3>
                <h3 id="entered_phone">{document.querySelector('#phone').value}</h3>
              </div>
            </div>
            <div id='education'>
              <h2>{document.querySelector('#school').value}</h2>
              <div className='inline'>
                <h3>{document.querySelector('#study_title').value}</h3>
                <h5>{document.querySelector('#completion_date').value}</h5>
              </div>
            </div>
            <div id='experience'>
              <h2>{document.querySelector('#company').value}</h2>
              <div className='inline'>
                <h4>{document.querySelector('#position_title').value}</h4>
                {console.log(typeof endDate)}
                <h5>{document.querySelector('#start_date').value+'  -  '+endDate}</h5>
              </div>
              <h3>Main Responsibilities</h3>
              <p>{document.querySelector('textarea').value}</p>
            </div>
          </div>
          <button id='edit' onClick={(event)=>{event.preventDefault();setShowMessage(false)}}>Edit</button>
        </>
      )}
      
    </>
  )
}
function insert() {
  const edu = document.querySelector('#educational_experience')
  const school = document.createElement('input')
  school.type='text'
  return (
    edu.appendChild(school)
  )
}

export default App
