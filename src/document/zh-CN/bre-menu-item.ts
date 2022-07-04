import { DocumentAttribute } from '../../shared/types';
import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

const attributes: DocumentAttribute[] = [
  {
    name: 'key',
    description: '唯一标志',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '菜单的图标' }
]

export const document: LayDocument = { attributes, slots }

export default document
