import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'active-key/v-model',
    description: '当前展开的面板的 key',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-active-key',
    description: '默认展开的面板的 key （非受控模式）',
    type: 'string / number',
    value: '—',
    default: '[]'
  },
  {
    name: 'accordion',
    description: '是否手风琴模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-icon-position',
    description: '展开图标显示的位置',
    type: 'string',
    value: 'left / right',
    default: 'left'
  },
  {
    name: 'bordered',
    description: '是否显示边框',
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

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '展开的面板发生改变时触发',
    parameter: '(activeKey: number / string, ev: Event)'
  }
]

export const document: LayDocument = { attributes, events }

export default document
