import Card from "../Components/Card";
import englishb from "../Assets/certificate1.png";
import englisha from "../Assets/certificate2.png";
import basiccyber from "../Assets/certificate3.png";
import rpa from "../Assets/certificate4.png";

function Certificates() {
  return (
    <section className="py-12 space-y-12">
      <div className="flex flex-col text-center">
        <div className="space-y-2">
          <div className="inline-block bg-neutral-900 text-white text-sm rounded-lg px-3 py-1">
            Certificates
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] mx-auto gap-3">
        <Card
          name="English B1.1 - Speexx"
          date="Issued Jul 2024"
          skills={["English"]}
          download="https://drive.google.com/file/d/1l9pCAZaq6xYkNvyFLjPRpKwFMhtuTo8u/view?usp=sharing"
          image={englishb}
        />
        <Card
          name="English A2 - Speexx"
          date="Issued Jul 2024"
          skills={["English"]}
          download="https://drive.google.com/file/d/1fQIgInwBgBk4xKaM-KIbV7aLW7AAB1q8/view?usp=sharing"
          image={englisha}
        />
        <Card
          name="Basic Cybersecurity - NCSA Mooc"
          date="Issued Mar 2024"
          skills={["Cybersecurity"]}
          download="https://drive.google.com/file/d/1K17BwOZFOW9x8cTP7Is5cHq8-2ZV11J_/view?usp=sharing"
          image={basiccyber}
        />
        <Card
          name="RPA Developer Foundation - UiPath"
          date="Issued Oct 2023"
          skills={["RPA", "UiPath"]}
          download="https://drive.google.com/file/d/1LVRL4L5mtoZcdvIi6zK5EdvCLUx7HU8X/view?usp=sharing"
          image={rpa}
        />
      </div>
    </section>
  );
}

export default Certificates;
