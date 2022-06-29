import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import NoPage from './pages/NoPage';
import ConversationPage from './pages/ConversationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="conversation" element={<ConversationPage />} />
            <Route path="stats" element={<StatisticsPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
