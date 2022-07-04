import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'gutter',
    description: '栅格间隔，单位是px 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'justify',
    description: '水平对齐方式 (justify-content)',
    type: 'string',
    value: 'start / end / center / space-around / space-between',
    default: 'start'
  },
  {
    name: 'align',
    description: '竖直对齐方式 ( align-items )',
    type: 'string',
    value: 'start / center / end / stretch',
    default: 'start'
  },
  {
    name: 'div',
    description: '开启这个选项Row和Col都会被当作div而不会附带任何Grid相关的类和样式',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'wrap',
    description: 'Col 是否支持换行',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const document: LayDocument = { attributes }

export default document
