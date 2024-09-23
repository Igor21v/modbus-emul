/// <reference types="react-scripts" />

declare var comport: any;

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
