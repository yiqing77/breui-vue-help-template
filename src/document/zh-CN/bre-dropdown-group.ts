import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'title',
    description: '分组标题'
  }
]

export const document: LayDocument = { attributes, slots }

export default document
