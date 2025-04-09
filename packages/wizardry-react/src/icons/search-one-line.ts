import createWizardryIcon from '../createWizardryIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  ['circle', { cx: '11.500000', cy: '11.500000', r: '9.499999', opacity: '0.4', key: '1nj8v7' }],
  ['path', { d: 'M18.5 18.5L22 22', key: '67zml7' }],
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
