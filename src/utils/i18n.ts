import { ref, onMounted } from 'vue';

// Dynamically import all i18n.json files from the content/docs directory
const modules = import.meta.glob('../content/docs/**/i18n.json', { eager: true });

const dictionaries: Record<string, Record<string, any>> = {};

function flattenKeys(obj: Record<string, any>, prefix = ''): Record<string, string> {
  let result: Record<string, string> = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenKeys(value, newKey));
    } else {
      result[newKey] = String(value);
    }
  }
  return result;
}

for (const path in modules) {
  // Path examples:
  // ../content/docs/i18n.json -> split -> ['..', 'content', 'docs', 'i18n.json']
  // ../content/docs/vi/i18n.json -> split -> ['..', 'content', 'docs', 'vi', 'i18n.json']
  
  const parts = path.split('/');
  const fileName = parts.pop(); // remove i18n.json
  const parent = parts.pop();   // 'docs' or 'vi'

  let locale = 'en'; // default if parent is 'docs'
  if (parent !== 'docs') {
      locale = parent || 'en';
  }

  // @ts-ignore
  const content = modules[path].default || modules[path];
  
  const flat = flattenKeys(content);
  
  // Hoist 'ui' keys
  if (content.ui) {
      Object.assign(flat, flattenKeys(content.ui));
  }
  
  dictionaries[locale] = flat;
}

export function useClientI18n() {
  const locale = ref('en');

  onMounted(() => {
    // Check if URL path contains /{locale}/ where locale is one of our keys
    const foundLocale = Object.keys(dictionaries).find(l => window.location.pathname.includes(`/${l}/`));
    if (foundLocale) {
      locale.value = foundLocale;
    } else {
      locale.value = 'en';
    }
  });

  function t(key: string): string {
    const dict = dictionaries[locale.value];
    if (dict && dict[key]) {
      return dict[key];
    }
    // Fallback to English if not found
    if (dictionaries['en'] && dictionaries['en'][key]) {
        return dictionaries['en'][key];
    }
    return key;
  }

  return { t, locale };
}
