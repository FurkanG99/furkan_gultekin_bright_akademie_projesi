// teacher.js

import React, { useState } from 'react';
import css from '../Css/teacher.css';
import { Button, Container } from 'react-bootstrap';

const TeacherPage = () => {
  const [showCaption, setShowCaption] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(1);

  const teachers = [
    { id: 1, name: 'Engin Niyazi Ergül', description: 'Fenerbahçeli genç yazılımcı öğretmen' },
    { id: 2, name: 'Furkan Gültekin', description: 'Kral Hoca 20 yaşında öğrenci-öğretmen' },
    { id: 3, name: 'Mustafa Kemal Atatürk', description: 'Baş Öğretmen' },
    { id: 4, name: 'Doğa Elif Ünlü', description: 'İyi kral hoca şu şu şu akşsda asbdlab' },
  ];

  const handleTeacherChange = (teacherId) => {
    setSelectedTeacher(teacherId);
  };

  const handleButtonClick = () => {
    setShowCaption(!showCaption);
  };

  return (
    <Container className="wrapper">
      <div className="place">
        {teachers.map((teacher) => (
          <div key={teacher.id}>
            <input
              type="radio"
              name="slide"
              id={`tc${teacher.id}`}
              checked={selectedTeacher === teacher.id}
              onChange={() => handleTeacherChange(teacher.id)}
            />
            <label htmlFor={`tc${teacher.id}`} className="teacher-card">
              <div className="teacher">
                <div className="icon">{teacher.id}</div>
                <div className="description">
                  <h4>{teacher.name}</h4>
                  {/* <p>{showCaption && selectedTeacher === teacher.id ? teacher.description : ''}</p> */}
                </div>
              </div>
              <div className={`overlay ${showCaption && selectedTeacher === teacher.id ? 'visible' : ''}`}>
                <p>{teacher.description}</p>
              </div>
            </label>
          </div>
        ))}
        <Button variant="outline-success" onClick={handleButtonClick} className='teacher-btn'>Açıklamayı Göster/Gizle</Button>
      </div>
    </Container>
  );
};

export default TeacherPage;
