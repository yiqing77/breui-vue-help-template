import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'src',
    description: '图片获取地址',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'visible',
    description: '是否可见',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-visible',
    description: '默认是否可见，非受控',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'mask-closable',
    description: '点击 mask 是否触发关闭',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'closable',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'actions-layout',
    description: '操作项的布局',
    type: 'string[]',
    value: '—',
    default: '[`fullScreen`, `rotateRight`, `rotateLeft`, `zoomIn`, `zoomOut`, `originalSize`]'
  },
  {
    name: 'popup-container',
    description: '设置弹出框的挂载点，同 teleport 的 to，缺省值是 document.body',
    type: 'HTMLElement',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  { name: 'close', description: '关闭事件', parameter: '-' }
]

export const slots: DocumentSlot[] = [
  { name: 'actions', description: '自定义额外的操作项' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
