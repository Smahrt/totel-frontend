import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  background-color: #fff;
  margin-left: 1rem;
`;

const StyledDiv = styled.div`
  margin: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0 0;
`;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  padding: 1.25rem 0rem 1rem;
`;

const StyledP = styled.p`
  color: #999;
`;

const StyledDarkP = styled.p`
  font-weight: bold;
  color: #000;
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  padding: 1rem 1rem 2rem;
  display: block;
`;

const StyledButton = styled.button`
  background-color: #4D65D6;
  color: #fff;
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  margin: auto 1rem 1rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmountDetails = () => {
  const router = useRouter();

  return (
    <Container>
      <StyledDiv>
        <StyledH1>Amount Details</StyledH1>
        <StyledP>(Original price $300 Night / 3 = $100 PP)</StyledP>
        <Row>
          <StyledP>$100 x 5 Night - 1st guest</StyledP>
          <StyledP>$500</StyledP>
        </Row>
        <Row>
          <StyledP>$100 x 5 Night - 2nd guest</StyledP>
          <StyledP>$500</StyledP>
        </Row>
        <Row>
          <StyledP>Service charge 5%</StyledP>
          <StyledP>$50</StyledP>
        </Row>
        <Row>
          <StyledDarkP>Total amount</StyledDarkP>
          <StyledDarkP>$1050</StyledDarkP>
        </Row>
      </StyledDiv>
      <StyledLink>Enter a coupon</StyledLink>
      <StyledButton onClick={() => router.push('/payment/payment-options')}>
        <ButtonRow>
          <p>Confirm and Pay</p>
          <p>$1050</p>
        </ButtonRow>
      </StyledButton>
    </Container>
  );
};

export default AmountDetails;
