import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'theme',
    description: '菜单的主题',
    type: 'string',
    value: 'light / dark',
    default: 'light'
  },
  {
    name: 'mode',
    description: '菜单的模式',
    type: 'string',
    value: 'horizontal / vertical / pop / popButton',
    default: 'vertical'
  },
  {
    name: 'level-indent',
    description: '层级之间的缩进量',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'auto-open',
    description: '默认展开所有多级菜单',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'collapsed',
    description: '是否折叠菜单',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'default-collapsed',
    description: '默认是否折叠菜单',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'collapsed-width',
    description: '折叠菜单宽度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'accordion',
    description: '开启手风琴效果',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'auto-scroll-into-view',
    description: '是否自动滚动选中项目到可见区域',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'show-collapse-button',
    description: '是否内置折叠按钮',
    type: 'boolean',
    value: '-',
    default: false
  },
  {
    name: 'selected-keys',
    description: '选中的菜单项 key 数组',
    type: 'string[]',
    value: '—',
    default: '-'
  },
  {
    name: 'default-selected-keys',
    description: '默认选中的菜单项 key 数组',
    type: 'string[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'open-keys',
    description: '展开的子菜单 key 数组',
    type: 'string[]',
    value: '—',
    default: '-'
  },
  {
    name: 'default-open-keys',
    description: '默认展开的子菜单 key 数组',
    type: 'string[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'scroll-config',
    description: '滚动到可见区域的配置项，接收所有scroll-into-view-if-needed的参数',
    type: '{ [key: string]: any }',
    value: '—',
    default: '-'
  },
  {
    name: 'trigger-props',
    description: '弹出模式下可接受所有 Trigger 的 Props	',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'tooltip-props',
    description: '弹出模式下可接受所有 ToolTip 的 Props',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'auto-open-selected',
    description: '默认展开选中的菜单',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'breakpoint',
    description: '响应式的断点',
    type: 'string',
    value: 'xxl / xl / lg / md / sm / xs',
    default: '-'
  },
  {
    name: 'popup-max-height',
    description: '弹出框的最大高度',
    type: 'boolean / number',
    value: '—',
    default: 'true'
  },
]

export const events: DocumentEvent[] = [
  {
    name: 'collapse',
    description: '折叠状态改变时触发',
    parameter: 'collapsed: boolean, type: `clickTrigger`|`responsive`'
  },
  {
    name: 'menu-item-click',
    description: '点击菜单项时触发',
    parameter: 'key: string'
  },
  {
    name: 'sub-menu-click',
    description: '点击子菜单时触发',
    parameter: 'key: string, penKeys: string[]'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'collapse-icon', description: '折叠图标' },
  { name: 'expand-icon-right', description: '向右展开的图标' },
  { name: 'expand-icon-down', description: '向下展开的图标' }
]

export const document: LayDocument = { events, attributes, slots }

export default document
