import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.329616 0.329608C0.755642 -0.0964183 1.43135 -0.111434 1.83886 0.29607L17.3337 15.7909C17.7412 16.1984 17.7262 16.8741 17.3002 17.3002C16.8742 17.7262 16.1984 17.7412 15.7909 17.3337L0.296077 1.83885C-0.111427 1.43134 -0.0964112 0.755635 0.329616 0.329608Z"
      fill="#161616"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.329608 17.3002C-0.0964183 16.8742 -0.111434 16.1985 0.29607 15.7909L15.7909 0.296088C16.1984 -0.111415 16.8741 -0.0963997 17.3002 0.329627C17.7262 0.755654 17.7412 1.43136 17.3337 1.83887L1.83885 17.3337C1.43134 17.7412 0.755635 17.7262 0.329608 17.3002Z"
      fill="#161616"
    />
  </svg>
);

export default SvgComponent;
