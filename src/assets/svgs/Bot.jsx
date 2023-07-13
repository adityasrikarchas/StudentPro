import React from 'react';

const Bot = ({ color }) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="chatbot-icon 1" clip-path="url(#clip0_589_2672)" fill={color}>
          <path
            id="Vector"
            d="M11.2285 5.87183V4.73165C11.0939 4.67968 10.9633 4.61716 10.8379 4.54464C10.347 4.2446 9.97719 3.77278 9.79611 3.21532C9.61503 2.65786 9.63471 2.05195 9.85156 1.50819C9.97206 1.21166 10.1472 0.941932 10.3672 0.713889C10.5866 0.488003 10.8466 0.308359 11.1328 0.185025C11.4212 0.0615353 11.7306 -0.00136403 12.043 2.24311e-05C12.5122 -4.5669e-05 12.9709 0.143225 13.361 0.411696C13.7511 0.680168 14.055 1.06177 14.2344 1.50819C14.4739 2.1051 14.4739 2.77538 14.2344 3.37229C14.115 3.66887 13.9398 3.93816 13.7188 4.16458L13.707 4.17665C13.5679 4.31749 13.4132 4.441 13.2461 4.54464C13.1221 4.61999 12.9913 4.68263 12.8555 4.73165V5.87183H18.418C19.2163 5.87448 19.9811 6.2023 20.5454 6.78367C21.1097 7.36504 21.4276 8.15272 21.4297 8.97463V9.43513H22.4609C22.87 9.43672 23.2619 9.60488 23.551 9.90289C23.84 10.2009 24.0029 10.6046 24.0039 11.0257V14.7198C24.0029 15.1409 23.84 15.5446 23.551 15.8426C23.2619 16.1406 22.87 16.3088 22.4609 16.3104H21.4355V16.7266C21.433 17.5494 21.1141 18.3377 20.5486 18.9191C19.9832 19.5006 19.2171 19.8278 18.418 19.8294H10.7871L6.21289 23.8733C6.16246 23.9179 6.10397 23.9518 6.04077 23.973C5.97757 23.9942 5.91092 24.0024 5.84466 23.9969C5.77839 23.9915 5.71383 23.9727 5.65467 23.9414C5.59552 23.9102 5.54295 23.8673 5.5 23.815C5.4141 23.7119 5.37004 23.5787 5.37695 23.443L5.62109 19.8234H5.58008C4.78281 19.8213 4.01876 19.4944 3.45482 18.9142C2.89088 18.3339 2.57289 17.5475 2.57031 16.7266V16.3104H1.54492C1.1355 16.3093 0.743142 16.1414 0.453636 15.8433C0.164131 15.5452 0.00103129 15.1413 0 14.7198L0 11.0257C0.00102882 10.6046 0.16386 10.2009 0.452944 9.90289C0.742028 9.60488 1.13389 9.43672 1.54297 9.43513H2.57031V8.97262C2.57186 8.15108 2.88939 7.36361 3.45344 6.7825C4.01749 6.20139 4.78214 5.87395 5.58008 5.87183H11.2285ZM16.1602 9.51556C16.5217 9.51556 16.8752 9.62595 17.1758 9.83277C17.4764 10.0396 17.7108 10.3335 17.8491 10.6775C17.9875 11.0214 18.0237 11.3998 17.9532 11.765C17.8826 12.1301 17.7085 12.4654 17.4528 12.7287C17.1972 12.9919 16.8714 13.1712 16.5168 13.2438C16.1622 13.3164 15.7946 13.2791 15.4606 13.1367C15.1265 12.9942 14.841 12.753 14.6401 12.4435C14.4392 12.1339 14.332 11.77 14.332 11.3978C14.332 10.8986 14.5246 10.4198 14.8675 10.0668C15.2103 9.71387 15.6753 9.51556 16.1602 9.51556ZM7.84375 9.51556C8.20532 9.51556 8.55877 9.62595 8.8594 9.83277C9.16004 10.0396 9.39435 10.3335 9.53272 10.6775C9.67108 11.0214 9.70729 11.3998 9.63675 11.765C9.56621 12.1301 9.3921 12.4654 9.13643 12.7287C8.88076 12.9919 8.55502 13.1712 8.2004 13.2438C7.84578 13.3164 7.4782 13.2791 7.14416 13.1367C6.81011 12.9942 6.5246 12.753 6.32372 12.4435C6.12284 12.1339 6.01563 11.77 6.01563 11.3978C6.01563 10.8986 6.20823 10.4198 6.55107 10.0668C6.89391 9.71387 7.3589 9.51556 7.84375 9.51556ZM9.08984 15.8217C9.06227 15.7994 9.03735 15.7737 9.01563 15.7453C8.95233 15.6688 8.91647 15.5723 8.91406 15.4718C8.91229 15.3709 8.94398 15.2723 9.00391 15.1923C9.02629 15.1632 9.05185 15.1369 9.08008 15.1139C9.18751 15.0267 9.31962 14.978 9.45637 14.9751C9.59312 14.9722 9.72706 15.0153 9.83789 15.0978C10.1717 15.3689 10.5421 15.5884 10.9375 15.7493C11.2782 15.885 11.6406 15.9532 12.0059 15.9504C12.3757 15.9423 12.7413 15.8675 13.0859 15.7292C13.486 15.5645 13.8635 15.3469 14.209 15.0817C14.3223 15.0021 14.4577 14.9627 14.5947 14.9692C14.7318 14.9757 14.863 15.0279 14.9688 15.1179C14.9953 15.143 15.0194 15.1706 15.041 15.2004C15.0984 15.282 15.1274 15.3812 15.123 15.4819C15.1147 15.5826 15.075 15.6778 15.0098 15.7534C14.985 15.7823 14.9568 15.808 14.9258 15.8298C14.4865 16.164 14.0048 16.4346 13.4941 16.6341C13.0237 16.8167 12.5261 16.914 12.0234 16.9217C11.5202 16.9289 11.0198 16.8417 10.5469 16.6643C10.0256 16.4635 9.53751 16.1814 9.09961 15.8278L9.08984 15.8217ZM18.416 6.91749H5.58008C5.05098 6.91961 4.54416 7.13709 4.17021 7.52248C3.79626 7.90787 3.58553 8.42988 3.58398 8.97463V16.7266C3.58553 17.2714 3.79626 17.7934 4.17021 18.1788C4.54416 18.5642 5.05098 18.7816 5.58008 18.7838H6.19922C6.33312 18.7941 6.45765 18.8584 6.54579 18.9627C6.63392 19.0669 6.67853 19.2028 6.66992 19.3408L6.47461 22.2727L10.2441 18.9326C10.291 18.8843 10.3468 18.8461 10.4081 18.8202C10.4695 18.7943 10.5352 18.7812 10.6016 18.7818H18.4141C18.9432 18.7796 19.45 18.5622 19.8239 18.1768C20.1979 17.7914 20.4086 17.2694 20.4102 16.7246V8.97262C20.4091 8.42824 20.1988 7.90643 19.8251 7.52131C19.4514 7.13618 18.9448 6.91909 18.416 6.91749Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_589_2672">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Bot;
