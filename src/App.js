import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RecipePage from './components/RecipePage';
import ArticlePage from './components/ArticlePage';
import Header from './components/Header';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('recipe');

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3
  };

  return (
    <div className="app">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {activeTab === 'recipe' ? <RecipePage /> : <ArticlePage />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
