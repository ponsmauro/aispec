"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
const crypto = __importStar(require("crypto"));
class AIScpecSidebarProvider {
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
    }
    resolveWebviewView(webviewView) {
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
    getHtmlContent(webview) {
        const htmlPath = path.join(this.extensionUri.fsPath, 'media', 'panel.html');
        let html = fs.readFileSync(htmlPath, 'utf8');
        const nonce = crypto.randomBytes(16).toString('base64');
        const cspSource = webview.cspSource;
        html = html.replace(/\{\{nonce\}\}/g, nonce);
        html = html.replace(/\{\{cspSource\}\}/g, cspSource);
        return html;
    }
}
AIScpecSidebarProvider.viewType = 'aiscpec.sidebarView';
function activate(context) {
    const provider = new AIScpecSidebarProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(AIScpecSidebarProvider.viewType, provider));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map