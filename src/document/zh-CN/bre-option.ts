import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: '选项值（如不填，会从内容中获取）',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '选项标签（如不填，会从内容中获取）',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用该选项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tag-props',
    description: '展示的标签属性',
    type: 'TagProps',
    value: '—',
    default: '—'
  },
  {
    name: 'extra',
    description: '额外数据。2.18.0 版本废弃，可使用对象形式的 value 扩展数据	',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'index',
    description: '用于手动指定选项的 index',
    type: 'number',
    value: '—',
    default: '—'
  },
]

export const document: LayDocument = { attributes }

export default document
