import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const logo: React.FC = () => {
  return (
    <PictureWrapper>
      <ProfileImage
        src="client\src\assets\logo.jpg" // Path to your image in the public folder
        alt="logo"
        width={200} // Set desired width
        height={200} // Set desired height
        priority
      />
    </PictureWrapper>
  );
};

export default logo;
