import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    description: '标签的颜色',
    type: 'string',
    value: 'red/orangered/orange/gold/lime/green/cyan/blue/arcoblue/purple/pinkpurple/magenta/gray',
    default: '—'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / large',
    default: 'medium'
  },
  {
    name: 'visible',
    description: '标签是否可见',
    type: 'boolean',
    value: '-',
    default: '—'
  },
  {
    name: 'default-visible',
    description: '标签默认是否可见',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'loading',
    description: '标签是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'closable',
    description: '是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'checkable',
    description: '标签是否可选中',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'checked',
    description: '标签是否选中（标签可选中时可用）',
    type: 'boolean',
    value: '—',
    default: '-'
  },

  {
    name: 'default-checked',
    description: '标签默认选中状态（标签可选中时可用）',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const events: DocumentEvent[] = [
  { name: 'check', description: '用户选中时触发（仅在可选中模式下触发）', parameter: 'checked: boolean, ev: MouseEvent' },
  { name: 'close', description: '关闭 Tag 时触发的事件', parameter: 'ev: MouseEvent' }
]

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '图标'
  },
  {
    name: 'close-icon',
    description: '关闭按钮的图标'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
