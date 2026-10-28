// Alle inhoud is afkomstig van buddyrun-noord.nl (stand oktober 2026).
// Geen datum, locatie, prijzen of afstanden verzinnen: ontbrekende info = "Nieuwe datum volgt".

export const CONTACT_EMAIL = 'buddyrunnoord@gmail.com';

// Web3Forms (Pro). De access key is bedoeld om publiek in de site te staan;
// beperk in het Web3Forms-dashboard de toegestane domeinen tot deze site.
export const WEB3FORMS_KEY = 'abe177cc-ec69-4104-8154-61ba72517fb5';
export const KVK = '96651768';
export const PHOTO_ALBUM_2025 =
  'https://photos.google.com/share/AF1QipM2NYTTAYycgUYIXHarHxZcX46AxRh6CvyGb6Z-Eyf0sGDIHCNZJaOxtZHqZdwqdw?key=UUVRRVgzNmZyMW9Ha3phRkE5dTVRbGZJbFNPU0ln';

export const PHOTO_ALBUM_2026 = 'https://byliekecuperus.pixieset.com/buddyrunnoord2026/';
export const PHOTO_CREDIT_2026 = 'Lieke Cuperus';

export type Photo = {
  file: string; // bestandsnaam in src/assets/photos zonder extensie
  focus: string; // CSS-klasse met focuspunt
  alt: string;
  year: '2025' | '2026';
};
export type GalleryItem = Photo & {
  cls: string; // positie in de mozaïek
  par?: boolean; // langzamere laag (parallax) op desktop
  cap?: string;
};

// Sfeercollage: mix van 2025 en 2026
export const gallery: GalleryItem[] = [
  { file: 'dsc02415', focus: 'f-2415', year: '2025', cls: 'g1', alt: 'Een deelnemer rent met wijd gespreide armen vooraan, met zijn team vlak achter zich.' },
  { file: 'b26-222', focus: 'f-222', year: '2026', cls: 'g2 d1', par: true, alt: 'Lachende deelnemers met hun medaille na de finish.' },
  { file: 'dsc02359', focus: 'f-2359', year: '2025', cls: 'g3', cap: 'Elkaar helpen.', alt: 'Bovenop het klimnet geeft een buddy een deelnemer een stevige hand.' },
  { file: 'b26-267', focus: 'f-267', year: '2026', cls: 'g4 d1', alt: 'Een stralende deelnemer in het blauwe Buddy Run-shirt viert feest.' },
  { file: 'dsc01956', focus: 'f-1956', year: '2025', cls: 'g5', cap: 'Samen proberen.', alt: 'Een team rent samen door de houten poort van het parcours.' },
  { file: 'b26-276', focus: 'f-276', year: '2026', cls: 'g6 d1', alt: 'Twee deelnemers met medaille dansen en juichen bij het feest na de run.' },
  { file: 'b26-245', focus: 'f-245', year: '2026', cls: 'g7 d2', par: true, alt: 'Juichend en met de duim omhoog lopen deelnemers en buddy’s naar de finish.' },
  { file: 'dsc02426', focus: 'f-2426', year: '2025', cls: 'g8', alt: 'Lachende deelnemers en buddy’s rennen samen over de weg.' },
  { file: 'dsc02620', focus: 'f-2620', year: '2025', cls: 'g9 d2', cap: 'Samen vieren.', alt: 'Deelnemers en buddy’s vormen samen een polonaise op het grasveld.' },
];

// Herbeleef: eerste item = grote foto van de editie
export const edition2025: Photo[] = [
  { file: 'dsc02530', focus: 'f-2530', year: '2025', alt: 'Groepsfoto van deelnemers, buddy’s en vrijwilligers die juichend hun armen in de lucht steken.' },
  { file: 'dsc02541', focus: 'f-2541', year: '2025', alt: 'Een stralende deelnemer met medaille steekt haar duim op aan de picknicktafel.' },
  { file: 'dsc02233', focus: 'f-2233', year: '2025', alt: 'Twee deelnemers met een gouden medaille juichen samen na de finish.' },
  { file: 'dsc02251', focus: 'f-2251', year: '2025', alt: 'Twee deelnemers geven elkaar een high five bij de finishboog.' },
  { file: 'dsc02015', focus: 'f-2015', year: '2025', alt: 'Een team helpt elkaar bij een houten klimobstakel in het bos.' },
  { file: 'dsc02477', focus: 'f-2477', year: '2025', alt: 'Een groep rent door de houten poort met schilden het parcours op.' },
  { file: 'dsc02421', focus: 'f-2421', year: '2025', alt: 'Een deelnemer met gele pet springt juichend naar de finish, aangemoedigd door haar team.' },
  { file: 'dsc02496', focus: 'f-2496', year: '2025', alt: 'Deelnemers en buddy’s rennen lachend naar de finish, langs juichende toeschouwers.' },
  { file: 'dsc02700', focus: 'f-2700', year: '2025', alt: 'Een deelnemer schiet een bal richting het opblaasbare voetbaldoel.' },
  { file: 'dsc02065', focus: 'f-2065', year: '2025', alt: 'Deelnemers rennen juichend onder de rode finishboog door.' },
  { file: 'dsc02604', focus: 'f-2604', year: '2025', alt: 'Een vrolijke polonaise trekt langs de finishboog.' },
  { file: 'dsc02613', focus: 'f-2613', year: '2025', alt: 'Juichende teamgenoten vieren samen de finish.' },
];
export const edition2026: Photo[] = [
  { file: 'b26-26', focus: 'f-26', year: '2026', alt: 'Met de duimen omhoog en armen wijd: twee deelnemers genieten op het bospad.' },
  { file: 'b26-91', focus: 'f-91', year: '2026', alt: 'Een deelnemer klimt lachend door het touwnet tussen de bomen.' },
  { file: 'b26-21', focus: 'f-21', year: '2026', alt: 'Met een grote glimlach baant een deelnemer zich een weg door het net.' },
  { file: 'b26-40', focus: 'f-40', year: '2026', alt: 'Een deelnemer maakt stoer het peace-teken voor het klimnet.' },
  { file: 'b26-103', focus: 'f-103', year: '2026', alt: 'Samen over het schuine touwnet: deelnemers helpen elkaar omhoog.' },
  { file: 'b26-58', focus: 'f-58', year: '2026', alt: 'Arm in arm lopen deelnemers en buddy’s op de finishboog af.' },
  { file: 'b26-182', focus: 'f-182', year: '2026', alt: 'Trots toont een deelnemer zijn medaille voor de finishboog.' },
  { file: 'b26-322', focus: 'f-322', year: '2026', alt: 'Twee vrienden met medaille poseren lachend na de finish.' },
  { file: 'b26-279', focus: 'f-279', year: '2026', alt: 'Een warme knuffel op de dansvloer na afloop.' },
  { file: 'b26-277', focus: 'f-277', year: '2026', alt: 'Met de armen in de lucht juichen deelnemers bij de feesttent.' },
  { file: 'b26-262', focus: 'f-262', year: '2026', alt: 'Een deelnemer zwaait met beide armen tijdens het feest.' },
  { file: 'b26-16', focus: 'f-16', year: '2026', alt: 'Een team juicht samen tussen de obstakels in het bos.' },
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
    subject: 'Buddy Run Noord – Houd me op de hoogte',
    company: false,
  },
  vrijwilliger: {
    title: 'Word vrijwilliger',
    intro: 'Wat leuk dat je wilt helpen bij dit evenement! Laat je gegevens achter, dan nemen we contact met je op.',
    submit: 'Aanmelden als vrijwilliger',
    subject: 'Buddy Run Noord – Nieuwe vrijwilliger',
    company: false,
  },
  sponsor: {
    title: 'Word sponsor',
    intro: 'Wil je met je bedrijf dit unieke evenement steunen? Laat je gegevens achter, dan nemen we contact met je op.',
    submit: 'Verstuur aanvraag',
    subject: 'Buddy Run Noord – Sponsoraanvraag',
    company: true,
  },
} as const;
