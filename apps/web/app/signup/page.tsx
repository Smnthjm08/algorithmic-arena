// packages/ui/src/pages/login.tsx

import React from 'react';
import SignUp from '../../components/auth/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-screen-md mx-auto">
      <SignUp />
    </div>
  );
};

export default SignUpPage;

