module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    globals: {
        NodeJS: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': 'warn',
        'consistent-return': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-empty': 'off',
        'no-empty-function': 'warn',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
            },
        ],
    },
};
