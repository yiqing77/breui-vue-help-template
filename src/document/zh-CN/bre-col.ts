import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'span',
    description: '栅格占据的列数',
    type: 'number',
    value: '—',
    default: '24'
  },
  {
    name: 'offset',
    description: '栅格左侧的间隔格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'order',
    description: '对元素进行排序',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'xs',
    description: '`<768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'sm',
    description: '`≥576px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'md',
    description: '`≥768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'lg',
    description: '`≥992px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'xl',
    description: '`≥1200px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'xxl',
    description: '`≥1600px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'flex',
    description: '设置 flex 布局属性',
    type: 'number / string / initial / auto / none',
    value: '-',
    default: '-'
  }
]

export const document: LayDocument = { attributes }

export default document
