
import React, { useState } from 'react';
import css from '../Css/teacher.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const TeacherPage = () => {
  const [showCaption, setShowCaption] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(1);

  const teachers = [
    { id: 1, name: 'Engin Niyazi Ergül', description: 'Fenerbahçeli genç yazılımcı  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet consectetur pretium. Donec ultricies ultricies purus, in cursus libero porttitor.' },
    { id: 2, name: 'Furkan Gültekin', description: 'Kral Hoca 20 yaşında öğrenci-öğretmen Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet consectetur pretium. Donec ultricies ultricies purus, in cursus libero porttitor.' },
    { id: 3, name: 'Mustafa Kemal Atatürk', description: 'Baş Öğretmen Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet consectetur pretium. Donec ultricies ultricies purus, in cursus libero porttitor.' },
    { id: 4, name: 'Doğa Elif Ünlü', description: 'İyi kral hocaLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet consectetur pretium. Donec ultricies ultricies purus, in cursus libero porttitor.' },
  ];

  const handleTeacherChange = (teacherId) => {
    setSelectedTeacher(teacherId);
  };

  const handleButtonClick = () => {
    setShowCaption(!showCaption);
  };

  return (
    <Container fluid className="wrapper">
    {teachers.map((teacher) => (
      <Row key={teacher.id} className="mb-3">
        <Col xs={12}>
          <div className="place">
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
                </div>
              </div>
              <div className={`overlay ${showCaption && selectedTeacher === teacher.id ? 'visible' : ''}`}>
                <p>{teacher.description}</p>
              </div>
            </label>
          </div>
        </Col>
      </Row>
    ))}
    <Row>
      <Col xs={12}>
        <Button variant="outline-success" onClick={handleButtonClick} className='teacher-btn'>
          Açıklamayı Göster/Gizle
        </Button>
      </Col>
    </Row>
  </Container>
  )}

export default TeacherPage;
