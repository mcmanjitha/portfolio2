import styles from "./App.module.css";
import { About } from "./components/About/About";
import CardSlider from "./components/CardSlider/CardSlider";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CardSlider />
      <Contact />

    </div>
  );
}

export default App;
