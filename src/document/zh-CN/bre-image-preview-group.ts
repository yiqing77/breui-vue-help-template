import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'src-list',
    description: '图片列表（设置了本属性之后，将不再收集 a-image 子组件的图片信息）',
    type: 'string[]',
    value: '—',
    default: '-'
  },
  {
    name: 'current',
    description: '当前展示的图片的下标',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'default-current',
    description: '第一张展示的图片的下标',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'infinite',
    description: '是否无限循环',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'visible',
    description: '是否可见，受控属性',
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
    value: '—',
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
    description: '控制条的布局',
    type: 'string[]',
    value: '—',
    default: '[`fullScreen`, `rotateRight`, `rotateLeft`, `zoomIn`, `zoomOut`, `originalSize`]'
  },
  {
    name: 'popup-container',
    description: '设置弹出框的挂载点，同 teleport 的 to，缺省值是 document.body',
    type: 'HTMLElement / string',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: '切换图片', parameter: '-' },
  { name: 'visible-change', description: '预览的打开和关闭', parameter: '-' }
]

export const document: LayDocument = { attributes, events }

export default document
