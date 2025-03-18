import antfu from '@antfu/eslint-config';

export default antfu({
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 2,
      }],
    },
  },
  javascript: {
    overrides: {
      'no-restricted-syntax': [
        'error',
        'TSExportAssignment',
      ],
    },
  },
  typescript: {
    overrides: {
      'ts/ban-ts-comment': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/restrict-plus-operands': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/restrict-template-expressions': 'off',
      'ts/no-invalid-this': 'off',
      'ts/no-unsafe-call': 'off',
    },
  },
  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    semi: true,
    overrides: {
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
}, {
  ignores: ['public/'],
});
