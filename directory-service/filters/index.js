export const isComponent = fileString => (
  fileString.indexOf('class') !== -1 && fileString.indexOf('extends') !== -1 && fileString.indexOf('Component') !== -1 &&
  fileString.indexOf('import React') !== -1
);
export const isRenderLine = line => line.indexOf('render()') !== -1;
export const isJsOrJsx = fileName => fileName.indexOf('.js') !== -1;
export const isTsOrTsx = fileName => fileName.indexOf('.ts') !== -1;
export const hasDidMount = fileString => fileString.indexOf('componentDidMount') !== -1;
export const isDidMountLine = line => line.indexOf('componentDidMount(') !== -1;
export const hasDidUpdate = fileString => fileString.indexOf('componentDidUpdate') !== -1;
export const isDidUpdateLine = line => line.indexOf('componentDidUpdate(') !== -1;
export const hasWillUnmount = fileString => fileString.indexOf('componentWillUnmount') !== -1;
export const isWillUnmountLine = line => line.indexOf('componentWillUnmount(') !== -1;
export const isComponentDecLine = line => (
  line.indexOf('class') !== -1 && line.indexOf('extends') !== -1 && line.indexOf('Component') !== -1
);
