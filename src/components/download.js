import React, { Component } from 'react';
import Pdf from '../../content/Semerjian-Roberto-CSCL-2019.pdf';

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank">Download Pdf</a>
      </div>
    );
  }
}

export default Download;

//ERROR LOG 1/13:
/*
✖ 4 problems (1 error, 3 warnings)
  0 errors and 3 warnings potentially fixable with the `--fix` option.

 @ ./src/pages/index.js 17:0-43 74:26-34
 @ ./.cache/sync-requires.js
 @ ./.cache/app.js
 @ multi event-source-polyfill (webpack)-hot-middleware/client.js?path=/__webpack_hmr&reload=true&overlay=false ./.cache/app

ERROR in ./src/components/download.js
Module not found: Error: Can't resolve '../../content/Semerjian-Roberto-CSCL-2019.pdf' in '/Users/princesssteffykins/Downloads/PersonalSite2/src/components'
 @ ./src/components/download.js 11:0-64 33:12-15
 @ ./src/pages/index.js
 @ ./.cache/sync-requires.js
 @ ./.cache/app.js
 @ multi event-source-polyfill (webpack)-hot-middleware/client.js?path=/__webpack_hmr&reload=true&overlay=false ./.cache/app
info ℹ ｢wdm｣: Failed to compile.


*/
