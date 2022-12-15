module.exports = {

  plugins: [
    [ '@semantic-release/commit-analyzer', { preset: 'conventionalcommits' } ],
    [ '@semantic-release/release-notes-generator', { preset: 'conventionalcommits' } ],
    [ '@semantic-release/changelog', { changelogTitle: '# Changelog' } ],
    [ '@semantic-release/npm', {
      npmPublish: false,
    } ],

    // [ '@semantic-release/exec', {
    //   'publishCmd': 'ls -l dist && ls -l .semantic-release && tar -ztvf .semantic-release/*.tgz',
    // } ],

    [ '@semantic-release/git',
      {
        message: 'Release <%= nextRelease.version %>\n\n[skip ci]\n\n<%= nextRelease.notes %>',
      },
    ],
    "semantic-release-github-pullrequest",

    './plugin.js',
    [{
      analyzeCommits: function (...args) {
        // console.log('analyzeCommits:', args);
      },
      success: function (a, b) {
        console.log('Success:', Object.keys(a), '@@', Object.keys(b));
      },
      fail: function (a, b) {
        console.log('Fail:', Object.keys(a), '@@', Object.keys(b));
      },
    }],

    // [ '@semantic-release/github',
    //   {
    //     addReleases: 'bottom',
    //   },
    // ],
  ],
};
