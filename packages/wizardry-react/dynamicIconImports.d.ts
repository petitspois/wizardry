import * as react from 'react';
import { RefAttributes, SVGProps } from 'react';

/**
 * A reduced version of `SVGElementType` from @types/react. This type was added
 * with the release of React 19, and is included here in order to support usage
 * with older versions.
 */
type SVGElementType = 'circle' | 'ellipse' | 'g' | 'line' | 'path' | 'polygon' | 'polyline' | 'rect';
type IconNode = [elementName: SVGElementType, attrs: Record<string, string>][];
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface WizardryProps extends ElementAttributes {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
}

declare const __iconNode$3: IconNode;
/**
 * @component @name SearchTwoLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchTwoLine: react.ForwardRefExoticComponent<Omit<WizardryProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare namespace __icons_search_two_line {
  export {
    __iconNode$3 as __iconNode,
    SearchTwoLine as default,
  };
}

declare const __iconNode$2: IconNode;
/**
 * @component @name SearchThreeLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchThreeLine: react.ForwardRefExoticComponent<Omit<WizardryProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare namespace __icons_search_three_line {
  export {
    __iconNode$2 as __iconNode,
    SearchThreeLine as default,
  };
}

declare const __iconNode$1: IconNode;
/**
 * @component @name SearchOneLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchOneLine: react.ForwardRefExoticComponent<Omit<WizardryProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare namespace __icons_search_one_line {
  export {
    __iconNode$1 as __iconNode,
    SearchOneLine as default,
  };
}

declare const __iconNode: IconNode;
/**
 * @component @name FilterLine
 * @description Wizardry SVG icon component, renders SVG Element with children.
 *
 * @param {Object} props - Wizardry icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterLine: react.ForwardRefExoticComponent<Omit<WizardryProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const __icons_filter_line___iconNode: typeof __iconNode;
declare namespace __icons_filter_line {
  export {
    __icons_filter_line___iconNode as __iconNode,
    FilterLine as default,
  };
}

declare const dynamicIconImports: {
    'filter-line': () => Promise<typeof __icons_filter_line>;
    'search-one-line': () => Promise<typeof __icons_search_one_line>;
    'search-three-line': () => Promise<typeof __icons_search_three_line>;
    'search-two-line': () => Promise<typeof __icons_search_two_line>;
};

export { dynamicIconImports as default };
