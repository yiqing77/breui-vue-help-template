import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'path-mode',
    description: '绑定值是否为路径',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'multiple',
    description: '是否为多选状态（多选模式默认开启搜索）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'model-value/v-model',
    description: '选中项绑定值',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值（非受控状态）',
    type: '-',
    value: '—',
    default: '\'\' / undefined / []'
  },
  {
    name: 'options',
    description: '可选项数据源',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'disabled',
    description: '是否禁用',
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
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'allow-search',
    description: '是否允许搜索',
    type: 'boolean',
    value: '—',
    default: 'false (single) / true (multiple)'
  },
  {
    name: 'allow-clear',
    description: '是否允许清除',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-trigger',
    description: '展开下一级的触发方式',
    type: 'string',
    value: 'click / hover',
    default: 'click'
  },
  {
    name: 'popup-visible',
    description: '是否允许清除',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '是否默认显示下拉框（非受控状态）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'filter-option',
    description: '自定义选项过滤方法',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement / null / undefined',
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
    name: 'format-label',
    description: '格式化展示内容',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'trigger-props',
    description: '下拉菜单的触发器属性',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'check-strictly',
    description: '是否开启严格选择模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'load-more',
    description: '数据懒加载函数，传入时开启懒加载功能',
    type: 'function',
    value: '—',
    default: '-'
  },
  {
    name: 'loading',
    description: '是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'search-option-only-label',
    description: '搜索下拉菜单中的选项是否仅展示标签',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'search-delay',
    description: '搜索下拉菜单中的选项是否仅展示标签',
    type: 'number',
    value: '—',
    default: '500'
  },
  {
    name: 'field-names',
    description: '自定义 CascaderOption 中的字段',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'value-key',
    description: '用于确定选项键值得属性名',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'fallback',
    description: '自定义不存在选项的值的展示',
    type: 'boolean / string',
    value: '—',
    default: 'true'
  },
  {
    name: 'expand-child',
    description: '是否展开子菜单',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = []

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当选中节点变化时触发',
    parameter: '选中节点的值'
  },
  {
    name: 'input-value-change',
    description: '输入值改变时触发',
    parameter: '输入的值'
  },
  {
    name: 'blur',
    description: '当失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '当获得焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'clear',
    description: '点击清除按钮时触发',
    parameter: '-'
  },
  {
    name: 'search',
    description: '用户搜索时触发',
    parameter: 'value'
  },
  {
    name: 'popup-visible-change',
    description: '下拉框的显示状态改变时触发',
    parameter: '是否显示'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'label',
    description: '选择框的显示内容'
  },
  {
    name: 'prefix',
    description: '前缀元素'
  },
  {
    name: 'arrow-icon',
    description: '	选择框的箭头图标'
  },
  {
    name: 'loading-icon',
    description: '选择框的加载中图标'
  },
  {
    name: 'search-icon',
    description: '选择框的搜索图标'
  },
  {
    name: 'option',
    description: '选项内容'
  },
  { name: 'empty', description: '无匹配选项时的内容' }
]

export const document: LayDocument = { attributes, methods, events, slots }

export default document
