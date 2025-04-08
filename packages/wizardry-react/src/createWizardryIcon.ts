import { createElement, forwardRef } from 'react';
import { mergeClasses, toKebabCase, toPascalCase } from '@wizardry/shared';
import { IconNode, WizardryProps } from './types';
import Icon from './Icon';

/**
 * Create a Lucide icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} WizardryIcon
 */
const createWizardryIcon = (iconName: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGSVGElement, WizardryProps>(({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `wizardry-${toKebabCase(toPascalCase(iconName))}`,
        `wizardry-${iconName}`,
        className,
      ),
      ...props,
    }),
  );

  Component.displayName = toPascalCase(iconName);

  return Component;
};

export default createWizardryIcon;
