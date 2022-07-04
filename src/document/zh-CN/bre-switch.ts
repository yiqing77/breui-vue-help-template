import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'boolean / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-checked',
    description: '默认选中状态（非受控状态）',
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
    name: 'loading',
    description: '是否为加载中状态',
    type: 'numbbooleaner',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '开关的类型',
    type: 'string',
    value: 'circle / round / line',
    default: 'circle'
  },
  {
    name: 'size',
    description: '开关的大小',
    type: 'string',
    value: 'small / medium',
    default: 'medium'
  },
  {
    name: 'checked-value',
    description: '选中时的值',
    type: 'string / number / boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'unchecked-value',
    description: '未选中时的值',
    type: 'string / number / boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'checked-color',
    description: '选中时的开关颜色',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'unchecked-color',
    description: '未选中时的开关颜色',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 Switch 获取焦点', parameter: '-' }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: 'switch 状态发生变化时的回调函数',
    parameter: 'value: union, ev: Event'
  },
  {
    name: 'focus',
    description: '组件获得焦点时触发',
    parameter: 'ev: FocusEvent'
  },
  {
    name: 'blur',
    description: '组件失去焦点时触发',
    parameter: 'ev: FocusEvent'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'checked-icon',
    description: '打开状态时，按钮上的图标'
  },
  {
    name: 'unchecked-icon',
    description: '关闭状态时，按钮上的图标'
  },
  {
    name: 'checked',
    description: '打开状态时的文案（type="line"和size="small"时不生效）'
  },
  {
    name: 'unchecked',
    description: '关闭状态时的文案（type="line"和size="small"时不生效）'
  }
]

export const document: LayDocument = { attributes, methods, events, slots }

export default document
