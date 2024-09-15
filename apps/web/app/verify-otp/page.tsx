// packages/ui/src/pages/login.tsx

import React from 'react';
import VerifyOtp from '../../components/auth/VerifyOtp';

const VerifyOtpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[1440px] h-[1024px]">
      <VerifyOtp />
    </div>
  );
};

export default VerifyOtpPage;

