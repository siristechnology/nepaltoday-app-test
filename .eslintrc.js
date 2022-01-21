module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'prettier/prettier': ['warn'],
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
}
