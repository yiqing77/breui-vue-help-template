import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'default-value',
    description: '默认值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'count',
    description: '评分的总数',
    type: 'number',
    value: '—',
    default: '5'
  },
  {
    name: 'allow-half',
    description: '是否允许半选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-clear',
    description: '是否允许清除',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'grading',
    description: '是否开启笑脸分级',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'color',
    description: '颜色',
    type: 'string / Record<string, string>',
    value: '—',
    default: "-"
  },
  {
    name: 'readonly',
    description: '是否为只读状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否为只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: '分值改变时触发', parameter: '	value: number' },
  { name: 'hover-change', description: '鼠标移动到数值上时触发', parameter: 'value: number' }
]

export const slots: DocumentSlot[] = [
  { name: 'character', description: '符号' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
