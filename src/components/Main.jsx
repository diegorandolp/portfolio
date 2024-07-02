import Experience from "./Experience.jsx";
import Ability from "./Ability.jsx";
import Project from "./Project.jsx";
import cssSvg from "../assets/css.svg";
import htmlSvg from "../assets/html.svg";
import jsSvg from "../assets/javascript.svg";
import reactSvg from "../assets/react.svg";
import fastapi from "../assets/fastapi.svg";
import java from "../assets/java.svg";
import postgres from "../assets/postgres.svg";
import python from "../assets/python.svg";
import spring from "../assets/spring.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg";
import excel from "../assets/excel.svg";
import linux from "../assets/linux.svg";
import powerbi from "../assets/powerbi.svg";

export default function Main(){
  let frontSvgs = [htmlSvg, cssSvg, jsSvg, reactSvg];
  let backSvgs = [postgres, fastapi, python, java, spring];
  let otherSvgs = [aws, docker, excel, powerbi, linux];

  return(
    <>
      <main>
        <Experience/>
        <section id="abilities">
          <Ability side="Frontend" svgs={frontSvgs}/>
          <Ability side="Backend" svgs={backSvgs}/>
          <Ability side="Other" svgs={otherSvgs}/>
        </section>
        <Project id="project1"/>
        <Project id="project3"/>
      </main>
    </>
  );
}