// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@vueform/vueform/dist/vueform.css';

import {enhanceAppWithTabs} from 'vitepress-plugin-tabs/client'
import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app}) {
        enhanceAppWithTabs(app);
        app.use(Vueform, vueformConfig)
    }
} satisfies Theme
