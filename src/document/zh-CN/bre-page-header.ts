import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '页头的主标题',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'subtitle',
    description: '页头的次标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-back',
    description: '是否显示返回按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

export const events: DocumentEvent[] = [{ name: 'back', description: '点击返回按钮时触发', parameter: 'event: Event' }]

export const slots: DocumentSlot[] = [
  { name: 'breadcrumb', description: '面包屑' },
  { name: 'title', description: '主标题' },
  { name: 'subtitle', description: '次标题' },
  { name: 'extra', description: '额外的展示内容' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
