import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值（非受控状态）',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'options',
    description: '选项',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'direction',
    description: '复选框的排列方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'horizontal'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
    parameter: 'value: union, ev: Event'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'checkbox', description: '自定义复选框' },
  { name: 'label', description: 'checkbox 文案内容' }
]


export const document: LayDocument = { attributes, events, slots }

export default document
