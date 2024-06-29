import type React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="my-8 bg-white shadow-md rounded-lg p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <div className="text-lg text-gray-600 mb-4">
          <p>You can reach me at:</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">martiniseba78@gmail.com</span>
            <CopyToClipboard
              text="martiniseba78@gmail.com"
              onCopy={() => {setCopied(true)}}
            >
              <button className="text-white p-1 rounded-md hover:bg-slate-100 transition duration-300 flex items-center">
                <img
                  src={copied ? '/green-check-icon.png' : '/clip-icon.png'}
                  alt={copied ? 'Copied' : 'Copy'}
                  className="w-5 h-5"
                />
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-4">My social medias:</p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Jimboy78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <img
              src="/github-icon.png"
              alt="github"
              className="w-10 h-10 object-cover"
            />
          </a>
          <a
            href="https://x.com/Jimboy_002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <img
              src="/x-icon.png"
              alt="x"
              className="w-14 h-14 object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-martini/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <img
              src="/linkedin-icon.png"
              alt="linkedin"
              className="w-10 h-10 object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
