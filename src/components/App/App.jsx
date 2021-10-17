import React, { useState } from 'react';

import { Fridge } from '../Fridge/Fridge';
import { Menu } from '../Menu/Menu';

import { AppWrapper } from './styles';

export const App = () => {
  const [fragments, setFragments] = useState({});
  const [deletedFragments, setDeletedFragments] = useState(0);

  const addFragment = (nu) => {
    const old = fragments;
    const index = Object.keys(old).length + 1 + deletedFragments;
    setFragments({ ...old, [index]: { ...nu } });
  }

  const addBulk = (bulk) => {
    const old = fragments;
    setFragments({ ...old, ...bulk })
  }

  const deleteFragment = (id) => {
    const old = fragments;
    delete old[id];
    setDeletedFragments(deletedFragments + 1);
    setFragments({ ...old });
  }

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
