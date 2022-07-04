import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'percent',
    description: '进度条当前的百分比（必填）',
    type: 'number',
    value: '0-100',
    default: '0'
  },
  {
    name: 'size',
    description: '进度条的大小',
    type: 'string',
    value: 'mini/small/medium/large',
    default: 'medium'
  },
  {
    name: 'type',
    description: '进度条类型',
    type: 'string',
    value: 'line/circle',
    default: 'line'
  },
  {
    name: 'stroke-width',
    description: '进度条的线宽',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'steps',
    description: '开启步骤条模式，并设置步骤数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'animation',
    description: '是否开启过渡动画',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'status',
    description: '进度条当前状态',
    type: 'string',
    value: 'normal/success/danger/warning',
    default: '—'
  },
  {
    name: 'color',
    description: '进度条背景色（会覆盖 status 状态颜色）',
    type: 'string|object',
    value: '—',
    default: "-"
  },
  {
    name: 'width',
    description: '进度条的长度',
    type: 'number|string',
    value: '',
    default: '-'
  },
  {
    name: 'show-text',
    description: '是否显示进度条文字内容',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'track-color',
    description: '进度条的轨道颜色',
    type: 'string',
    value: '',
    default: '-'
  }
]

export const document: LayDocument = { attributes }

export default document
