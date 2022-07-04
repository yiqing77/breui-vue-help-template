import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';
import { DocumentScopedSlot } from '../../shared/types'

export const attributes: DocumentAttribute[] = [
  {
    name: 'field',
    description: '表单元素在数据对象中的path（数据项必填）',
    type: 'string',
    value: '``',
    default: '—'
  },
  {
    name: 'label',
    description: '标签的文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-colon',
    description: "是否显示冒号",
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'no-style',
    description: '是否去除样式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'help',
    description: '帮助文案',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'extra',
    description: '额外显示的文案',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'required',
    description: '是否必须填写',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'rules',
    description: '表单项校验规则（优先级高于 form 的 rules）',
    type: 'FieldRule / FieldRule[]',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-status',
    description: '校验状态',
    type: 'string',
    value: 'success / warning / error / validating',
    default: '-'
  },
  {
    name: 'validate-trigger',
    description: '触发校验的事件',
    type: 'string',
    value: 'change / input / focus / blur',
    default: 'change'
  },
  {
    name: 'label-col-props',
    description: '标签元素布局选项',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'wrapper-col-props',
    description: '表单控件布局选项',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'hide-label',
    description: '是否隐藏标签',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'hide-asterisk',
    description: '是否隐藏星号',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'label-col-style',
    description: '标签元素布局组件的 style',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'wrapper-col-style',
    description: '表单控件布局组件的 style',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'row-props',
    description: '表单项布局选项。参数同 <row> 组件一致',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'row-class',
    description: '表单项布局组件的 class',
    type: 'string / array / object',
    value: '-',
    default: '-'
  },
  {
    name: 'content-class',
    description: '表单控件包裹层的 class',
    type: 'string / array / object',
    value: '-',
    default: '-'
  },
  {
    name: 'content-flex',
    description: '内容层是否开启 flex 布局',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'label-col-flex',
    description: '设置标签 Col 组件的 flex 属性。设置时表单 Col 组件的 flex 属性会被设置为 auto。',
    type: 'number / string',
    value: '-',
    default: '-'
  },
  {
    name: 'feedback',
    description: '是否显示表单控件的反馈图标',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'label-component',
    description: '表单项标签渲染的元素',
    type: 'string',
    value: '-',
    default: 'label'
  },
  {
    name: 'label-attrs',
    description: '表单项元素的属性',
    type: 'object',
    value: '-',
    default: '-'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'label', description: '标签文本的内容' },
  { name: 'help', description: '帮助信息' },
  { name: 'extra', description: '额外内容' }
]

export const scopedSlots: DocumentScopedSlot[] = [
  {
    name: 'error',
    description: '自定义表单校验信息的显示方式，参数为 { error }'
  }
]

export const document: LayDocument = { attributes, slots, scopedSlots }

export default document
