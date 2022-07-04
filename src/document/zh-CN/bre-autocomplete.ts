import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';
import { DocumentScopedSlot } from '../../shared/types'

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value',
    description: '绑定值',
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
    name: 'default-value',
    description: '默认值（非受控模式）',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'data',
    description: '用于自动提示的数据',
    type: '(string / number / SelectOptionData / SelectOptionGroup)[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement / null / undefined',
    value: '—',
    default: '-'
  },
  {
    name: 'strict',
    description: '是否为严格校验模式',
    type: 'boolean',
    value: 'true / false',
    default: 'false'
  },
  {
    name: 'filter-option',
    description: '自定义选项过滤方法',
    type: 'FilterOption',
    value: '—',
    default: 'true'
  },
  {
    name: 'trigger-props',
    description: 'trigger 组件属性',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'allow-clear',
    description: '是否允许清空输入框',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: '使 input 获取焦点', parameter: '-' }]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '选择选项时触发',
    parameter: '(value: string \\'
  },
  {
    name: 'change',
    description: '绑定值发生改变时触发',
    parameter: '(value: string \\'
  },
  {
    name: 'search',
    description: '用户搜索时触发',
    parameter: '(value: string \\'
  },
  {
    name: 'clear',
    description: '用户点击清除按钮时触发',
    parameter: '(ev: Event \\'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'option', description: '选项内容' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: '自定义输入建议，参数为 { item }' }]

export const document: LayDocument = {
  attributes,
  methods,
  events,
  slots,
  scopedSlots
}

export default document
