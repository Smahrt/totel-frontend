import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from 'next/image';

import iconCross from '../../public/img/icon/icon-cross.svg';

const Modal = ({ show, onClose, children, title,topMargin }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
          <Image src={iconCross} alt="Cross icon" />
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  // if (isBrowser) {
  //   return ReactDOM.createPortal(
  //     modalContent,
  //     document.getElementById("modal-root")
  //   );
  // } else {
  //   return null;
  // }
};

const StyledModalTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin-top: -30px;
    padding-bottom: 10px;
    text-align: center;
    color: #000;
    `;

const StyledModalBody = styled.div`
  padding-top: 10px;
  border-top: 1px solid #E9E9EE;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: auto;
  margin-top: 150px;
  border-radius: 20px;
  padding: 15px;
  z-index: 1;
  drop-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 500px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default Modal;