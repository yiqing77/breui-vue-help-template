import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentScopedSlot } from '../../shared/types'
import { DocumentMethod } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'mini/small/medium/large',
    default: 'medium'
  },
  {
    name: 'block-node',
    description: '节点是否占据一行',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-expand-all',
    description: '是否默认展开父节点',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'multiple',
    description: '是否支持多选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'checkable',
    description: '是否在节点前添加复选框，从 2.27.0 开始支持函数格式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'selectable',
    description: '是否支持选择，从 2.27.0 开始支持函数格式 lazy 属性为true 时生效',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'check-strictly',
    description: '是否取消父子节点关联',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'checked-strategy',
    description: '定制回填方式：all: 返回所有选中的节点；parent: 父子节点都选中时只返回父节点；child: 只返回子节点 false。',
    type: 'string',
    value: 'all/parent/child',
    default: 'all'
  },
  {
    name: 'default-selected-keys',
    description: '默认选中的树节点',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'selected-keys',
    description: '选中的树节点',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'default-checked-keys',
    description: '默认选中复选框的树节点',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'checked-keys',
    description: '选中复选框的树节点',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'default-expanded-keys',
    description: '默认展开的节点',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'expanded-keys',
    description: '展开的节点',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'data',
    description: '传入data,生成对应的树结构',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'field-names',
    description: '指定节点数据中的字段名',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'show-line',
    description: '是否展示连接线',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'load-more',
    description: '异步加载数据的回调，返回一个 Promise',
    type: '(node: TreeNodeData) => Promise<void>',
    value: '—',
    default: '—'
  },
  {
    name: 'draggable',
    description: '是否可以拖拽',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-drop',
    description: '拖拽时是否允许在某节点上释放',
    type: '(options: { dropNode: TreeNodeData; dropPosition: -1 | 0 | 1;}) => boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'virtual-list-props',
    description: '传递虚拟列表属性，传入此参数以开启虚拟滚动',
    type: '{height, threshold, isStaticItemHeight}',
    value: '-',
    default: '-'
  },
  {
    name: 'default-expand-selected',
    description: '是否默认展开已选中节点的父节点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-expand-checked',
    description: '是否默认展开已选中复选框节点的父节点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-expand-parent',
    description: '是否自动展开已展开节点的父节点',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'half-checked-keys',
    description: "半选状态的节点.仅在 checkable 且 checkStrictly 时生效",
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'only-check-leaf',
    description: "开启后 checkedKeys 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）",
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'animation',
    description: "是否开启展开时的过渡动效",
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'action-on-node-click',
    description: "点击节点的时候触发的动作",
    type: 'string',
    value: '—',
    default: 'expand'
  }
]

export const props: DocumentAttribute[] = [
  {
    name: 'title',
    description: '指定节点标签为节点对象的某个属性值',
    type: 'string, function(data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'children',
    description: '指定子树为节点对象的某个属性值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '指定节点选择框是否禁用为节点对象的某个属性值',
    type: 'boolean, function(data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'isLeaf',
    description: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
    type: 'boolean, function(data, node)',
    value: '—',
    default: '—'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'scrollIntoView',
    description: '虚拟列表滚动某个元素',
    parameter: "options: { index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}"
  },
  {
    name: 'getSelectedNodes',
    description: '获取选中的节点',
    parameter: '-'
  },
  {
    name: 'getCheckedNodes',
    description: '获取选中复选框的节点。支持传入 checkedStrategy，没有传则取组件的配置。',
    parameter: "options: checkedStrategy?: 'all' | 'parent' | 'child'; includeHalfChecked?: boolean;"
  },
  {
    name: 'getHalfCheckedNodes',
    description: '获取复选框半选的节点',
    parameter: '-'
  },
  {
    name: 'getExpandedNodes',
    description: '获取展开的节点',
    parameter: '-'
  },
  {
    name: 'checkAll',
    description: '设置全部节点的复选框状态',
    parameter: 'checked: boolean'
  },
  {
    name: 'checkNode',
    description: '设置指定节点的复选框状态',
    parameter: 'key: TreeNodeKey | TreeNodeKey[], checked: boolean, onlyCheckLeaf: boolean'
  },
  {
    name: 'selectAll',
    description: '设置全部节点的选中状态',
    parameter: 'selected: boolean'
  },
  {
    name: 'selectNode',
    description: '设置指定节点的选中状态',
    parameter: 'key: TreeNodeKey | TreeNodeKey[], selected: boolean'
  },
  {
    name: 'expandAll',
    description: '设置全部节点的展开状态',
    parameter: 'expanded: boolean'
  },
  {
    name: 'expandNode',
    description: '设置指定节点的展开状态',
    parameter: 'key: TreeNodeKey | TreeNodeKey[], expanded: boolean'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '点击树节点时触发',
    parameter: '(selectedKeys: Array<string | number>, data: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; })'
  },
  {
    name: 'check',
    description: '点击树节点复选框时触发。halfCheckedKeys 和 halfCheckedNodes 从 2.19.0 开始支持',
    parameter: '(checkedKeys: Array<string | number>, data: { checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string | number)[]; halfCheckedNodes: TreeNodeData[]; })'
  },
  {
    name: 'expand',
    description: '展开/关闭',
    parameter: '(expandKeys: Array<string | number>, data: { expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; })'
  },
  {
    name: 'drag-start',
    description: '节点开始拖拽',
    parameter: '-'
  },
  {
    name: 'drag-end',
    description: '节点结束拖拽',
    parameter: '(ev: DragEvent, node: TreeNodeData)'
  },
  {
    name: 'drag-over',
    description: '节点被拖拽至可释放目标',
    parameter: '(ev: DragEvent, node: TreeNodeData)'
  },
  {
    name: 'drag-leave',
    description: '节点离开可释放目标',
    parameter: '(ev: DragEvent, node: TreeNodeData)'
  },
  {
    name: 'drop',
    description: '节点在可释放目标上释放',
    parameter: '(data: { e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; })'
  }
]

export const scopedSlots: DocumentScopedSlot[] = [
  { name: 'title', description: '标题' },
  { name: 'extra', description: '渲染额外的节点内容' },
  { name: 'drag-icon', description: '定制 drag 图标' },
  { name: 'loading-icon', description: '定制 loading 图标' },
  { name: 'switcher-icon', description: '定制 switcher 图标' },
  { name: 'icon', description: '	定制节点图标' },
]

export const document: LayDocument = { attributes, events, scopedSlots, methods, props }

export default document
