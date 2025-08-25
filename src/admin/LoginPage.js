
import React, { useState, useEffect } from 'react';
import LoginModal from './loginModal';

const LoginPage = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!showModal) {
      window.history.back();
    }
  }, [showModal]);

  return <LoginModal show={showModal} onHide={() => setShowModal(false)} />;
};

export default LoginPage;
