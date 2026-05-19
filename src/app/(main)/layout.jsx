import Footer from '@/components/shared/Footer';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;