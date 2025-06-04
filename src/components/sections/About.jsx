export const About = () => {
  const techSkill = [
    "React",
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "TailwindCSS",
    "Flutter",
    "Dart",
    "PHP",
    "GDScript",
    "GML",
  ];
  const otherSkills = [
    "Video Editing",
    "Photo Editing",
    "Graphic Design",
    "Digital Art",
    "Logo Design",
    "UI/UX Design",
    "Blender 3D",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          About me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            I’m currently learning front-end web development (React, HTML,
            JavaScript, TypeScript) and exploring graphic design tools like
            Adobe Photoshop, Illustrator, and Figma. I enjoy solving problems
            through design and love experimenting with design concepts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transistion-all">
              <h3 className="text-xl font-bold mb-4">Programming Skills</h3>
              <div className="flex flex-wrap gap-2">
                {techSkill.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transistion-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transistion-all">
              <h3 className="text-xl font-bold mb-4">Other Tech Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transistion"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.S in Computer Science</strong> - Tarlac State
                University (2021 - Current)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Wireless Access For Health - Graphic Designer
                </h4>
                <p className="text-gray-400 font-light text-sm">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
