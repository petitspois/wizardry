import {createElement, forwardRef, ForwardRefExoticComponent, RefAttributes, SVGProps} from "react";
import defaultAttributes from "./defaultAttributes";

export type IconSvgElement = [elementName: keyof SVGProps<string>, attrs: Record<string, string>][];

export type IconSvgObject = IconSvgElement

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface WizardryProps extends ComponentAttributes {
  size?: string | number;
}

export type WizardryIcon = ForwardRefExoticComponent<WizardryProps>;

const createComponent = (iconName: string, svgObject: IconSvgObject): React.FC<React.PropsWithoutRef<WizardryProps> & React.RefAttributes<SVGSVGElement>> => {
  const Component = forwardRef<SVGSVGElement, WizardryProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 1.5,
        className = '',
        children,
        ...rest
      },
      ref,
    ) => {
      const elementProps = {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        strokeWidth: strokeWidth,
        color,
        className,
        ...rest,
      };

      return createElement(
        'svg',
        elementProps,
        svgObject?.map(([tag, attrs]) => createElement(tag, {key: attrs.id, ...attrs})) ?? [],
        ...(Array.isArray(children) ? children : [children]),
      );
    },
  );

  Component.displayName = `${iconName}Icon`;

  return Component
}

export default createComponent;
