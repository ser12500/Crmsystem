// ESLint config file - types are not needed
// @ts-expect-error - eslint-plugin-nuxt and eslint-config-prettier don't have types
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import nuxt from 'eslint-plugin-nuxt'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(
    {
        ignores: [
            '.nuxt/**',
            '.output/**',
            'dist/**',
            'node_modules/**',
            '*.min.js',
            'yarn.lock',
            'package-lock.json',
            'run/**',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.js'],
        plugins: {
            'unused-imports': unusedImports,
        },
        languageOptions: {
            globals: {
                process: 'readonly',
                console: 'readonly',
                module: 'readonly',
                require: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-console': 'off',
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2022,
                sourceType: 'module',
            },
            globals: {
                // Vue Composition API
                ref: 'readonly',
                computed: 'readonly',
                reactive: 'readonly',
                watch: 'readonly',
                onMounted: 'readonly',
                onUnmounted: 'readonly',
                defineProps: 'readonly',
                defineEmits: 'readonly',
                // Nuxt composables
                useRouter: 'readonly',
                useRoute: 'readonly',
                useSeoMeta: 'readonly',
                navigateTo: 'readonly',
                // VeeValidate
                useForm: 'readonly',
                useField: 'readonly',
                // Appwrite
                DB: 'readonly',
                account: 'readonly',
                storage: 'readonly',
                // Pinia stores
                useAuthStore: 'readonly',
                useIsLoadingStore: 'readonly',
                // Browser globals
                console: 'readonly',
                process: 'readonly',
                Event: 'readonly',
                File: 'readonly',
                DragEvent: 'readonly',
                HTMLInputElement: 'readonly',
            },
        },
        plugins: {
            vue: vue,
            nuxt: nuxt,
            'unused-imports': unusedImports,
        },
        rules: {
            ...vue.configs['vue3-recommended'].rules,
            ...nuxt.configs.recommended.rules,
            'vue/multi-word-component-names': 'off',
            'vue/attributes-order': 'warn',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
    {
        files: ['tailwind.config.js', '*.config.js'],
        languageOptions: {
            globals: {
                module: 'readonly',
                require: 'readonly',
            },
        },
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    prettier,
)

