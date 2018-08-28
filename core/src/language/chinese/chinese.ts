import { ChineseStandard, isChineseStandard } from './chinese-standard'
import { ChineseExpanded, isChineseExpanded } from './chinese-expanded'

export type Chinese = ChineseStandard | ChineseExpanded

export const isChinese = (subject: any) => isChineseStandard(subject) || isChineseExpanded(subject)
