import Card from "../Components/Card";
import csms from "../Assets/project1.png";
import cashflow from "../Assets/project2.png";
import memeapp from "../Assets/project3.png";
import coffeeshop from "../Assets/project4.png";
import hotelpulse from "../Assets/project5.png";
import figma from "../Assets/project6.png";

function Projects() {
  return (
    <section className="py-16 space-y-12">
      <div className="flex flex-col text-center">
        <div className="space-y-2">
          <div className="inline-block bg-neutral-900 text-white text-sm rounded-lg px-3 py-1">
            My Projects
          </div>
          <h2 className="font-bold text-3xl sm:text-5xl">
            Check out my latest work
          </h2>
          <p className="text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] mx-auto gap-3">
        <Card
          name="Coffee Shop Management System Web Application"
          date="Aug 2024 - Present"
          description="Senior Project - Design and Develop"
          skills={[
            "React.js",
            "NestJS",
            "TypeScript",
            "TypeORM",
            "MySQL",
            "TailwindCSS",
            "Figma",
          ]}
          image={csms}
        />
        <Card
          name="Money Saving Mobile Application - CashFlow"
          date="Apr 2024 - May 2024"
          description="Project Owner and Develop"
          skills={[".NET MAUI", "C#", "SQLite", "Figma"]}
          git="https://github.com/thanaphon-namj/cashflow"
          image={cashflow}
        />
        <Card
          name="Meme Web Application - MemeApp"
          date="Nov 2023 - Dec 2023"
          description="Design and Develop"
          skills={[
            "Vue.js",
            "NestJS",
            "TypeScript",
            "TypeORM",
            "MySQL",
            "Bootstrap",
            "Figma",
          ]}
          git="https://github.com/thanaphon-namj/meme-app"
          image={memeapp}
        />
        <Card
          name="Coffee Shop POS Web Application"
          date="Feb 2023 - Mar 2023"
          description="Design and Develop"
          skills={[
            "Vue.js",
            "TypeScript",
            "Laravel",
            "PHP",
            "MySQL",
            "Bootstrap",
            "Figma",
          ]}
          git="https://github.com/thanaphon-namj/coffee-shop"
          image={coffeeshop}
        />
        <Card
          name="Hotel Management System Program - Hotel Pulse"
          date="Nov 2022 - Dec 2022"
          description="Project Owner and Develop"
          skills={["NetBeans", "Java", "Firebase", "Figma"]}
          git="https://github.com/thanaphon-namj/hotelpulse"
          image={hotelpulse}
        />
        <Card
          name="IT Shopping Application"
          date="Oct 2022 - Nov 2022"
          description="Design"
          skills={["Figma"]}
          url="https://shorturl.at/nZmTU"
          image={figma}
        />
      </div>
    </section>
  );
}

export default Projects;
