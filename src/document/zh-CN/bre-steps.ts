import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '步骤条的类型',
    type: 'string',
    value: 'default / arrow / dot / navigation',
    default: 'default'
  },
  {
    name: 'direction',
    description: '显示方向',
    type: 'string',
    value: 'vertical / horizontal',
    default: 'horizontal'
  },
  {
    name: 'label-placement',
    description: '标签描述文字放置的位置',
    type: 'number',
    value: 'vertical / horizontal',
    default: 'horizontal'
  },
  {
    name: 'current/v-model',
    description: '当前步骤数',
    type: 'number',
    value: '-',
    default: '-'
  },
  {
    name: 'default-current',
    description: '默认的步骤数（非受控状态）',
    type: 'number',
    value: '-',
    default: '1'
  },
  {
    name: 'status',
    description: '当前步骤的状态',
    type: 'string',
    value: 'wait / process / finish / error',
    default: 'process'
  },
  {
    name: 'line-less',
    description: '是否使用无连接线样式',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'small',
    description: '是否使用小型步骤条',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'changeable',
    description: '是否可以点击切换',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '步骤数发生改变时触发',
    parameter: 'step: number, ev: Event'
  }
]

export const document: LayDocument = { attributes, events }

export default document
