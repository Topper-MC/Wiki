import type { App } from 'vue';

export default async (app: App) => {
  if (!import.meta.env.SSR) {
    const Vueform = (await import('@vueform/vueform')).default
    const vueformConfig = (await import('../vueform.config')).default
    app.use(Vueform, vueformConfig)
  }
}