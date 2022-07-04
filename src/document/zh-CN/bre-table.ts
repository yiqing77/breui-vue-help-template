import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'columns',
    description: '表格的列描述信息',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'data',
    description: '表格的数据',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'bordered',
    description: '是否显示边框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'hoverable',
    description: '是否显示选中效果',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'stripe',
    description: '是否开启斑马纹效果',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Table 的尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'large'
  },
  {
    name: 'table-layout-fixed',
    description: '表格的 table-layout 属性设置为 fixed，设置为 fixed 后，表格的宽度不会被内容撑开超出 100%。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'row-selection',
    description: '表格的行选择器配置',
    type: 'TableRowSelection',
    value: '—',
    default: '-'
  },
  {
    name: 'expandable',
    description: '表格的展开行配置',
    type: 'TableExpandable',
    value: '—',
    default: '—'
  },
  {
    name: 'scroll',
    description: '表格的滚动属性配置。2.13.0 版本增加字符型值的支持。2.20.0 版本增加 minWidth,maxHeight 的支持',
    type: '{ x?: number | string; y?: number | string; minWidth?: number | string; maxHeight?: number | string;}',
    value: '—',
    default: '—'
  },
  {
    name: 'pagination',
    description: '分页的属性配置',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'page-position',
    description: '分页选择器的位置',
    type: 'string',
    value: 'tl/top/tr/bl/bottom/br',
    default: 'br'
  },
  {
    name: 'indent-size',
    description: '树形表格的缩进距离',
    type: 'number',
    value: '—',
    default: '16'
  },
  {
    name: 'row-key',
    description: '表格行 key 的取值字段',
    type: 'string',
    value: '—',
    default: 'key'
  },
  {
    name: 'show-header',
    description: '是否显示表头',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'virtual-list-props',
    description: '传递虚拟列表属性，传入此参数以开启虚拟滚动',
    type: 'VirtualListProps',
    value: '—',
    default: '—'
  },
  {
    name: 'span-method',
    description: '单元格合并方法（索引从数据项开始计数）',
    type: '(data: { record: TableData; column: TableColumnData | TableOperationColumn; rowIndex: number; columnIndex: number;}) => { rowspan?: number; colspan?: number } | void',
    value: '—',
    default: '—'
  },
  {
    name: 'span-all',
    description: '是否让合并方法的索引包含所有	',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'load-moret',
    description: '数据懒加载函数，传入时开启懒加载功能',
    type: '(record: TableData, done: (children?: TableData[]) => void) => void',
    value: '—',
    default: '-'
  },
  {
    name: 'filter-icon-align-left',
    description: '筛选图标是否左对齐',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hide-expand-button-on-empty',
    description: '是否在子树为空时隐藏展开按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'row-class',
    description: '表格行元素的类名',
    type: 'string/array/object',
    value: '-',
    default: '-'
  },
  {
    name: 'draggable',
    description: '表格拖拽排序的配置',
    type: 'TableDraggable',
    value: '-',
    default: '-'
  },
  {
    name: 'column-resizable',
    description: '是否允许调整列宽',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'summary',
    description: '显示表尾总结行',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'ssummary-text',
    description: '总结行的首列文字',
    type: 'string',
    value: '—',
    default: 'Summary'
  },
  {
    name: 'summary-span-method',
    description: '总结行的单元格合并方法',
    type: '(data: { record: TableData; column: TableColumnData | TableOperationColumn; rowIndex: number; columnIndex: number;}) => { rowspan?: number; colspan?: number } | void',
    value: '—',
    default: '—'
  },
  {
    name: 'selected-keys',
    description: '已选择的行（受控模式）优先于 rowSelection',
    type: 'string[]',
    value: '—',
    default: '-'
  },
  {
    name: 'default-selected-keys',
    description: '默认已选择的行（非受控模式）优先于 rowSelection',
    type: 'string[]',
    value: '—',
    default: '-'
  },
  {
    name: 'expanded-keys',
    description: '显示的展开行、子树（受控模式）优先于 expandable',
    type: 'string[]',
    value: '—',
    default: '—'
  },
  {
    name: 'default-expanded-keys',
    description: '默认显示的展开行、子树（非受控模式）优先于 expandable',
    type: 'string[]',
    value: '—',
    default: '—'
  },
  {
    name: 'default-expand-all-rows',
    description: '是否默认展开所有的行',
    type: 'boolean',
    value: '—',
    default: "false"
  },
  {
    name: 'sticky-header',
    description: '是否开启表头吸顶',
    type: 'boolean/number',
    value: '—',
    default: "false"
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'selectAll',
    description: '设置全选状态',
    parameter: 'checked: boolean'
  },
  {
    name: 'select',
    description: '设置行选择器状态',
    parameter: 'rowKey: string | string[], checked: boolean'
  },
  {
    name: 'expandAll',
    description: '设置全部展开状态',
    parameter: 'checked: boolean'
  },
  {
    name: 'expand',
    description: '设置展开状态',
    parameter: 'rowKey: string | string[], checked: boolean'
  },
  {
    name: 'resetFilters',
    description: '重置列的筛选器',
    parameter: 'dataIndex: string | string[]'
  },
  {
    name: 'clearFilters',
    description: '清空列的筛选器',
    parameter: 'dataIndex: string | string[]'
  },
  {
    name: 'resetSorters',
    description: '重置列的排序',
    parameter: '-'
  },
  {
    name: 'clearSorters',
    description: '清空列的排序',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'expand',
    description: '点击展开行时触发',
    parameter: 'rowKey, record'
  },
  {
    name: 'expanded-change',
    description: '已展开的数据行发生改变时触发',
    parameter: 'rowKeys'
  },
  {
    name: 'select',
    description: '点击行选择器时触发',
    parameter: 'rowKeys, rowKey, record'
  },
  {
    name: 'select-all',
    description: '点击全选选择器时触发',
    parameter: 'checked'
  },
  {
    name: 'selection-change',
    description: '已选择的数据行发生改变时触发',
    parameter: 'rowKeys'
  },
  {
    name: 'sorter-change',
    description: '排序规则发生改变时触发',
    parameter: 'dataIndex, direction'
  },
  {
    name: 'filter-change',
    description: '过滤选项发生改变时触发',
    parameter: 'dataIndex, filteredValues'
  },
  {
    name: 'page-change',
    description: '表格分页发生改变时触发',
    parameter: 'page'
  },
  {
    name: 'page-size-change',
    description: '表格每页数据数量发生改变时触发',
    parameter: 'pageSize'
  },
  {
    name: 'change',
    description: '表格数据发生变化时触发',
    parameter: 'data, extra'
  },
  {
    name: 'cell-click',
    description: '点击单元格时触发',
    parameter: 'record, column, event'
  },
  {
    name: 'row-click',
    description: '点击行数据时触发',
    parameter: 'record, event'
  },
  {
    name: 'row-dbclick',
    description: '双击行数据时触发',
    parameter: 'record, event'
  },
  {
    name: 'header-click',
    description: '点击表头数据时触发',
    parameter: 'column, event'
  },
  {
    name: 'column-resize',
    description: '调整列宽时触发',
    parameter: 'dataIndex, width'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'th',
    description: '	自定义 th 元素'
  },
  {
    name: 'thead',
    description: '自定义 thead 元素'
  },
  {
    name: 'empty',
    description: '空白展示'
  },
  {
    name: 'summary-cell',
    description: '总结行'
  },
  {
    name: 'pagination-right',
    description: '	分页器右侧内容'
  },
  {
    name: 'pagination-left',
    description: '	分页器左侧内容'
  },
  {
    name: 'td',
    description: '自定义 td 元素'
  },
  {
    name: 'tr',
    description: '自定义 tr 元素'
  },
  {
    name: 'tbody',
    description: '自定义 tbody 元素'
  },
  {
    name: 'drag-handle-icon	',
    description: '拖拽锚点图标'
  },
  {
    name: 'footer',
    description: '表格底部'
  },
  {
    name: 'expand-row',
    description: '展开行内容'
  },
  {
    name: 'expand-icon',
    description: '展开行图标'
  },
  {
    name: 'columns',
    description: '表格列定义。启用时会屏蔽 columns 属性'
  }
]

export const document: LayDocument = { attributes, methods, events, slots }

export default document
