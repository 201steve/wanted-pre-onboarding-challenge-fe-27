import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect', // React 버전을 자동 감지
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off', // JSX 사용 시 React가 스코프에 없어도 오류가 발생하지 않도록 설정
        },
    },
]
