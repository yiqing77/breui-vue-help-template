import { MarkdownString } from 'vscode'
import { ExtensionLanguage } from './enum'
import { DocumentAttribute, BaseDocument, DocumentMethod, DocumentScopedSlot, DocumentSlot } from './types'


export class HoverDocumentGenerator {
  static instance: HoverDocumentGenerator;

  private docsSite: string = 'http://www.breui-vue.com/zh-CN/components/'

  /**
   * 生成属性文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateAttribute<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const attributes = document.attributes || []; // 取得属性列表
    if (attributes.length) {
      // 生成表头
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`**${tag} 属性** \r`);
        markdownString.appendMarkdown('**********\r');
        markdownString.appendMarkdown('| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r');
      } else {
        markdownString.appendMarkdown(`**${tag} Attributes** \r`);
        markdownString.appendMarkdown('| Attributes | Description | Type | Accepted Values | Default |\r');
      }
      markdownString.appendMarkdown('|:---|:---|:---|:---|:---|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: DocumentAttribute) => {
        markdownString.appendMarkdown(
          `|${row.name}&nbsp;|${row.description}&nbsp;|${row.type}&nbsp;|${row.value}&nbsp;|${row.default}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find((row: DocumentAttribute) => row.name === attribute);
      if (row) {
        //markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`);
        markdownString = new MarkdownString('',true)
        markdownString.appendMarkdown(`${tag} 属性: <span style="color:#79B8FF;">${ row.name }</span> \r`)
        markdownString.appendMarkdown('**********\r')
        markdownString.appendMarkdown(`描述: ${row.description}<br>`);
        markdownString.appendMarkdown(`类型: ${row.type}<br>`);
        markdownString.appendMarkdown(`默认值: ${row.default}<br>`);
        markdownString.appendMarkdown(`可选值: ${row.value}<br>`);
        markdownString.supportHtml = true;
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成方法文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateMethods<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const methods = document.methods || [];
    if (methods.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`**${tag} 方法**\r`);
        markdownString.appendMarkdown('**********\r');
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        markdownString.appendMarkdown(`**${tag} Method**\r`);
        markdownString.appendMarkdown('| Method | Description | Parameters |\r');
      }
      markdownString.appendMarkdown('|:---|:---|:---|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(`|${row.name}&nbsp;|${row.description}&nbsp;|${row.parameter}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        //markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
        markdownString = new MarkdownString('',true)
        markdownString.appendMarkdown(`${tag} 方法: <span style="color:#79B8FF;">${ row.name }</span> \r`)
        markdownString.appendMarkdown('**********\r')
        markdownString.appendMarkdown(`描述: ${row.description}<br>`);
        markdownString.appendMarkdown(`参数: ${row.parameter}<br>`);
        markdownString.supportHtml = true;
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成事件文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateEvents<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const events = document.events || [];
    if (events.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`**${tag} 事件**\r`);
        markdownString.appendMarkdown('**********\r');
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        markdownString.appendMarkdown(`#### ${tag} Event\r`);
        markdownString.appendMarkdown('| Event | Description | Parameters |\r');
      }
      markdownString.appendMarkdown('|:---|:---|:---|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(`|${row.name}&nbsp;|${row.description}&nbsp;|${row.parameter}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        //markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
        markdownString = new MarkdownString('',true)
        markdownString.appendMarkdown(`${tag} 事件: <span style="color:#79B8FF;">${ row.name }</span> \r`)
        markdownString.appendMarkdown('**********\r')
        markdownString.appendMarkdown(`描述: ${row.description}<br>`);
        markdownString.appendMarkdown(`参数: ${row.parameter}<br>`);
        markdownString.supportHtml = true;
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成插槽文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateSlots<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const slots = document.slots || [];
    if (slots.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`**${tag} 插槽**\r`);
        markdownString.appendMarkdown('**********\r');
        markdownString.appendMarkdown('| 插槽 | 说明 |\r');
      } else {
        markdownString.appendMarkdown(`**${tag} Slot**\r`);
        markdownString.appendMarkdown('| Slot | Description |\r');
      }
      markdownString.appendMarkdown('|:---|:---|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: DocumentSlot) => {
        markdownString.appendMarkdown(`|${row.name}&nbsp;|${row.description}&nbsp;|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((row: DocumentSlot) => row.name === attribute);
      if (row) {
       // markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        markdownString = new MarkdownString('',true)
        markdownString.appendMarkdown(`${tag} 插槽: <span style="color:#79B8FF;">${ row.name }</span> \r`)
        markdownString.appendMarkdown('**********\r')
        markdownString.appendMarkdown(`描述: ${row.description}<br>`);
        markdownString.supportHtml = true;
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成插槽文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateScopedSlots<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const scopedSlots = document.scopedSlots || [];
    if (scopedSlots.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`**${tag} 插槽**\r`);
        markdownString.appendMarkdown('**********\r');
        markdownString.appendMarkdown('| 插槽 | 说明 |\r');
      } else {
        markdownString.appendMarkdown(`#### ${tag} Slot\r`);
        markdownString.appendMarkdown('| Slot | Description |\r');
      }
      markdownString.appendMarkdown('|:---|:---|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      scopedSlots.forEach((row: DocumentScopedSlot) => {
        markdownString.appendMarkdown(`|${row.name}&nbsp;|${row.description}&nbsp;|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = scopedSlots.find((row: DocumentScopedSlot) => row.name === attribute);
      if (row) {
       // markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        markdownString.appendMarkdown(`${tag} 作用域插槽: <span style="color:#79B8FF;">${ row.name }</span> \r`)
        markdownString.appendMarkdown('**********\r')
        markdownString.appendMarkdown(`描述: ${row.description}<br>`);
        markdownString.supportHtml = true;
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成其他文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 文档对象具体的属性值
   * @param {string} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateOther<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string,
    language: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    // @ts-ignore
    const attributes = document[attribute] || [];
    if (attributes.length) {
      markdownString.appendMarkdown(`### ${tag} ${attribute} \r`);
      const keys = Object.keys(attributes[0]);
      markdownString.appendMarkdown(`| ${keys.join('|')} |\r`);
      markdownString.appendMarkdown(`| ${keys.map(() => '---').join('|')} |\r`);

      // 遍历属性值值生成文档
      attributes.forEach((row: DocumentAttribute) => {
        let str = '|';
        keys.forEach((key) => {
          str += `${row[key as keyof DocumentAttribute]}|`;
        });
        str += '\r';
        markdownString.appendMarkdown(str);
      });
      isUndefined = false;
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }
  private markdownDocsLink(links: string = ''): string {
    if(links === 'layer'){
      links = 'modal'
    }
    return ` [查看文档](${this.docsSite}${links})`;
  }

  /**
   * 宣统提示文档生成入口
   *
   * @template T 文档类型
   * @param {T} document 文档
   * @param {string} key 属性key
   * @param {string} tag 文档标签
   * @param {string} attr 文档属性
   * @param {ExtensionLanguage} language 语言
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  generate<T extends BaseDocument>(
    document: T,
    key: string,
    tag: string,
    attr: string,
    language: ExtensionLanguage
  ): MarkdownString {
    let markdownString: MarkdownString = new MarkdownString('');
    markdownString.appendMarkdown(`${this.markdownDocsLink(document.docLink)}\r`)
    markdownString.appendMarkdown('**********\r');
    switch (key) {
      case 'attributes':
        markdownString = this.generateAttribute<T>(document, tag, attr, language);
        break;
      case 'methods':
        markdownString = this.generateMethods<T>(document, tag, attr, language);
        break;
      case 'events':
        markdownString = this.generateEvents<T>(document, tag, attr, language);
        break;
      case 'slots':
        markdownString = this.generateSlots<T>(document, tag, attr, language);
        break;
      case 'scopedSlots':
        markdownString = this.generateScopedSlots<T>(document, tag, attr, language);
        break;
      default:
      // 生成其他文档时 属性为key
      // markdownString = this.generateOther<T>(document, tag, key, language)
    }
    return markdownString;
  }

  static getInstance(): HoverDocumentGenerator {
    if (!this.instance) {
      this.instance = new HoverDocumentGenerator();
    }
    return this.instance;
  }
}