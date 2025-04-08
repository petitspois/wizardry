import createWizardryIcon from '../createWizardryIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'circle',
    {
      id: 'circle',
      cx: '11.500000',
      cy: '11.500000',
      r: '9.499999',
      stroke: '#000000',
      opacity: '0.4',
      'stroke-opacity': '1.000000',
      'stroke-width': '2',
      key: 'b9kjhz',
    },
  ],
  [
    'path',
    {
      id: 'path',
      d: 'M18.5 18.5L22 22',
      stroke: '#000000',
      'stroke-opacity': '1.000000',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      key: '10gsve',
    },
  ],
];

/**
 * @component @name SearchOneLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SearchOneLine = createWizardryIcon('search-one-line', __iconNode);

export default SearchOneLine;
