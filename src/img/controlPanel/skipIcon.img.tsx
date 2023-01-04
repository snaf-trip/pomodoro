import * as React from 'react';
import { SVGProps } from 'react';

export const SkipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={'4vh'}
    height={'4vh'}
    {...props}
  >
    <path d="M3.787 20.656A3.789 3.789 0 0 1 0 16.87V7.13a3.783 3.783 0 0 1 6.021-3.051L9.8 6.853a3.783 3.783 0 0 1 6.01-2.774l6.641 4.87a3.784 3.784 0 0 1 0 6.1l-6.641 4.87a3.783 3.783 0 0 1-6.01-2.772l-3.779 2.774a3.775 3.775 0 0 1-2.234.735Z" />
  </svg>
);
