import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 225px;
  min-width: 300px;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  margin-right: 1rem;
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 0;
`;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  padding: 1.25rem 0rem 0rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.25rem;
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: #999;
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  padding-top: 1rem;
  display: block;
`;

const TripDetails = () => (
  <StyledDiv>
    <StyledH1>Trip Details</StyledH1>
    <Row>
      <StyledH2>Date</StyledH2>
      <StyledP>22 - 28 June</StyledP>
    </Row>
    <Row>
      <StyledH2>Guests</StyledH2>
      <StyledP>1 M, 1 F</StyledP>
    </Row>
    <StyledLink>Edit</StyledLink>
  </StyledDiv>
);
export default TripDetails;
