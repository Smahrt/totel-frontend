import styled from 'styled-components';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledDiv = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const StyledH1 = styled.h1`
  font-size: 1.2rem;
  padding-left: 1rem;
  color: #444;
`;

const Header = ({ pageTitle }: { pageTitle: string }) => (
  <StyledDiv>
    <ArrowBackIcon />
    <StyledH1>{pageTitle}</StyledH1>
  </StyledDiv>
);
export default Header;
