import WrapHeader from 'components/WrapHeader';
import { NextPage } from 'next';
import styled from 'styled-components';

import AmountDetails from '../../components/PaymentModule/AmountDetails';
import MobileAmountDetails from '../../components/PaymentModule/MobileAmountDetails';
import MobileTripDetails from '../../components/PaymentModule/MobileTripDetails';
import NavBar from '../../components/PaymentModule/NavBar';
import TripDetails from '../../components/PaymentModule/TripDetails';
import WrapFooter from '../../components/WrapFooter';

const MobilePage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 1170px) { 
    display: none;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background-color: #F8F8F8;

  @media (max-width: 1170px) { 
    display: none;
  }
`;

const ColouredDiv = styled.div`
  background-color: #4D65D6;
  height: 100px;
  margin-top: 80px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top: -60px;
`;

const BookingDetails: NextPage = () => (
  <>
    <MobilePage>
      <MobileTripDetails />
      <MobileAmountDetails />
    </MobilePage>
    <Page>
      <WrapHeader />
      <ColouredDiv />
      <Row>
        <TripDetails />
        <AmountDetails />
      </Row>
      <WrapFooter />
    </Page>
  </>
);

export default BookingDetails;
