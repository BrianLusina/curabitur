// Refer to this url for config
// https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#repositoryurl
/* eslint-disable */

module.exports = {
    branch: "master",
    repositoryUrl: "https://github.com/BrianLusina/chat-sockets.git",
    tagFormat: "v${version}",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/github", {
            assets: [
                {
                    path: "client/build/**",
                    name: "client-build",
                    label: "Client application build"
                },
                {
                    path: "server/build/**",
                    name: "server-build",
                    label: "Server Application build"
                },
            ]
        }
        ],
    ]
};