module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		camelcase: 'off',
		'new-cap': 'off',
		semi: ['error', 'never'],
		'react/prop-types': 'off',
		'object-curly-spacing': ['error', 'always'],
	},
}
