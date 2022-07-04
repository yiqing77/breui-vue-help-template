import { DocumentSlot, LayDocument } from '../../shared/types'
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'data',
    description: '描述列表的数据',
    type: 'DescData[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'column',
    description: '每行放置的数据个数。2.20.0 版本支持响应式配置，配置可参考 Grid',
    type: 'number',
    value: '—',
    default: 3
  },
  {
    name: 'title',
    description: '描述列表的标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'layout',
    description: '描述列表的排列方式',
    type: 'string',
    value: 'horizontal / vertical / inline-horizontal / inline-vertical',
    default: 'horizontal'
  },
  {
    name: 'align',
    description: '文字的对齐位置',
    type: 'string',
    value: 'left / center / right',
    default: 'left'
  },
  {
    name: 'size',
    description: '描述列表的大小',
    type: 'string',
    value: 'medium / small / mini / large',
    default: '—'
  },
  {
    name: 'bordered',
    description: '是否显示边框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'label-style',
    description: '数据标签的样式',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'value-style',
    description: '数据内容的样式',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: '标题' },
  { name: 'value', description: '数据内容' },
  { name: 'label', description: '数据标签' }
]

export const document: LayDocument = { attributes, slots }

export default document
