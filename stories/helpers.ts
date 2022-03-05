import type { Meta } from '@storybook/vue'

/**
 * StorybookのMetadata生成ヘルパー。
 *
 * Metadataの型補完と型チェックができるようになる。
 * Storyファイルで`export default`する際は、必ずこちらを使うこと。
 * Storybookのdefault exportについは以下を参照。
 *
 * https://storybook.js.org/docs/react/api/csf#default-export
 *
 * @param meta Storybook(Vue)のMetadata
 * @returns
 */
export const defineMeta = <T extends Meta>(meta: T): T => meta
