/// <reference types="react-scripts" />

declare var portWorker: Worker;

declare var comport: {
  port: any;
  reader: any;
  needClose: boolean;
};

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
