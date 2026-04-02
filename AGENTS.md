# AGENTS.md - AISpec Development Guide

## Project Overview

AISpec is a VS Code extension for generating feature development prompts for AI coding agents. Written in TypeScript with VS Code extension API.

## Build Commands

```bash
# Compile TypeScript
npm run compile

# Watch mode (auto-recompile on changes)
npm run watch

# Prepare for publishing
npm run vscode:prepublish

# Package extension (.vsix)
npm run package
```

**Output**: Compiled JS goes to `out/` directory. Extension entry point is `out/extension.js`.

## TypeScript Configuration

- **Strict mode enabled** - all strict checks on
- **Target**: ES2020
- **Module**: CommonJS
- **No tests configured** - add a test framework if needed

## Code Style Guidelines

### Imports
- Use explicit named imports: `import { something } from 'module'`
- Group imports: external (vscode), internal (./utils), local (../other)
- No barrel files - import directly from modules

### Naming
- **Files**: kebab-case (e.g., `feature-planner.ts`)
- **Classes**: PascalCase (e.g., `AISpecSidebarProvider`)
- **Interfaces**: PascalCase with I prefix optional (e.g., `WebviewOptions`)
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE for magic values, camelCase for regular

### Types
- Use explicit return types for public functions
- Prefer interfaces over type aliases for object shapes
- Use `unknown` instead of `any`
- Never use `any` unless absolutely necessary

### Functions
- Keep functions small and focused (max 50 lines)
- Single responsibility principle
- Early returns preferred over nested conditionals
- Use arrow functions for callbacks and closures

### Error Handling
- Always handle async errors with `.catch()` or `try/catch`
- Use VS Code's `vscode.window.showErrorMessage` for user-facing errors
- Log errors appropriately (console.error for debug)
- Never expose raw errors to users

### VS Code Extension Specifics
- Dispose all subscriptions in `deactivate()` or via `context.subscriptions.push()`
- Use proper URI joining: `vscode.Uri.joinPath()`
- Respect webview CSP - no inline scripts, use nonce
- Store sensitive data in `context.secrets` not localStorage
- Use `workspace.workspaceFolders` for multi-folder support

### Formatting
- 2-space indentation
- Semicolons required
- Single quotes for strings
- Trailing commas in objects/arrays
- Max line length: 100 characters
- Use Prettier if added to project

### File Structure
```
src/
  extension.ts        # Entry point
  your-feature.ts     # Feature modules
  utils/
    helpers.ts        # Utility functions
media/
  panel.html          # Webview content
  icons/
```

## Git Workflow

- Branch naming: `feature/`, `fix/`, `hotfix/`
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- PRs should target `develop` branch
- Run `npm run compile` before committing

## Common Tasks

### Add new webview message handler
```typescript
// In resolveWebviewView
webviewView.webview.onDidReceiveMessage((message) => {
  switch (message.type) {
    case 'newHandler': handleNewHandler(message); break;
  }
});
```

### Add new configuration
```json
// package.json contributes.configuration
"aispec.yourSetting": {
  "type": "string",
  "default": "",
  "description": "Your setting description"
}
```

### Debug extension
1. Press F5 in VS Code (Debug "Extension")
2. Extension host opens new window
3. Add breakpoints in `src/`
4. Logs appear in Debug Console

## Resources

- [VS Code API](https://code.visualstudio.com/api)
- [Extension Samples](https://github.com/microsoft/vscode-extension-samples)
- [Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)