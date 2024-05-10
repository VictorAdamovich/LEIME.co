module.exports = {
  printWidth: 90,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxBracketSameLine: false,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSpacing: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^components$',
    '^constants/(.*)$',
    '^constants$',
    '^types/(.*)$',
    '^types$',
    '^modules/(.*)$',
    '^modules$',
    '^helpers/(.*)$',
    '^helpers$',
    '^validators/(.*)$',
    '^validators$',
    '^hooks/(.*)$',
    '^hooks$',
    '^services/(.*)$',
    '^services$',
    '^context/(.*)$',
    '^context$',
    '',
    '^[./]',
  ],
};
