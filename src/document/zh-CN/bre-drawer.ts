import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'visible ',
    description: '抽屉是否可见',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-visible',
    description: '抽屉默认是否可见（非受控模式）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: '抽屉放置的位置',
    type: 'string',
    value: 'top / right / bottom / left',
    default: 'right'
  },
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'mask',
    description: '是否显示遮罩层',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'mask-closable',
    description: '点击遮罩层是否可以关闭',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'closable',
    description: '是否展示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'ok-text',
    description: '确认按钮的内容',
    type: 'string',
    value: '-',
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
    description: "确认按钮是否为加载中状态",
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'ok-button-props',
    description: '确认按钮的Props',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'cancel-button-props',
    description: '取消按钮的Props',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'unmount-on-close',
    description: '关闭时是否卸载节点',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'width',
    description: '抽屉的宽度（仅在placement为right,left时可用）',
    type: 'number / string',
    value: '-',
    default: '250'
  },
  {
    name: 'height',
    description: '抽屉的高度（仅在placement为top,bottom时可用）',
    type: 'number / string',
    value: '-',
    default: '250'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement',
    value: '-',
    default: 'body'
  },
  {
    name: 'drawer-style',
    description: '抽屉的样式',
    type: 'CSSProperties',
    value: '-',
    default: '-'
  },
  {
    name: 'on-before-ok',
    description: '触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。',
    type: '(done: (closed: boolean) => void) => void / boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'on-before-cancel',
    description: '触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。',
    type: '() => boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'footer',
    description: '是否展示底部内容',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'esc-to-close',
    description: '是否支持 ESC 键关闭对话框',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'hide-cancel',
    description: '是否隐藏取消按钮',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
]

export const events: DocumentEvent[] = [
  { name: 'ok', description: '点击确定按钮时触发', parameter: '—' },
  {
    name: 'cancel',
    description: '点击取消、关闭按钮时触发',
    parameter: '—'
  },
  { name: 'open', description: '抽屉打开后（动画结束）触发', parameter: '—' },
  {
    name: 'close',
    description: '抽屉关闭后（动画结束）触发',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: 'Drawer 标题区的内容' },
  { name: 'footer', description: 'Drawer 的页脚' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
