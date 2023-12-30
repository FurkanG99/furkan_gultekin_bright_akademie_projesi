import React from 'react'
import css from '../Css/teacher.css'
const TeacherPage = () => {
  return (
    <div className="wrapper">
    <div className="place">
        <input type="radio" name="slide" id="tc1" checked />
        <label htmlFor="tc1" className="teacher-card">
            <div className="teacher">
                <div className="icon">1</div>
                <div className="description">
                    <h4>Engin Niyazi Ergül</h4>
                    <p>Winter has so much to offer -
                     creative activities</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="tc2" checked/>
        <label htmlFor="tc2" className="teacher-card">
            <div className="teacher">
                <div className="icon">2</div>
                <div className="description">
                    <h4>Furkan Gültekin</h4>
                    <p>Gets better every day -
                     stay tuned</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="tc3" checked/>
        <label htmlFor="tc3" className="teacher-card">
            <div className="teacher">
                <div className="icon">3</div>
                <div className="description">
                    <h4>Mustafa Kemal Atatürk</h4>
                    <p>Baş Öğretmen</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="tc4" checked/>
        <label htmlFor="tc4" className="teacher-card">
            <div className="teacher">
                <div className="icon">4</div>
                <div className="description">
                    <h4>Doğa elif Ünlü</h4>
                    <p>Space engineering becomes
                     more and more advanced</p>
                </div>
            </div>
        </label>
    </div>
</div>
  )
}

export default TeacherPage
