// Maps a component section heading (the <h2> text) to its Figma frame.
// Keys are matched case-insensitively against the <h2> text.
//
// A value can be:
//   - a node ID string:  '9982-47091'
//   - a full URL string: 'https://embed.figma.com/...'  (used as is)
//   - an object:         { node, title, ...paramOverrides }
//                        e.g. { node: '9982-47091', scaling: 'contain' }
//
// To get a node ID: in Figma, right-click the frame > Copy link, then take
// the node-id= value from the URL.

const FIGMA_FILE_KEY = 'ZaviovD9F8uKL0jCkd5j0J';
const FIGMA_FILE_NAME = 'Packets-Design-System';

// Query parameters shared by every embed. Override per entry with the
// object form, or edit here to change them everywhere.
const FIGMA_DEFAULT_PARAMS = {
  'page-id': '12427:14788',
  'viewport': '21,378,0.17',
  'scaling': 'scale-down',
  'content-scaling': 'fixed',
  'embed-host': 'share'
};

const FIGMA_NODES = {
    'Display': '9982-47091',
    'Headings': '9982-48434',
    'Title Section': '9982-37046',
    'Body': '9982-51537',
    'Link': '9300:37990',
    'Quote': '9987:52272',
    'Code': '9987:53065',
    'Caption': '9989:53865',
    'Footer': '9982:51120',
    'Icon': '9212:3907',
    'Divider': '9186:1777',
    'Scroll Bar': '14303:17417',
    'Button': '9223:8426',
    'Icon Button': '9289:29939',
    'Button Group': '9764:10054',
    'Input Checkbox': '9372:59027',
    'Input Radio Button': '9323:55253',
    'Input Switch': '9363:57521',
    'Input Text': '9237:11738',
    'Input Password': '9492:78089',
    'Input Email': '9510:90325',
    'Input Search': '9460:71505',
    'Input Number': '9510:86933',
    'Input Date': '12441:19381',
    'Input Textarea': '9389:60071',
    'Input Select': '9321:52390',
    'Input File': '9791:12508',
    'Input Date Picker': '9797:10983',
    'Form Section': '10150:11054',
    'Input Array': '12308:1742',
    'Input Group': '10278:12581',
    'Input Row': '9764:16140',
    'Input Label': '9764:13833',
    'Breadcrumbs': '9150:413',
    'Tree': '9212:12121',
    'Table of Contents': '9152:971',
    'Tabs': '9156:362',
    'Pagination': '12287:11711',
    'Navigation Card': '14234:23408',
    'Side Navigation Bar': '14211:70647',
    'Top Navigation Bar': '14211:70921',
    'Menu Item': '14209:70373',
    'Avatar': '9901:17234',
    'Chip': '9901:16243',
    'Chip Group': '9912:22433',
    'Badge': '9210:3115',
    'Datum': '9982:39274',
    'Accordion': '9175:1743',
    'Tooltip': '9806:9852',
    'Confirmation Modal': '12446:63670',
    'Alert': '9934:33958',
    'Page': '14238:26634',
    'Authorization Pages': '14238:27232',
};

function buildFigmaEmbedUrl(node, overrides = {}) {
  const params = new URLSearchParams({
    'node-id': node,
    ...FIGMA_DEFAULT_PARAMS,
    ...overrides
  });

  return `https://embed.figma.com/proto/${FIGMA_FILE_KEY}/${FIGMA_FILE_NAME}?${params}`;
}

function resolveFigmaEntry(value) {
  if (typeof value === 'string') {
    return value.startsWith('http')
      ? { url: value }
      : { url: buildFigmaEmbedUrl(value) };
  }

  const { node, title, url, ...overrides } = value;

  return {
    url: url ?? buildFigmaEmbedUrl(node, overrides),
    title
  };
}

// Same shape figma-embeds.js already expects: heading -> { url, title }.
// Empty entries are skipped, so unfinished ones can stay as ''.
const FIGMA_EMBEDS = Object.fromEntries(
  Object.entries(FIGMA_NODES)
    .filter(([, value]) => value && (typeof value === 'string' || value.node || value.url))
    .map(([name, value]) => [name, resolveFigmaEntry(value)])
);