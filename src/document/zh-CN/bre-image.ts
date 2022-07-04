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
    name: 'width',
    description: '图片显示宽度',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'height',
    description: '图片显示高度',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'description',
    description: '描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'alt',
    description: '图片的文字描述',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'hide-footer',
    description: '是否隐藏 footer',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'footer-position',
    description: '底部显示的位置',
    type: 'string',
    value: 'inner / outer',
    default: 'inner'
  },
  {
    name: 'show-loader',
    description: '是否显示加载中效果',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'preview',
    description: '是否开启预览',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'preview-visible',
    description: '控制预览的打开状态，可与 previewVisibleChange 配合使用',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-preview-visible',
    description: '预览的默认打开状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'preview-props',
    description: '预览的配置项（所有选项都是可选的）',
    type: 'ImagePreviewProps',
    value: '—',
    default: '-'
  },
  {
    name: 'footer-class',
    description: '底部显示区域的类名',
    type: 'string / array / object',
    value: '—',
    default: '-'
  },
]

export const events: DocumentEvent[] = [
  { name: 'preview-visible-change', description: '预览的打开和关闭事件', parameter: 'visible: boolean' }
]

export const slots: DocumentSlot[] = [
  { name: 'error-icon', description: '自定义错误状态的图标' },
  { name: 'error', description: '自定义错误状态内容' },
  { name: 'loader', description: '自定义加载状态效果' }
]

export const document: LayDocument = { attributes, events, slots }

export default document
