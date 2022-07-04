import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '卡片标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'header-style',
    description: '自定义标题区域样式',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'body-style',
    description: '设置 body 的样式',
    type: 'object',
    value: '—',
    default: "-"
  },
  {
    name: 'bordered',
    description: '是否有边框',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'loading',
    description: '是否为加载中',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'hoverable',
    description: '是否可悬浮',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'size',
    description: '卡片尺寸',
    type: 'string',
    value: 'medium / small',
    default: 'medium'
  },
  {
    name: 'extra',
    description: '卡片右上角的操作区域',
    type: 'string',
    value: '-',
    default: '-'
  }
]

export const document: LayDocument = { attributes }

export default document
