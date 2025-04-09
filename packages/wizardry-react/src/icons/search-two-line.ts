import createWizardryIcon from '../createWizardryIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  ['circle', { cx: '11.500000', cy: '11.500000', r: '9.499999', opacity: '0.4', key: '1nj8v7' }],
  ['path', { d: 'M20 20L22 22', key: 'jq9z17' }],
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
