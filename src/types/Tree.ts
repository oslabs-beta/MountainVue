interface Tree {
  id: string;
  name: string;
  fileName: string;
  path: string;
  importPath: string;
  expanded: boolean;
  depth: number;
  count: number;
  thirdParty: boolean;
  vueRouter: boolean;
  vuexStore: boolean;
  children: Tree[];
  parent: string[];
  props: { [key: string]: boolean; };
  error: string;
};

export default Tree;
