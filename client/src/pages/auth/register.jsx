import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CommonFrom from '@/components/common/form';
import { registerFormControls } from '@/congfig';

const AuthRegister = () => {
  const initialState = {
    userName: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create an account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>

      <CommonFrom
        formControls={registerFormControls}
        buttonText="Sign Up"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;