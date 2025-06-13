import React from "react";
import Header from "../components/Header/Header"
import { Link} from "react-router-dom";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return(
        <div>
            <Header/>
        
          <div id="root">
            <div id="aqua">
                <div id="container">
        <div><br></br>
         <div id="page">
                <h1 id="contain">Welcome To Vivekanand College!</h1>
                <h2 id="all">Your journey to excellence starts here.</h2>
               <div className="btn"><a href="/admissionpage"><b><button id="me">Apply Now!</button></b></a></div></div>
                <p id="p">**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>

                 <p id="p">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped</p>
                <h1 id="h1">Why Choose Vivekanand College?</h1><hr></hr>
                <ul id="ul">
                    <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                    <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                    <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                    <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
                </ul>
            <h1 id="h1">Campus Life & Facilities</h1><hr></hr>
           <div className="img"><img src="/Images/college1.jpeg" height="250"width="700"/>
            <img src="/Images/college2.jpg" height="250"width="700"/></div>
            <p id="p">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
           <div id="text"><p >Ready to explore our courses?</p>
                <a href="/coursespage"><button id="me">Explore Courses</button></a></div><br></br>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
            </div>
            
        
    )
}

export default HomePage;