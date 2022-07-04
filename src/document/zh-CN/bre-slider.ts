import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'number / [number, number]',
    value: '—',
    default: '-'
  },
  {
    name: 'default-value',
    description: '默认值（非受控状态）',
    type: 'number / [number, number]',
    value: '—',
    default: '0'
  },
  {
    name: 'step',
    description: '滑动的步长',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'min',
    description: '最小值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'marks',
    description: '设置显示的标签',
    type: 'Record<number, string>',
    value: '—',
    default: '—'
  },
  {
    name: 'max',
    description: '最大值',
    type: 'number',
    value: '—',
    default: '100'
  },
  {
    name: 'direction',
    description: '滑动输入条的方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'horizontal'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-ticks',
    description: '是否显示刻度线',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-input',
    description: '是否显示输入框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'range',
    description: '是否开启范围选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '值改变时触发',
    parameter: 'value: number / [number, number]'
  }
]

export const document: LayDocument = { attributes, events }

export default document
