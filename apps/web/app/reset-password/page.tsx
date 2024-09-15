// packages/ui/src/pages/login.tsx

import React from 'react';
import ResetPassword from '../../components/auth/ResetPassword';

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[1440px] h-[1024px]">
      <ResetPassword />
    </div>
  );
};

export default ResetPasswordPage;

