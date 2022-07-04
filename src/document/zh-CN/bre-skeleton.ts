import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'animation',
    description: '是否开启骨架屏动画',
    type: 'boolean',
    value: 'true,false',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否显示 skeleton 骨架屏',
    type: 'boolean',
    value: 'true,false',
    default: 'true'
  }
]

export const document: LayDocument = { attributes }

export default document
