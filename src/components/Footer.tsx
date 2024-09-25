import type React from "react";
import { Github, Linkedin, X } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-white dark:bg-gray-800 shadow-md my-1 py-3">
			<div className="container mx-auto flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0">
				<div className="flex space-x-8">
					<a
						href="https://github.com/Jimboy78"
						className="dark:text-white dark:hover:text-gray-600"
					>
						<Github className="w-6 h-6" />
					</a>
					<a
						href="https://www.linkedin.com/in/sebastian-martini/"
						className="dark:text-white dark:hover:text-gray-600"
					>
						<Linkedin className="w-6 h-6" />
					</a>
					<a
						href="https://x.com/Jimboy_002"
						className="dark:text-white dark:hover:text-gray-600"
					>
						<X className="w-6 h-6" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
