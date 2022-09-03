import dynamic from 'next/dynamic';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function asyncComponent(importComponent) {
  return dynamic(importComponent, {
    loading: () => <CircularProgress />,
  });
}
