import Experience from "./Experience.jsx";
import Ability from "./Ability.jsx";
import Project from "./Project.jsx";

export default function Main(){
  return(
    <>
      <main>
        <Experience/>
        <section id="abilities" className="box">
          Abilities
          <Ability/>
        </section>
        <Project id="project1"/>
        <Project id="project2"/>
        <Project id="project3"/>
      </main>
    </>
  );
}