import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'locale',
    description: '国际化配置，用于覆盖locale中的 datePicker 字段',
    type: 'Record<string, any>',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-trigger',
    description: '没有触发元素，只显示选择面板',
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
    description: '完全只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'error',
    description: '是否为错误状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '日期选择器的尺寸',
    type: 'string',
    value: 'mini / small / medium / large',
    default: 'medium'
  },
  {
    name: 'shortcuts',
    description: '预设时间范围快捷选择',
    type: 'array',
    value: '-',
    default: '[]'
  },
  {
    name: 'shortcuts-position',
    description: '预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景',
    type: 'string',
    value: 'left / bottom / right',
    default: 'bottom'
  },
  {
    name: 'position',
    description: '弹出的框的位置',
    type: 'string',
    value: 'top / tl / tr / bottom / bl / br',
    default: 'bl'
  },
  {
    name: 'popup-visible',
    description: '控制弹出框的打开或者关闭状态',
    type: 'boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'default-popup-visible',
    description: '默认弹出框是打开或者关闭',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'trigger-props',
    description: '可以传入 Trigger 组件的参数',
    type: 'Record<string, unknown>',
    value: '-',
    default: '-'
  },
  {
    name: 'unmount-on-close',
    description: '是否在隐藏的时候销毁DOM结构',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'placeholder',
    description: '非范围选择时的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled-date',
    description: '不可选取的日期',
    type: '(current?: Date) => boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'disabled-time',
    description: '	不可选取的时间',
    type: '(current: Date) => DisabledTimeProps',
    value: '—',
    default: '-'
  },
  {
    name: 'picker-value/v-model',
    description: '面板显示的日期',
    type: 'Date / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-picker-value',
    description: '面板默认显示的日期',
    type: 'Date / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'popup-container',
    description: '弹出框的挂载容器',
    type: 'string / HTMLElement / null / undefined',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: '显示在输入框中的格式',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
    default: '-'
  },
  {
    name: 'preview-shortcut',
    description: '是否要预览快捷选择的结果',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-confirm-btn',
    description: '是否显示确认按钮，showTime = true 的时候始终显示',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: 'value: Date / string / number / undefined, date: Date / undefined, dateString: string / undefined'
  },
  {
    name: 'select',
    description: '选中日期发生改变但组件值未改变',
    parameter: 'value: Date / string / number, date: Date, dateString: string'
  },
  {
    name: 'popup-visible-change',
    description: '打开或关闭弹出框',
    parameter: 'visible: boolean'
  },
  {
    name: 'ok',
    description: '点击确认按钮',
    parameter: 'value: Date / string / number, date: Date, dateString: string'
  },
  {
    name: 'clear',
    description: '点击清除按钮',
    parameter: '-'
  },
  {
    name: 'select-shortcut',
    description: '点击快捷选项',
    parameter: '-'
  },
  {
    name: 'picker-value-change',
    description: '面板日期改变',
    parameter: 'value: Date / string / number, date: Date, dateString: string'
  },
]

export const props: DocumentAttribute[] = [
  {
    name: 'mode',
    description: '范围选择器的类型',
    type: 'string',
    value: 'date / year / quarter / month / week',
    default: 'date'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'Date / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'default-value',
    description: '默认值',
    type: 'Date / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'picker-value',
    description: '默认面板显示的日期',
    type: '(Date / string / number)[]',
    value: '—',
    default: '—'
  },
  {
    name: 'default-picker-value',
    description: '面板显示的日期',
    type: '(Date / string / number)[]',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean / boolean[]',
    value: '—',
    default: 'false'
  },
  {
    name: 'day-start-of-week',
    description: '每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推',
    type: 'number',
    value: '0 / 1 / 2 / 3 / 4 / 5 / 6',
    default: '0'
  },
  {
    name: 'format',
    description: '展示日期的格式',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'value-format',
    description: '值的格式',
    type: 'timestamp / Date / string',
    value: '',
    default: '-'
  },
  {
    name: 'show-time',
    description: '是否增加时间选择',
    type: 'boolean',
    value: '',
    default: 'false'
  },
  {
    name: 'time-picker-props',
    description: '时间显示的参数',
    type: 'Partial<TimePickerProps>',
    value: '-',
    default: '-'
  },
  {
    name: 'placeholder',
    description: '提示文案',
    type: 'string[]',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled-date',
    description: '不可选的日期',
    type: '(current: Date, type: \'start\' / \'end\') => boolean',
    value: '',
    default: '-'
  },
  {
    name: 'disabled-time',
    description: '不可选取的时间',
    type: '(current: Date, type: \'start\' / \'end\') => DisabledTimeProps',
    value: '',
    default: '-'
  },
  {
    name: 'separator',
    description: '范围选择器输入框内的分割符号',
    type: 'string',
    value: '',
    default: '-'
  },
  {
    name: 'exchange-time',
    description: '时间是否会交换，默认情况下时间会影响和参与开始和结束值的排序，如果要固定时间顺序，可将其关闭。',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
]

export const shortcuts: DocumentAttribute[] = [
  {
    name: 'label',
    description: '选项的内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'value',
    description: "选项值",
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: "解析值所使用的格式",
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const document: LayDocument = { attributes, events, props, shortcuts }

export default document
