import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'status',
    description: '链接的状态',
    type: 'string',
    value: 'normal / success / warning / danger',
    default: 'normal'
  },
  {
    name: 'hoverable',
    description: '鼠标悬浮时存在底色',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'href',
    description: '链接地址',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击时触发',
    parameter: '(event: MouseEvent)'
  }
]

export const document: LayDocument = { attributes, events }

export default document
