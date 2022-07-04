import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'invisible-button',
    description: '是否显示可见按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

export const document: LayDocument = { attributes }

export default document
