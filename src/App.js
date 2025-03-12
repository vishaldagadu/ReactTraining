import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './About';
import ContactPage from './Contact';
import Headers from './Components/Headers';
import Banner from './Components/Banner';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import ProductList from './ProductList';

function App() {
  return (
      <Router>
           <div className="App">
                <Headers />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/products" element={<ProductList />} />
                </Routes>
                <Banner />
                <section id="hero" className="hero">
                    <div className="hero-content">
                        <h1>Welcome to Our Awesome Product!</h1>
                        <p>Discover the amazing features that will change your life.</p>
                        <button>Get Started</button>
                    </div>
                </section>
                <ContactForm />
                <Footer />
            </div>
      </Router>
  );
}

export default App;