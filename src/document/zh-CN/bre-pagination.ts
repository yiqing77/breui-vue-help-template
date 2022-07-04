import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'total',
    description: '数据总数(必填)',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'current',
    description: '当前的页数',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'default-current',
    description: '默认的页数（非受控状态）',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'page-size',
    description: '每页展示的数据条数',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-page-size',
    description: '默认每页展示的数据条数（非受控状态）',
    type: 'number',
    value: '—',
    default: '10'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'hide-on-single-page',
    description: '单页时是否隐藏分页',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'simple',
    description: '是否为简单模式',
    type: 'boolean',
    value: '-',
    default: "false"
  },
  {
    name: 'show-total',
    description: '是否显示数据总数',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-more',
    description: '是否显示更多按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-jumper',
    description: '是否显示跳转',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-page-size',
    description: '是否显示数据条数选择器',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'page-size-options',
    description: '数据条数选择器的选项列表',
    type: 'number[]',
    value: '—',
    default: '[10, 20, 30, 40, 50]'
  },
  {
    name: 'page-size-props',
    description: '数据条数选择器的Props',
    type: 'SelectProps',
    value: '—',
    default: '-'
  },
  {
    name: 'size',
    description: '分页选择器的大小',
    type: 'string',
    value: 'mini / small / medium / large',
    default: 'medium'
  },
  {
    name: 'page-item-style',
    description: '分页按钮的样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'active-page-item-style',
    description: '当前分页按钮的样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'base-size',
    description: '计算显示省略的基础个数。显示省略的个数为 baseSize + 2 * bufferSize',
    type: 'number',
    value: '—',
    default: '6'
  },
  {
    name: 'buffer-size',
    description: '显示省略号时，当前页码左右显示的页码个数',
    type: 'number',
    value: '—',
    default: '2'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'page-size-change',
    description: 'pageSize 改变时会触发',
    parameter: 'pageSize: number'
  },
  {
    name: 'change',
    description: '页码改变时触发',
    parameter: 'current: number'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'total', description: '总数' },
  { name: 'page-item-ellipsis', description: '	分页按钮（省略）' },
  { name: 'page-item-step', description: '分页按钮（步）' },
  { name: 'page-item', description: '分页按钮' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
