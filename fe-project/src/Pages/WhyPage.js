import React, { useState } from 'react';
import '../Css/why.css';

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="title" onClick={() => setOpen(!open)}>
        <div className="arrow-wrapper">
          <i className={open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"}></i>
        </div>
        <span className="title-text">{title}</span>
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
      title: "One",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: "Two",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: "Three",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ];

  return <Accordion data={data} />;
};

export default WhyPage;
