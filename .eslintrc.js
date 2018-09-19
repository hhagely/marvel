module.exports = {
	overrides: [
		{
			files: ['**/__tests__/**'],
			settings: {
				'import/resolver': {
					jest: {
						jestConfigFile: require.resolve('./jest.config.js')
					}
				}
			}
		}
	]
};
