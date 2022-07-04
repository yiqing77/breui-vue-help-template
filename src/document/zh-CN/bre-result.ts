import { DocumentSlot, LayDocument } from '../../shared/types'
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'subtitle',
    description: '子标题内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'status',
    description: '结果页显示的状态',
    type: 'string',
    value: "info / success / warning / error / 403 / 404 / 500 / null",
    default: 'info'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '自定义图标'
  },
  {
    name: 'title',
    description: '自定义标题'
  },
  {
    name: 'subtitle',
    description: '自定义二级标题'
  },
  {
    name: 'extra',
    description: '自定义底部额外区域'
  },
  {
    name: 'default',
    description: '默认插槽'
  }
]

export const document: LayDocument = { attributes, slots }

export default document
