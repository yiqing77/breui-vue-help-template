import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string | number | Date | Array<string | number | Date>',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值',
    type: 'string | number | Date | Array<string | number | Date>',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '选择器类型',
    type: 'string',
    value: 'time/time-range',
    default: 'time'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-clear',
    description: '是否允许清除',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'readonly',
    description: '是否为只读模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'error',
    description: '是否为错误状态',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'format',
    description: '时间格式化(TimePicker)',
    type: 'string',
    value: 'HH,mm,ss,A',
    default: '"HH:mm:ss"'
  },
  {
    name: 'placeholder',
    description: '非范围选择时的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'mini / small / medium / large',
    default: 'medium'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string | HTMLElement',
    value: '—',
    default: '—'
  },
  {
    name: 'use12-hours',
    description: '12 小时制',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'step',
    description: '设置 时 / 分 / 秒 的选择间隔',
    type: '{ hour?: number; minute?: number; second?: number;}',
    value: '—',
    default: '-'
  },
  {
    name: 'disabled-hours',
    description: '禁用的部分小时选项',
    type: '() => number[]',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled-minutes',
    description: '禁用的部分分钟选项',
    type: '(selectedHour?: number) => number[]',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled-seconds',
    description: '禁用的部分秒数选项',
    type: '(selectedHour?: number, selectedMinute?: number) => number[]',
    value: '—',
    default: '-'
  },
  {
    name: 'hide-disabled-options',
    description: '隐藏禁止选择的选项',
    type: 'boolean',
    value: '-',
    default: "false"
  },
  {
    name: 'disable-confirm',
    description: '禁用确认步骤，开启后直接点选时间不需要点击确认按钮',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'position',
    description: '弹出的位置',
    type: 'string',
    value: 'top/tl/tr/bottom/bl/br',
    default: 'bl'
  },
  {
    name: 'popup-visible',
    description: '控制弹出框打开或者关闭',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'default-popup-visible',
    description: '弹出框默认打开或者关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'trigger-props',
    description: '可以传入 Trigger 组件的参数',
    type: 'Record<string, unknown>',
    value: '—',
    default: '-'
  },
  {
    name: 'unmount-on-close',
    description: '是否在关闭后销毁 dom 结构',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '组件值发生改变',
    parameter: 'timeString, time'
  },
  {
    name: 'select',
    description: '选择时间但未触发组件值变化',
    parameter: 'timeString, time'
  },
  {
    name: 'clear',
    description: '点击清除按钮',
    parameter: '-'
  },
  {
    name: 'popup-visible-change',
    description: '弹出框展开和收起',
    parameter: 'visible: boolean'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'extra',
    description: '额外的页脚'
  }
]

export const document: LayDocument = { attributes, events, slots }

export default document
