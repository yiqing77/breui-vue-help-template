import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '警告提示的标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '警告提示的类型',
    type: 'string',
    value: 'success/warning/info/error',
    default: 'info'
  },
  {
    name: 'closable',
    description: '是否展示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-icon',
    description: '是否显示图标',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'banner',
    description: '是否作为顶部公告使用（去除边框和圆角）',
    type: 'boolean',
    value: 'true/false',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [{ name: 'close', description: '点击关闭按钮时触发', parameter: 'ev: MouseEvent' },{ name: 'after-close', description: '关闭动画结束后触发', parameter: '-' }]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '图标' },
  { name: 'title', description: '标题' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
