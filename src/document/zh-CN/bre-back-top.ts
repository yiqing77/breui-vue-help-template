import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'target-container',
    description: '滚动事件的监听容器',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'visible-height',
    description: '滚动高度达到此参数值才出现',
    type: 'number',
    value: '',
    default: '200'
  },
  {
    name: 'easing',
    description: '滚动动画的缓动方式',
    type: 'string',
    value: '',
    default: 'quartOut'
  },
  {
    name: 'duration',
    description: '滚动动画的持续时间',
    type: 'number',
    value: '',
    default: '200'
  }
]

export const events: DocumentEvent[] = []

export const document: LayDocument = { attributes, events }

export default document
