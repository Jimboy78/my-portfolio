import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section className="my-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <div className="mt-4">
        <h3 className="text-xl">Software Developer - Junco Films</h3>
        <p className="italic">Jan. 2024 - Present</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Developer at Junco Films, focused on the development and maintenance of interactive tools and web applications.</li>
          <li>Integrated APIs from various social networks.</li>
          <li>Developed a multi-platform application workspace using Flask and ReactJS.</li>
          <li>Created an SVG file editor.</li>
          <li>Automated Blender renders with Python scripts.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Backend Developer - B2Gov</h3>
        <p className="italic">Sept. 2022 - Jul. 2023</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Backend developer at B2Gov, focusing on robust and scalable solutions.</li>
          <li>Developed a data scraping system from public procurement portals.</li>
          <li>Used BeautifulSoup to automate data extraction.</li>
          <li>Followed the Open Contracting Data Standard (OCDS).</li>
          <li>Integrated scraped data into a MongoDB database.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
