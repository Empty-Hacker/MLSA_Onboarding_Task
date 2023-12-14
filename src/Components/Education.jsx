import React from "react";

const Education = () => {
  const educationDetails = [
    {
      degree: "12th",
      institution: "GSHEB",
      year: "2021",
    },
    {
      degree: "Bachelor of Engineering - Information Technology",
      institution: "Gujarat Technological University",
      year: "Currently Studying",
    }
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-cell">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;