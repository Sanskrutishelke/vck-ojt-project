import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CoursesPage = () => {
    return(
        <div>
            <Header/>
          <div id="root">
            <div id="aqua">
              <br></br>
              <div id="container">
           <h1 id="contain">Our Academic Programs</h1> 
           <p id="p">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
         </p>
        <h2 id="ok">Discover Campus Life</h2><hr></hr>
      <div className="img"><video src="/Videos/college.mp4" controls autoplay heigth="250"width="900"></video></div>
        <p>Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
     <h2 id="ok">Undergraduate Programs(UG)</h2>
      <hr></hr>
      <ul id="ul">
      <li>**Bachelor of Science (B.Sc.)**</li>
      <ul>
       <li>Computer Science (3 years)</li>
       <li>Information Technology (3 years)</li>
       <li>Biotechnology (3 years)</li>
       </ul>

       <li>**Bachelor of Commerce (B.Com)**</li>
       <ul>
        <li>Accounting & Finance (3 years)</li>
        <li>Banking & Insurance (3 years)</li>
        </ul>

      <li>**Bachelor of Arts (B.A.)**</li>
      <ul>
       <li>English Literature (3 years)</li>
       <li>Psychology (3 years)</li>
       </ul>
      </ul>
      <h2 id="ok">Postgraduate Programs (PG)</h2>
      <hr></hr>
      <ul id="ul">
        <li>**Master of Science (M.Sc.)**</li>
        <ul>
        <li>Computer Science (2 years)</li>
        <li>Information Technology (2 years)</li>
        </ul>

        <li>**Master of Commerce (M.Com)** (2 years)</li>
        <li>**Master of Arts (M.A.)** (2 years)</li>
      </ul>
      <h2 id="ok">Program Details & Fee Structure (Annual)</h2><hr></hr>
      <table border="1px">
        <tr>
            <th>Program Type</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Annual Fee(INR)</th>
            <th>Eligibility</th>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science	</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
        </tr>
        <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
        </tr>
      </table>
      <h2 id="ok">Specialized & Vocational Courses</h2><hr></hr>
      <p id="p">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
      <div id="text"><p>Have questions about a specific course?</p>
        <a href="/contactpage"><button id="me">Inquire About Courses</button></a></div><br></br>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CoursesPage