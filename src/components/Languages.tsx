import type React from "react";

const Languages: React.FC = () => {
	return (
		<section className="my-8 bg-white shadow-lg shadow-gray-200 rounded-lg p-6">
			<h2 className="text-2xl font-bold bg-gray-800 p-2 rounded-md text-white">
				Languages
			</h2>
			<ul className="list-disc ml-6 mt-4">
				<li className="text-lg">Spanish</li>
				<li className="text-lg">English</li>
			</ul>
		</section>
	);
};

export default Languages;
