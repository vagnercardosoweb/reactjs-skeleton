// eslint-disable-next-line spaced-comment
/// <reference types="react-scripts" />z

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import React, { SVGProps } from 'react';

  export const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
