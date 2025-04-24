import React from 'react';
import { motion } from 'framer-motion';
import './RecipePage.css'; // We'll create this CSS file for styles

// SVGs for Print and Save
const PrintSVG = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5m-12 0a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2m-12 0h12" /></svg>
);
const SaveSVG = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
);

const RecipePage = () => {
  const recipe = {
    title: 'Manoa Chocolate Truffle Recipe',
    description:
      'A delightful Hawaiian chocolate truffle recipe using locally sourced Manoa Chocolate. These truffles combine the rich flavors of Hawaiian cacao with a smooth, creamy texture.',
    author: 'Adam Graham',
    date: 'April 23, 2025',
    cookTime: '2 hr 20 min',
    yield: '12 truffles',
    tags: ['Dessert', 'Hawaiian', 'Chocolate', 'Easy'],
    ingredients: [
      '8 oz Manoa dark chocolate, chopped',
      '1/2 cup heavy cream',
      '1 tablespoon Hawaiian vanilla extract',
      '2 tablespoons Kona coffee, finely ground',
      '1/4 cup cocoa powder for coating',
      'Pinch of Hawaiian sea salt',
    ],
    instructions: [
      'Heat cream until just simmering',
      'Pour hot cream over chopped chocolate and let sit for 1 minute',
      'Stir until smooth and add vanilla extract',
      'Add ground Kona coffee and sea salt, mix well',
      'Chill mixture for 2 hours',
      'Roll into 1-inch balls',
      'Coat in cocoa powder',
      'Store in refrigerator until ready to serve',
    ],
    image: '/images/manoa-chocolate.jpg',
  };

  return (
    <div className="nyt-bg">
      {/* Large Recipe Image */}
      <div
        className="nyt-image"
        style={{ backgroundImage: `url(${recipe.image})` }}
        aria-label={recipe.title}
      />
      <div className="nyt-container">
        {/* Title & Description */}
        <div className="nyt-paper nyt-header">
          <h1 className="nyt-title">{recipe.title}</h1>
          <div className="nyt-description">{recipe.description}</div>
          <div className="nyt-meta-row">
            <span className="nyt-meta">By {recipe.author}</span>
            <span className="nyt-divider" />
            <span className="nyt-meta">{recipe.date}</span>
            <span className="nyt-divider" />
            <span className="nyt-meta">{recipe.cookTime} • {recipe.yield}</span>
            <span className="nyt-divider" />
            <span className="nyt-tags">
              {recipe.tags.map(tag => (
                <span className="nyt-tag" key={tag}>{tag}</span>
              ))}
            </span>
          </div>
          <div className="nyt-action-row">
            <button className="nyt-btn" title="Save">
              <span className="nyt-btn-icon"><SaveSVG /></span> Save
            </button>
            <button className="nyt-btn" title="Print" onClick={() => window.print()}>
              <span className="nyt-btn-icon"><PrintSVG /></span> Print
            </button>
          </div>
        </div>
        {/* Two-column layout */}
        <div className="nyt-grid">
          <div className="nyt-col nyt-col-ingredients">
            <div className="nyt-paper nyt-section">
              <h2 className="nyt-section-title">Ingredients</h2>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.08 } },
                }}
                className="nyt-list nyt-ingredients-list"
              >
                {recipe.ingredients.map((ingredient, idx) => (
                  <motion.li
                    key={ingredient}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="nyt-list-item"
                  >
                    {ingredient}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <div className="nyt-col nyt-col-preparation">
            <div className="nyt-paper nyt-section">
              <h2 className="nyt-section-title">Preparation</h2>
              <motion.ol
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.08 } },
                }}
                className="nyt-list nyt-preparation-list"
              >
                {recipe.instructions.map((step, idx) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="nyt-list-item nyt-step"
                  >
                    {step}
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

