import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'rows',
    description: '展示的行数',
    type: 'number',
    value: '-',
    default: '1'
  },
  {
    name: 'widths',
    description: '线型骨架的宽度',
    type: 'Array<number / string>',
    value: '-',
    default: '[]'
  },
  {
    name: 'line-height',
    description: '线型骨架的行高',
    type: 'number',
    value: '-',
    default: '20'
  },
  {
    name: 'line-spacing',
    description: '线型骨架的行间距',
    type: 'number',
    value: '-',
    default: '15'
  }
]

export const document: LayDocument = { attributes }

export default document
