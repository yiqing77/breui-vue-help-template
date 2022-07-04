import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'disabled',
    description: '是否禁用',
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
    name: 'error',
    description: '是否为错误状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'bordered',
    description: '是否显示输入框的边框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'allow-clear',
    description: '是否允许清空',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-search',
    description: '是否允许搜索',
    type: 'boolean',
    value: '—',
    default: 'false (single) / true (multiple)'
  },
  {
    name: 'placeholder',
    description: '占位符',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'max-tag-count',
    description: '多选模式下，最多显示的标签数量。0 表示不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'multiple',
    description: '是否开启多选模式（多选模式默认开启搜索）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-value',
    description: '默认值（非受控模式）',
    type: 'string / number',
    value: '—',
    default: '`` / []'
  },
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'field-names',
    description: '自定义 SelectOptionData 中的字段',
    type: 'SelectFieldNames',
    value: '-',
    default: '-'
  },
  {
    name: 'data',
    description: '数据',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'label-in-value',
    description: '设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tree-checkable',
    description: '是否展示复选框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tree-check-strictly',
    description: '父子节点是否关联',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tree-checked-strategy',
    description: '定制回显方式',
    type: 'string',
    value: 'all/parent/child',
    default: 'all'
  },
  {
    name: 'tree-props',
    description: '可以接受所有 Tree 组件的Props',
    type: 'Partial<TreeProps>',
    value: '—',
    default: '-'
  },
  {
    name: 'trigger-props',
    description: '可以接受所有 Trigger 组件的Props	',
    type: 'Record<string, unknown>',
    value: '—',
    default: '-'
  },
  {
    name: 'popup-visible/v-model',
    description: '弹出框是否可见',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '默认弹出框是否可见',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'dropdown-style',
    description: '下拉框样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'dropdown-class-name',
    description: '下拉框样式 class',
    type: 'string / array',
    value: '—',
    default: '-'
  },
  {
    name: 'filter-tree-node',
    description: '自定义节点过滤函数',
    type: '(searchKey: string, nodeData: TreeNodeData) => boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'load-more',
    description: '动态加载数据',
    type: '(nodeData: TreeNodeData) => Promise<void>',
    value: '—',
    default: '—'
  },
  {
    name: 'disable-filter',
    description: '禁用内部过滤逻辑',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string | HTMLElement | null | undefined',
    value: '—',
    default: '-'
  },
  {
    name: 'fallback-option',
    description: '为 value 中找不到匹配项的 key 定义节点数据',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'selectable',
    description: '设置可选择的节点，默认全部可选',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '选中值发生变化时触发',
    parameter: '(value)'
  },
  {
    name: 'popup-visible-change',
    description: '下拉框的显示状态改变时触发',
    parameter: '(visible: boolean)'
  },
  {
    name: 'clear',
    description: '点击清除按钮时触发',
    parameter: '—'
  },
  {
    name: 'search',
    description: '搜索值变化时触发',
    parameter: '(searchKey: string)'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'trigger', description: '自定义触发元素' },
  { name: 'prefix', description: '前缀元素' },
  { name: 'label', description: '自定义选择框显示' },
  { name: 'loader', description: '定制加载中显示的内容' },
  { name: 'empty', description: '定制空数据展示' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
