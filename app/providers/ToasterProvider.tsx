'use client';

import { Toaster } from 'react-hot-toast';

function ToasterProvider() {
  return (
    <Toaster position="bottom-center" reverseOrder />
  );
}

export default ToasterProvider;
