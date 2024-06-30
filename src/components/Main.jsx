import Experience from "./Experience.jsx";
import Ability from "./Ability.jsx";
import Project from "./Project.jsx";

export default function Main(){
  return(
    <>
      <main>
        <Experience/>
        <section id="habilities">
          <Ability/>
        </section>
        <section id="projects">
          <Project/>
        </section>
      </main>
    </>
  );
}