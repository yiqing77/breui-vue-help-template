import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

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
    default: '``'
  },
  {
    name: 'size',
    description: '输入框大小',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'allow-clear',
    description: '是否允许清空输入框',
    type: 'boolean',
    value: '-',
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
    name: 'readonly',
    description: '是否为只读状态',
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
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'max-length',
    description: '输入值得最大长度，errorOnly 属性在 2.12.0 版本添加',
    type: 'number / { length: number; errorOnly?: boolean }',
    value: '—',
    default: '0'
  },
  {
    name: 'show-word-limit',
    description: '是否显示字数统计',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'word-length',
    description: '字符长度的计算方法',
    type: '(value: string) => number',
    value: '—',
    default: '-'
  },
  {
    name: 'word-slice',
    description: '字符截取方法，同 wordLength 一起使用',
    type: '(value: string, maxLength: number) => string',
    value: '—',
    default: '-'
  },
  {
    name: 'input-attrs',
    description: '内部 input 元素的属性',
    type: 'object',
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
    parameter: '(value: string, ev: Event)'
  },
  {
    name: 'press-enter',
    description: '用户按下回车时触发',
    parameter: 'ev: KeyboardEvent'
  },
  {
    name: 'input',
    description: '在 Input 值改变时触发',
    parameter: '(value: string, ev: Event)'
  },
  {
    name: 'clear',
    description: '用户点击清除按钮时触发',
    parameter: '(ev: MouseEvent)'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'append', description: '后置标签' },
  { name: 'prepend', description: '前置标签' },
  { name: 'suffix', description: '后缀元素' },
  { name: 'prefix', description: '前缀元素' }
]

export const document: LayDocument = { attributes, methods, events, slots }

export default document
