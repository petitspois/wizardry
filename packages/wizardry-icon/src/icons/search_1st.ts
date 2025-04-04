import createComponent from '../lib/create-component';

/**
 * @component @name Search1st
 * @description Renders Search1st svg element
 *
 * @param {Object} props - props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Search1st = createComponent("Search1st", [
    ["circle", { id: "circle", cx: "11.500000", cy: "11.500000", r: "9.499999", opacity: "0.4", stroke: "currentColor", key: "k0" }],
    ["path", { id: "path", d: "M18.5 18.5L22 22", stroke: "currentColor", key: "k1" }]
]);

export default Search1st;
