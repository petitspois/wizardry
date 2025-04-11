import { createElement, forwardRef } from 'react';
import defaultAttributes from './defaultAttributes';
import defaultFillAttributes from './defaultFillAttributes';
import { IconNode, WizardryProps } from './types';
import { mergeClasses } from '@wizardry/shared';

interface IconComponentProps extends WizardryProps {
  iconNode: IconNode;
}

/**
 * Lucide icon component
 *
 * @component Icon
 * @param {object} props
 * @param {string} props.color - The color of the icon
 * @param {number} props.size - The size of the icon
 * @param {number} props.strokeWidth - The stroke width of the icon
 * @param {boolean} props.absoluteStrokeWidth - Whether to use absolute stroke width
 * @param {string} props.className - The class name of the icon
 * @param {IconNode} props.children - The children of the icon
 * @param {IconNode} props.iconNode - The icon node of the icon
 *
 * @returns {ForwardRefExoticComponent} WizardryIcon
 */
const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = 'currentColor',
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = '',
      children,
      iconNode,
      ...rest
    },
    ref,
  ) => {
    const hasFill = className.includes('-fill');
    return createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        ...(hasFill ? defaultFillAttributes : {}), // 条件应用填充属性
        width: size,
        height: size,
        ...(hasFill ? { fill: color } : {stroke: color}),
        strokeWidth: hasFill? 0 : absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        className: mergeClasses('wizardry', className),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    );
  },
);

export default Icon;
