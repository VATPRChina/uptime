import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "VATPRC Status Page",
  links: [
    { link: 'https://www.vatprc.net', label: 'Homepage' },
  ],
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'homepage',
      name: 'Homepage',
      method: 'GET',
      target: 'https://www.vatprc.net/en/',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'uniapi',
      name: 'UniAPI',
      method: 'GET',
      target: 'https://uniapi.vatprc.net',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'atis',
      name: 'ATIS',
      method: 'GET',
      target: 'https://atis.vatprc.net/datis.php?metar=ZSPD+050000Z+13003MPS+080V180+CAVOK+30%2F25+Q1007+NOSIG&info=A&dep=03&arr=03&apptype=ILS',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'metar',
      name: 'METAR',
      method: 'GET',
      target: 'https://metar.vatprc.net/ZGSD',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'atcapi',
      name: 'ATC Center API',
      method: 'GET',
      target: 'https://atcapi.vatprc.net/v1/public/schedules',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'atc-ui',
      name: 'ATC Center UI',
      method: 'GET',
      target: 'https://atc.vatprc.net',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'forum',
      name: 'Forum',
      method: 'GET',
      target: 'https://community.vatprc.net',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'moodle',
      name: 'Moodle',
      method: 'GET',
      target: 'https://moodle.vatprc.net',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
    {
      id: 'vacdm',
      name: 'vA-CDM',
      method: 'GET',
      target: 'https://vacdm.vatprc.net',
      headers: { 'User-Agent': 'Uptimeflare (https://status.vatprc.net)' },
    },
  ],
}

const maintenances: MaintenanceConfig[] = [
]

export { pageConfig, workerConfig, maintenances }
