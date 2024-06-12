import About from './About';
import './App.css';
import NavBar from './NavBar';
import Separator from './Sepatator';
import Projects from './Projects';
import SkillsCharacter from './SkillsCharacter';
import Summary from './Summary';

function App() {
    return (
        <div className="App">
            <NavBar />
            <About />
            <Separator param="Projects"/>
            <Projects />
            <SkillsCharacter />
            <Separator />
            <Summary />
        </div>
    );
}

export default App;
