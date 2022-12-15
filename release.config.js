module.exports = {

  plugins: [
    [ '@semantic-release/commit-analyzer', { preset: 'conventionalcommits' } ],
    [ '@semantic-release/release-notes-generator', { preset: 'conventionalcommits' } ],
    [ '@semantic-release/changelog', { changelogTitle: '# Changelog' } ],
    [ '@semantic-release/npm' ],

    // [ '@semantic-release/exec', {
    //   'publishCmd': 'ls -l dist && ls -l .semantic-release && tar -ztvf .semantic-release/*.tgz',
    // } ],

    [ '@semantic-release/git',
      {
        message: 'Release <%= nextRelease.version %>\n\n[skip ci]\n\n<%= nextRelease.notes %>',
      },
    ],
    // [
    //   "semantic-release-github-pullrequest", {
    //     "assets": [ "CHANGELOG.md", "package.json" ],
    //     "baseRef": "main"
    //   }
    // ],

    // './plugin.js',
    [{
      generateNotes: function (pluginConfig, context) {
        console.log('generateNotes', Object.keys(context));
        // console.log(context.nextRelease);
        // console.log(context.branch);
        // console.log('analyzeCommits:', args);
      },
      success: function (pluginConfig, context) {
        // console.log('Success:', Object.keys(pluginConfig), '@@', Object.keys(context));
      },
      fail: function (pluginConfig, context) {
        console.log('Fail:', Object.keys(context));
        console.log(context);
      },
    }],

    // [ '@semantic-release/github',
    //   {
    //     addReleases: 'bottom',
    //   },
    // ],
  ],
};
