import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'current',
    description: '当前展示索引',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'autoplay',
    description: '是否自动切换',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'move-speed',
    description: '幻灯片移动速率(ms)',
    type: 'number',
    value: '—',
    default: '500'
  },
  {
    name: 'animation-name',
    description: '切换动画',
    type: 'string',
    value: 'slide / fade / card',
    default: 'slide'
  },
  {
    name: 'trigger',
    description: '指示器的触发方式',
    type: 'string',
    value: 'click',
    default: '—'
  },
  {
    name: 'direction',
    description: '走马灯展示的方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'horizontal'
  },
  {
    name: 'show-arrow',
    description: '切换箭头的显示时机',
    type: 'string',
    value: 'always/hover/never',
    default: 'always'
  },
  {
    name: 'default-current',
    description: '初始状态激活的幻灯片的索引，从 1 开始',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'arrow-class',
    description: '切换箭头样式',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'indicator-type',
    description: '指示器类型，可为小方块和小圆点或不显示',
    type: 'string',
    value: 'line / dot / slider / never',
    default: 'dot'
  },
  {
    name: 'indicator-position',
    description: '指示器的位置',
    type: 'string',
    value: 'bottom / top / left / right / outer',
    default: 'bottom'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '幻灯片切换时触发',
    parameter: '目前激活的幻灯片的索引，原幻灯片的索引'
  }
]

export const document: LayDocument = { attributes, events }

export default document
