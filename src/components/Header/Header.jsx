import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
        
                <nav id="navbar">
                <Link id="n" to='/homepage'>Home</Link>
                <Link id="n" to='/admissionpage'></Link>
                <Link  id="n"to='/aboutpage'>About</Link>
                <Link  id="n"to='/coursespage'>Courses</Link>
                <Link  id="n"to='/contactpage'>Contact</Link>
                <Link to='/admissionpage'><button id="me">Apply Now!</button></Link>
            
            </nav>
        </header>
    )
}

export default Header