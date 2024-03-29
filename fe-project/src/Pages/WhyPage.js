import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../Css/why.css';

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="title" onClick={() => setOpen(!open)}>
        <div className={`arrow-wrapper ${open ? 'arrow-up' : 'arrow-down'}`}>
          <FontAwesomeIcon icon={open ? faArrowUp : faArrowDown} className={`icon arrow-icon ${open ? 'arrow-icon-open' : ''}`} />
        </div>
        <span className={`title-text ${open ? 'title-text-open' : ''}`}>{title}</span>
      </div>
      <div className={open ? "content content-open" : "content"}>
        <div className={open ? "content-text content-text-open" : "content-text"}>{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const WhyPage = () => {
  const data = [
    {
      title: "6 Ay Uygulamalı Eğitim",
      content: `Alanında uzman deneyimli eğiticilerimiz ile 6 ay sürecek eğitimimiz kapsamında öğrencilerimiz teknik eğitim ve kariyer eğitimi alacaklardır.`
    },
    {
      title: "Proje",
      content: `Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitim boyunca katılımcılarımız kazandıkları yetkinlikleri senaryo niteliğindeki projelerde geliştirirler. Eğitim süresi dışında ise ev ve grup projeleri üzerine çalışarak becerilerini pekiştirirler.`
    },
    {
      title: "İş Hayatı",
      content: `Eğitim ve proje süreçlerini tamamlayan BAU Bright mezunları, alanında profesyonel hizmet veren IK firmamız tarafından, bilişim alanında faaliyet gösteren firmalara yönlendirilerek iş hayatlarına başlarlar.`
    },
  ];

  return <Accordion data={data} />;
};

export default WhyPage;
