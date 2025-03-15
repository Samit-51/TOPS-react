import React from 'react';
import './Academics.css'; 
import { Trophy } from "lucide-react";
import { School } from 'lucide-react';
import { User } from 'lucide-react';
import { ClipboardEdit } from "lucide-react";


function Academics() {
  return (
    <section className="index">
      <div className="container">
        <div className="card">
        <Trophy style={{ color: 'black',fill: 'white' }} />

          <h3>Eligibility</h3>
          <p>Students must have secured a prescribed GPA in SEE and equivalent examination by NEB.</p>
        </div>

        <div className="card">
        <School style={{ color: 'black',fill: 'white' }}  />
          <h3>Admissions</h3>
          <p>Students must submit prescribed admission forms distributed in school/college administration.</p>
        </div>

        <div className="card">
        <ClipboardEdit style = {{ color:'black', fill:'white'}}/>;
          <h3>Entrance Exams</h3>
          <p>Applicants must appear in the entrance test.</p>
        </div>

        <div className="card">
        <User style={{ color: 'black',fill: 'white' }} />
          <h3>Interview</h3>
          <p>Applicants will undergo an interview process before final selection.</p>
        </div>
      </div>
    </section>
  );
}

export default Academics;