import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopicsSection from './components/TopicsSection';
import SolverSection from './components/SolverSection';
import PhilosophySection from './components/PhilosophySection';
import SDGSection from './components/SDGSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Animated background */}
      <div className="bg-mandala" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Traditional Knowledge Topics */}
        <TopicsSection />

        {/* 3. Interactive Problem Solver */}
        <SolverSection />

        {/* 4. Ecological Philosophy */}
        <PhilosophySection />

        {/* 5. SDG Alignment */}
        <SDGSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
