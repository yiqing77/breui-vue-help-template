import { html } from "common-tags";
import * as path from "path";
import * as fs from "fs";

interface snippetInfo {
  /**片段名 */
  name: string
  /**触发片段的前缀 */
  prefix: string
  /**片段主体 */
  body: string
  /**片段描述 */
  description: string
}

/**
 * 将 snippet 描述信息对象化
 * @param snippetTpl snippet 模板字符串
 * @returns 对象化后的 snippet 描述信息
 */
const parseSnippetInfoFromSnippetTemplate = (snippetTpl: string) => {
  const htmlCommentRE: RegExp = /<!--([\w\W]*?)-->/
  const htmlCommentStartRE = /<!--/g
  const htmlCommentEndRE = /-->/g
  const snippets = [];
  const separatedTpl = snippetTpl.split(htmlCommentStartRE).slice(1)
  for (const tpl of separatedTpl) {
    const separatedCommentAndBody = tpl
      .split(htmlCommentEndRE)
      .map(item => item.replace(/^\s*|\s*$/, '').trim())
    const comment = separatedCommentAndBody[0]
    const body = separatedCommentAndBody[1]
    const snippetInfo: snippetInfo = {
      name: '',
      prefix: '',
      body: '',
      description: '',
    }
    snippetInfo['body'] = body
    comment.trim()
      .split("@")
      .slice(1)
      .map(line => line.replace(/\s/g, ''))
      .forEach((line) => {
        const prop = line.split(':')
        const key = prop[0] as keyof snippetInfo
        const value = prop[1]
        snippetInfo[key] = value
      })
    snippets.push(snippetInfo)
  }
  return snippets
}

/**
 * 渲染片段结构
 * @param name 片段名
 * @param snippet 代码片段
 * @param tabtrigger 触发片段的前缀
 * @param description 片段描述信息
 * @returns snippet 格式化后的结构
 */
const renderSnippet = (name: string, tabtrigger: string, snippet: string, description: string) => {
  const separatedSnippet = snippet
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .split("\n");
  const separatedSnippetLength = separatedSnippet.length;

  const newSnippet = separatedSnippet.map((line: string, index: number) => {
    return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
  });
  // prettier-ignore
  return html`
    "${name}": {
    "prefix": "${tabtrigger}",
    "body": [
    ${newSnippet.join('\n')}
    ],
    "description": "${description}"
    }
  `;
};

/**
 * 渲染所有片段结构
 * @param data 
 * @returns 所有片段结构
 */
const renderSnippets = (data: string) => {
  let snippetStr = ''
  const snippets = parseSnippetInfoFromSnippetTemplate(data)
  const snippetsLength = snippets.length
  snippets.forEach((snippet, index) => {
    const { name, prefix, description, body } = snippet
    snippetStr += (
      (index === snippetsLength - 1)
        ? renderSnippet(name, prefix, body, description)
        : renderSnippet(name, prefix, body, description) + ',\n'
    )
  })
  snippetStr.trim()
  snippetStr = html`
    {
    ${snippetStr}
    }`
  return snippetStr
}

const build = (dir: string) => {
  const outFilename = 'breui-vue.json'
  const outDir = './snippets'
  let data = ''
  const snippetTplFiles = fs.readdirSync(dir)
  snippetTplFiles.forEach((snippetTplFile) => {
    if (/\.html$/.test(snippetTplFile)) {
      data += fs.readFileSync(path.resolve(dir, snippetTplFile), 'utf-8')
    }
  })
  const snippets = renderSnippets(data)
  fs.writeFile(path.resolve(outDir, outFilename), snippets, (err) => {
    console.log(err)
  });
}

const argv = process.argv
if (argv.length < 3) {
  console.log('Dir is must be input.')
} else {
  // console.log(path.resolve(process.cwd(), argv[2]));
  build(path.resolve(process.cwd(), argv[2]))
}









