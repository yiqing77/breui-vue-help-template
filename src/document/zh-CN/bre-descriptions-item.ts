import { DocumentSlot, LayDocument } from '../../shared/types'
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'span',
    description: '列的数量',
    type: 'number',
    value: '—',
    default: '1'
  }
]

export const slots: DocumentSlot[] = [{ name: 'label', description: '标签' }]

export const props: DocumentAttribute[] = [
  {
    name: 'span',
    description: '所占列数',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'label',
    description: '标签',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const document: LayDocument = { attributes, slots, props }

export default document
