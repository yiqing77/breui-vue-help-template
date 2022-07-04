import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'dot-color',
    description: '节点颜色',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'dot-type',
    description: '节点类型：空心圆/实心圆',
    type: 'string',
    value: 'hollow/solid',
    default: 'solid'
  },
  {
    name: 'line-type',
    description: '时间轴类型：实线/虚线/点状线',
    type: 'string',
    value: 'solid / dashed / dotted',
    default: 'solid'
  },
  {
    name: 'line-color',
    description: '时间轴颜色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'position',
    description: 'Item 位置',
    type: 'PositionType',
    value: '-',
    default: '-'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'dot', description: '自定义节点' }
]

export const document: LayDocument = { attributes, slots }

export default document
