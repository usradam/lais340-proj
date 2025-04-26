import React from 'react';
import { motion } from 'framer-motion';
import './ArticlePage.css';

const ArticlePage = () => {
  const article = {
    title: "The Story of Manoa Chocolate: From Bean to Bar in Hawaii",
    subtitle: "How a small Kailua chocolate maker became one of Hawaii's premier craft chocolate producers",
    author: "Cascade Test Kitchen",
    date: "April 25, 2025",
    content: [
      {
        type: "text",
        content: "Nestled in the heart of Kailua, Oahu, Manoa Chocolate has been crafting award-winning chocolate from ethically sourced cacao since 2010. What started as a small experiment in a tiny workspace has grown into one of Hawaii's most respected chocolate makers, known for their commitment to quality, sustainability, and innovation."
      },
      {
        type: "heading",
        content: "The Hawaiian Cacao Renaissance"
      },
      {
        type: "text",
        content: "Hawaii is the only U.S. state where cacao can be grown commercially, thanks to its unique climate and geography. Manoa Chocolate has been at the forefront of promoting Hawaiian-grown cacao, working directly with local farmers to develop exceptional chocolate with distinct regional characteristics."
      },
      {
        type: "heading",
        content: "Bean-to-Bar Process"
      },
      {
        type: "text",
        content: "Unlike mass-produced chocolate, Manoa's bean-to-bar process ensures complete control over every step of chocolate making. From selecting the finest cacao beans to careful roasting, grinding, and tempering, each bar is crafted with meticulous attention to detail."
      },
      {
        type: "fact",
        title: "Did You Know?",
        content: "Manoa Chocolate sources cacao from various Hawaiian regions, each producing distinct flavor profiles due to different soil conditions and microclimates."
      },
      {
        type: "heading",
        content: "Sustainability and Innovation"
      },
      {
        type: "text",
        content: "Beyond creating exceptional chocolate, Manoa is committed to sustainable practices. They use solar power in their factory, environmentally friendly packaging, and support fair wages for cacao farmers. Their innovative flavors, like the Goat Milk Chocolate with Sea Salt and the Hawaiian Sea Salt Dark Chocolate, showcase local ingredients while pushing the boundaries of chocolate making."
      },
      {
        type: "fact",
        title: "Key Achievement",
        content: "Manoa Chocolate has won multiple awards at the International Chocolate Awards, including recognition for their single-origin Hawaiian bars."
      }
    ]
  };

  return (
    <div className="article-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <h2 className="article-subtitle">{article.subtitle}</h2>
          <div className="article-meta">
            <span>By {article.author}</span>
            <span className="article-date">{article.date}</span>
          </div>
        </header>

        <div className="article-content">
          {article.content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <motion.h2
                    key={index}
                    className="article-section-heading"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {section.content}
                  </motion.h2>
                );
              case 'fact':
                return (
                  <motion.div
                    key={index}
                    className="article-fact"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </motion.div>
                );
              default:
                return (
                  <motion.p
                    key={index}
                    className="article-paragraph"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {section.content}
                  </motion.p>
                );
            }
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ArticlePage;
