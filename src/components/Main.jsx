import Experience from "./Experience.jsx";
import Ability from "./Ability.jsx";
import Project from "./Project.jsx";
import cssSvg from "../assets/css.svg";
import htmlSvg from "../assets/html.svg";
import jsSvg from "../assets/javascript.svg";
import reactSvg from "../assets/react.svg";

export default function Main(){
  let frontSvgs = [htmlSvg, cssSvg, jsSvg, reactSvg];

  return(
    <>
      <main>
        <Experience/>
        <section id="abilities">
          <Ability side="Frontend" svgs={frontSvgs}/>
          {/*<Ability side="Backend"/>*/}
        </section>
        <Project id="project1"/>
        <Project id="project2"/>
        <Project id="project3"/>
      </main>
    </>
  );
}