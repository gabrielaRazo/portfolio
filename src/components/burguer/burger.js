import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledBurger } from './burger.style';

const Burger = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.dasboardReducer.isMenuOpen);
  const isExpanded = isMenuOpen ? true : false;

  const onOpenBurger = (isMenuOpen) => {
    dispatch({ type: 'OPEN_MENU_NAVBAR', isMenuOpen: isMenuOpen });
  };

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={isMenuOpen}
      onClick={() => onOpenBurger(!isMenuOpen)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
export default Burger;
