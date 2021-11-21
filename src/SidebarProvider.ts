import * as vscode from 'vscode';
import getNonce from './getNonce';
// import MVParser from './MVParser';
import Tree from './types/Tree';
export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  // parser: MVParser | undefined;
  // private readonly context: vscode.ExtensionContext;

  constructor(private readonly _extensionUri: vscode.Uri) {
    // this.context = context;
    // this._extensionUri = context.extensionUri;
    
    // const state: Tree | undefined = context.workspaceState.get('mountainvue');

    // Parsing logic in progress
    // if (state) {
    //   this.parser = new MVParser(state.filePath);
    // }
  }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [
        this._extensionUri
      ],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    // Extension reducer in progress
    // webviewView.webview.onDidReceiveMessage(async (data) => {
    //   switch (data.type) {
    //     case 'onFile': {
    //       if (!data.type) {
    //         return;
    //       }

    //       this.parser = new MVParser(data.value);
    //       this.parser.parse();
    //       // this.updateView();
    //       break;
    //     }
    //   }
    // });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri, 'media', 'reset.css')
    );

    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri, 'media', 'vscode.css')
    );

    // const styleMainUri = webview.asWebviewUri(
    //   vscode.Uri.joinPath(
    //     this._extensionUri, 'dist', 'style.css')
    // );

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri, 'dist', 'app.js')
    );

    const nonce = getNonce();

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-Security-Policy"
          content="default-src 'none';
          style-src 'unsafe-inline' ${webview.cspSource};
          img-src ${webview.cspSource} https:;
          script-src 'nonce-${nonce}';"
        >
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${styleResetUri}" rel="stylesheet">
        <link href="${styleVSCodeUri}" rel="stylesheet">
        
        <title>MV</title>
        <script nonce="${nonce}">
          const tsvscode = acquireVsCodeApi();
        </script>
      </head>
        <body>
          <div id="app"></div>
          <script src="${scriptUri}" nonce="${nonce}">
        </body>
      </html>
    `;
  }
}
