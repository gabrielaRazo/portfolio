import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/hooks';
import FocusLock from 'react-focus-lock';
import Burger from '../../burguer/burger';
import Menu from '../../menu/menu';

const NavbarResponsive = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </>
  );
};

export default NavbarResponsive;
