// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export const activate = (context: vscode.ExtensionContext) => {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("mv-sidebar", sidebarProvider)
  );

  context.subscriptions.push(
		vscode.commands.registerCommand('mv.greeting', () => {
			vscode.window.showInformationMessage('Hello from MV!!');
		})
  );
};

// this method is called when your extension is deactivated
export function deactivate() {}
