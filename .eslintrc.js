module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'lines-between-class-members': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      // variables false: allows use of variables defined in upper scope
      // functions false: allows top-down code layout
      { functions: false, variables: false },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Select'],
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['*enzyme*', '!deprecated/enzyme'],
            message:
              'Enzyme libraries are deprecated in favor of React Testing Library',
          },
          {
            group: ['*moment*', '!deprecated/moment'],
            message: 'Moment is deprecated in favor of date-fns',
          },
          {
            group: ['*recompose*', '!deprecated/recompose'],
            message: 'Recompose is deprecated in favor of react hooks',
          },
        ],
      },
    ],
    'lodash/import-scope': [2, 'method'],
  },
};
