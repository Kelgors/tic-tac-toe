import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreditsPage } from './pages/credits/CreditsPage';
import { EndPage } from './pages/end';
import { HomePage } from './pages/home';
import { PlayPage } from './pages/play/index';
import { SelectDifficultyPage } from './pages/select-difficulty';
import { SelectModePage } from './pages/select-mode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-mode" element={<SelectModePage />} />
          <Route path="/select-difficulty" element={<SelectDifficultyPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="/credits" element={<CreditsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
