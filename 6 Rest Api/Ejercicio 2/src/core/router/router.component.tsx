import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { Home } from '@mui/icons-material';
import { CharacterContainer } from 'pods/hotel';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.characterCollection} element={<CharacterCollectionScene />} />
        <Route path="/character" element={<CharacterCollectionScene />} />
        <Route path="/character/:id" element={<CharacterContainer />} />
        <Route path="/character/:id/edit" element={<CharacterScene />} />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.characterCollection} />} />
      </Routes>
    </HashRouter>
  );
};
