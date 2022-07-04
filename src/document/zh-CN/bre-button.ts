import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    description: '按钮的尺寸',
    type: 'string',
    value: 'medium / small / mini / large',
    default: 'medium'
  },
  {
    name: 'type',
    description: '按钮的类型，分为五种：次要按钮、主要按钮、虚框按钮、线性按钮、文字按钮',
    type: 'string',
    value: 'primary / secondary / outline / dashed / text',
    default: 'secondary'
  },
  {
    name: 'shape',
    description: '按钮的形状',
    type: 'string',
    value: 'square / round / circle',
    default: '-'
  },
  {
    name: 'status',
    description: '按钮的状态',
    type: 'string',
    value: 'normal / warning / success / danger',
    default: 'normal'
  },
  {
    name: 'long',
    description: '按钮的宽度是否随容器自适应',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'href',
    description: '设置跳转链接。设置此属性时，按钮渲染为a标签',
    type: 'string',
    value: '—',
    default: '-'
  },
  
  {
    name: 'html-type',
    description: '原生 type 属性',
    type: 'string',
    value: 'button / submit / reset',
    default: 'button'
  }
]

export const slots: DocumentSlot[] = [{ name: 'icon', description: '图标' }]

export const document: LayDocument = { attributes, slots }

export default document
