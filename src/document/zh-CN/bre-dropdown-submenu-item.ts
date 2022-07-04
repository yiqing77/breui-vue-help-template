import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'popup-visible',
    description: '弹出框是否可见',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'default-popup-visible',
    description: '弹出框默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'm-',
    default: 'false'
  },
  {
    name: 'trigger',
    description: '触发方式',
    type: 'string',
    value: 'hover / click',
    default: 'click'
  },
  {
    name: 'position',
    description: '弹出位置',
    type: 'string',
    value: 'rt / lt',
    default: 'rt'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'option-props',
    description: '	自定义选项属性',
    type: 'object',
    value: '-',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'popup-visible-change',
    description: '下拉框显示状态发生改变时触发',
    parameter: 'visible: boolean'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '图标'
  },
  {
    name: 'content',
    description: '子菜单内容'
  },
  {
    name: 'footer',
    description: '页脚'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
