/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from "react";
import { Github, Linkedin, X } from "lucide-react";

const Profile: React.FC = () => {
	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf"; // Cambia esta ruta a donde esté tu CV
		link.download = "resume.pdf"; // Nombre del archivo descargado
		document.body.append(link);
		link.click();
		link.remove();
	};

	return (
		<div className="max-w-7xl mx-auto p-6 px-4 sm:px-6 lg:px-8">
			{/* Contenedor principal con dos columnas */}
			<div className="md:grid md:grid-cols-2 items-center">
				{/* Columna de información personal y redes */}
				<div className="flex flex-col items-start space-y-4 ml-10">
					<h1 className="text-4xl font-bold text-white">Sebastian Martini</h1>
					<p className="text-xl text-gray-600">Full Stack Software Developer</p>
					<p className="text-lg text-gray-500">
						📍 Ubicación: Rosario, Argentina
					</p>

					<div className="flex space-x-2 text-white items-center mt-4">
						<button
							onClick={handleDownloadCV}
							className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
						>
							Descargar CV
						</button>
						<a
							href="https://github.com/Jimboy78"
							className=" hover:text-gray-600"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/sebastian-martini/"
							className=" hover:text-gray-600"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a href="https://x.com/Jimboy_002" className=" hover:text-gray-600">
							<X className="w-6 h-6" />
						</a>
					</div>
				</div>

				{/* Columna de foto de perfil */}
				<div className="flex md:justify-center mt-8 md:mt-0 ">
					<img
						src="/perfil-photo.jpeg"
						alt="Foto de Sebastian Martini"
						className="w-60 h-60 rounded-full "
					/>
				</div>
			</div>

			{/* Sección del perfil debajo */}
			<div className="mt-8 p-8 shadow rounded-xl">
				<h2 className="text-3xl font-semibold text-white mb-6">Perfil</h2>
				<div className="text-white space-y-4">
					<p className="text-lg">
						🌟 I am a passionate <strong>Full Stack Software Developer</strong>{" "}
						with extensive experience across various technologies and projects.
						My career spans from managing online game servers to creating
						utility scripts and developing websites. 💼
					</p>
					<p className="text-lg">
						💻 Over the years, I have worked with a variety of programming
						languages and frameworks, including <strong>JavaScript</strong>,{" "}
						<strong>Python</strong>, <strong>Java</strong>, and{" "}
						<strong>C#</strong>. 🖥️
					</p>
					<p className="text-lg">
						🚀 I have successfully led multiple projects from conception to
						deployment, often taking on the role of both developer and project
						manager. 📈
					</p>
					<p className="text-lg">
						📚 In addition to my technical skills, I am also committed to
						continuous learning and professional development. 🎓
					</p>
					<p className="text-lg">
						🔥 I am always eager to expand my knowledge and judgement as I
						contribute to my tasks, taking as much ownership as possible of the
						projects I work on. 🌟
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
