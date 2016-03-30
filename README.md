# Webpack + Sass

This is an attempt to debug the wonderful that is `sass-loader` failing to parse sass in another project.  It obviously works, here, with subfolders and relative paths, but in another webpack instance that I have trimmed down to almost bare-metal it parses `@imports` as a syntax error.  

Based almost entirely on source / tutorial from https://bitbucket.org/humaanco/demo-webpack-react-app
