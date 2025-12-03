import React from 'react';
import { Box, Typography } from '@mui/material';

const ClientList: React.FC = () => (
  <Box p={4} textAlign="center">
    <Typography variant="h5">Clients List</Typography>
    <Typography color="text.secondary">This is where your clients will appear.</Typography>
  </Box>
);

export default ClientList; 