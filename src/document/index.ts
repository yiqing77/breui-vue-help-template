import { ExtensionLanguage } from '../shared/enum';
import { LocalDocument } from '../shared/types';
import CnDocument from './zh-CN';
import EnDocument from './en-US';
// 统一导出文档
export const localDocument: LocalDocument = {
  [ExtensionLanguage.en]: EnDocument,
  [ExtensionLanguage.cn]: CnDocument
};