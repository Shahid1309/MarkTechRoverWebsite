import React from 'react';
import { Box, Typography } from '@mui/material';

const CampaignList: React.FC = () => (
  <Box p={4} textAlign="center">
    <Typography variant="h5">Campaigns</Typography>
    <Typography color="text.secondary">This is where you can view campaign history and performance.</Typography>
  </Box>
);

export default CampaignList; 