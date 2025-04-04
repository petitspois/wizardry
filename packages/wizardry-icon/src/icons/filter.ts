import createComponent from '../lib/create-component';

/**
 * @component @name Filter
 * @description Renders Filter svg element
 *
 * @param {Object} props - props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Filter = createComponent("Filter", [
    ["path", { id: "path", d: "M22 5.81L22 6.5C22 7.54 22 8.06 21.74 8.49C21.48 8.92 21 9.18 20.05 9.72L17.14 11.36C16.5 11.72 16.19 11.89 15.96 12.09C15.48 12.5 15.19 12.99 15.06 13.58C15 13.87 15 14.2 15 14.87L15 17.54C15 19.45 15 20.4 14.33 20.82C13.66 21.24 12.72 20.87 10.84 20.14C9.95 19.79 9.5 19.61 9.25 19.26C9 18.9 9 18.45 9 17.54L9 14.87C9 14.2 9 13.87 8.93 13.58C8.8 12.99 8.51 12.5 8.03 12.09C7.8 11.89 7.49 11.72 6.85 11.36L3.94 9.72C2.99 9.18 2.51 8.92 2.25 8.49C2 8.06 2 7.54 2 6.5L2 5.81", stroke: "currentColor", key: "k0" }],
    ["path", { id: "path", d: "", fill: "currentColor", fillRule: "nonzero", key: "k1" }],
    ["path", { id: "path", opacity: "0.400000", d: "M22 5.81C22 4.48 22 3.82 21.56 3.41C21.12 3 20.41 3 19 3L5 3C3.58 3 2.87 3 2.43 3.41C2 3.82 2 4.48 2 5.81", stroke: "currentColor", key: "k2" }]
]);

export default Filter;
