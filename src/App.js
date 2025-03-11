import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">My Landing Page</div>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Awesome Product!</h1>
          <p>Discover the amazing features that will change your life.- Vishal Dagadu</p>
          <button>Get Started</button>
        </div>
      </section>

      <footer>
        <p>&copy; Created by Vishal Dagadu</p>
        <img src="/images/VishalPhoto.jpg" alt="Description" style={{ width: '100px', height: 'auto' }}/>
      </footer>
    </div>
  );
}

export default App;