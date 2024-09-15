// apps/web/app/forgot-password.tsx
import React from 'react';
import { ForgotPassword } from '../../components/auth/ForgotPassword';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[1440px] h-[1024px]">
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
