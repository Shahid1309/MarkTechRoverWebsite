import React from 'react';
import { Box, Typography } from '@mui/material';

const InsightsWidget: React.FC = () => (
  <Box p={4} textAlign="center">
    <Typography variant="h5">AI Insights</Typography>
    <Typography color="text.secondary">This is where AI-generated insights and predictions will appear.</Typography>
  </Box>
);

export default InsightsWidget; 