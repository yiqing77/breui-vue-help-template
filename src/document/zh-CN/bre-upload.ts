import { DocumentAttribute } from '../../shared/types';
import { LayDocument } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'file-list',
    description: "上传的文件列表",
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'default-file-list',
    description: "	默认的文件列表（非受控状态）",
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'accept',
    description: '接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效）',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'action',
    description: '必选参数，上传的地址',
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
    name: 'multiple',
    description: '是否支持多选文件',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'directory',
    description: '是否支持文件夹上传（需要浏览器支持）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'draggable',
    description: '是否支持拖拽上传',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tip',
    description: '提示文字',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'headers',
    description: '上传请求附加的头信息',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'data',
    description: '上传时附带的额外参数',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '上传的文件字段名',
    type: 'string',
    value: '—',
    default: 'file'
  },
  {
    name: 'with-credentials',
    description: '支持发送 cookie 凭证信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'custom-request',
    description: '覆盖默认的上传行为，可以自定义上传的实现',
    type: 'function',
    value: '—',
    default: '—'
  },
  {
    name: 'limit',
    description: '限制上传文件的数量。0表示不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'auto-upload',
    description: '是否在选取文件后立即进行上传',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-file-list',
    description: '是否显示已上传文件列表',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-remove-button',
    description: '是否显示删除按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-retry-button',
    description: '是否显示重试按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-cancel-button',
    description: '是否显示取消按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-upload-button',
    description: '是否显示上传按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'download',
    description: '是否在 <a> 链接上添加 download 属性',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-link',
    description: '在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 preview 事件。',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'image-loading',
    description: '<img> 的原生 HTML 属性，需要浏览器支持',
    type: 'string',
    value: 'eager/lazy',
    default: '-'
  },
  {
    name: 'list-type',
    description: '图片列表类型',
    type: 'string',
    value: 'text/picture/picture-card',
    default: 'text'
  },
  {
    name: 'response-url-key',
    description: 'Response中获取图片URL的key，开启后会用上传的图片替换预加载的图片',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'custom-icon',
    description: '自定义图标',
    type: 'CustomIcon',
    value: '—',
    default: '—'
  },
  {
    name: 'image-preview',
    description: '是否使用 ImagePreview 组件进行预览',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'on-before-upload',
    description: '上传图片前触发',
    type: '(file: File) => Promise<boolean | File>',
    value: '—',
    default: '—'
  },
  {
    name: 'on-before-remove',
    description: '移除图片前触发',
    type: '(fileItem: FileItem) => Promise<boolean>',
    value: '—',
    default: '—'
  },
  {
    name: 'on-button-click',
    description: '点击上传按钮触发（如果返回 Promise 则会关闭默认 input 上传）',
    type: '(event: Event) => Promise<FileList> | void',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'exceed-limit',
    description: '上传的图片超出限制后触发',
    parameter: '(fileList: FileItem[], files: File[])'
  },
  {
    name: 'change',
    description: '上传的图片状态发生改变时触发',
    parameter: '(fileList: FileItem[], fileItem: fileItem)'
  },
  {
    name: 'progress',
    description: '上传中的图片进度改变时触发',
    parameter: '(	fileItem: fileItem, ev: ProgressEvent)'
  },
  {
    name: 'preview',
    description: '点击图片预览时的触发',
    parameter: '(fileItem: FileItem)'
  },
  {
    name: 'success',
    description: '上传成功时触发',
    parameter: '(fileItem: FileItem)'
  },
  {
    name: 'error',
    description: '上传失败时触发',
    parameter: '(fileItem: FileItem)'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'updateFile',
    description: '更新文件',
    parameter: '(id: string, file: File)'
  },
  {
    name: 'abort',
    description: '取消上传请求',
    parameter: 'fileItem: FileItem'
  },
  { name: 'submit', description: '手动上传文件列表', parameter: 'fileItem: FileItem' }
]

export const slots: DocumentSlot[] = [
  { name: 'image', description: '自定义图片' },
  { name: 'file-name', description: '文件名称' },
  { name: 'file-icon', description: '文件图标' },
  { name: 'remove-icon', description: '删除图标' },
  { name: 'preview-icon', description: '预览图标' },
  { name: 'cancel-icon', description: '取消图标' },
  { name: 'start-icon', description: '开始图标' },
  { name: 'error-icon', description: '失败图标' },
  { name: 'success-icon', description: '成功图标' },
  { name: 'retry-icon', description: '重试图标' },
  { name: 'upload-button', description: '上传按钮' },
  { name: 'upload-item', description: '上传列表的项目' },
]

export const document: LayDocument = { attributes, events, methods, slots }

export default document
