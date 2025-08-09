import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showMessage, setShowMessage]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  }
  const [name_value,setName]=useState('Candidate Name')
  const [email,setEmail]=useState('example@domain.com')
  const [phone,setPhone]=useState('9876543210')
  const [school, setSchool] = useState('ABC Business School')
  const [study_title, setStudyTitle] = useState('MBA')
  const handleName = (event)=> {
    setName(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePhone = (event) => {
    setPhone(event.target.value)
  }
  const handleSchool = (event) => {
    setSchool(event.target.value);
  }
  const handleStudyTitle = (event) => {
    setStudyTitle(event.target.value)
  }
  return (
    <>
      {!showMessage && (
        <div>
          <h1>Make your CV</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>General Information</legend>
              <label for='name'>Name</label>
              {/* value={name_value} onChange={(e)=> setName(e.target.value)} */}
              <input type='text' id='name' value={name_value} onChange={handleName}></input>
              <label for='email'>Email</label>
              <input type='email' id='email' value={email} onChange={handleEmail}></input>
              <label for='phone'>Phone</label>
              <input type='number' id='phone' value={phone} onChange={handlePhone}></input>
            </fieldset>
            <fieldset id='educational_experience'>
              <legend>Educational Experience</legend>
              <label for='school'>School Name</label>
              <input type='text' id='school' value={school} onChange={handleSchool}></input>
              <label for='study_title'>Title of Study</label>
              <input type='text' id='study_title' value={study_title} onChange={handleStudyTitle}></input>
              <label for='completion_date'>Date of Completion</label>
              <input type='date' id='completion_date' value='2023-05-28'></input>
            </fieldset>
            <fieldset>
              <legend>Practical Experience</legend>
              <label for='company'>Company Name</label>
              <input type='text' id='company' value='ABC Digital solutions'></input>
              <label for='position_title'>Position Title</label>
              <input type='text' id='position_title' value='Business analyst'></input>
              <label for='responsibilities'>Main responsibilities</label>
              <textarea rows={5} value='Analyse the business'></textarea>
              <label for='start_date'>Start date</label>
              <input type='date' id='start_date' value='2023-05-29'></input>
              <label for='end_date'>End date</label>
              <input type='date' id='end_date' value='2025-08-08'></input>
            </fieldset>
            <button onClick={handleSubmit}>Submit</button>
            {/* <input type='submit'/> */}
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
                <h5>{document.querySelector('#start_date').value+'  -  '+document.querySelector('#end_date').value}</h5>
              </div>
              <h3>Main Responsibilities</h3>
              <p>{document.querySelector('textarea').value}</p>
            </div>
          </div>
          <button id='edit' onClick={(event)=>{event.preventDefault();setShowMessage(false);setItem(true)}}>Edit</button>
        </>
      )}
      
    </>
  )
}
function insert() {
  const edu = document.querySelector('#educational_experience')
  const school = document.createElement('input')
  school.type='text'
  // alert(heading.textContent)
  return (
    edu.appendChild(school)
  )
}

export default App
