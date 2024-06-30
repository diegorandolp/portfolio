import photoDiego from '../assets/FotoLinkedinDiegoRecortada.png';
import addIcon from '../assets/add-outline.svg';
import copyIcon from '../assets/copy-outline.svg';
import radioIcon from '../assets/radio-button-on.svg';

export default function About(){
  return(
    <div id="about" className="box">
      <section id="myinfo">
        <p>Developer</p>
        <br/>
        <h1>I'm Diego Randolp</h1>
        <p>I code</p>
        <div id="buttonsAbout">
          <button className="button">
            <span className="buttonText">CONTACT ME</span>
            <span className="buttonIcon"><img src={addIcon} alt="addIcon"/></span>
          </button>
          <button className="button2">
            <span className="buttonText2">COPY EMAIL</span>
            <span className="buttonIcon2"><img src={copyIcon} alt="copyIcon"/></span>
          </button>
        </div>
      </section>
      <section id="myphoto">
        <div id="availability">
          <span id="availableIcon"><img src={radioIcon} alt="radioIcon"/></span>
          <p id="availableText">AVAILABLE FOR JOB</p>
        </div>
        <span id="myphotoImg">
          <img src={photoDiego} alt="Diego Randolp"/>
        </span>
      </section>
    </div>
  );
}