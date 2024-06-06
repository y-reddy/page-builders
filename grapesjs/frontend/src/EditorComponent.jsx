/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import {default as gjsWebPagePresetPlugin} from 'grapesjs-preset-webpage';
import {default as gjsBasicBlocksPlugin} from 'grapesjs-blocks-basic';
import {default as gjsCountdownPlugin} from 'grapesjs-component-countdown';
import {default as gjsExportPlugin} from 'grapesjs-plugin-export';
import {default as gjsStyleBgPlugin} from 'grapesjs-style-bg';
import {default as gjsTypedPlugin} from 'grapesjs-typed';
import gjsTabsPlugin from 'grapesjs-tabs';
import gjsCustomCodePlugin from 'grapesjs-custom-code';


import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css';


// 'gjs-blocks-basic',
// 'grapesjs-plugin-forms',
// 'grapesjs-component-countdown',
// 'grapesjs-plugin-export',
// 'grapesjs-tabs',
// 'grapesjs-custom-code',
// 'grapesjs-touch',
// 'grapesjs-parser-postcss',
// 'grapesjs-tooltip',
// 'grapesjs-tui-image-editor',
// 'grapesjs-typed',
// 'grapesjs-style-bg',

const EditorComponent = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '100vh',
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        options: {
          remote: {
            contentTypeJson: true,
            urlStore: 'http://localhost:3000/api/content/save',
            urlLoad: 'http://localhost:3000/api/content/load',
            // params: { id: 'myCustomContent' },
            fetchOptions: currentOpts => {
                console.log(JSON.stringify(currentOpts));
                return currentOpts;
            },
            onStore: (data, editor) => {
              const pagesHtml = editor.Pages.getAll().map(page => {
                const component = page.getMainComponent();
                return {
                  html: editor.getHtml({ component }),
                  js: editor.getJs({ component }),
                  css: editor.getCss({ component })
                }
              });
              return { id: 123, data, pagesHtml };
            },
            // If on load, you're returning the same JSON from above...
            onLoad: result => result.data,
          }
        }
      },
      plugins: [gjsWebPagePresetPlugin, gjsBasicBlocksPlugin, gjsCountdownPlugin, gjsExportPlugin, gjsTabsPlugin, gjsCustomCodePlugin, gjsStyleBgPlugin, gjsTypedPlugin],
      pluginsOpts: {
        [gjsWebPagePresetPlugin]: { 
          modalImportTitle: 'Import Template',
          modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
          modalImportContent: function(editor) {
            return editor.getHtml() + '<style>'+editor.getCss()+'</style>'
          }
        },
        [gjsBasicBlocksPlugin]: { flexGrid: true },
        [gjsTabsPlugin]: {
          tabsBlock: { category: 'Extra' }
        },
        [gjsTypedPlugin]: {
          block: {
            category: 'Extra',
            content: {
              type: 'typed',
              'type-speed': 40,
              strings: [
                'Text row one',
                'Text row two',
                'Text row three',
              ],
            }
          }
        },
      }
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div id="gjs">
      <div style={{margin: '100px 100px 25px', padding: '25px', font: 'caption'}}> This is a sample text</div>
    </div>
  );
};

export default EditorComponent;
