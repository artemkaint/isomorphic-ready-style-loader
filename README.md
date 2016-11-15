# isomorphic-ready-style-loader

Analogue for fake-style-loader (https://github.com/dferber90/fake-style-loader/blob/master/index.js) with full 
Webpack_isomorphic_tools_plugin.css_modules_loader_parser format support
 
Loader returns object with css class mapping (such as css-loader/locals 
(https://github.com/webpack/css-loader/blob/master/locals.js)) and property *_style* describes full style content 
in string style