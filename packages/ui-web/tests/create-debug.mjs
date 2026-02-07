import { createTestHTML } from './test-utils.js';
import fs from 'fs';

const html = createTestHTML(
  "light",
  `
  <h1>Exact Playwright Test HTML</h1>
  
  <h2>Primary Variant (from test)</h2>
  <es-button variant="primary">Test Button</es-button>
  
  <h2>All Variants</h2>
  <div style="display: flex; gap: 8px; margin-bottom: 16px;">
    <es-button variant="primary">Primary</es-button>
    <es-button variant="secondary">Secondary</es-button>
    <es-button variant="branded">Branded</es-button>
    <es-button variant="tertiary">Tertiary</es-button>
    <es-button variant="destructive">Destructive</es-button>
  </div>

  <h2>Debug Info</h2>
  <div id="debug" style="background: #f0f0f0; padding: 8px; margin-top: 16px;"></div>
  
  <script>
    setTimeout(() => {
      const button = document.querySelector('es-button');
      const innerButton = button ? button.querySelector('button, a') : null;
      const debugInfo = {
        'Web Component Defined': customElements.get('es-button') !== undefined,
        'Button Element': !!button,
        'Inner Button': !!innerButton,
        'Inner Button Classes': innerButton ? innerButton.className : 'N/A',
        'Outer HTML': button ? button.outerHTML.substring(0, 200) : 'N/A',
        'Inner HTML': button ? button.innerHTML.substring(0, 200) : 'N/A'
      };
      document.getElementById('debug').innerHTML = '<pre>' + JSON.stringify(debugInfo, null, 2) + '</pre>';
    }, 500);
  </script>
  `
);

fs.writeFileSync('debug-exact.html', html);
console.log('Created debug-exact.html');
