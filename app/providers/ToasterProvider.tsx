'use client';

import { Toaster } from 'react-hot-toast';

function ToasterProvider() {
  return (
    <Toaster position="top-center" reverseOrder />
  );
}

export default ToasterProvider;
