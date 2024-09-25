import type React from "react";

const Languages: React.FC = () => {
	return (
		<div className="p-6 border-b border-gray-200">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">Languages</h2>
			<ul className="list-disc ml-6 text-gray-600">
				<li>Spanish</li>
				<li>English</li>
			</ul>
		</div>
	);
};

export default Languages;
