import React from 'react';
import { SVGProps } from 'react';

export const StartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={'4vh'}
    height={'4vh'}
    {...props}
  >
    <path d="M20.492 7.969 10.954.975A5 5 0 0 0 3 5.005V19a4.994 4.994 0 0 0 7.954 4.03l9.538-6.994a5 5 0 0 0 0-8.062Z" />
  </svg>
);
