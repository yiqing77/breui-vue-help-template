import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

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
    description: '默认值（非受控模式）',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'mode',
    description: '模式（embed：按钮内嵌模式，button：左右按钮模式）	',
    type: 'string',
    value: 'embed / button',
    default: 'embed'
  },
  {
    name: 'precision',
    description: '数字精度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'step',
    description: '数字变化步长',
    type: 'number',
    value: '—',
    default: '1'
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
    name: 'max',
    description: '最大值',
    type: 'number',
    value: '-',
    default: 'Infinity'
  },
  {
    name: 'min',
    description: '最小值',
    type: 'number',
    value: '—',
    default: '-Infinity'
  },
  {
    name: 'formatter',
    description: '定义输入框展示值',
    type: 'func',
    value: '—',
    default: '-'
  },
  {
    name: 'parser',
    description: '从 formatter 转换为数字，和 formatter 搭配使用',
    type: 'func',
    value: '-',
    default: '-'
  },
  {
    name: 'placeholder',
    description: '输入框提示文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-button',
    description: '是否隐藏按钮（仅在embed模式可用）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框大小',
    type: 'string',
    value: 'mini / small / medium / large',
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
    name: 'model-event',
    description: '触发 v-model 的事件',
    type: 'string',
    value: 'change / input',
    default: 'change'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '-' },
  { name: 'blur', description: '使输入框失去焦点', parameter: '—' }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '绑定值被改变时触发',
    parameter: '(value: union, ev: Event)'
  },
  {
    name: 'blur',
    description: '在组件 Input 失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '在组件 Input 获得焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'clear',
    description: '用户点击清除按钮时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'input',
    description: '输入时触发',
    parameter: '(value: union, inputValue: string, event: Event)'
  }
]

export const document: LayDocument = { attributes, methods, events }

export default document
