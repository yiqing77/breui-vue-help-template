import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'popup-visible/v-model',
    description: '文字气泡是否可见',
    type: 'boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '文字气泡默认是否可见（非受控模式）',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'content',
    description: '文字气泡内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'position',
    description: '弹出位置',
    type: 'string',
    value: 'top/tl/tr/bottom/bl/br/left/lt/lb/right/rt/rb',
    default: 'top'
  },
  {
    name: 'mini',
    description: '是否展示为迷你尺寸',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'background-color',
    description: '弹出框的背景颜色',
    type: 'string',
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
    value: '-',
    default: "-"
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string | HTMLElement | null | undefined',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'popup-visible-change',
    description: '文字气泡显示状态改变时触发',
    parameter: 'visible: boolean'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'content',
    description: '内容'
  }
]


export const document: LayDocument = { attributes, events, slots }

export default document
