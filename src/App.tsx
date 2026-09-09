import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Projects from './pages/Projects';
import TeamsAchievements from './pages/TeamsAchievements';
import JoinUs from './pages/JoinUs';
import Apply from './pages/Apply';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Routes>
            {/* Public Website Routes */}
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/community"
              element={
                <Layout>
                  <Community />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
            <Route
              path="/teams"
              element={
                <Layout>
                  <TeamsAchievements />
                </Layout>
              }
            />
            <Route
              path="/join"
              element={
                <Layout>
                  <JoinUs />
                </Layout>
              }
            />
            <Route
              path="/apply"
              element={
                <Layout>
                  <Apply />
                </Layout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              }
            />

            {/* Fallback 404 */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
