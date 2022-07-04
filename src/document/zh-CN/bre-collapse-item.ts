import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'key',
    description: '面板的 id，对应 activeKey 中的值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'header',
    description: '面板的标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-expand-icon',
    description: '是否显示展开图标',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'destroy-on-hide',
    description: '是否在隐藏时销毁内容',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'header', description: '面板的标题' },
  { name: 'extra', description: '额外内容' }
]


export const document: LayDocument = { attributes, slots }

export default document
