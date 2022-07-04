import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值（非受控模式）',
    type: 'string / number',
    value: '—',
    default: '`` / []'
  },
  {
    name: 'multiple',
    description: '是否开启多选模式（多选模式默认开启搜索）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'input-value',
    description: '输入框的值',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'default-input-value',
    description: '输入框的默认值（非受控模式）',
    type: 'string',
    value: '—',
    default: '``'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'placeholder',
    description: '占位符',
    type: 'string',
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
    name: 'allow-create',
    description: '是否允许创建',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'max-tag-count',
    description: '多选模式下，最多显示的标签数量。0 表示不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'bordered',
    description: '是否显示输入框的边框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popup-visible',
    description: '是否显示下拉菜单',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '弹出框默认是否可见（非受控模式）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'unmount-on-close',
    description: '是否在下拉菜单关闭时销毁元素',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'filter-option',
    description: '是否过滤选项',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'options',
    description: '选项数据',
    type: '(string / number / SelectOptionData / SelectOptionGroup)[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'virtual-list-props',
    description: '传递虚拟列表属性，传入此参数以开启虚拟滚动',
    type: 'VirtualListProps',
    value: '—',
    default: '-'
  },
  {
    name: 'trigger-props',
    description: '下拉菜单的触发器属性',
    type: 'TriggerProps',
    value: '—',
    default: '—'
  },
  {
    name: 'format-label',
    description: '格式化显示内容',
    type: '(data: SelectOptionData) => string',
    value: '—',
    default: '-'
  },
  {
    name: 'fallback-option',
    description: '自定义值中不存在的选项',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-extra-options',
    description: '是否在下拉菜单中显示额外选项',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'value-key',
    description: '用于确定选项键值得属性名',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'search-delay',
    description: '触发搜索事件的延迟时间',
    type: 'number',
    value: '—',
    default: '500'
  },
  {
    name: 'limit',
    description: '多选时最多的选择个数',
    type: 'number',
    value: '-',
    default: '0'
  },
  {
    name: 'field-names',
    description: '自定义 SelectOptionData 中的字段',
    type: 'SelectFieldNames',
    value: '-',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '-' },
  {
    name: 'blur',
    description: '使 input 失去焦点，并隐藏下拉框',
    parameter: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '选中值发生变化时触发',
    parameter: '-'
  },
  {
    name: 'input-value-change',
    description: '输入框的值发生改变时触发',
    parameter: '-'
  },
  {
    name: 'popup-visible-change',
    description: '下拉框的显示状态改变时触发',
    parameter: 'visible: boolean'
  },
  {
    name: 'clear',
    description: '点击清除按钮时触发',
    parameter: '—'
  },
  {
    name: 'remove',
    description: '点击标签的删除按钮时触发',
    parameter: '-'
  },
  {
    name: 'search',
    description: '用户搜索时触发',
    parameter: '-'
  },
  {
    name: 'dropdown-scroll',
    description: '下拉菜单发生滚动时触发',
    parameter: '-'
  },
  {
    name: 'dropdown-reach-bottom',
    description: '下拉菜单滚动到底部时触发',
    parameter: '-'
  },
  {
    name: 'exceed-limit',
    description: '多选超出限制时触发',
    parameter: 'value: mixed'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'trigger', description: '自定义触发元素' },
  { name: 'prefix', description: '前缀元素' },
  { name: 'search-icon', description: '选择框的搜索图标' },
  { name: 'loading-icon', description: '选择框的加载中图标' },
  { name: 'arrow-icon', description: '选择框的箭头图标' },
  { name: 'footer', description: '下拉框的页脚' },
  { name: 'label', description: '选择框的显示内容' },
  { name: 'option', description: '选项内容' },
  { name: 'empty', description: '选项为空时的显示内容' }
]

export const document: LayDocument = { attributes, methods, events, slots }

export default document
