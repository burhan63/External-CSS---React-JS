import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='rootdiv'>
        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Burhan Ali</h3>
            <p>Software Developer - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Ahsan Hameed</h3>
            <p>Network Infrastructure - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Ahmed Hassan</h3>
            <p>Project Manager - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Fahad Khan</h3>
            <p>CISO - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Shahzad Sher Ali</h3>
            <p>Head - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Kashif Sarwar</h3>
            <p>Manager - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Talha Shahid</h3>
            <p>Report Developer - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Rehan Ahmed</h3>
            <p>Software Developer - IT</p>
          </div>
        </div>

        <div className='maindiv'>
          <div>
            <img className='img' src="https://cdn.vectorstock.com/i/500p/23/72/flat-man-profile-avatar-vector-59322372.jpg" alt="" />
          </div>
          <div>
            <h3>Syed Ammar Ali</h3>
            <p>Software Developer - IT</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
