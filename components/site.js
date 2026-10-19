/**
 * Everything on the page that is a fact rather than a layout decision.
 *
 * The numbers are the ones the evidence pack reports for the five applications
 * AgentForge generated on 30 August 2026. Nothing here is rounded up.
 */

/**
 * Prefix for everything under public/.
 *
 * GitHub Pages serves the site from a repository sub-path. `basePath` alone
 * does not cover it: next/image with `unoptimized` passes the src through
 * untouched, so the prefix has to be applied here.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const asset = (path) => `${BASE}${path}`

export const REPO = {
  owner: 'Ravindu200232',
  name: 'agentforge-web',
  product: 'RP-SE-009',
}

export const INSTALLER = 'AgentForgeSetup.exe'
export const WINDOWS_VERSION = '1.0.3'

// The installer is released beside the application it installs, not beside
// this website: the public agentforge-releases repository carries both, and
// the installer always reads that repository's latest manifest.
export const RELEASES_REPO = 'agentforge-releases'

export const DOWNLOAD_URL =
  `https://github.com/${REPO.owner}/${RELEASES_REPO}/releases/latest/download/${INSTALLER}`

export const MAC_DOWNLOAD_URL =
  'https://github.com/Ravindu200232/agentforge-releases/releases/download/v1.0.3-mac/AgentForge-1.0.3-mac-arm64.dmg'

export const RELEASES_URL = `https://github.com/${REPO.owner}/${RELEASES_REPO}/releases`

/** What the download weighs, so the page does not have to guess. */
export const INSTALLER_SIZE = '150 KB'

/** What the installer then downloads: the app, its own Python and every tool below. */
export const INSTALL_SIZE = 'about 1 GB'

export const SOURCE_URL = `https://github.com/${REPO.owner}/${REPO.product}`

export const NAV = [
  { href: '#how', label: 'How it works' },
  { href: '#screens', label: 'Screens' },
  { href: '#download', label: 'Download' },
  { href: '#guide', label: 'Guide' },
  { href: '#team', label: 'Team' },
]

export const PIPELINE = ['Idea', 'Plan', 'Build', 'Prove', 'Ship']

export const STATS = [
  { value: 5, suffix: '', label: 'applications generated end to end' },
  { value: 141, suffix: '', label: 'functional needs in the hotel specification' },
  { value: 169, suffix: '', label: 'hotel app unit tests passing in build verification' },
  { value: 98, suffix: '%', label: 'hotel app Lighthouse accessibility score' },
]

export const FRAGMENTS = [
  { n: '01', title: 'Requirements', note: 'its own tool' },
  { n: '02', title: 'Coding', note: 'its own tool' },
  { n: '03', title: 'Testing', note: 'its own tool' },
  { n: '04', title: 'Deployment', note: 'its own tool' },
]

export const PRODUCT_SHOTS = {
  interview: { src: 'interview-hotel.png', width: 1911, height: 1029 },
  specification: { src: 'specification-hotel.png', width: 1911, height: 1012 },
  wireframes: { src: 'wireframes-hotel.png', width: 1916, height: 1010 },
  preview: { src: 'preview-hotel.png', width: 1917, height: 1012 },
  testing: { src: 'testing-hotel.png', width: 1919, height: 980 },
  deployment: { src: 'deployment-hotel.png', width: 1914, height: 981 },
}

export const STEPS = [
  {
    tag: 'Interview',
    title: 'It interviews you first',
    body: 'Not a form. The agent asks what it still needs to know, and stops when the picture is complete.',
    detail: 'A focused conversation about the hotel app',
    shot: PRODUCT_SHOTS.interview,
  },
  {
    tag: 'Specify',
    title: 'The answers become a specification',
    body: 'Numbered, traceable requirements against ISO/IEC/IEEE 29148, with the data model and the diagrams.',
    detail: '141 functional needs · 20 quality goals · 11 diagrams',
    shot: PRODUCT_SHOTS.specification,
  },
  {
    tag: 'Wireframes',
    title: 'See the screens before code is written',
    body: 'Review the page layouts against the specification, then ask for changes before the build.',
    detail: '30 of 30 hotel wireframes ready',
    shot: PRODUCT_SHOTS.wireframes,
  },
  {
    tag: 'Build & preview',
    title: 'Then it builds and runs your app',
    body: 'The generated app opens in a live preview while the agent continues working on it.',
    detail: 'The hotel app running inside AgentForge',
    shot: PRODUCT_SHOTS.preview,
  },
  {
    tag: 'Prove',
    title: 'The build shows what passed and what is still missing',
    body: 'Unit and browser checks are recorded alongside unmet requirements, warnings and unavailable integrations.',
    detail: '169/169 unit · 40/40 browser · 8 gaps recorded',
    shot: PRODUCT_SHOTS.testing,
  },
  {
    tag: 'Ship',
    title: 'Review the deployment as it runs',
    body: 'The deployment plan shows its checks and steps before the app is published.',
    detail: 'AWS EC2 deployment starting',
    shot: PRODUCT_SHOTS.deployment,
  },
]

export const SCREENS = [
  { ...PRODUCT_SHOTS.interview, tab: 'Interview', caption: 'AgentForge asks a focused question about the hotel booking app.' },
  { ...PRODUCT_SHOTS.specification, tab: 'Specification', caption: 'The hotel specification, with its requirements, modules and diagrams.' },
  { ...PRODUCT_SHOTS.wireframes, tab: 'Wireframes', caption: 'The page layouts generated from the approved specification.' },
  { ...PRODUCT_SHOTS.preview, tab: 'Live preview', caption: 'The generated hotel website running inside AgentForge.' },
  { ...PRODUCT_SHOTS.testing, tab: 'Build verification', caption: 'Passed checks and recorded gaps, shown together.' },
  { ...PRODUCT_SHOTS.deployment, tab: 'Deployment', caption: 'The AWS EC2 deployment plan at the start of the run.' },
]

export const INCLUDED = [
  { name: 'AgentForge', note: 'the Studio, the agents and its own Python 3.12' },
  { name: 'Node.js', note: 'runs the apps it builds' },
  { name: 'Git and the GitHub CLI', note: 'version control, and the private repository a deployment pushes to' },
  { name: 'Supabase CLI', note: 'the sign-in for the Supabase stacks' },
  { name: 'MongoDB Atlas CLI', note: 'the browser sign-in for MongoDB' },
  { name: 'Vercel CLI, Netlify CLI', note: 'sign in to either and deploy there' },
  { name: 'AWS CLI, Azure CLI', note: 'sign in and deploy to either one' },
  { name: 'Playwright Chromium', note: 'the browser the tests drive' },
]

/**
 * What the installer does, in the order it does it.
 *
 * Written as steps rather than as a paragraph because the installer shows them
 * as steps: someone watching the window should recognise what they are seeing.
 */
export const FIRST_RUN = [
  {
    title: 'Choose where it goes',
    body: 'It installs for your Windows account only, into AppData\\Local\\Programs\\AgentForge, '
        + 'so no administrator rights are needed. A Desktop shortcut is one tick away.',
  },
  {
    title: 'Downloads the app and its tools',
    body: 'About 1 GB: AgentForge with its own Python, and every tool on the right. '
        + 'Each file is checked against the release before it is used.',
  },
  {
    title: 'Keeps going while you work',
    body: 'The window shows how far it is. Cancel at any time: what was downloaded '
        + 'is kept, and running the installer again carries on from there.',
  },
  {
    title: 'Adds the shortcuts',
    body: 'A Desktop and a Start-menu shortcut, and an entry in Installed apps for '
        + 'removing it later.',
  },
  {
    title: 'Open AgentForge',
    body: 'Sign in and start a project. Your projects live in Documents\\AgentForge '
        + 'and your settings in AppData\\Roaming\\AgentForge, so updates never touch them.',
  },
]

/** The stacks the Studio offers, and the accounts a build of each one needs. */
export const STACKS = [
  { name: 'Next.js + Supabase', what: 'One Next.js app on Postgres, with Supabase sign-in, storage and row-level security. The usual choice.', needs: 'Supabase' },
  { name: 'Vite + Supabase', what: 'A React single-page app talking to Postgres through Supabase.', needs: 'Supabase' },
  { name: 'Remix + Supabase', what: 'Remix on Postgres, rendered on the server.', needs: 'Supabase' },
  { name: 'Next.js + MongoDB + Supabase bucket', what: 'Next.js on MongoDB; uploaded files go in a Supabase Storage bucket.', needs: 'MongoDB and Supabase' },
  { name: 'Vite + MongoDB + Supabase bucket', what: 'A React app with its own Express and MongoDB API; files in a Supabase bucket.', needs: 'MongoDB and Supabase' },
  { name: 'Remix + MongoDB + Supabase bucket', what: 'Remix on MongoDB; files in a Supabase bucket.', needs: 'MongoDB and Supabase' },
  { name: 'MERN + Supabase bucket', what: 'A React client behind an API gateway, with MongoDB services behind it; files in a Supabase bucket.', needs: 'MongoDB and Supabase' },
  { name: 'Next.js + MongoDB', what: 'Next.js on MongoDB alone; uploaded files are kept in MongoDB.', needs: 'MongoDB' },
  { name: 'Vite + MongoDB', what: 'A React app with its own Express and MongoDB API.', needs: 'MongoDB' },
  { name: 'Remix + MongoDB', what: 'Remix on MongoDB alone.', needs: 'MongoDB' },
  { name: 'MERN', what: 'A React client, an API gateway and MongoDB services.', needs: 'MongoDB' },
]

/**
 * The step-by-step guide: from the download to a deployed application.
 *
 * Every screenshot is of AgentForge itself. Names and emails that the signed-in
 * command line tools showed on the machine they were taken on are replaced with
 * placeholders.
 */
export const GUIDE = [
  {
    id: 'guide-install',
    title: 'Download and install',
    lead: 'AgentForge installs from one small file, which then downloads the rest itself, for your Windows account only.',
    steps: [
      'Press Download and save AgentForgeSetup.exe (about 150 KB).',
      'Run it. If Windows SmartScreen says it protected your PC, choose More info, then Run anyway.',
      'Keep the suggested folder or press Change…, leave Add AgentForge to the Desktop ticked, and press Install.',
      'Setup downloads about 1 GB: AgentForge with its own Python, Node.js, Git, the GitHub, AWS, Azure, MongoDB Atlas, Vercel, Netlify and Supabase command line tools, and the browser the tests use. No administrator rights are needed.',
      'When it says AgentForge is installed, open it from the Desktop or the Start menu.',
    ],
    note: 'Stopped half way? Run the installer again: what it already downloaded is kept.',
    shots: [{ src: '/guide/installer.png', w: 566, h: 379, caption: 'The installer. Choose the folder and press Install.' }],
  },
  {
    id: 'guide-account',
    title: 'Create your account and sign in',
    lead: 'Create a free AgentForge account and receive $8 in cloud credit once. You can also use your own local Ollama without spending cloud credit.',
    steps: [
      'The first time it opens, choose Sign up: your name, a username, your email and a password of at least 8 characters.',
      'Your account is ready immediately with $8 in cloud credit. You can start using cloud models after signing up.',
      'Later, sign in with your email or username and your password.',
      'Settings shows your remaining cloud credit. Choose Local Ollama there if you want to run models on your own computer.',
    ],
    shots: [
      { src: '/guide/signup.png', w: 500, h: 562, caption: 'Create an account.' },
      { src: '/guide/signin.png', w: 500, h: 562, caption: 'Sign in with your account.' },
    ],
  },
  {
    id: 'guide-describe',
    title: 'Describe your app',
    lead: 'Start from the home screen. Say what the app is for, who uses it and what they do there, in your own words.',
    steps: [
      'Type the description in the box. You can attach a PDF, a document, a screenshot or an image, or describe it by voice.',
      'Pick the interview language: English, Sinhala, Tamil and about thirty more.',
      'The model menu lists the hosted AI models. The default is a good start. Reasoning effort trades speed for care: Low, High or Extra high.',
      'Choose the stack and connect its accounts, the next three steps, then press Start.',
    ],
    shots: [
      { src: '/guide/describe.jpg', w: 1485, h: 735, caption: 'Describe the app in the box on the home screen.' },
      { src: '/guide/model.jpg', w: 1485, h: 1035, caption: 'The model menu and the reasoning effort.' },
    ],
  },
  {
    id: 'guide-stack',
    title: 'Choose a stack',
    lead: 'The stack is the shape of the application: its framework and its database. It is chosen once, before the build, and kept for the life of the project.',
    steps: [
      'Open the stack menu beside the model. Auto stack lets AgentForge choose from your description.',
      'Pick a Supabase stack for Postgres with sign-in and file storage built in, or a MongoDB stack for a document database.',
      'The button beside the language then shows the account the stack needs: Supabase, MongoDB, or both.',
    ],
    table: true,
    shots: [
      { src: '/guide/stack.jpg', w: 1485, h: 1035, caption: 'The stack menu. Auto stack is the default.' },
      { src: '/guide/stack-mongodb.jpg', w: 1485, h: 1035, caption: 'Further down, the MongoDB stacks.' },
    ],
  },
  {
    id: 'guide-supabase',
    title: 'Connect Supabase',
    lead: 'The Supabase stacks keep their data, their sign-in and their uploaded files in Supabase. AgentForge creates a real Supabase project for each app, in your own account.',
    steps: [
      'Create a free account at supabase.com if you do not have one.',
      'Press the Supabase button in the box on the home screen, or open Settings and choose Supabase.',
      'Press Sign in with Supabase. A browser tab opens: sign in there and approve AgentForge.',
      'Come back to AgentForge. Supabase now shows as connected.',
    ],
    note: 'The MongoDB stacks with a Supabase bucket use this same connection, for uploaded files only.',
    shots: [{ src: '/guide/supabase.jpg', w: 1584, h: 1008, caption: 'Settings, Supabase. One sign-in, approved in the browser.' }],
  },
  {
    id: 'guide-mongodb',
    title: 'Connect MongoDB',
    lead: 'The MongoDB stacks run on a real database in MongoDB Atlas, never on one inside your computer, so the deployed app reaches the same data.',
    steps: [
      'Create a free MongoDB Atlas account at mongodb.com/atlas if you do not have one.',
      'Choose a MongoDB stack, then press the MongoDB button in the box on the home screen, or open Settings and choose MongoDB.',
      'Sign in to Atlas in the browser tab that opens. AgentForge brings the Atlas command line tool with it. Then press Use this account.',
      'Press Choose a cluster to pick the cluster your apps use. Each app gets its own database on it. With no cluster yet, AgentForge makes one in your account when the first build needs it.',
      'Already have a database? Paste its mongodb+srv:// connection string instead, press Save, then Test connection.',
    ],
    note: 'A connection string that points at localhost is refused: a deployed app could not reach a database on your computer.',
    shots: [{ src: '/guide/mongodb.jpg', w: 1584, h: 1008, caption: 'Settings, MongoDB. Sign in to Atlas, or paste a connection string.' }],
  },
  {
    id: 'guide-build',
    title: 'From the interview to a tested app',
    lead: 'Press Start. Every stage shows its work, and you approve the plan, the specification and the wireframes before anything is built.',
    steps: [
      'Interview: the agent asks what it still needs to know, one plain question at a time.',
      'Plan and specification: approve the plan, then read the specification it writes, with its requirements and diagrams.',
      'Wireframes and prototype: see every page before any code is written, and ask for changes.',
      'Build: the application is written into your project and opened in a live preview.',
      'Testing: a real browser walks every journey the specification promised. What fails is repaired, or reported as it is.',
    ],
    shots: [
      { src: '/screenshots/specification-hotel.png', w: 1911, h: 1012, caption: 'The hotel specification, written from the interview.' },
      { src: '/screenshots/testing-hotel.png', w: 1919, h: 980, caption: 'Build verification, with passed checks and recorded gaps.' },
    ],
  },
  {
    id: 'guide-deploy',
    title: 'Deploy it',
    lead: 'Deploy to your own accounts. The app is published from a private GitHub repository in your name, and AgentForge calls it live only after it has checked the address itself.',
    steps: [
      'In Settings, connect GitHub. AgentForge finds the GitHub command line tool; sign in, or press Use this account.',
      'Connect the place that will host it: Vercel or Netlify (sign in, or paste an access token), AWS (the AWS command line tool or IAM Identity Center, with no access keys stored) or Azure (service principal credentials).',
      'Open the Deploy panel in your project, pick the target, read the plan and approve it.',
      'AgentForge pushes the code, deploys it and checks the public address. You get the live link, or the reason it is not live yet.',
    ],
    shots: [
      { src: '/guide/github.jpg', w: 1584, h: 1008, caption: 'Settings, GitHub.' },
      { src: '/guide/vercel.jpg', w: 1584, h: 1008, caption: 'Settings, Vercel. Netlify, AWS and Azure have a page each.' },
      { src: '/screenshots/deployment-hotel.png', w: 1914, h: 981, caption: 'The AWS EC2 deployment plan as the run starts.' },
    ],
  },
  {
    id: 'guide-files',
    title: 'Where your work lives',
    lead: 'Your work is kept apart from the app, so updating or removing AgentForge never touches it.',
    steps: [
      'Projects: Documents\\AgentForge. Settings and sign-ins: AppData\\Roaming\\AgentForge.',
      'To update, download and run the newest installer from this page. Your projects and settings stay where they are.',
      'To remove AgentForge, use Settings, Apps, Installed apps in Windows. Your projects and settings are kept.',
    ],
    shots: [],
  },
]

export const TEAM = [
  {
    slug: 'ravindu-subasingha',
    name: 'Ravindu Subasingha',
  },
  {
    slug: 'nimthera-gunasena',
    name: 'Nimthera Gunasena',
  },
  {
    slug: 'hamna-rahmathullah-hakeem',
    name: 'Hamna Rahmathullah Hakeem',
  },
  {
    slug: 'malith-bandara',
    name: 'Malith Bandara',
  },
]
