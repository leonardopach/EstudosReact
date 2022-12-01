// components
import FirstComponents from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Challenge from './components/Challenge';

// styles
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponents/>
      <TemplateExpressions/>
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
