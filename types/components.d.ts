/*
 * @Author       : jiangronghua 613870505@qq.com
 * @Date         : 2024-05-30 12:44:22
 * @LastEditTime : 2024-06-07 10:58:01
 * @LastEditors  : jiangronghua
 * @Description  :
 */
declare module 'vue' {
  export interface GlobalComponents {
    Icon: (typeof import('@/components/Icon'))['Icon']
    DictTag: (typeof import('@/components/DictTag'))['DictTag']
  }
}

export {}
