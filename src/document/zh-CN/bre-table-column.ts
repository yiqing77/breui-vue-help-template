import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentScopedSlot } from '../../shared/types'

export const attributes: DocumentAttribute[] = [
  {
    name: 'data-index',
    description: '列信息的标识，对应TableData中的数据',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'title',
    description: '列标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: '列宽度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'align',
    description: '对齐方向',
    type: 'TableColumnData["align"]',
    value: '—',
    default: '-'
  },
  {
    name: 'fixed',
    description: '固定位置',
    type: 'ableColumnData["fixed"]',
    value: '—',
    default: '—'
  },
  {
    name: 'ellipsis',
    description: '是否显示为省略',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'sortable',
    description: '排序相关选项',
    type: 'TableSortable',
    value: '-',
    default: '—'
  },
  {
    name: 'filterable',
    description: '过滤相关选项',
    type: 'TableFilterable',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-style',
    description: "自定义单元格样式",
    type: 'CSSProperties',
    value: "-",
    default: '-'
  },
  {
    name: 'header-cell-style',
    description: '自定义表头单元格样式',
    type: 'CSSProperties',
    value: '—',
    default: '—'
  },
  {
    name: 'body-cell-style',
    description: '自定义内容单元格样式',
    type: 'CSSProperties ',
    value: '—',
    default: '—'
  },
  {
    name: 'summary-cell-style',
    description: '自定义内容单元格样式',
    type: 'CSSProperties ',
    value: '—',
    default: '—'
  },
  {
    name: 'index',
    description: '用于手动指定选项的 index。2.26.0 版本后不再需要手动指定',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'tooltip',
    description: '在省略时是否显示文字提示',
    type: 'boolean/object',
    value: '—',
    default: 'false'
  }
]

export const scopedSlots: DocumentScopedSlot[] = [
  {
    name: 'filter-icon',
    description: '筛选按钮图标'
  },
  {
    name: 'filter-content',
    description: '自定义筛选弹出框内容'
  },
  {
    name: 'title',
    description: '标题'
  },
  {
    name: 'cell',
    description: '单元格'
  }
]

export const document: LayDocument = { attributes, scopedSlots }

export default document
