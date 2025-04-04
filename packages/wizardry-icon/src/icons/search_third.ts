import createComponent from '../lib/create-component';

/**
 * @component @name SearchThird
 * @description Renders SearchThird svg element
 *
 * @param {Object} props - props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const SearchThird = createComponent("SearchThird", [
    ["circle", { id: "circle", cx: "11.000000", cy: "11.000000", r: "9.000000", stroke: "currentColor", key: "k0" }],
    ["path", { id: "path", d: "M21.4 21.4C21.18 21.63 21.06 21.74 20.97 21.81C20.42 22.17 19.66 21.99 19.35 21.4C19.3 21.3 19.25 21.15 19.16 20.84C19.06 20.5 19.01 20.33 19 20.22C18.94 19.52 19.52 18.94 20.22 19C20.33 19.01 20.5 19.06 20.84 19.16C21.15 19.25 21.3 19.3 21.4 19.35C21.99 19.66 22.17 20.42 21.81 20.97C21.74 21.06 21.63 21.18 21.4 21.4Z", stroke: "currentColor", key: "k1" }]
]);

export default SearchThird;
