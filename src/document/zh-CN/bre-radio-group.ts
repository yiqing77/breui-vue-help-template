import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值（非受控状态）',
    type: 'string / number / boolean',
    value: '—',
    default: '``'
  },
  {
    name: 'size',
    description: '单选框组的尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'options',
    description: '选项',
    type: 'Array<string / number / RadioOption>',
    value: '—',
    default: '-'
  },
  {
    name: 'type',
    description: '单选框组的类型',
    type: 'string',
    value: 'radio / button',
    default: 'radio'
  },
  {
    name: 'direction',
    description: '单选框组的方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'horizontal'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '绑定值变化时触发的事件',
    parameter: 'value: union'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'radio', description: '自定义单选框' },
  { name: 'label', description: 'radio 文案内容' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
