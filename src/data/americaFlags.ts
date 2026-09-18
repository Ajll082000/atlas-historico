// ISO 3166-1 alpha-2 code -> representative color taken from that country's flag.
export const AMERICA_FLAG_COLORS: Record<string, string> = {
  // North America
  US: '#3C3B6E',
  CA: '#D80621',
  MX: '#006847',
  GL: '#C8102E',
  BM: '#CC142B',

  // Central America
  GT: '#4997D0',
  BZ: '#003F87',
  HN: '#0073CF',
  SV: '#0047AB',
  NI: '#0057B8',
  CR: '#DA291C',
  PA: '#0033A0',

  // Caribbean
  CU: '#002A8F',
  JM: '#FED100',
  HT: '#00209F',
  DO: '#002D62',
  PR: '#ED1C24',
  BS: '#00ABC9',
  TT: '#CE1126',
  BB: '#00267F',
  GD: '#CE1126',
  LC: '#0090CB',
  VC: '#FCD116',
  AG: '#CE1126',
  DM: '#006B3F',
  KN: '#007A33',
  AI: '#00247D',
  VG: '#00247D',
  VI: '#0038A8',
  KY: '#00247D',
  TC: '#00247D',
  MS: '#00247D',
  AW: '#4189DD',
  CW: '#002B7F',
  SX: '#003DA5',
  BQ: '#21468B',
  GP: '#0055A4',
  MQ: '#0055A4',
  BL: '#0055A4',
  MF: '#0055A4',

  // South America
  CO: '#FCD116',
  VE: '#00247D',
  GY: '#009E49',
  SR: '#C8102E',
  GF: '#0055A4',
  EC: '#FFDD00',
  PE: '#D91023',
  BR: '#009739',
  BO: '#D52B1E',
  PY: '#0038A8',
  CL: '#0039A6',
  AR: '#74ACDF',
  UY: '#0038A8',
  FK: '#00247D',
};

export function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  const value = parseInt(full, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function flagUrl(iso2: string, width: 24 | 40 | 80 = 40): string {
  return `https://flagcdn.com/w${width}/${iso2.toLowerCase()}.png`;
}
