import createComponent from '../lib/create-component';

/**
* @component @name SearchTwoLine
* @description Renders SearchTwoLine svg element
* @param {Object} props - props and any valid SVG attribute
* @returns {JSX.Element} JSX Element
*/

const SearchTwoLine = createComponent("SearchTwoLine", [
    ["circle", { id: "circle", cx: "11.500000", cy: "11.500000", r: "9.499999", opacity: "0.4", stroke: "currentColor", key: "k0" }],
    ["path", { id: "path", d: "M20 20L22 22", stroke: "currentColor", key: "k1" }],
]);

export default SearchTwoLine;
