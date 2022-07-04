import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'active-key/v-model',
    description: '当前选中的标签的 key',
    type: 'string / number',
    value: '—',
    default: '-'
  },
  {
    name: 'default-active-key',
    description: '默认选中的标签的key（非受控状态，为空时选中第一个标签页）',
    type: 'string / number',
    value: '—',
    default: '-'
  },
  {
    name: 'position',
    description: '选项卡的位置',
    type: 'string',
    value: 'left/right/top/bottom',
    default: 'top'
  },
  {
    name: 'size',
    description: '选项卡的大小',
    type: 'string',
    value: 'mini / small / medium / large',
    default: '-'
  },
  {
    name: 'type',
    description: '选项卡的类型',
    type: 'string',
    value: 'line/card/card-gutter/text/rounded/capsule',
    default: 'line'
  },
  {
    name: 'direction',
    description: '选项卡的方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'horizontal'
  },
  {
    name: 'editable',
    description: '是否开启可编辑模式',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'show-add-button',
    description: '是否显示增加按钮（仅在可编辑模式可用）',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'destroy-on-hide',
    description: '是否在不显示标签时销毁内容',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'lazy-load',
    description: '是否在首次展示标签时挂载内容',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'justify',
    description: '高度撑满容器，只在水平模式下生效。',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'animation',
    description: '是否开启选项内容过渡动画',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'header-padding',
    description: '选项卡头部是否存在水平边距。仅对 type 等于 line、text 类型的选项卡生效',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'auto-switch',
    description: '创建标签后是否切换到新标签（最后一个）',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'hide-content',
    description: '是否隐藏内容',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'tab-click',
    description: 'tab 被选中时触发',
    parameter: 'key: union'
  },
  {
    name: 'change',
    description: '当前标签值改变时触发',
    parameter: 'key: union'
  },
  {
    name: 'add',
    description: '用户点击增加按钮时触发',
    parameter: '—'
  },
  {
    name: 'delete',
    description: '用户点击删除按钮时触发',
    parameter: 'key: union'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'extra',
    description: '选项卡额外内容'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
