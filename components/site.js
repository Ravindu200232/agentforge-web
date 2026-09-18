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

export const INSTALLER = 'AgentForge-Setup-2.0.1.exe'

// The installer is released beside the application it installs, not beside
// this website: the two are versioned together, and a release that carries
// `agentforge-app.zip` is the one the installer will fetch from.
export const DOWNLOAD_URL =
  `https://github.com/${REPO.owner}/${REPO.product}/releases/latest/download/${INSTALLER}`

export const RELEASES_URL = `https://github.com/${REPO.owner}/${REPO.product}/releases`

/** What the download weighs, so the page does not have to guess. */
export const INSTALLER_SIZE = '79 MB'

export const SOURCE_URL = `https://github.com/${REPO.owner}/${REPO.product}`

export const NAV = [
  { href: '#how', label: 'How it works' },
  { href: '#screens', label: 'Screens' },
  { href: '#download', label: 'Download' },
  { href: '#team', label: 'Team' },
]

export const PIPELINE = ['Idea', 'Plan', 'Build', 'Prove', 'Ship']

export const STATS = [
  { value: 5, suffix: '', label: 'applications generated end to end' },
  { value: 61, suffix: '', label: 'traceable requirements in one specification' },
  { value: 104, suffix: '', label: 'unit tests passing after repair' },
  { value: 96, suffix: '%', label: 'Lighthouse best-practices on a generated app' },
]

export const FRAGMENTS = [
  { n: '01', title: 'Requirements', note: 'its own tool' },
  { n: '02', title: 'Coding', note: 'its own tool' },
  { n: '03', title: 'Testing', note: 'its own tool' },
  { n: '04', title: 'Deployment', note: 'its own tool' },
]

export const STEPS = [
  {
    tag: 'Describe',
    title: 'It interviews you first',
    body: 'Not a form. The agent asks what it still needs to know, and stops when the picture is complete.',
    detail: '27 answers over 9 questions',
    shot: '01-studio-home',
  },
  {
    tag: 'Specify',
    title: 'The answers become a specification',
    body: 'Numbered, traceable requirements against ISO/IEC/IEEE 29148, with the data model and the diagrams.',
    detail: '61 requirements · 22 modules · 11 tables',
    shot: '03-srs',
  },
  {
    tag: 'Build',
    title: 'Then it writes the application',
    body: 'Routes, components, data access and the seed, generated to disk while you watch.',
    detail: '56 files for one coffee-shop platform',
    shot: '04-code',
  },
  {
    tag: 'Preview',
    title: 'And serves it back to you, running',
    body: 'A live preview on your own machine, with the terminal, the activity feed and the agent one click away.',
    detail: 'localhost preview, desktop and mobile',
    shot: '02-preview-generated-app',
  },
  {
    tag: 'Prove',
    title: 'A real browser walks the app',
    body: 'Every planned journey is driven for real. What fails is analysed from the evidence and repaired.',
    detail: '78% on round one, 100% after repair',
    shot: '05-testing-overview',
  },
  {
    tag: 'Ship',
    title: 'And it goes to the cloud',
    body: 'Infrastructure, workflows and secrets are generated, then the release runs and is checked.',
    detail: 'Vercel, AWS EC2 or AWS ECS',
    shot: '14-deploy-accounts-connected',
  },
]

export const SCREENS = [
  { id: '01-studio-home', tab: 'Studio', caption: 'Describe the app you want, or start from a template.' },
  { id: '03-srs', tab: 'Specification', caption: 'A numbered SRS against ISO/IEC/IEEE 29148, generated from the interview.' },
  { id: '04-code', tab: 'Code', caption: 'Every file the builder wrote, readable while it writes them.' },
  { id: '02-preview-generated-app', tab: 'Preview', caption: 'The generated application running on localhost, in the same window.' },
  { id: '05-testing-overview', tab: 'Testing', caption: 'Round-one results, the repaired suite, and what the browser probe saw.' },
  { id: '14-deploy-accounts-connected', tab: 'Deploy', caption: 'Pick the cloud target, connect the accounts, and release.' },
]

export const INCLUDED = [
  { name: 'Ollama', note: 'serves the models, on port 11434' },
  { name: 'MongoDB', note: 'a local database, on port 27017' },
  { name: 'Node.js 20+', note: 'runs the Studio' },
  { name: 'Python 3.11+', note: 'runs the agents' },
  { name: 'Git', note: 'version control for what it builds' },
  { name: 'GitHub CLI', note: 'signs in, and makes the repository a deployment pushes to' },
  { name: 'Vercel CLI, Netlify CLI', note: 'sign in to those from the Deploy screen' },
  { name: 'All packages', note: 'pip and npm, in a private environment' },
]

/**
 * What the first launch actually does, in the order it does it.
 *
 * Written as steps rather than as a paragraph because the installer shows them
 * as steps: someone watching the window should recognise what they are seeing.
 */
export const FIRST_RUN = [
  {
    title: 'Checks the machine',
    body: 'Every tool above is probed first. Anything already installed is left '
        + 'exactly as it is — nothing is replaced, downgraded or reconfigured.',
  },
  {
    title: 'Installs what is missing',
    body: 'Through winget where Windows offers it, and the vendor’s own installer '
        + 'where it does not. Each download reports its size and progress.',
  },
  {
    title: 'Fetches AgentForge',
    body: 'The application is downloaded from its latest release rather than '
        + 'carried inside the installer, so the installer stays small and a fix '
        + 'to the app does not mean downloading it again.',
  },
  {
    title: 'Installs the packages',
    body: 'Python packages into a private virtual environment, Studio packages '
        + 'with npm. Nothing is installed system-wide that does not have to be.',
  },
  {
    title: 'Starts it',
    body: 'The database and the model server come up, the Studio opens, and the '
        + 'window closes itself. The next launch skips everything already done.',
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
