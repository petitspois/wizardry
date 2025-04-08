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
      'stroke-width': '2',
      key: 'dfp61q',
    },
  ],
  [
    'path',
    {
      id: 'path',
      d: 'M20 20L22 22',
      stroke: '#000000',
      'stroke-opacity': '1.000000',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      key: '1hh5l9',
    },
  ],
];

/**
 * @component @name SearchTwoLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SearchTwoLine = createWizardryIcon('search-two-line', __iconNode);

export default SearchTwoLine;
