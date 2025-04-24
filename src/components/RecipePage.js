import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const RecipePage = () => {
  const recipe = {
    title: "Manoa Chocolate Cookie Bar",
    description: "A delightful Hawaiian chocolate cookie bar recipe using Manoa Chocolate. These chocolate bars combine the rich flavors of Hawaiian cacao with a crunchy, creamy texture.",
    ingredients: [
      "8 oz Manoa dark chocolate, chopped",
      "1/2 cup heavy cream",
      "1 tablespoon Hawaiian vanilla extract",
      "2 tablespoons Kona coffee, finely ground",
      "1/4 cup cocoa powder for coating",
      "Pinch of Hawaiian sea salt"
    ],
    instructions: [
      "Heat cream until just simmering",
      "Pour hot cream over chopped chocolate and let sit for 1 minute",
      "Stir until smooth and add vanilla extract",
      "Add ground Kona coffee and sea salt, mix well",
      "Chill mixture for 2 hours",
      "Roll into 1-inch balls",
      "Coat in cocoa powder",
      "Store in refrigerator until ready to serve"
    ],
    image: "/images/manoa-chocolate.jpg"
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" 
          sx={{ fontWeight: 'bold', color: '#2C3E50' }}>
          {recipe.title}
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Paper 
            elevation={3}
            sx={{
              height: 400,
              width: '100%',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                height: 'auto',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Paper>
        </Box>

        <Typography variant="h6" gutterBottom sx={{ color: '#34495E' }}>
          {recipe.description}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#2C3E50' }}>
                Ingredients
              </Typography>
              <ul style={{ paddingLeft: '20px' }}>
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Typography variant="body1" paragraph>
                      {ingredient}
                    </Typography>
                  </motion.li>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#2C3E50' }}>
                Instructions
              </Typography>
              <ol style={{ paddingLeft: '20px' }}>
                {recipe.instructions.map((instruction, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Typography variant="body1" paragraph>
                      {instruction}
                    </Typography>
                  </motion.li>
                ))}
              </ol>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default RecipePage;
