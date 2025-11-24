// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@vueform/vueform/dist/vueform.css';

import {enhanceAppWithTabs} from 'vitepress-plugin-tabs/client'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    async enhanceApp({app}) {
        enhanceAppWithTabs(app);
        if (!import.meta.env.SSR) {
            const Vueform = await import('@vueform/vueform')
            const vueformConfig = await import('./vueform.config')
            app.use(Vueform.default, vueformConfig.default)
        }
    }
} satisfies Theme
