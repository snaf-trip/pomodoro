import * as React from 'react';
import { SVGProps } from 'react';

export const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={'4vh'}
    height={'4vh'}
    {...props}
  >
    <path d="M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0Z" />
  </svg>
);
