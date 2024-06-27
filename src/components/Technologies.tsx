import React from 'react';

const Technologies: React.FC = () => {
  return (
    <section className="my-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <h3 className="text-lg font-semibold mb-2">Python</h3>
          <ul className="list-disc ml-6">
            <li>Django</li>
            <li>Flask</li>
            <li>Vanilla Python</li>
          </ul>
          <p className="mt-2">
            Skills: Object-Oriented Programming, Git-Github
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
          <ul className="list-disc ml-6">
            <li>React.Js</li>
            <li>Vanilla JavaScript</li>
          </ul>
          <p className="mt-2">
            Skills: JSX and transpiling, Routing and navigation, Events, API consume, Firebase
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">C#</h3>
          <ul className="list-disc ml-6">
            <li>Vanilla C#</li>
            <li>Unity</li>
          </ul>
          <p className="mt-2">
            Skills: Unity development
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">CSS/SASS</h3>
          <ul className="list-disc ml-6">
            <li>Vanilla CSS/SASS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">SQL</h3>
          <ul className="list-disc ml-6">
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="mt-2">
            Skills: Functions, Stored procedures, Triggers, DCL and TCL Workshop
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">NoSQL</h3>
          <ul className="list-disc ml-6">
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">React Native</h3>
          <ul className="list-disc ml-6">
            <li>Redux</li>
            <li>Login & authentication</li>
            <li>SQLite</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
