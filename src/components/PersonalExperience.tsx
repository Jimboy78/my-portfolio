import React from 'react';

const PersonalExperience: React.FC = () => {
  return (
    <section className="my-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold">Personal Experience</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Game Development - Global Game Jam - Unity 2D Developer</h3>
        <p className="italic text-sm">Jan. 2022</p>
        <p>A project for the Global Game Jam, which proposes developing a game in 48 hours. Participated as a time-pressured developer to implement part of the game's interface in C#, while learning the libraries used in Unity and collaborating in a GIT repository alongside my teammates.</p>
      </div>
    </section>
  );
};

export default PersonalExperience;
