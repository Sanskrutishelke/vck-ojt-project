import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
    return(
        <div>
            <Header/>
         <div id="root">
          <div id="aqua">
          <h1 id="contain">Contact Us</h1>
      <p id="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
      <h2 id="ok">General Enquiries</h2>
      <hr></hr>
      <h4 id="h4">Vivekanad Collge Main Campus</h4>
      <p id="p">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
      India</p>
      <p id="p">Phone: **+91 12345 67890**<br></br>
        Email: **info@vivekanandcollege.edu**<br></br>
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
      <h2 id="ok">Admissions Office</h2><hr></hr>
      <p id="p">
        For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
        Phone: +91 98765 43210<br></br>
        Email: admissions@vivekanandcollege.edu
      </p>
      <h2 id="ok">Student Support Services</h2><hr></hr>
      <p id="p">
        For current student support, academic advising, or general assistance:<br></br>
        Phone: +91 87654 32109<br></br>
        Email: studentsupport@vivekanandcollege.edu
      </p>
      <h2 id="ok">Find Us on the Map</h2>
      <hr></hr>
      <p id="p">
        [You can embed a Google Map here later using an iframe or a React map library.]<br></br>
        <a href="https://www.bing.com/maps?q=vck+kolhapur+map&FORM=HDRSC6&cp=16.711404%7E74.245112&lvl=16.0">View on Google Maps</a>
      </p>
     <h2 id="ok">Send Us a Message</h2>
      <hr></hr>
        <p id="p">
          [A contact form with fields for Name, Email, Subject, Message can be added here.]
        </p>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ContactPage