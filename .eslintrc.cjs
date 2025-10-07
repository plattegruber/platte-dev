module.exports = {
        root: true,
        extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
        overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
        parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest'
        },
        env: {
                browser: true,
                es2021: true,
                node: true
        }
};
