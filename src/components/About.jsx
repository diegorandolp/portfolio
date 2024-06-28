import photoDiego from '../assets/FotoLinkedinDiegoRecortada.png';
import circle from '../assets/orange-circle.png';

export default function About(){
  return(
    <div id="about" className="box">
      <section>
        <p>Developer</p>
        <div id="aboutMeText">
          <h1>I'm Diego Randolp</h1>
          <p>I code</p>
          <button>CONTACT ME</button>
          <button>Copy Email</button>
        </div>
      </section>
      <section id="rightSide">
        <div id="availability">
          <img src={circle} alt="orange-cicle"/>
          <p>Available for job</p>
        </div>
        <div id="myphoto">
          <img src={photoDiego} alt="Diego Randolp"/>
        </div>
      </section>
    </div>
  );
}