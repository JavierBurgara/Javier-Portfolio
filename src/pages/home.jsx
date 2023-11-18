import Navbar from '../component/Navbar';
import AboutMe from '../component/AboutMe';
import '../index.css'

const Home = () => {
    return (
        <div className='nav-about-container'>
            <Navbar/>
            <AboutMe/>
        </div>
    )
}

export default Home;