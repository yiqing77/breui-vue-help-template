import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'model',
    description: '表单数据对象',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'layout',
    description: '表单的布局方式，包括水平、垂直、多列',
    type: 'string',
    value: 'horizontal / vertical / inline',
    default: 'horizontal'
  },
  {
    name: 'size',
    description: '表单控件的尺寸',
    type: 'string',
    value: 'mini / small / medium / large',
    default: 'medium'
  },
  {
    name: 'label-col-props',
    description: '标签元素布局选项',
    type: 'object',
    value: '',
    default: 'span: 5, offset: 0'
  },
  {
    name: 'wrapper-col-props',
    description: '表单控件布局选项',
    type: 'object',
    value: '',
    default: 'span: 19, offset: 0'
  },
  {
    name: 'label-align',
    description: '标签的对齐方向',
    type: 'string',
    value: 'left / right',
    default: 'right'
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'auto-label-width',
    description: '是否开启自动标签宽度，仅在 layout="horizontal" 下生效。',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description: '校验全部表单数据',
    parameter: 'callback: (errors: undefined / Record<string, ValidatedError>) => void'
  },
  {
    name: 'validateField',
    description: '校验部分表单数据',
    parameter: 'field: string / string[], callback: (errors: undefined / Record<string, ValidatedError>) => void'
  },
  {
    name: 'resetFields',
    description: '重置表单数据',
    parameter: 'field: string / string[]'
  },
  {
    name: 'clearValidate',
    description: '清除校验状态',
    parameter: 'field: string / string[]'
  },
  {
    name: 'setFields',
    description: '设置表单项的值和状态',
    parameter: 'data: Record<string, FieldData>'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'submit',
    description: '表单提交时触发',
    parameter: 'data: {values: Record<string, any>; errors: Record<string, ValidatedError> / undefined}, ev: Event'
  },
  {
    name: 'submit-success',
    description: '验证成功时触发',
    parameter: 'values: Record<string, any>, ev: Event'
  },
  {
    name: 'submit-failed',
    description: '验证失败时触发',
    parameter: 'data: {values: Record<string, any>; errors: Record<string, ValidatedError>}, ev: Event'
  }
]

export const document: LayDocument = { attributes, methods, events }

export default document
