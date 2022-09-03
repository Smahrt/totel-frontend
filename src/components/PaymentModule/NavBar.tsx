import Image from 'next/image';
import styled from 'styled-components';

import WrapHeaderTopLinks from '../WrapHeaderTopLinks';
import HomeLocation from './HomeLocation';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-height: 40px;
  padding: 1rem;
  background-color: #fff;
`;

const NavBar = () => (
  <Row>
    <Image src="/img/logo.png" alt="logo" width={117} height={40} />
    <HomeLocation whichComponent="WrapHeader" />
    <WrapHeaderTopLinks />
  </Row>
);

export default NavBar;
