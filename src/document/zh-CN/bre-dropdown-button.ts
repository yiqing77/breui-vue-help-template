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
    value: 'hover / click / focus / contextMenu',
    default: 'click'
  },
  {
    name: 'position',
    description: '弹出位置',
    type: 'string',
    value: 'top / tl / tr / bottom / bl / br',
    default: 'bottom'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement / null / undefined',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'type',
    description: '按钮类型',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'size',
    description: '按钮大小',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'button-props',
    description: '按钮属性',
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
  },
  {
    name: 'click',
    description: '点击按钮时触发',
    parameter: 'ev: MouseEvent'
  },
  {
    name: 'select',
    description: '用户选择时触发',
    parameter: 'value: string / number / Record<string, any> / undefined, ev: Event'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'content',
    description: '内容'
  },
  {
    name: 'icon',
    description: '按钮图标'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
