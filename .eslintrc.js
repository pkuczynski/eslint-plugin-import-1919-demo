module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true
    },
    plugins: [
        '@typescript-eslint',
        'import'
    ],
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': 'off',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'callback-return': ['error', ['callback', 'cb', 'done']],
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'capitalized-comments': 'off',
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': 'off',
        'id-length': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'init-declarations': 'off',
        'line-comment-position': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
        'max-lines': ['error', 330],
        'max-lines-per-function': 'off',
        'max-params': ['error', { max: 5 }],
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error', { capIsNew: false }],
        'newline-after-var': ['error', 'always'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
        'no-await-in-loop': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-extra-parens': 'off',
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-prototype-builtins': 'error',
        'no-shadow': 'off',
        'no-sync': 'off',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-undefined': 'off',
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-use-before-define': 'off',
        'no-warning-comments': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, consistent: true },
            ObjectPattern: { multiline: true, consistent: true },
            ImportDeclaration: { multiline: true },
            ExportDeclaration: { multiline: true, consistent: true, minProperties: 2 }
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'prefer-named-capture-group': 'off',
        'require-atomic-updates': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'require-jsdoc': 'off',
        'require-unicode-regexp': 'off',
        'semi': ['error', 'never'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'strict': 'off',

        // discussed example:
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/*.test.ts'
            ]
        }]
    },
    overrides: [
        {
            // Temporarily turn off some rules for JS files, as we will work on the one by one
            files: ['*.js', '**/*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
}
