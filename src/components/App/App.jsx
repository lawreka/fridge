import React, { useState, useEffect, useCallback } from 'react';

import { Fridge } from '../Fridge/Fridge';
import { Menu } from '../Menu/Menu';
import { getRandomPosition } from '../Input/utils';

import { AppWrapper } from './styles';
import { sampleWords } from './constants';

export const App = () => {
  const [fragments, setFragments] = useState({});
  const [deletedFragments, setDeletedFragments] = useState(0);

  const addFragment = (nu) => {
    const old = fragments;
    const index = Object.keys(old).length + 1 + deletedFragments;
    setFragments({ ...old, [index]: { ...nu } });
  }

  const addBulk = useCallback((bulk) => {
    const old = fragments;
    setFragments({ ...old, ...bulk })
  }, [fragments]);

  const deleteFragment = (id) => {
    const old = fragments;
    delete old[id];
    setDeletedFragments(deletedFragments + 1);
    setFragments({ ...old });
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      let starterWords = {};
      for (let i = 0; i < sampleWords.length; i++) {
        const fragment = sampleWords[i];
        const position = getRandomPosition();
        starterWords[i] = { ...position, title: fragment };
      }
      addBulk(starterWords);
    });
  }, [addBulk]);

  return (
    <AppWrapper>
      <Menu
        fragments={fragments}
        addFragment={addFragment}
        addBulk={addBulk}
        id="menu"
      />
      <Fridge
        fragments={fragments}
        setFragments={setFragments}
        deleteFragment={deleteFragment}
        id="fridge-area"
      />
    </AppWrapper>
  );
}

export default App;
