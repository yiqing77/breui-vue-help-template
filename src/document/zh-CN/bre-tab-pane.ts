import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '选项卡的标题',
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
    name: 'closable',
    description: '是否允许关闭此选项卡（仅在可编辑模式生效）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'destroy-on-hide',
    description: '是否在不显示标签时销毁内容',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'title',
    description: '选项卡标题'
  }
]

export const document: LayDocument = { attributes,slots }

export default document
