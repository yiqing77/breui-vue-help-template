import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
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
    name: 'options',
    description: '级联选择器的选项',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'expand-trigger',
    description: '展开下一级的触发方式',
    type: 'string',
    value: 'click / hover',
    default: 'click'
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
    name: 'expand-child',
    description: '是否展开子菜单',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当选中节点变化时触发',
    parameter: '选中节点的值'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'empty',
    description: '选项为空时的显示内容'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
