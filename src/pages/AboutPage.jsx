import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AboutPage = () => {
    return(
        <div>
          <Header/>
          <div id="root">
          <div id="aqua">
           <h1 id="contain">About Vivekanand College</h1>
      <p id="p">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
       
       <p id="p"> Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
      </p>
      <h2 id="ok">Our Mission</h2><hr></hr>
      <ul id="ul">
        <li>To provide high-quality, accessible education across various disciplines.</li>
        <li>To provide high-quality, accessible education across various disciplines.</li>
        <li>To cultivate a diverse and inclusive learning environment.</li>
        <li>To cultivate a diverse and inclusive learning environment.</li>
      </ul>
      <h2 id="ok">Our Values</h2><hr></hr>
      <p id="p">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
      <h2 id="ok">Our History</h2><hr></hr>
      <p id="p">[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
       </div>
       </div>
       <Footer/>
        </div>
    )
}

export default AboutPage