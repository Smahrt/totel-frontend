import Link from 'next/link';
import styled from 'styled-components';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

import Header from '../../components/PaymentModule/Header';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
  color: #444;
`;

const StyledH1 = styled.h1`
  font-size: 1rem;
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: #999;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
  color: #444;
  cursor: pointer;
`;

const PaymentOptions = () => (
  <>
    <Header pageTitle="Payment Options" />
    <Link href="/payment/add-card">
      <StyledLink>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ paddingRight: '1rem' }}>
            <PaymentOutlinedIcon />
          </div>
          <div>
            <StyledH1>Card (Credit/Debit)</StyledH1>
            <StyledP>Pay using your credit or debit card.</StyledP>
          </div>
        </div>
        <ArrowForwardIosOutlinedIcon />
      </StyledLink>
    </Link>
    <Row>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ paddingRight: '1rem' }}>
          <AccountBalanceIcon />
        </div>
        <div>
          <StyledH1>Net Banking</StyledH1>
          <StyledP>Pay using any of 47 supported banks.</StyledP>
        </div>
      </div>
      <ArrowForwardIosOutlinedIcon />
    </Row>
    <Row>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ paddingRight: '1rem' }}>
          <AccountBalanceWalletIcon />
        </div>
        <div>
          <StyledH1>Wallet</StyledH1>
          <StyledP>Venmo, Apple Pay available</StyledP>
        </div>
      </div>
      <ArrowForwardIosOutlinedIcon />
    </Row>
    <Row>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ paddingRight: '1rem' }}>
          <AppleIcon />
        </div>
        <div>
          <StyledH1>Apple Pay</StyledH1>
        </div>
      </div>
      <ArrowForwardIosOutlinedIcon />
    </Row>
    <Row>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ paddingRight: '1rem' }}>
          <MonetizationOnIcon />
        </div>
        <div>
          <StyledH1>Venmo</StyledH1>
        </div>
      </div>
      <ArrowForwardIosOutlinedIcon />
    </Row>
  </>
);
export default PaymentOptions;
