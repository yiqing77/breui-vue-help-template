import { DocumentAttribute } from '../../shared/types';
import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

const attributes: DocumentAttribute[] = [
  {
    name: 'key',
    description: '唯一标志',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'title',
    description: '子菜单的标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'selectable',
    description: '弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'popup',
    description: '是否强制使用弹出模式，level 表示当前子菜单的层级',
    type: 'boolean / ((level: number) => boolean)',
    value: '—',
    default: false
  },
  {
    name: 'popup-max-height',
    description: '弹出框的最大高度',
    type: 'boolean / number',
    value: '—',
    default: true
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: '标题' },
  { name: 'icon', description: '菜单的图标' },
  { name: 'expand-icon-right', description: '向右展开的图标' },
  { name: 'expand-icon-down', description: '向下展开的图标' }
]

export const document: LayDocument = { attributes, slots }

export default document
