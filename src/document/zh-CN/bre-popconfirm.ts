import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'content',
    description: '内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'position',
    description: '弹出位置',
    type: 'string',
    value: "top/tl/tr/bottom/bl/br/left/lt/lb/right/rt/rb",
    default: 'top'
  },
  {
    name: 'popup-visible',
    description: '气泡确认框是否可见',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'default-popup-visible',
    description: '气泡确认框默认是否可见（非受控模式）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '气泡确认框的类型',
    type: 'string',
    value: "info/success/warning/error",
    default: 'info'
  },
  {
    name: 'ok-text',
    description: '确认按钮的内容',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'cancel-text',
    description: '取消按钮的内容',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'ok-loading',
    description: '确认按钮是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'ok-button-props',
    description: '确认按钮的Props',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'cancel-button-props',
    description: '取消按钮的Props',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'content-class',
    description: '弹出框内容的类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'content-style',
    description: '弹出框内容的样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'arrow-class',
    description: '弹出框箭头的类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'arrow-style',
    description: '弹出框箭头的样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载点',
    type: 'string / HTMLElement / null / undefined',
    value: '—',
    default: '-'
  },
  {
    name: 'on-before-ok',
    description: '触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。',
    type: '(done: (closed: boolean) => void) => void / boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'on-before-cancel',
    description: '	触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。',
    type: '() => boolean',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  { name: 'popup-visible-change', description: '气泡确认框的显隐状态改变时触发', parameter: 'visible: boolean' },
  { name: 'ok', description: '点击确认按钮时触发', parameter: '—' },
  { name: 'cancel', description: '点击取消按钮时触发', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '图标' },
  { name: 'content', description: '内容' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
