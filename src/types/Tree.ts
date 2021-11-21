interface Tree {
  id: string;
  name: string;
  fileName: string;
  filePath: string;
  importPath: string;
  expanded: boolean;
  depth: number;
  count: number;
  thirdParty: boolean;
  vueRouter: boolean;
  vuexConnect: boolean;
  children: Tree[];
  parents: string[];
  props: { [key: string]: boolean; };
  error: string;
};

export default Tree;
