module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['@react-native-community', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'prettier/prettier': ['warn'],
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
}
