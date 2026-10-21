// Alle inhoud is afkomstig van buddyrun-noord.nl (stand oktober 2026).
// Geen datum, locatie, prijzen of afstanden verzinnen: ontbrekende info = "Nieuwe datum volgt".

export const CONTACT_EMAIL = 'buddyrunnoord@gmail.com';
export const KVK = '96651768';
export const PHOTO_ALBUM_2025 =
  'https://photos.google.com/share/AF1QipM2NYTTAYycgUYIXHarHxZcX46AxRh6CvyGb6Z-Eyf0sGDIHCNZJaOxtZHqZdwqdw?key=UUVRRVgzNmZyMW9Ha3phRkE5dTVRbGZJbFNPU0ln';

export type GalleryItem = {
  file: string; // bestandsnaam in src/assets/photos zonder extensie
  focus: string; // CSS-klasse met focuspunt
  cls: string; // positie in de mozaïek
  par?: boolean; // langzamere laag (parallax) op desktop
  cap?: string;
  alt: string;
};

export const gallery: GalleryItem[] = [
  { file: 'dsc02415', focus: 'f-2415', cls: 'g1', alt: 'Een deelnemer rent met wijd gespreide armen vooraan, met zijn team vlak achter zich.' },
  { file: 'dsc02541', focus: 'f-2541', cls: 'g2 d1', par: true, alt: 'Een stralende deelnemer met medaille steekt haar duim op aan de picknicktafel.' },
  { file: 'dsc02359', focus: 'f-2359', cls: 'g3', cap: 'Elkaar helpen.', alt: 'Bovenop het klimnet geeft een buddy een deelnemer een stevige hand.' },
  { file: 'dsc02700', focus: 'f-2700', cls: 'g4 d1', alt: 'Een deelnemer schiet een bal richting het opblaasbare voetbaldoel.' },
  { file: 'dsc01956', focus: 'f-1956', cls: 'g5', cap: 'Samen proberen.', alt: 'Een team rent samen door de houten poort van het parcours.' },
  { file: 'dsc02251', focus: 'f-2251', cls: 'g6 d1', alt: 'Twee deelnemers geven elkaar een high five bij de finishboog.' },
  { file: 'dsc02426', focus: 'f-2426', cls: 'g7 d2', par: true, alt: 'Lachende deelnemers en buddy’s rennen samen over de weg.' },
  { file: 'dsc02065', focus: 'f-2065', cls: 'g8', alt: 'Deelnemers rennen juichend onder de rode finishboog door.' },
  { file: 'dsc02421', focus: 'f-2421', cls: 'g9 d2', par: true, alt: 'Een deelnemer met gele pet springt juichend naar de finish, aangemoedigd door haar team.' },
  { file: 'dsc02620', focus: 'f-2620', cls: 'g10', cap: 'Samen vieren.', alt: 'Deelnemers en buddy’s vormen samen een polonaise op het grasveld.' },
  { file: 'dsc02604', focus: 'f-2604', cls: 'g11 d1', alt: 'Een vrolijke polonaise trekt langs de finishboog.' },
];

export type Sponsor = { name: string; href: string; logo: string; size: '' | 'sq' | 'md' };

// Let op: op de huidige site linkt het Rabobank-logo naar ykeritsema.nl; hier gecorrigeerd naar rabobank.nl.
export const sponsors: Sponsor[] = [
  { name: 'Stichting STAR', href: 'https://stichtingstar.nl/', logo: 'logo-star', size: 'sq' },
  { name: 'TodayOnline', href: 'https://todayonline.nl/', logo: 'logo-todayonline', size: '' },
  { name: 'Belanesia Teamwear', href: 'https://belanesiateamwear.nl/', logo: 'logo-belanesia', size: 'sq' },
  { name: 'StuRents', href: 'https://sturents.nl/', logo: 'logo-sturents', size: '' },
  { name: 'Lambeck Harms Notarissen', href: 'https://www.lambeckharms.nl/', logo: 'logo-lambeckharms', size: 'md' },
  { name: 'Yke Ritsema Fotografie', href: 'https://www.ykeritsema.nl/', logo: 'logo-ykeritsema', size: 'md' },
  { name: 'Foppe Fonds', href: 'https://www.foppefonds.nl/', logo: 'logo-foppefonds', size: '' },
  { name: 'Rabobank', href: 'https://www.rabobank.nl/', logo: 'logo-rabobank', size: 'md' },
  { name: 'Bedrijfsfitness Nederland', href: 'https://www.bedrijfsfitnessnederland.nl/', logo: 'logo-bfnl', size: 'md' },
  { name: 'Team 050', href: 'https://www.team050.nl/', logo: 'logo-team050', size: 'md' },
  { name: 'JM Promotions', href: 'https://www.jmpromotions.nl/', logo: 'logo-jmpromotions', size: '' },
];

export const panels = {
  deelnemer: {
    title: 'Houd me op de hoogte',
    intro: 'De inschrijving voor de volgende editie is nog niet open. Laat je gegevens achter, dan hoor je het zodra de nieuwe datum bekend is.',
    submit: 'Houd me op de hoogte',
    company: false,
    later: 'koppelen aan een e-maillijst of externe inschrijftool, inclusief privacyverklaring.',
  },
  vrijwilliger: {
    title: 'Word vrijwilliger',
    intro: 'Wat leuk dat je wilt helpen bij dit evenement! Laat je gegevens achter, dan nemen we contact met je op.',
    submit: 'Aanmelden als vrijwilliger',
    company: false,
    later: 'koppelen aan e-mail naar de organisatie of een vrijwilligerstool.',
  },
  sponsor: {
    title: 'Word sponsor',
    intro: 'Wil je met je bedrijf dit unieke evenement steunen? Laat je gegevens achter, dan nemen we contact met je op.',
    submit: 'Verstuur aanvraag',
    company: true,
    later: 'koppelen aan e-mail naar de organisatie (formulierbackend).',
  },
} as const;
