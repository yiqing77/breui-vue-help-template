import { DocumentAttribute } from '../../shared/types';
import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '菜单组的标题',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: '标题' }
]

export const document: LayDocument = { attributes, slots }

export default document
