import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Recruitment } from './components/Recruitment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Portfolio />
      <Team />
      <Recruitment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
