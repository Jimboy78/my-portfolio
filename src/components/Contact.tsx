import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Github, Linkedin, X } from "lucide-react";

const Contact: React.FC = () => {
	const [copied, setCopied] = useState(false);

	return (
		<section
			id="contact"
			className="my-8 bg-white shadow-lg shadow-gray-200 rounded-lg p-6"
		>
			<div className="max-w-4xl mx-auto ">
				<h2 className="text-2xl font-bold mb-4 bg-gray-800 p-2 rounded-md text-white">
					Contact
				</h2>
				<div className="text-lg text-gray-600 mb-4">
					<p>You can reach me at:</p>
					<div className="flex items-center space-x-2">
						<span className="font-semibold">martiniseba78@gmail.com</span>
						<CopyToClipboard
							text="martiniseba78@gmail.com"
							onCopy={() => {
								setCopied(true);
							}}
						>
							<button className=" text-white p-1 rounded-md hover:bg-slate-100 transition duration-300 flex items-center">
								<img
									src={copied ? "/green-check-icon.png" : "/clip-icon.png"}
									alt={copied ? "Copied" : "Copy"}
									className="w-5 h-5"
								/>
							</button>
						</CopyToClipboard>
					</div>
				</div>
				<p className="text-lg text-gray-600 mb-4">My social medias:</p>
				<div className="flex space-x-4">
					<a
						href="https://github.com/Jimboy78"
						className="dark:text-black dark:hover:text-gray-600"
					>
						<Github className="w-6 h-6" />
					</a>
					<a
						href="https://www.linkedin.com/in/sebastian-martini/"
						className="dark:text-black dark:hover:text-gray-600"
					>
						<Linkedin className="w-6 h-6" />
					</a>
					<a
						href="https://x.com/Jimboy_002"
						className="dark:text-black dark:hover:text-gray-600"
					>
						<X className="w-6 h-6" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
