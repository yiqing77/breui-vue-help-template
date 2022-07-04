import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    description: '头像的尺寸大小，单位是 px。未填写时使用样式中的大小 40p',
    type: 'number',
    value: '-',
    default: '-'
  },
  {
    name: 'shape',
    description: '头像的形状，有圆形(circle)和正方形(square)两种',
    type: 'string',
    value: 'circle / square',
    default: 'circle'
  },
  {
    name: 'trigger-type',
    description: '可点击的头像交互类型',
    type: 'string',
    value: 'mask / button',
    default: 'button'
  },
  {
    name: 'trigger-icon-style',
    description: '交互图标的样式',
    type: 'CSSProperties',
    value: '-',
    default: '-'
  },
  {
    name: 'auto-fix-font-size',
    description: '是否自动根据头像尺寸调整字体大小',
    type: 'boolean',
    value: 'true / false',
    default: 'true'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击回调',
    parameter: '(e: MouseEvent)'
  }
]

export const slots: DocumentSlot[] = [{ name: 'trigger-icon', description: '可点击的头像交互图标' }]

export const document: LayDocument = { attributes, events, slots }

export default document
