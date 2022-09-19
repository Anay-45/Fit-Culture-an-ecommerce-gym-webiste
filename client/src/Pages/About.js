import NavBar from "../utils/Nav/NavBar";
import {Outlet} from 'react-router-dom';
import Card from "../utils/Card/Card";
import Footer from "../utils/Nav/Footer";
import background from './body-building-workout-royalty-free-image-612262390-1535040444.jpg'

const About = () => {
  return (
    <>
    <Card url={background}>
      <NavBar />
      <Outlet />
    </Card>
    <Footer />
    </>
  );
};

export default About;
