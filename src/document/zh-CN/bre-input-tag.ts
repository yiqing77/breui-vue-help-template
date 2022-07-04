import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值（非受控状态）',
    type: 'string',
    value: '—',
    default: '[]'
  },
  {
    name: 'input-value/v-model',
    description: '输入框的值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'default-input-value',
    description: '输入框的默认值（非受控状态）',
    type: 'string',
    value: '—',
    default: '``'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'error',
    description: '是否为错误状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'readonly',
    description: '是否为只读状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-clear',
    description: '是否允许清空输入框',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框大小',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'max-tag-count',
    description: '最多展示的标签个数，0 表示不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'retain-input-value',
    description: '是否保留输入框的内容',
    type: 'boolean / { create?: boolean; blur?: boolean }',
    value: '—',
    default: 'false'
  },
  {
    name: 'format-tag',
    description: '格式化标签内容',
    type: '(data: TagData) => string',
    value: '—',
    default: '-'
  },
  {
    name: 'unique-value',
    description: '是否仅创建唯一的值',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'field-names',
    description: '自定义 TagData 中的字段',
    type: 'InputTagFieldNames',
    value: '—',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '—' },
  { name: 'blur', description: '使 input 失去焦点', parameter: '—' },
]

export const events: DocumentEvent[] = [
  {
    name: 'blur',
    description: '在 Input 失去焦点时触发',
    parameter: '(event: FocusEvent)'
  },
  {
    name: 'focus',
    description: '在 Input 获得焦点时触发',
    parameter: '(event: FocusEvent)'
  },
  {
    name: 'change',
    description: '仅在输入框失去焦点或用户按下回车时触发',
    parameter: '(value: (string / number / TagData)[], ev: Event)'
  },
  {
    name: 'press-enter',
    description: '用户按下回车时触发',
    parameter: '(inputValue: string, ev: KeyboardEvent)'
  },
  {
    name: 'input-value-change',
    description: '输入值发生改变时触发',
    parameter: '(inputValue: string, ev: Event)'
  },
  {
    name: 'remove',
    description: '点击标签的删除按钮时触发',
    parameter: '(removed: string / number, ev: Event)'
  },
  {
    name: 'clear',
    description: '用户点击清除按钮时触发',
    parameter: '(ev: MouseEvent)'
  }
]

export const document: LayDocument = { attributes, methods, events }

export default document
