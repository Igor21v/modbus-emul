import { SvgProps } from 'shared/ui/Icon';
const Arrows = (props: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title}</title>
    <g data-name="Layer 2">
      <path d="m18.71 18.71 3.7-3.71-3.7-3.71-1.42 1.42 1.3 1.29H10v2h8.59l-1.3 1.29 1.42 1.42zM6.71 11.29 5.41 10H14V8H5.41l1.3-1.29-1.42-1.42L1.59 9l3.7 3.71 1.42-1.42z" />
    </g>
  </svg>
);
export default Arrows;
