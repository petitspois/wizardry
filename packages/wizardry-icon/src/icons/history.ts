import createComponent from '../lib/create-component';

/**
 * @component @name History
 * @description Renders History svg element
 *
 * @param {Object} props - props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const History = createComponent("History", [
    ["path", { opacity: "0.400000", id: "path", d: "M13 6C13.06 6 13.13 6 13.19 6.01C13.25 6.03 13.32 6.05 13.38 6.07C13.44 6.1 13.5 6.13 13.55 6.16C13.61 6.2 13.66 6.24 13.7 6.29C13.75 6.33 13.79 6.38 13.83 6.44C13.86 6.49 13.89 6.55 13.92 6.61C13.94 6.67 13.96 6.74 13.98 6.8C13.99 6.86 14 6.93 14 7L14 12.28L16.31 13.05C16.37 13.07 16.43 13.09 16.49 13.13C16.55 13.16 16.6 13.2 16.65 13.24C16.7 13.28 16.74 13.33 16.79 13.38C16.83 13.43 16.86 13.49 16.89 13.55C16.92 13.61 16.94 13.67 16.96 13.73C16.98 13.79 16.99 13.86 16.99 13.92C17 13.99 17 14.05 16.99 14.12C16.98 14.18 16.96 14.25 16.94 14.31C16.92 14.37 16.9 14.43 16.86 14.49C16.83 14.55 16.79 14.6 16.75 14.65C16.71 14.7 16.66 14.74 16.61 14.79C16.56 14.83 16.5 14.86 16.44 14.89C16.38 14.92 16.32 14.94 16.26 14.96C16.2 14.98 16.13 14.99 16.07 14.99C16 15 15.94 15 15.87 14.99C15.81 14.98 15.74 14.96 15.68 14.94L12.68 13.94C12.58 13.91 12.49 13.86 12.4 13.8C12.32 13.74 12.25 13.67 12.18 13.58C12.12 13.49 12.08 13.4 12.04 13.3C12.01 13.2 12 13.1 12 13L12 7C12 6.93 12 6.86 12.01 6.8C12.03 6.74 12.05 6.67 12.07 6.61C12.1 6.55 12.13 6.49 12.16 6.44C12.2 6.38 12.24 6.33 12.29 6.29C12.33 6.24 12.38 6.2 12.44 6.16C12.49 6.13 12.55 6.1 12.61 6.07C12.67 6.05 12.74 6.03 12.8 6.01C12.86 6 12.93 6 13 6Z", fill: "currentColor", fillRule: "nonzero", key: "k0" }],
    ["path", { id: "path", d: "M4.05 10L3 10C2.9 10 2.8 10.01 2.7 10.04C2.61 10.07 2.52 10.11 2.44 10.16C2.36 10.22 2.28 10.28 2.22 10.36C2.16 10.44 2.11 10.52 2.07 10.61C2.03 10.7 2.01 10.8 2 10.9C1.99 11 2 11.09 2.01 11.19C2.03 11.29 2.07 11.38 2.11 11.47C2.16 11.55 2.22 11.63 2.29 11.7L4.29 13.7C4.33 13.75 4.38 13.79 4.44 13.83C4.49 13.86 4.55 13.89 4.61 13.92C4.67 13.94 4.74 13.96 4.8 13.98C4.86 13.99 4.93 13.99 5 13.99C5.06 13.99 5.13 13.99 5.19 13.98C5.25 13.96 5.32 13.94 5.38 13.92C5.44 13.89 5.5 13.86 5.55 13.83C5.61 13.79 5.66 13.75 5.7 13.7L7.7 11.7C7.77 11.63 7.83 11.55 7.88 11.47C7.92 11.38 7.96 11.29 7.98 11.19C7.99 11.09 8 11 7.99 10.9C7.98 10.8 7.96 10.7 7.92 10.61C7.88 10.52 7.83 10.44 7.77 10.36C7.71 10.28 7.63 10.22 7.55 10.16C7.47 10.11 7.38 10.07 7.29 10.04C7.19 10.01 7.09 10 7 10L6.07 10C6.1 9.78 6.14 9.56 6.19 9.35C6.24 9.14 6.3 8.93 6.37 8.72C6.45 8.52 6.53 8.31 6.62 8.12C6.71 7.92 6.81 7.72 6.92 7.53C7.02 7.34 7.14 7.16 7.27 6.98C7.39 6.8 7.53 6.63 7.67 6.46C7.81 6.3 7.96 6.14 8.12 5.99C8.27 5.83 8.44 5.69 8.61 5.55C8.78 5.41 8.95 5.29 9.14 5.17C9.32 5.05 9.51 4.93 9.7 4.83C9.89 4.73 10.09 4.63 10.29 4.55C10.49 4.47 10.7 4.39 10.91 4.33C11.12 4.26 11.33 4.21 11.54 4.16C11.75 4.12 11.97 4.08 12.19 4.05C12.4 4.03 12.62 4.01 12.84 4.01C13.06 4.01 13.28 4.01 13.49 4.03C13.71 4.04 13.93 4.07 14.14 4.1C14.36 4.14 14.57 4.19 14.78 4.24C15 4.3 15.2 4.36 15.41 4.44C15.61 4.51 15.82 4.6 16.01 4.69C16.21 4.79 16.4 4.89 16.59 5C16.78 5.11 16.96 5.24 17.14 5.36C17.31 5.49 17.48 5.63 17.64 5.78C17.81 5.92 17.96 6.07 18.11 6.23C18.26 6.39 18.4 6.56 18.54 6.73C18.67 6.91 18.8 7.09 18.91 7.27C19.03 7.45 19.14 7.64 19.24 7.84C19.33 8.03 19.42 8.23 19.5 8.44C19.59 8.64 19.66 8.85 19.72 9.06C19.78 9.27 19.83 9.48 19.87 9.69C19.91 9.91 19.94 10.12 19.96 10.34C19.98 10.56 19.99 10.78 20 11L20 11.51C20 11.69 19.99 11.88 19.97 12.06C19.96 12.24 19.94 12.43 19.91 12.61C19.89 12.79 19.85 12.97 19.81 13.15C19.77 13.33 19.73 13.51 19.67 13.68C19.62 13.86 19.56 14.03 19.49 14.2C19.43 14.38 19.36 14.54 19.28 14.71C19.2 14.88 19.11 15.04 19.02 15.2C18.93 15.36 18.84 15.52 18.73 15.67C18.63 15.82 18.52 15.97 18.41 16.12C18.3 16.26 18.18 16.4 18.06 16.54C17.93 16.67 17.8 16.8 17.67 16.93C17.54 17.06 17.4 17.18 17.26 17.3C17.12 17.41 16.97 17.52 16.82 17.63C16.67 17.74 16.52 17.84 16.36 17.93C16.2 18.03 16.04 18.11 15.88 18.2C15.71 18.28 15.54 18.36 15.37 18.43C15.2 18.5 15.03 18.56 14.86 18.62C14.68 18.68 14.51 18.73 14.33 18.77C14.15 18.82 13.97 18.85 13.79 18.89C13.61 18.92 13.43 18.94 13.24 18.96C13.06 18.98 12.88 18.99 12.69 18.99C12.51 19 12.33 19 12.14 18.99C11.96 18.98 11.78 18.96 11.59 18.94C11.41 18.92 11.23 18.89 11.05 18.85C10.87 18.82 10.69 18.77 10.51 18.72C10.34 18.68 10.16 18.62 9.99 18.56C9.82 18.5 9.64 18.43 9.48 18.35C9.31 18.28 9.14 18.2 8.98 18.11C8.82 18.03 8.66 17.93 8.51 17.83C8.35 17.74 8.2 17.63 8.05 17.52C7.9 17.41 7.76 17.3 7.62 17.18C7.48 17.06 7.35 16.93 7.22 16.8L6.7 16.29C6.66 16.24 6.6 16.2 6.55 16.17C6.5 16.13 6.44 16.1 6.38 16.08C6.32 16.05 6.26 16.04 6.19 16.02C6.13 16.01 6.06 16.01 6 16.01C5.93 16.01 5.87 16.01 5.81 16.03C5.74 16.04 5.68 16.06 5.62 16.09C5.56 16.11 5.5 16.14 5.45 16.18C5.4 16.21 5.35 16.25 5.3 16.3C5.25 16.35 5.21 16.4 5.18 16.45C5.14 16.5 5.11 16.56 5.09 16.62C5.06 16.68 5.04 16.74 5.03 16.81C5.01 16.87 5.01 16.93 5.01 17C5.01 17.06 5.01 17.13 5.02 17.19C5.04 17.26 5.05 17.32 5.08 17.38C5.1 17.44 5.13 17.5 5.17 17.55C5.2 17.6 5.24 17.66 5.29 17.7L5.8 18.22C5.97 18.38 6.14 18.54 6.31 18.69C6.49 18.84 6.67 18.99 6.86 19.13C7.05 19.27 7.24 19.4 7.44 19.52C7.63 19.65 7.83 19.77 8.04 19.88C8.24 19.99 8.45 20.09 8.67 20.18C8.88 20.28 9.1 20.36 9.31 20.44C9.53 20.52 9.76 20.59 9.98 20.65C10.2 20.71 10.43 20.77 10.66 20.81C10.89 20.86 11.12 20.9 11.35 20.92C11.58 20.95 11.81 20.97 12.04 20.98C12.28 21 12.51 21 12.74 20.99C12.98 20.99 13.21 20.97 13.44 20.95C13.67 20.93 13.9 20.9 14.13 20.86C14.36 20.82 14.59 20.77 14.81 20.71C15.04 20.65 15.26 20.59 15.49 20.52C15.71 20.44 15.92 20.36 16.14 20.27C16.35 20.18 16.57 20.09 16.77 19.98C16.98 19.88 17.19 19.77 17.39 19.65C17.59 19.53 17.78 19.4 17.97 19.27C18.16 19.13 18.35 18.99 18.53 18.84C18.71 18.69 18.88 18.54 19.05 18.38C19.22 18.22 19.38 18.05 19.54 17.88C19.69 17.71 19.84 17.53 19.99 17.35C20.13 17.16 20.27 16.97 20.4 16.78C20.53 16.59 20.65 16.39 20.76 16.19C20.88 15.98 20.98 15.78 21.08 15.57C21.18 15.36 21.28 15.14 21.36 14.92C21.44 14.71 21.52 14.49 21.59 14.26C21.65 14.04 21.71 13.82 21.76 13.59C21.82 13.36 21.86 13.13 21.89 12.9C21.93 12.67 21.95 12.44 21.97 12.21C21.99 11.98 22 11.74 22 11.51L22 11C22 10.85 21.99 10.71 21.99 10.57C21.98 10.43 21.97 10.29 21.96 10.14C21.94 10 21.93 9.86 21.91 9.72C21.89 9.58 21.86 9.44 21.84 9.3C21.81 9.16 21.78 9.02 21.75 8.88C21.71 8.74 21.68 8.61 21.64 8.47C21.6 8.33 21.55 8.2 21.51 8.06C21.46 7.93 21.41 7.8 21.36 7.66C21.31 7.53 21.25 7.4 21.19 7.27C21.13 7.14 21.07 7.02 21.01 6.89C20.94 6.76 20.87 6.64 20.8 6.51C20.73 6.39 20.66 6.27 20.58 6.15C20.51 6.03 20.43 5.91 20.35 5.8C20.26 5.68 20.18 5.57 20.09 5.45C20 5.34 19.91 5.23 19.82 5.12C19.73 5.02 19.63 4.91 19.54 4.81C19.44 4.7 19.34 4.6 19.24 4.5C19.13 4.41 19.03 4.31 18.92 4.22C18.81 4.12 18.71 4.03 18.59 3.94C18.48 3.85 18.37 3.77 18.25 3.69C18.14 3.6 18.02 3.52 17.9 3.44C17.78 3.37 17.66 3.29 17.54 3.22C17.42 3.15 17.29 3.08 17.17 3.01C17.04 2.95 16.91 2.89 16.78 2.83C16.66 2.77 16.53 2.71 16.39 2.65C16.26 2.6 16.13 2.55 16 2.5C15.86 2.46 15.73 2.41 15.59 2.37C15.45 2.33 15.32 2.29 15.18 2.26C15.04 2.22 14.9 2.19 14.76 2.16C14.62 2.14 14.48 2.11 14.34 2.09C14.2 2.07 14.06 2.05 13.92 2.04C13.78 2.02 13.64 2.01 13.5 2C13.35 1.99 13.21 1.99 13.07 1.99C12.93 1.99 12.79 1.99 12.64 2C12.5 2 12.36 2.01 12.22 2.02C12.08 2.03 11.94 2.05 11.79 2.07C11.65 2.09 11.51 2.11 11.37 2.14C11.23 2.16 11.09 2.19 10.96 2.22C10.82 2.25 10.68 2.29 10.54 2.33C10.41 2.37 10.27 2.41 10.14 2.45C10 2.5 9.87 2.55 9.73 2.6C9.6 2.65 9.47 2.71 9.34 2.76C9.21 2.82 9.08 2.88 8.96 2.95C8.83 3.01 8.7 3.08 8.58 3.15C8.46 3.22 8.33 3.29 8.21 3.36C8.09 3.44 7.97 3.52 7.86 3.6C7.74 3.68 7.63 3.76 7.51 3.85C7.4 3.94 7.29 4.03 7.18 4.12C7.07 4.21 6.97 4.3 6.86 4.4C6.76 4.5 6.66 4.6 6.56 4.7C6.46 4.8 6.36 4.9 6.27 5.01C6.17 5.12 6.08 5.23 5.99 5.34C5.9 5.45 5.82 5.56 5.73 5.67C5.65 5.79 5.57 5.91 5.49 6.02C5.41 6.14 5.33 6.26 5.26 6.38C5.19 6.51 5.12 6.63 5.05 6.76C4.99 6.88 4.92 7.01 4.86 7.14C4.8 7.27 4.74 7.4 4.69 7.53C4.63 7.66 4.58 7.79 4.53 7.92C4.48 8.06 4.44 8.19 4.4 8.33C4.36 8.46 4.32 8.6 4.28 8.74C4.25 8.88 4.21 9.01 4.18 9.15C4.16 9.29 4.13 9.43 4.11 9.57C4.08 9.71 4.07 9.85 4.05 10Z", fill: "currentColor", fillRule: "nonzero", key: "k1" }]
]);

export default History;
