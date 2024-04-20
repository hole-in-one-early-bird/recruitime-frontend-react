import { ResetPassword } from 'features/auth/resetPassword/ui/ResetPassword';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastPopup from 'shared/ui/toast/ToastPopup';
import styled, { keyframes } from 'styled-components';

export const ResetPasswordPage = () => {
  return (
    <div>
      <ResetPassword />
    </div>
  );
};
