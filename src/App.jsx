import Header from './components/Header';
import Background from './components/Background';
import About from './components/About';
import Prerequisites from './components/Prerequisites';
import Journey from './components/Journey';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="conteudo">
        <Background />
        <About />
        <Prerequisites />
        <Journey />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
