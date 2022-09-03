import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from '../../components/PaymentModule/Header';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #333;
`;

const StyledH1 = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  background-color: #4D65D6;
  color: #fff;
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  width: 100%;
`;

const AddCard = () => {
  const router = useRouter();
  return (
    <>
      <Header pageTitle="Add Card" />
      <StyledDiv>
        <StyledH1>Total Payment</StyledH1>
        <StyledP>$1050</StyledP>
      </StyledDiv>
      <div style={{ margin: '0 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '0.9rem', fontWeight: '100', color: '#999', marginBottom: '0.5rem',
          }}
          >
            Card
          </h1>
          <input
            type="text"
            placeholder="Enter your card number"
            style={{
              backgroundColor: '#EEEEEE',
              borderRadius: '5px',
              border: '0px',
              padding: '1rem',
              color: '#999',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <h1 style={{
              fontSize: '0.9rem', fontWeight: '100', color: '#999', marginBottom: '0.5rem',
            }}
            >
              Expiry Date
            </h1>
            <input
              type="text"
              placeholder="MM / YY"
              style={{
                backgroundColor: '#EEEEEE',
                borderRadius: '5px',
                border: '0px',
                padding: '1rem',
                color: '#999',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <h1 style={{
              fontSize: '0.9rem', fontWeight: '100', color: '#999', marginBottom: '0.5rem',
            }}
            >
              CVV
            </h1>
            <input
              type="text"
              placeholder="Enter CVV"
              style={{
                backgroundColor: '#EEEEEE',
                borderRadius: '5px',
                border: '0px',
                padding: '1rem',
                color: '#999',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '0.9rem', fontWeight: '100', color: '#999', marginBottom: '0.5rem',
          }}
          >
            Name on card
          </h1>
          <input
            type="text"
            placeholder="Enter name as on card"
            style={{
              backgroundColor: '#EEEEEE',
              borderRadius: '5px',
              border: '0px',
              padding: '1rem',
              color: '#999',
            }}
          />
        </div>

        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <input
            type="checkbox"
            style={{
              backgroundColor: '#EEEEEE',
              borderRadius: '5px',
              border: '0px',
              padding: '1rem',
              marginRight: '1rem',
              color: '#999',
            }}
          />
          <h1 style={{ fontSize: '0.9rem', fontWeight: '100', color: '#999' }}>Secure this option for faster checkout</h1>
        </div>

        <StyledButton onClick={() => router.push('/')}>
          <p>Proceed</p>
        </StyledButton>
      </div>
    </>
  );
};
export default AddCard;
