import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Projects2 } from "./components/sections/Projects2";
import "./index.css";
import { Contact } from "./components/sections/Contact";

const featureProject1 = "Web & UI/UX Design Project";
const featureProject1Description =
  "Here are some of my recent projects that showcase my skills in web development and design.";

const projects = [
  {
    id: 1,
    title: "Erwinify Project",
    description:
      "Erwinify is a place where you can play songs from the following artists: Brunon Mars, The Weeeknd, Joji, Zwing.",
    image: "/projects/project1.png",
    imageHD: "/projects/project1.png", // Optional high-definition image
    tags: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/KashiX03/erwinify",
  },
  {
    id: 2,
    title: "Genshin Impact - Amber",
    description: "A simple Genshin Impact character page showcasing Amber.",
    image: "/projects/project2.jpg",
    imageHD: "/projects/project2.png",
    tags: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/KashiX03/amber-genshin",
  },
  {
    id: 3,
    title: "Precision Calorie Tracker",
    description:
      "A simple calorie tracker application to help you manage your daily calorie intake.",
    image: "/projects/project3.jpg",
    imageHD: "/projects/project3.png",
    tags: ["Bootstrap", "HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/KashiX03/precision-colorie-tracker",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "A simple Spotify clone application that shows the UI design of the Spotify app.",
    image: "/projects/project4.jpg",
    imageHD: "/projects/project4.png",
    tags: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/KashiX03/spotify-playlist-interface",
  },
  {
    id: 5,
    title: "AI Question Generator",
    description: "a tool that creates text and math based questions. ",
    image: "/projects/project5.jpg",
    imageHD: "/projects/project5.png",
    tags: ["React", "MaterialUI", "TailwindCSS"],
    demoUrl: "https://generator-matui-xymy.vercel.app/",
    githubUrl: "https://github.com/KashiX03/generator-matui",
  },
  {
    id: 5,
    title: "EJFLIX - Twinkling Watermelon",
    description: "A simple movie streaming application that shows the UI design of the EJflix app made in Photoshop.",
    image: "/projects/project6.jpg",
    imageHD: "/projects/project6.png",
    tags: ["Photoshop", "UI Design", "Web Design"],

  },
];

const featureProject2 = "Branding and Print Design Project";
const featureProject2Description =
  "Here are some of my recent projects that showcase my skills in Designing and Layouting.";
const graphicsProjects = [
  {
    id: 1,
    image: "/grProject/project1.jpg",
    imageHD: "/grProject/project1.png",
  },
  {
    id: 2,
    image: "/grProject/project2.jpg",
    imageHD: "/grProject/project2.png",
  },
  {
    id: 3,
    image: "/grProject/project12.jpg",
    imageHD: "/grProject/project12.png",
  },
  {
    id: 4,
    image: "/grProject/project15.jpg",
    imageHD: "/grProject/project15.png",
  },
  {
    id: 5,
    image: "/grProject/project13.jpg",
    imageHD: "/grProject/project13.png",
  },
  {
    id: 6,
    image: "/grProject/project14.jpg",
    imageHD: "/grProject/project14.png",
  },
];

const featureProject3 = "Digital Art Project";
const featureProject3Description =
  "Here are some of my recent projects that showcase my skills in digital art.";
const illustrationProjects = [
  {
    id: 1,
    image: "/grProject/project3.jpg",
    imageHD: "/grProject/project3.png",
  },
  {
    id: 2,
    image: "/grProject/project4.jpg",
    imageHD: "/grProject/project4.png",
  },
  {
    id: 3,
    image: "/grProject/project5.jpg",
    imageHD: "/grProject/project5.png",
  },
  {
    id: 4,
    image: "/grProject/project6.jpg",
    imageHD: "/grProject/project6.png",
  },
  {
    id: 5,
    image: "/grProject/project7.jpg",
    imageHD: "/grProject/project7.png",
  },
  {
    id: 6,
    image: "/grProject/project8.jpg",
    imageHD: "/grProject/project8.png",
  },
  {
    id: 7,
    image: "/grProject/project9.jpg",
    imageHD: "/grProject/project9.png",
  },
  {
    id: 8,
    image: "/grProject/project10.jpg",
    imageHD: "/grProject/project10.png",
  },
  {
    id: 9,
    image: "/grProject/project11.jpg",
    imageHD: "/grProject/project11.png",
  },
  {
    id: 10,
    image: "/grProject/project16.jpg",
    imageHD: "/grProject/project16.png",
  },
  {
    id: 11,
    image: "/grProject/project18.jpg",
    imageHD: "/grProject/project18.png",
  },
  {
    id: 12,
    image: "/grProject/project19.jpg",
    imageHD: "/grProject/project19.png",
  },
  {
    id: 13,
    image: "/grProject/project20.jpg",
    imageHD: "/grProject/project20.png",
  },
  {
    id: 14,
    image: "/grProject/project21.jpg",
    imageHD: "/grProject/project21.png",
  },
  {
    id: 15,
    image: "/grProject/project22.jpg",
    imageHD: "/grProject/project22.png",
  },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects2
          title={featureProject1}
          description={featureProject1Description}
          projects={projects}
          withButton={true}
          withLink={true}
          withTag={true}
        />
        <Projects2
          title={featureProject2}
          description={featureProject2Description}
          projects={graphicsProjects}
          withTag={false}
          withDetails={false}
          cols="2"
        />
        <Projects2
          title={featureProject3}
          description={featureProject3Description}
          projects={illustrationProjects}
          withTag={false}
          withDetails={false}
          cols="2"
        />
        <Contact />
      </div>
    </>
  );
}

export default App;
