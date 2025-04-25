import React from 'react';
import { motion } from 'framer-motion';
import './History.css'; // We'll create this CSS file for styles

// SVGs for Print and Save
const PrintSVG = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5m-12 0a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2m-12 0h12" /></svg>
);
const SaveSVG = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
);

const HistoryPage = () => {
  const recipe = {
    title: 'Manoa Chocolate Cookie Bar Recipe',
    description:
      'A delightful Hawaiian chocolate cookie bar recipe incorporating Manoa Chocolate. These cookie bars combine the rich flavors of Hawaiian cacao with a crunchy and creamy texture.',
    author: 'Adam Graham',
    date: 'April 23, 2025',
    cookTime: '50 min + 45 min cooling',
    yield: '16 bars',
    tags: ['Dessert', 'Hawaiian', 'Chocolate', 'Easy'],
    ingredients: [
      '1/2 cup (110g) + 1 tbsp unsalted butter*',
      '1/2 cup (110g) + 1 tbsp unsalted butter*',
      '1 large egg',
      '1 1/2 tsp vanilla extract',
      '1 1/4 cups (165g) all purpose flour',
      '1/2 tsp baking powder',
      '3/4 tsp kosher salt',
      '1 cup (185g) of broken up pieces of Manoa Chocolate, plus more for sprinkling on top',
    ],
    instructions: [
      'Add 1/2 cup of the unsalted butter to a saucepan over medium heat. Melt down and continue to stir until it goes from load and bubbly to quiet and frothy. Once it goes quiet, pay attention to the color as it will brown very fast.',
      'When the butter is a golden amber color and gives off a nutty aroma, remove from heat and pour into a measuring glass. Drop in the additional 1 tablespoon of butter to make it an even 1/2 cup. *Make sure it measures exactly 1/2 cup so it may take more or less than 1 tablespoon. Transfer the butter to the refrigerator to cool while the rest of the ingredients are prepped.',
      'Preheat the oven to 350F and grease and line a square 8×8 baking dish with parchment paper. Allow the paper to hang up and over the sides for easy removal.',
      'In a small bowl, whisk together the flour, baking powder, and salt.',
      'In a large mixing bowl, add the dark brown sugar, sugar, and browned butter. It’s ok if the butter is still a bit warm, but not hot. Whisk to combine.',
      'Whisk in the vanilla and egg.',
      'Switch to a rubber spatula and pour in the dry ingredients. Gently mix to combine and when there’s still a bit of flour showing, toss in the Mano Chocolate pieces.',
      'Fold the dough to combine.',
      'Transfer the dough to the prepared baking pan and spread it even. Sprinkle with a couple handfuls of Manoa Chocolate chunks and press them into the surface.',
      'Bake for 25-30 minutes. The bars are done with the edges are a very light golden brown and the center is evenly and slightly puffed.',
      'When the bars are fresh from the oven, sprinkle with a couple pinches of sea salt.',
      'Allow the bars to cool in the pan for about 45 minutes at room temp. You can also place the pan in the refrigerator to speed up the process.',
      'Once cooled (but ever-so-slightly warm), lift the bars out of the pan and slice in 16 squares. Enjoy!',
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

export default HistoryPage;

