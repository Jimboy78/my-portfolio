import React from 'react';

const Contact: React.FC = () =>  {
  return (
    <section id="contact" className="my-8 bg-white shadow-md rounded-lg p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-lg text-gray-600 mb-4">
            If you want to contact me..
        </p>
        <div className="flex items-center space-x-4">
            <a
                href="https://github.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-800 hover:text-gray-600"
            >
            <img
            src="/github-icon.png"
            alt="github"
            className="w-10 h-10 object-cover"
            />
          </a>
          <a
            href="mailto:tuemail@gmail.com"
            className="text-2xl text-gray-800 hover:text-gray-600"
          >
            <img
            src="/gmail-icon.png"
            alt="gmail"
            className="w-14 h-14 object-cover"
            />
          </a>
          <a
            href="https://twitter.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-600"
          >
            <img
            src="/x-icon.png"
            alt="x"
            className="w-14 h-14 object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-600"
          >
            <img
            src="/likedIn-icon.png"
            alt="likedIn"
            className="w-10 h-10 object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
