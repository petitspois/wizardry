export default async ({
  componentName,
  iconName,
  children,
}) => {
  return `
import createWizardryIcon from '../createWizardryIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = ${JSON.stringify(children)}

/**
 * @component @name ${componentName}
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ${componentName} = createWizardryIcon('${iconName}', __iconNode);

export default ${componentName};
`;
};
