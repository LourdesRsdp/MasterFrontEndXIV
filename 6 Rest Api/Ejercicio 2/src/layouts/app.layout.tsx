import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
        <Toolbar variant="dense">
          
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
