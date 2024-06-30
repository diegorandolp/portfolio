export default function Experience() {
  function ExperienceElement({position, company, date, ...props}){
    return(
      <section className="expElement" {...props}>
        <div className="leftSideExpElement">
          <h3>{position}</h3>
          <p>{date}</p>
        </div>
        <p>{company}</p>
      </section>
    )
  }

  return (
    <div id="experience" className="box">
      <h2>Experience</h2>
      <ExperienceElement id="currentPosition" position="Programming tutor" company="Robbuild" date="june 2024 - present"/>
      <ExperienceElement position="English tutor" company="Hacedores" date="september 2023 - december 2023"/>
      <ExperienceElement position="Academic mentor" company="UTEC" date="march 2022 – june 2022"/>
    </div>
  )
}