import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="my-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Instituto Politécnico Superior, Rosario</h3>
        <p className="italic text-sm">2021 - 2023</p>
        <p>University Analyst in Systems</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Coderhouse</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>SQL: Functions, stored procedures, triggers, DCL and TCL, Datawarehouse in Business Intelligence (Aug. 2023 - Nov. 2023)</li>
          <li>App Development: React Native, Redux, Login & authentication, SQLite (Apr. 2023 - Jun. 2023)</li>
          <li>React JS: JSX and transpiling, routing and navigation, events, API consumption, Firebase (Jan. 2023 - Mar. 2023)</li>
          <li>JavaScript: Storage and JSON, library, AJAX and Fetch, Node JS (Sep. 2022 - Nov. 2022)</li>
          <li>Python: Django, Object-Oriented Programming, Git-Github (Dec. 2021 - Mar. 2022)</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">School N° 2073 “San Pablo”, Villa Constitución</h3>
        <p className="italic text-sm">2013 - 2018</p>
        <p>Electronic Technician</p>
      </div>
    </section>
  );
};

export default Education;
