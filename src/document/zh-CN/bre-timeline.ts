import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'reverse',
    description: '是否倒序',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'direction',
    description: '时间轴方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'vertical'
  },
  {
    name: 'mode',
    description: '时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。',
    type: 'string',
    value: 'left/right/top/bottom/alternate',
    default: 'left'
  },
  {
    name: 'pending',
    description: '是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'label-position',
    description: '设置标签文本的位置',
    type: 'string',
    value: 'relative/same',
    default: 'same'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'dot',
    description: '幽灵节点'
  }
]

export const document: LayDocument = { attributes, slots }

export default document
