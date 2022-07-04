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
    name: 'default-checked',
    description: '默认是否选中（非受控状态）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value',
    description: '选项的 value',
    type: 'string / number / boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'type',
    description: '单选的类型',
    type: 'string',
    value: 'radio / button',
    default: 'radio'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '绑定值变化时触发的事件',
    parameter: 'value: union, ev: Event'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'radio', description: '自定义单选框' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
