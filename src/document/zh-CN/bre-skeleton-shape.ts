import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'shape',
    description: '图形骨架的形状',
    type: 'string',
    value: 'square / circle',
    default: 'square'
  },
  {
    name: 'size',
    description: '图形骨架的大小',
    type: 'string',
    value: 'small / medium / large',
    default: 'medium'
  }
]

export const document: LayDocument = { attributes }

export default document
