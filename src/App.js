import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import ItemsCarousel from './components/carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/cards/Card';
import Featured from './components/featured/Featured';
import Newsletter from './components/newsletter/Newsletter';
import ExtraInfo from './components/extraInfo/ExtraInfo';
import Footer from './components/footer/Footer';


function App() {
  const style = {
    backgroundColor: '#E2E2E2',
    height: '380px',
  }
  return (
    <div>
      <Header />
      <Nav />
      <ItemsCarousel />
      <Featured />
      <Newsletter />
      <ExtraInfo />
      <Footer />
    </div>
  );
}

export default App;
