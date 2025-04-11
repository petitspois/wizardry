import createWizardryIcon from '../createWizardryIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      opacity: '0.4',
      d: 'M12 15.42L12 0C12.78 0 13.56 0.06 14.34 0.21C15.1 0.38 15.86 0.59 16.58 0.9C17.31 1.19 18 1.57 18.66 2.02C19.31 2.45 19.92 2.93 20.48 3.5C21.04 4.06 21.52 4.66 21.96 5.31C22.4 5.97 22.78 6.66 23.08 7.4C23.38 8.12 23.6 8.88 23.76 9.64C23.92 10.42 24 11.2 24 12C24 12.78 23.92 13.56 23.76 14.34C23.6 15.1 23.38 15.86 23.08 16.58C22.78 17.31 22.4 18 21.96 18.66C21.52 19.31 21.04 19.92 20.48 20.48C19.92 21.04 19.31 21.52 18.66 21.96C18 22.4 17.31 22.78 16.58 23.08C15.86 23.38 15.1 23.6 14.34 23.76C13.56 23.92 12.78 24 12 24L12 15.42Z',
      key: '4g2ozi',
    },
  ],
  [
    'path',
    {
      d: 'M12 15.42L12 0C11.2 0 10.42 0.06 9.64 0.21C8.88 0.38 8.12 0.59 7.4 0.9C6.66 1.19 5.97 1.57 5.31 2.02C4.66 2.45 4.06 2.93 3.5 3.5C2.93 4.06 2.45 4.66 2.02 5.31C1.57 5.97 1.19 6.66 0.9 7.4C0.59 8.12 0.38 8.88 0.21 9.64C0.06 10.42 0 11.2 0 12C0 12.78 0.06 13.56 0.21 14.34C0.38 15.1 0.59 15.86 0.9 16.58C1.19 17.31 1.57 18 2.02 18.66C2.45 19.31 2.93 19.92 3.5 20.48C4.06 21.04 4.66 21.52 5.31 21.96C5.97 22.4 6.66 22.78 7.4 23.08C8.12 23.38 8.88 23.6 9.64 23.76C10.42 23.92 11.2 24 12 24L12 15.42Z',
      key: '1k296r',
    },
  ],
];

/**
 * @component @name CircleOneFill
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleOneFill = createWizardryIcon('circle-one-fill', __iconNode);

export default CircleOneFill;
