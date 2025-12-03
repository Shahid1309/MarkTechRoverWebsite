import React from 'react';
import { Box, Typography } from '@mui/material';

const InvoiceGenerator: React.FC = () => (
  <Box p={4} textAlign="center">
    <Typography variant="h5">Invoice Generator</Typography>
    <Typography color="text.secondary">This is where you can generate and manage invoices.</Typography>
  </Box>
);

export default InvoiceGenerator; 