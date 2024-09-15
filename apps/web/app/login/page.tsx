// packages/ui/src/pages/login.tsx

import React from 'react';
import Login from '../../components/auth/Login';
import { ForgotPassword } from '../../components/auth/ForgotPassword';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[1440px] h-[1024px]">
      <Login />
    </div>
  );
};

export default LoginPage;

