import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'visible',
    description: '对话框是否可见',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-visible',
    description: '对话框默认是否可见（非受控状态）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'width',
    description: '对话框的宽度，不设置的情况下会使用样式中的宽度值',
    type: 'number / string',
    value: '—',
    default: '-'
  },
  {
    name: 'top',
    description: '对话框的距离顶部的高度，居中显示开启的情况下不生效',
    type: 'number / string',
    value: '—',
    default: '-'
  },
  {
    name: 'mask',
    description: '是否显示遮罩层',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'title-align',
    description: '标题的水平对齐方向',
    type: 'string',
    value: 'start / center',
    default: '—'
  },
  {
    name: 'align-center',
    description: '对话框是否居中显示',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'unmount-on-close',
    description: '关闭时是否卸载节点',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'mask-closable',
    description: '是否点击遮罩层可以关闭对话框',
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
  {
    name: 'simple',
    description: '是否开启简单模式',
    type: 'boolean',
    value: '-',
    default: '(props: any) => { return props.notice;}'
  },
  {
    name: 'closable',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '-',
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
    value: '-',
    default: '-'
  },
  {
    name: 'ok-loading',
    description: '确认按钮是否为加载中状态',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'ok-button-props',
    description: '确认按钮的Props',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'cancel-button-props',
    description: '取消按钮的Props',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'footer',
    description: '是否展示页脚部分',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'render-to-body',
    description: '对话框是否挂载在 body 元素下',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement',
    value: '-',
    default: 'body'
  },
  {
    name: 'mask-style',
    description: '蒙层的样式',
    type: 'CSSProperties',
    value: '-',
    default: '-'
  },
  {
    name: 'modal-class',
    description: '对话框的类名',
    type: 'string / any[]',
    value: '-',
    default: '-'
  },
  {
    name: 'modal-style',
    description: '对话框的样式',
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
    name: 'esc-to-close',
    description: '是否支持 ESC 键关闭对话框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'draggable',
    description: '是否支持拖动',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'fullscreen',
    description: '是否开启全屏',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'mask-animation-name',
    description: '遮罩层动画名字',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'modal-animation-name',
    description: '对话框动画名字',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'body-class',
    description: '对话框内容部分的类名',
    type: 'string / any[]',
    value: '—',
    default: '-'
  },
  {
    name: 'body-style',
    description: '对话框内容部分的样式',
    type: 'StyleValue',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  { name: 'ok', description: '点击确定按钮时触发', parameter: '—' },
  {
    name: 'cancel',
    description: '点击取消、关闭按钮时触发',
    parameter: '—'
  },
  { name: 'open', description: '对话框打开后（动画结束）触发', parameter: '—' },
  {
    name: 'close',
    description: '对话框关闭后（动画结束）触发',
    parameter: '—'
  },
  { name: 'before-open', description: '对话框打开前触发', parameter: '—' },
  {
    name: 'before-close',
    description: '对话框关闭前触发',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: '标题区的内容' },
  { name: 'footer', description: '按钮操作区的内容' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
