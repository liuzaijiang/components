/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import { type ProLocale } from '../types'

/* eslint-disable camelcase */
const zhCN: ProLocale = {
  type: 'zh-CN',

  table: {
    layout: {
      title: '布局设置',
      sm: '紧凑',
      md: '适中',
      lg: '宽松',
      all: '全选',
      reset: '恢复默认',
      indexable: '序号',
      expandable: '展开',
      selectable: '勾选',
      startPin: '固定在列首',
      endPin: '固定在列尾',
      noPin: '不固定',
      startPinTitle: '固定在左侧',
      endPinTitle: '固定在右侧',
      noPinTitle: '不固定',
    },
  },
  tree: {
    expandAll: '展开全部',
    collapseAll: '收起全部',
  },
}

export default zhCN