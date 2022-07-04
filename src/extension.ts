// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { breuiCompletionItemProvider } from './completion/breui-vue-completion-item-povider'
import { breuiHoverProvier } from './hover/breui-vue-hover-provider'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        },
        {
          language: 'html',
          scheme: 'file'
        }
      ],
      new breuiCompletionItemProvider(),
      '',
      ' ',
      ':',
      '<',
      '"',
      "'",
      '/',
      '@',
      '(',
      '-'
    )
  )

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file',
        },
        {
          language: 'html',
          scheme: 'file',
        },
      ],
      new breuiHoverProvier()
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
