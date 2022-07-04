import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'text',
    description: '自定义提示内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'dot',
    description: "显示为小红点",
    type: 'boolean',
    value: '',
    default: 'false'
  },
  {
    name: 'dot-style',
    description: '徽标的样式',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'max-count',
    description: '徽标最大显示数值，如果count超过这个数值会显示为maxCount',
    type: 'number',
    value: '—',
    default: '99'
  },
  {
    name: 'status',
    description: '徽标的状态类型',
    type: 'string',
    value: 'default / success / warning / error / processing',
    default: '—'
  },
  {
    name: 'offset',
    description: '设置徽标位置的偏移',
    type: 'number[]',
    value: '',
    default: '[]'
  },
  {
    name: 'color',
    description: '内置的一些颜色',
    type: 'ColorType / string',
    value: '—',
    default: '-'
  },
  {
    name: 'count',
    description: '徽标显示的数字',
    type: 'number',
    value: '—',
    default: '-'
  },
]

export const document: LayDocument = { attributes }

export default document
