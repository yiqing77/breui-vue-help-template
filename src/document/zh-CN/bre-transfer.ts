import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '目标选择框中的值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '目标选择框中默认的值（非受控状态）',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'data',
    description: '穿梭框的数据',
    type: 'array[{ value, label, disabled }]',
    value: '—',
    default: '[]'
  },
  {
    name: 'selected',
    description: '选中的选项值',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'default-selected',
    description: '默认选中的选项值（非受控状态）',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'simple',
    description: '是否开启简单模式（点击选项即移动）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'one-way',
    description: '是否开启单向模式（仅可移动到目标选择框）	',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'show-search',
    description: '是否显示搜索框',
    type: 'boolean',
    value: '—',
    default: "false"
  },
  {
    name: 'title',
    description: '源选择框和目标选择框的标题',
    type: 'array',
    value: '—',
    default: "['Source', 'Target']"
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '右侧列表元素变化时触发',
    parameter: "value: string[]"
  },
  {
    name: 'select',
    description: '选中的值改变时触发',
    parameter: 'selected: string[]'
  },
  {
    name: 'search',
    description: '用户搜索时触发',
    parameter: "(value: string, type: 'target'|'source')"
  }
]

export const slots: DocumentSlot[] = [
  { name: 'item', description: '选项' },
]

export const document: LayDocument = {
  attributes,
  events,
  slots
}

export default document
