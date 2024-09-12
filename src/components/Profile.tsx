import type React from "react";
import SoftSkills from "./SoftSkills";
import Languages from "./Languages";
import Contact from "./Contact";

const Profile: React.FC = () => {
	return (
		<div className="flex">
			<div className="my-8 bg-white shadow-lg shadow-gray-200 rounded-lg p-6 mx-auto md:flex md:flex-row md:max-w-7xl md:mx-auto w-3/4">
				<div className=" md:mr-6 ">
					<div className="flex flex-col items-center mb-6">
						<h1 className="text-3xl font-bold mb-2 text-gray-800">
							Sebastian Martini
						</h1>
						<p className="text-gray-600">Full Stack Software Developer</p>
					</div>
					<div className="text-gray-700 leading-relaxed space-y-4">
						<p className="text-lg">
							🌟 I am a passionate{" "}
							<strong>Full Stack Software Developer</strong> with extensive
							experience across various technologies and projects. My career
							spans from managing online game servers to creating utility
							scripts and developing websites. 💼 I immerse myself fully into
							the computer world, surrounding myself with technology and
							constantly seeking to expand my knowledge and skills. 🌐
						</p>
						<p className="text-lg">
							💻 Over the years, I have worked with a variety of programming
							languages and frameworks, including <strong>JavaScript</strong>,{" "}
							<strong>Python</strong>, <strong>Java</strong>, and{" "}
							<strong>C#</strong>. 🖥️ I have a solid understanding of both{" "}
							<strong>frontend</strong> and <strong>backend development</strong>
							, and I am proficient in modern technologies such as{" "}
							<strong>React</strong>, <strong>Node.js</strong>, and{" "}
							<strong>Docker</strong>. My diverse skill set allows me to tackle
							complex problems and deliver high-quality solutions. 🔧
						</p>
						<p className="text-lg">
							🚀 I have successfully led multiple projects from conception to
							deployment, often taking on the role of both developer and project
							manager. 📈 My ability to communicate effectively with
							stakeholders and team members ensures that projects are completed
							on time and meet all requirements. I am particularly skilled in{" "}
							<strong>Agile methodologies</strong>, which I use to manage
							workflows and ensure continuous improvement. 📊
						</p>
						<p className="text-lg">
							📚 In addition to my technical skills, I am also committed to
							continuous learning and professional development. 🎓 I regularly
							attend industry conferences, participate in online courses, and
							contribute to open-source projects. I believe that staying current
							with the latest trends and technologies is crucial in the
							ever-evolving field of <strong>software development</strong>. 🌱
						</p>
						<p className="text-lg">
							🔥 I am always eager to expand my knowledge and judgement as I
							contribute to my tasks, taking as much ownership as possible of
							the projects I work on. I thrive in challenging environments and
							am constantly seeking opportunities to grow both personally and
							professionally. 🌟
						</p>
						<p className="text-lg">
							🎮 My career spans from managing online game servers to creating
							utility scripts and developing websites. 🛠️ I immerse myself fully
							into the computer world, surrounding myself with technology and
							constantly seeking to expand my knowledge and skills. 🌐
						</p>
						<p className="text-lg">
							🛠️ I am always eager to expand my knowledge and judgement as I
							contribute to my tasks, taking as much ownership as possible of
							the projects I work on. 📈
						</p>
					</div>
				</div>
			</div>
			<div className="md:ml-6">
				<SoftSkills />
				<Languages />
				<Contact />
			</div>
		</div>
	);
};

export default Profile;
