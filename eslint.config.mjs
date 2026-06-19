import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default tseslint.config(
  {
    // Replaces "ignorePatterns"
    ignores: ['projects/**/*'],
  },
  {
    // Replaces the TypeScript override
    files: ['**/*.ts'],
    extends: [
      // Replaces "plugin:@angular-eslint/recommended"
      ...angular.configs.tsRecommended,
    ],
    // Replaces "plugin:@angular-eslint/template/process-inline-templates"
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    rules: {
      '@angular-eslint/component-class-suffix': 'off',
    },
  },
  {
    // Replaces the HTML template override
    files: ['**/*.html'],
    extends: [
      // Replaces "plugin:@angular-eslint/template/recommended"
      ...angular.configs.templateRecommended,
    ],
    rules: {},
  }
);