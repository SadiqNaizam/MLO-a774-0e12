import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * IndexPage serves as the main login page for the application.
 * It utilizes AppLayout for the overall page structure and centers the LoginCard component.
 */
const IndexPage: React.FC = () => {
  return (
    <AppLayout>
      <LoginCard />
    </AppLayout>
  );
};

export default IndexPage;
