export const safe = (func, def) => {
  return (value) => value === undefined ? def : func(value);
};

export const compValues = (comps) => {
  return comps.value.properties.map((prop) => prop.key.name);
};

export const findProp = (props, name) => {
  return props.find((prop) => prop.key.name === name);
};

export const propElems = (props) => {
  return props.value.elements.map((element) => element.value);
};