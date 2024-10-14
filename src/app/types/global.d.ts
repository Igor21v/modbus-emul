/// <reference types="react-scripts" />

declare var portWorker: Worker;

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
