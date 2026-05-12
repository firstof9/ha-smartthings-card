export const STRINGS: Record<string, Record<string, string>> = {
  en: {
    name: 'Smartthings Card',
    description: 'A custom card for Smartthings devices',
    entity_not_found: 'Entity not found',
  },
};

export function translate(path: string, lang = 'en'): string {
  const lookup = (table: Record<string, string> | undefined): string | undefined => {
    return path.split('.').reduce<any>((o, k) => (o && typeof o === 'object' ? o[k] : undefined), table);
  };
  return lookup(STRINGS[lang]) ?? lookup(STRINGS.en) ?? path;
}
