import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'recipe', label: 'Recipe' },
    { id: 'article', label: 'About Manoa' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Choolate</h1>
        <nav className="header-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  className="tab-background"
                  layoutId="tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="tab-text">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
