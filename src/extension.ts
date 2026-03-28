import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import * as crypto from 'crypto';

class AISpecSidebarProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'aiscpec.sidebarView';

  constructor(private readonly extensionUri: vscode.Uri) {}

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this.extensionUri, 'media')],
    };

    webviewView.webview.html = this.getHtmlContent(webviewView.webview);

    webviewView.webview.onDidReceiveMessage((message) => {
      switch (message.type) {
        case 'pickFolder': {
          vscode.window.showOpenDialog({
            canSelectFolders: true,
            openLabel: 'Select folder',
          }).then((result) => {
            if (result && result.length > 0) {
              const folderPath = result[0].fsPath;
              const folderName = path.basename(folderPath);
              webviewView.webview.postMessage({
                type: 'folderPicked',
                targetId: message.targetId || 'project',
                path: folderName,
              });
            }
          });
          break;
        }
        case 'copyToClipboard': {
          vscode.env.clipboard.writeText(message.text || '').then(() => {
            webviewView.webview.postMessage({ type: 'clipboardCopied', ok: true });
          });
          break;
        }
        case 'requestInitialContext': {
          const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
          if (workspaceFolder) {
            webviewView.webview.postMessage({
              type: 'initContext',
              workspaceFolder: path.basename(workspaceFolder.uri.fsPath),
            });
          }
          break;
        }
      }
    });
  }

  private getHtmlContent(webview: vscode.Webview): string {
    const htmlPath = path.join(this.extensionUri.fsPath, 'media', 'panel.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    const nonce = crypto.randomBytes(16).toString('base64');
    const cspSource = webview.cspSource;

    html = html.replace(/\{\{nonce\}\}/g, nonce);
    html = html.replace(/\{\{cspSource\}\}/g, cspSource);

    return html;
  }
}

export function activate(context: vscode.ExtensionContext): void {
  const provider = new AISpecSidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(AISpecSidebarProvider.viewType, provider)
  );
}

export function deactivate(): void {}
