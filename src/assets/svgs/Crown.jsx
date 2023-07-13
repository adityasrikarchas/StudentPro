import React from 'react';

const Crown = ({ color, ...props }) => {
  return (
    <div>
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill={color || 'none'}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 0.0914307L5.21997 4.8114L10.0005 0.0308838L14.7811 4.8114L19.5 0.092453V8.96912C19.5 10.626 18.1569 11.9691 16.5 11.9691H3.5C1.84314 11.9691 0.5 10.626 0.5 8.96912V0.0914307ZM17.5 4.90869V8.96912C17.5 9.52136 17.0523 9.96912 16.5 9.96912H3.5C2.94771 9.96912 2.5 9.52136 2.5 8.96912V4.90771L5.21997 7.62769L10.0005 2.84717L14.7811 7.62769L17.5 4.90869Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Crown;
