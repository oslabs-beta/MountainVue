export const safe = (func, def) => {
	return (value) => (value === undefined ? def : func(value));
};

export const findCompOrProp = (props, name) => {
	return props.find((prop) => prop.key.name === name);
};

export const compValues = (comps) => {
	return comps.value.properties.map((prop) => prop.key.name);
};

export const propValues = (props) => {
	return props.value.properties.map((prop) => prop.key.name);
};

// TS migration for extension environment parsing logic
// export function safe(func: Function, def: []): Function {
// 	return (value: any): any[] => (value === undefined ? def : func(value));
// };

// export function findCompOrProp(props: any[], name: string): any | undefined {
// 	return props.find((prop: any): any | undefined => prop.key.name === name);
// };

// export function compValues(comps: any): any[] {
// 	return comps.value.properties.map((prop: any): any[] => prop.key.name);
// };

// export function propValues(props: any): any[] {
// 	return props.value.properties.map((prop: any): any[] => prop.key.name);
// };
