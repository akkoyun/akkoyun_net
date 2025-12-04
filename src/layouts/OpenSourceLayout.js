import React from 'react';
import OpenSourceFooter from '../components/OpenSourceFooter';

export default function OpenSourceLayout({children}) {
  return (
    <div>
      {children}
      <OpenSourceFooter />
    </div>
  );
}