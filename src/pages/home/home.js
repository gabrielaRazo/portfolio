import React from 'react';
import Contact from '../../components/contact/contact';
import Header from '../../layouts/header/header';
import { Container } from './home.styles';
const Home = () => {
  return (
    <>
      <Container>
        <div></div>
        <Header />
        <div></div>
      </Container>
      <Contact />
    </>
  );
};
export default Home;
