// // import * as compiler from 'vue-template-compiler';
// // import * as esprima from 'esprima';
// import * as path from 'path';
// import Tree from './types/Tree';
// import getNonce from './getNonce';
// import { safe, findCompOrProp, compValues, propValues } from './helpers/parserHelpers';
// import { parse, compileScript } from '@vue/compiler-sfc';

// export default class MVParser {
//   entryPath: string;
//   tree: any;

//   constructor(file: any) {
//     this.entryPath = file;
//     this.tree = undefined;
//   }

//   public parse(): Tree {
//     const root = {
//       id: getNonce(),
//       name: path.basename(this.entryPath).replace(/\.vue$/, ''),
//       fileName: path.basename(this.entryPath),
//       filePath: this.entryPath,
//       importPath: '/',
//       expanded: false,
//       depth: 0,
//       count: 1,
//       thirdParty: false,
//       vueRouter: false,
//       vuexConnect: false,
//       children: [],
//       parents: [],
//       props: {},
//       error: ''
//     };

//     this.tree = root;
//     this.parser(root);
//     return this.tree;
//   }

//   // Parsing logic to use @vue/compiler-sfc in beta
//   private parser(root: Tree): void {
//     // const script: any = compiler.parseComponent(root.component).script;
//     // const ast = esprima.parseModule(script.content);

//     // const exportsOutput: any = ast.body.find(({ type }) => type === 'ExportDefaultDeclaration');
//     // const declProps: any = exportsOutput.declarion.properties;

//     // const children: any[] = safe(compValues, [])(findCompOrProp(declProps, 'components'));

//     // const props: any[] = safe(propValues, [])(findCompOrProp(declProps, 'props'));
//   }
// }