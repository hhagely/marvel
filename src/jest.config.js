// module.exports = {
// 	moduleDirectories: ['node_modules', __dirname],
// 	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js')
// };

module.exports = {
	displayName: 'client',
	testPathIgnorePatterns: ['/node_modules/'],
	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
	modulePaths: ['<rootDir>/src']
};
