import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'search-button',
    description: '是否为后置按钮模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框大小',
    type: 'string',
    value: 'mini / small / medium / large',
    default: 'medium'
  },
  {
    name: 'button-text',
    description: '搜索按钮的文字，使用后会替换原本的图标',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'button-props',
    description: '搜索按钮的属性',
    type: 'object',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'search',
    description: '单击搜索按钮时触发',
    parameter: '(value: string, ev: MouseEvent)'
  }
]

export const document: LayDocument = { attributes, events }

export default document
