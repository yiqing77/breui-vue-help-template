import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'popup-visible/v-model',
    description: '弹出框是否可见',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '弹出框默认是否可见（非受控模式）',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'trigger',
    description: '触发方式',
    type: 'String',
    value: 'click/focus/hover/contextMenu',
    default: 'hover'
  },
  {
    name: 'position',
    description: '出现位置',
    type: 'String',
    value: "top/tl/tr/bottom/bl/br/left/lt/lb/right/rt/rb",
    default: 'bottom'
  },
  {
    name: 'disabled',
    description: '触发器是否禁用',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popup-offset',
    description: '弹出框的偏移量（弹出框距离触发器的偏移距离）',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'popup-translate',
    description: '弹出框的移动距离',
    type: 'TriggerPopupTranslate',
    value: '—',
    default: '-'
  },
  {
    name: 'show-arrow',
    description: '弹出框是否显示箭头',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'align-point',
    description: '弹出框是否跟随鼠标',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popup-hover-stay',
    description: '是否在移出触发器，并移入弹出框时保持弹出框显示',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'blur-to-close',
    description: '是否在触发器失去焦点时关闭弹出框	',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'click-to-close',
    description: '是否在点击触发器时关闭弹出框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'click-outside-to-close',
    description: '是否在点击外部区域时关闭弹出框',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'unmount-on-close',
    description: '是否在关闭时卸载弹出框节点',
    type: 'boolean',
    value: '-',
    default: "true"
  },
  {
    name: 'content-class',
    description: '弹出框内容的类名',
    type: 'string|array|object',
    value: '—',
    default: '—'
  },
  {
    name: 'content-style',
    description: '弹出框内容的样式',
    type: 'CSSProperties',
    value: '—',
    default: '—'
  },
  {
    name: 'arrow-class',
    description: '弹出框箭头的类名',
    type: 'string / array / object',
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
    name: 'popup-style',
    description: '弹出框的样式',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'animation-name',
    description: '弹出动画的name',
    type: 'string',
    value: '—',
    default: 'fade-in'
  },
  {
    name: 'duration',
    description: '弹出动画的持续时间',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'mouse-enter-delay',
    description: 'mouseenter事件延时触发的时间（毫秒）',
    type: 'number',
    value: '—',
    default: '100'
  },
  {
    name: 'mouse-leave-delay',
    description: 'mouseleave事件延时触发的时间（毫秒）',
    type: 'number',
    value: '—',
    default: '100'
  },
  {
    name: 'focus-delay',
    description: 'focus事件延时触发的时间（毫秒）',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'auto-fit-popup-width',
    description: '是否将弹出框宽度设置为触发器宽度',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-fit-popup-min-width',
    description: '是否将弹出框的最小宽度设置为触发器宽度',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-fix-position',
    description: '当触发器的尺寸发生变化时，是否重新计算弹出框位置',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement',
    value: '—',
    default: '-'
  },
  {
    name: 'update-at-scroll',
    description: '是否在容器滚动时更新弹出框的位置',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-fit-position',
    description: '是否自动调整弹出框位置，以适应窗口大小',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'render-to-body',
    description: '是否挂载在 body 元素下',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'prevent-focus',
    description: '是否阻止弹出层中的元素点击时获取焦点',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  { name: 'show', description: '显示时触发', parameter: '—' },
  { name: 'hide', description: '隐藏时触发', parameter: '—' },
  {
    name: 'popup-visible-change',
    description: '弹出框显示状态改变时触发',
    parameter: 'visible: boolean'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'content', description: '弹出框内容' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
