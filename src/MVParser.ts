// import * as babelParser from '@babel/parser';
// import * as path from 'path';
// import * as fs from 'fs';
// import { getNonce } from "./getNonce";
// import { File } from '@babel/types';
// import Tree from './types/Tree';
// import Imports from './types/Imports';

// class MVParser {
//   filePath: string;
//   tree: Tree | undefined;

//   constructor(path: string) {
//     this.filePath = path;
//     this.tree = undefined;
//   }

//   public parse(): Tree | undefined {
//     const root = {
//       id: getNonce(),
//       name: path.basename(this.filePath).replace(/\.(vue)$/, ''),
//       fileName: path.basename(this.filePath),
//       path: this.filePath,
//       importPath: '/',
//       expanded: false,
//       depth: 0,
//       count: 1,
//       thirdParty: false,
//       vueRouter: false,
//       vuexStore: false,
//       children: [],
//       parent: [],
//       props: {},
//       error: ''
//     };

//     this.tree = root;
//     this.parser(root);

//     return this.tree;
//   }

//   public getTree(): Tree | undefined {
//     return this.tree;
//   }

//   public setTree(tree: Tree): void {
//     this.filePath = tree.path;
//     this.tree = tree;
//   }

//   public updateTree(path: string): Tree | undefined {
//     let children: any[] = [];

//     const getChildren = (node: Tree): void => {
//       const { depth, path, expanded } = node;
//       children.push({ depth, path, expanded });
//     };

//     const balanceDepth = (node: Tree): void => {
//       children.forEach(child => {
//         if (child.depth === node.depth && child.path === node.path && child.expanded) {
//           node.expanded = true;
//         }
//       });
//     };

//     const updateChildren = (node: Tree): void => {
//       if (node.path === path) {
//         node.children.forEach(child => {
//           this.traverseTree(getChildren, child);
//         });

//         const newNode = this.parser(node);

//         this.traverseTree(balanceDepth, newNode);

//         children = [];
//       }
//     };

//     this.traverseTree(updateChildren, this.tree);

//     return this.tree;
//   }

//   public toggleExpanded(id: string, expanded: boolean): Tree | undefined {
//     const updateExpanded = (node: Tree): void => {
//       if (node.id === id) {
//         node.expanded = expanded;
//       }
//     };

//     this.traverseTree(updateExpanded, this.tree);

//     return this.tree;
//   }

//   private traverseTree(callback: Function, node: Tree | undefined = this.tree): any {
//     if (!node) {
//       return;
//     }

//     callback(node);

//     node.children.forEach(child => {
//       this.traverseTree(callback, child);
//     });
//   }

//   private parser(tree: Tree): Tree | undefined {
//     if (!['\\', '/', '.'].includes(tree.importPath[0])) {
//       tree.thirdParty = true;

//       if (tree.fileName === 'vue-router') {
//         tree.vueRouter = true;
//       }

//       return;
//     }

//     const fileName = this.getFileName(tree);

//     if (!fileName) {
//       tree.error = 'File does not exist';
//       return;
//     }

//     if (tree.parent.includes(tree.path)) {
//       return;
//     }

//     let ast: babelParser.ParseResult<File>;

//     try {
//       ast = babelParser.parse(fs.readFileSync(path.resolve(tree.path), 'utf-8'), {
//         sourceType: 'module',
//         tokens: true,
//         plugins: ['typescript']
//       });
//     } catch (err) {
//       tree.error = 'Could not parse uploaded file';
//       return tree;
//     }

//     const imports = this.getImports(ast.program.body);

//     // tree.children = this.getVueChildren(ast.tokens, imports, tree);
//     // tree.vuexStore = this.checkForVuex(ast.tokens, imports);
//     // tree.children.forEach(child => this.parser(child));

//     return tree;
//   }

//   private getFileName(tree: Tree): string | undefined {
//     const fileExt = path.extname(tree.path);
//     let fileName: string | undefined = tree.fileName;

//     if (!fileExt) {
//       const fileDir = fs.readdirSync(path.dirname(tree.path));
//       const regEx = new RegExp(`${tree.fileName}.(vue)$`);
//       fileName = fileDir.find(path => path.match(regEx));
//       fileName ? tree.path += path.extname(fileName) : null;
//     }

//     return fileName;
//   }

//   private getImports(body: { [key: string]: any }[]): Imports {
//     const bodyImports = body.filter(item => item.type === 'ImportDeclaration' || 'VariableDeclaration');

//     const reduceImports = bodyImports.reduce((output, currVal) => {
//       if (currVal.type === 'ImportDeclaration') {
//         currVal.specifiers.forEach((val: any) => {
//           output[val.local.name] = {
//             importPath: currVal.source.value,
//             importName: val.imported ? val.imported.name : val.local.name
//           };
//         });
//       }

//       if (currVal.type === 'VariableDeclaration') {
//         const importPath = this.findVarDecImports(currVal.declartions[0]);
        
//         if (importPath) {
//           const importName = currVal.declarations[0].id.name;
//           output[currVal.declarations[0].id.name] = {
//             importPath,
//             importName
//           };
//         }
//       }

//       return output;
//     }, {});

//     return reduceImports;
//   }

//   private findVarDecImports(ast: { [key: string]: any }): any {
//     if (ast.hasOwnProperty('callee') && ast.callee.type === 'Import') {
//       return ast.arguments[0].value;
//     }

//     for (let key in ast) {
//       if (ast.hasOwnProperty(key) && typeof ast[key] === 'object' && ast[key]) {
//         const importPath = this.findVarDecImports(ast[key]);
//         if (importPath) {
//           return importPath;
//         }
//       }
//     }

//     return false;
//   }

//   // private getVueChildren(tokens: any[], importData: Imports, parentNode: Tree): Tree | undefined {
//   //   let childNodes: { [key: string]: Tree } = {};
//   //   let props: { [key: string]: boolean } = {};
//   //   let token: { [key: string]: any };

//   //   tokens.forEach((token, i) => {
//   //     if (token.type.label === )
//   //   })
//   // }
// }

// export default MVParser;
