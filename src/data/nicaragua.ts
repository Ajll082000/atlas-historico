// Contenido de la página de Nicaragua.
// Cada dato factual incluye su año de referencia y su fuente aparece en `sources`.

export const quickFacts: { label: string; value: string; year?: string }[] = [
  { label: 'Capital', value: 'Managua' },
  { label: 'Población', value: '7 097 329 habitantes', year: 'est. 2026' },
  { label: 'Superficie', value: '130 375 km²' },
  { label: 'Moneda', value: 'Córdoba (NIO)' },
  {
    label: 'Idiomas',
    value: 'Español (oficial). En la Costa Caribe también son lenguas de uso oficial el miskito, mayangna, rama, criollo (creole) y garífuna',
  },
  { label: 'Forma de gobierno', value: 'República presidencialista, unitaria (ver sección "Gobierno y sociedad")' },
];

export const regions = [
  {
    name: 'El Pacífico',
    description:
      'La franja más poblada e hispanohablante del país. Una cadena de volcanes jóvenes y activos corre entre el golfo de Fonseca y el lago de Nicaragua, y sus cenizas han dejado suelos muy fértiles. Aquí están las ciudades coloniales de León y Granada, Managua (la capital) y los dos grandes lagos: Cocibolca (o lago de Nicaragua, ~160 km de largo) y Xolotlán (o lago de Managua, ~56 km de largo).',
  },
  {
    name: 'Centro y Norte',
    description:
      'Una franja montañosa con cordilleras de 900 a 1800 metros, clima más fresco y bosques de pino y roble. Es la región cafetalera por excelencia, con ciudades como Matagalpa y Estelí. Aquí se encuentra el Mogotón (2085 m), el punto más alto del país.',
  },
  {
    name: 'La Costa Caribe',
    description:
      'Ocupa más de la mitad del territorio nacional: selva tropical, ríos y una costa históricamente distinta al resto del país, con población multiétnica y multilingüe. Desde 1987 se organiza en dos regiones autónomas (RACCN y RACCS), con Bilwi (Puerto Cabezas) y Bluefields como sus principales centros urbanos.',
  },
];

export const volcanoes: { name: string; elevation: string; lastEruption: string }[] = [
  { name: 'San Cristóbal', elevation: '1745 m', lastEruption: 'actividad registrada en 2024' },
  { name: 'Concepción', elevation: '1700 m', lastEruption: 'actividad registrada en 2024' },
  { name: 'Maderas', elevation: '1394 m', lastEruption: 'sin erupciones históricas registradas (época holocena)' },
  { name: 'Momotombo', elevation: '1297 m', lastEruption: '2015' },
  { name: 'Cosigüina', elevation: '872 m', lastEruption: '1859' },
  { name: 'Cerro Negro', elevation: '728 m', lastEruption: '1999' },
  { name: 'Masaya', elevation: '635 m', lastEruption: 'actividad continua (lago de lava activo)' },
];

export const geoHighlights = [
  { label: 'Lagos', value: 'Cocibolca / lago de Nicaragua y Xolotlán / lago de Managua' },
  {
    label: 'Volcanes activos',
    value: 'Masaya, San Cristóbal, Concepción y Momotombo, entre otros',
  },
  { label: 'Isla volcánica', value: 'Ometepe, formada por los volcanes Concepción y Maderas dentro del lago Cocibolca' },
  { label: 'Punto más alto', value: 'Mogotón, 2085 m, en la frontera con Honduras' },
  { label: 'Islas del Caribe', value: 'Corn Islands (Islas del Maíz)' },
];

export const governmentStructure = [
  'Poder Ejecutivo: presidencia y vicepresidencia.',
  'Poder Legislativo: Asamblea Nacional, con 92 escaños.',
  'Poder Judicial: Corte Suprema de Justicia.',
  'Poder Electoral: Consejo Supremo Electoral (CSE), a cargo de organizar los procesos electorales.',
];

export const governmentTimeline = [
  {
    year: '2007',
    text: 'Daniel Ortega, del FSLN, regresa a la presidencia tras ganar las elecciones de 2006 y permanece en el cargo de forma continua desde entonces.',
  },
  {
    year: '2014',
    text: 'Una reforma constitucional elimina el límite a la reelección presidencial consecutiva.',
  },
  {
    year: '2021',
    text: 'Varios precandidatos y figuras de oposición son detenidos antes de las elecciones generales; el Consejo Supremo Electoral cancela la personería jurídica de partidos opositores. Estos hechos fueron documentados por organismos como la CIDH y la ONU.',
  },
  {
    year: '2023',
    text: 'Nicaragua se retira formalmente de la Organización de Estados Americanos (OEA).',
  },
  {
    year: '2025',
    text: 'Una reforma constitucional (enero de 2025) establece una copresidencia compartida por Daniel Ortega y Rosario Murillo, y centraliza competencias del Estado en el Ejecutivo.',
  },
  {
    year: '2026',
    text: 'En julio, Ortega anuncia durante un acto por el 47.º aniversario de la revolución que el país no volverá a celebrar elecciones. Organizaciones como Freedom House, la ONU y el Departamento de Estado de EE. UU. condenaron el anuncio.',
  },
];

export const gdpFacts: { label: string; value: string }[] = [
  { label: 'PIB nominal', value: 'US$ 24 227 millones' },
  { label: 'PIB nominal per cápita', value: 'US$ 3 559' },
  { label: 'PIB (paridad de poder adquisitivo)', value: 'US$ 69 515 millones' },
  { label: 'PIB PPA per cápita', value: 'US$ 10 211' },
];

export const economySectors = [
  { label: 'Servicios', value: '≈ 60 % del PIB', year: '2017' },
  { label: 'Industria', value: '≈ 24 % del PIB', year: '2017' },
  { label: 'Agricultura', value: '≈ 15 % del PIB', year: '2017' },
];

export const economyFacts = [
  'Desde 2020, el oro es el principal producto de exportación, por delante del café, la carne y el azúcar.',
  'Otras exportaciones relevantes: maní, camarón y langosta, tabaco y puros, textiles y arneses eléctricos para automóviles.',
  'Las remesas —sobre todo desde Costa Rica, Estados Unidos y la Unión Europea— equivalen a más de una cuarta parte del PIB en los últimos años.',
  'El turismo es la segunda mayor fuente de divisas del país.',
  '24,9 % de la población vivía bajo la línea de pobreza nacional según el dato disponible más reciente (2016); es un dato que puede haber cambiado y conviene verificar con fuentes actualizadas.',
];

export const dailyLifeNotes = [
  'Managua y las ciudades del Pacífico concentran más servicios, comercio formal y empleo asalariado que las zonas rurales.',
  'En el campo y en la Costa Caribe, el transporte depende más de caminos de tierra, ríos y, en algunas zonas, avionetas, por la falta de carreteras pavimentadas hacia RACCN y RACCS.',
  'La dieta cotidiana varía por región: maíz, frijoles y arroz en el Pacífico y el centro; pescado, mariscos y coco en la Costa Caribe.',
  'La educación pública es gratuita, pero el acceso —sobre todo a secundaria— sigue siendo más limitado en zonas rurales y en la Costa Caribe que en las ciudades del Pacífico.',
  'La migración laboral, especialmente hacia Costa Rica y Estados Unidos, es una realidad cotidiana para muchas familias, de ahí el peso de las remesas en la economía.',
];

export const peoples = [
  {
    name: 'Chorotega, nahoa y otros pueblos del Pacífico y centro',
    text: 'Descienden de los pueblos mesoamericanos que habitaban la región antes de la conquista española. Hoy se organizan en comunidades y pueblos indígenas reconocidos (como Sutiaba, en León, o Matagalpa) que mantienen cofradías, fiestas patronales y formas de organización comunal propias, integradas en la vida del Pacífico y el centro del país.',
  },
  {
    name: 'Miskitos',
    text: 'El pueblo indígena más numeroso de la Costa Caribe. Su lengua, el miskito, es una de las de uso oficial reconocidas en las regiones autónomas.',
  },
  {
    name: 'Mayangna (sumu) y rama',
    text: 'Pueblos indígenas del Caribe con lenguas y territorios propios; el rama es hoy uno de los pueblos indígenas con menos hablantes de su lengua originaria en el país, lo que ha impulsado programas de revitalización lingüística.',
  },
  {
    name: 'Garífuna y creole (kriol)',
    text: 'Comunidades afrodescendientes de la Costa Caribe. El garífuna combina raíces africanas, caribeñas e indígenas; el creole (kriol), hablado sobre todo en Bluefields y Corn Island, refleja la historia de la costa como parte del mundo caribeño angloparlante.',
  },
];

export const symbolsOfficial = [
  {
    name: 'La bandera',
    text: 'Tres franjas horizontales, azul-blanco-azul: el azul representa los dos océanos que bañan el país y el blanco, la paz. Adoptada en 1908 y formalizada por ley en 1971, retoma los colores de la bandera de la República Federal de Centroamérica (1823).',
  },
  {
    name: 'El escudo',
    text: 'En el centro de la bandera: un triángulo equilátero con cinco volcanes entre dos océanos (por los cinco países que formaron la Federación Centroamericana), un arcoíris, un gorro frigio con rayos de sol naciente, y el texto "República de Nicaragua – América Central".',
  },
  {
    name: 'El himno: "Salve a ti, Nicaragua"',
    text: 'Letra de Salomón Ibarra Mayorga, aprobada en 1939 y oficializada en 1971. Es uno de los pocos himnos nacionales de la región que no exalta la guerra, sino la paz y el trabajo: nació de un concurso público tras el fin de una guerra civil, con la condición explícita de que la letra "solo podía hablar de paz".',
  },
  {
    name: 'Símbolos naturales (declarados en 1971)',
    text: 'El árbol nacional es el madroño; el ave nacional, el guardabarranco; la flor nacional, el sacuanjoche (una especie de plumeria).',
  },
];

export const foodItems = [
  { name: 'Gallo pinto', text: 'Arroz y frijoles fritos juntos; el plato más cotidiano de la mesa nicaragüense, típico del Pacífico y el centro.' },
  { name: 'Nacatamal', text: 'Masa de maíz rellena de carne de cerdo, arroz, papa y otros ingredientes, envuelta en hoja de plátano; tradición del fin de semana.' },
  { name: 'Vigorón', text: 'Yuca cocida, chicharrón y una ensalada de repollo encurtido (curtido), servido sobre hoja de plátano; originario de Granada.' },
  { name: 'Indio viejo', text: 'Guiso a base de maíz molido y carne deshebrada, con tomate, cebolla y hierbabuena.' },
  { name: 'Quesillo', text: 'Queso fresco envuelto en tortilla de maíz con crema y cebolla encurtida; asociado a los pueblos de La Paz Centro y Nagarote.' },
  {
    name: 'Rondón (run down)',
    text: 'Guiso caribeño a base de coco, con pescado o mariscos, plátano y tubérculos; representa la cocina afrodescendiente de la Costa Caribe, muy distinta de la del Pacífico.',
  },
];

export const celebrations = [
  {
    name: 'La Gritería y La Purísima',
    dates: '7 y 8 de diciembre',
    text: 'Novena en honor a la Inmaculada Concepción de María. La noche del 7 de diciembre, la gente sale a las calles a "gritar" preguntas y respuestas tradicionales frente a altares familiares, a cambio de dulces y regalos. Se originó en 1857 en la iglesia de San Francisco, en León.',
  },
  {
    name: 'Palo de Mayo',
    dates: 'todo mayo, con eventos cada fin de semana',
    text: 'Festival afrocaribeño de música y baile, centrado en Bluefields y la Costa Caribe Sur, con raíces que se remontan al siglo XIX. Tras la Revolución Sandinista, en 1980 el festival se promovió a nivel nacional como celebración de la cultura indígena y afrodescendiente.',
  },
  {
    name: 'Fiestas patrias',
    dates: '15 de septiembre',
    text: 'Aniversario de la independencia centroamericana de España (1821), celebrado en todo el país con desfiles escolares.',
  },
];

export const artCards = [
  {
    title: 'Rubén Darío (1867–1916)',
    text: 'Nacido en Metapa (hoy Ciudad Darío) y fallecido en León. Iniciador del modernismo, el primer gran movimiento literario nacido en lengua española, con la publicación de Azul... en 1888. Se le considera un parteaguas: "hay poesía en español antes y después de Rubén Darío".',
  },
  {
    title: 'El Güegüense',
    text: 'Obra teatral satírica anónima del periodo colonial, escrita en una mezcla de español y náhuat, en la que un personaje pícaro burla a la autoridad colonial con dobles sentidos. Declarada Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO en 2005.',
  },
  {
    title: 'Ernesto Cardenal (1925–2020)',
    text: 'Sacerdote, poeta y escultor. Fundó en 1965 la comunidad de Solentiname, en el lago Cocibolca, donde impulsó junto a campesinos un estilo de pintura primitivista hoy reconocido internacionalmente. Fue ministro de Cultura entre 1979 y 1987.',
  },
  {
    title: 'Ruinas de León Viejo',
    text: 'Restos de la primera ciudad de León, fundada en 1524 y abandonada tras un terremoto en el siglo XVII. Patrimonio de la Humanidad por la UNESCO desde el año 2000.',
  },
  {
    title: 'Catedral de León',
    text: 'La catedral más grande de Centroamérica, construida entre los siglos XVIII y XIX. Declarada Patrimonio de la Humanidad por la UNESCO en 2011.',
  },
];

export const historicalKeys = [
  {
    period: 'Pueblos precolombinos',
    text:
      'Antes de la llegada española, el Pacífico estaba habitado por pueblos de raíz mesoamericana (nicaraos, chorotegas) organizados en cacicazgos agrícolas, mientras que el Caribe y el centro eran territorio de pueblos de tradición misumalpa y chibcha, con formas de vida distintas. Esta diferencia temprana explica, en parte, por qué el Pacífico y el Caribe siguieron caminos históricos separados durante siglos.',
  },
  {
    period: 'Conquista y colonia (1522–1821)',
    text:
      'La conquista española, iniciada en 1522, fundó Granada y León en 1524 y causó un colapso demográfico indígena drástico por enfermedades, guerra y esclavización. El Caribe, en cambio, nunca fue controlado a fondo por España y desarrolló vínculos propios con Inglaterra —una de las raíces de su identidad diferenciada hasta hoy.',
  },
  {
    period: 'Independencia y rivalidad León–Granada (1821–1857)',
    text:
      'Nicaragua se independiza de España en 1821, pasa brevemente por el Imperio mexicano y la República Federal de Centroamérica, y queda marcada por décadas de conflicto entre los liberales de León y los conservadores de Granada, un antagonismo que definió buena parte de su política del siglo XIX.',
  },
  {
    period: 'La guerra contra William Walker (1855–1857)',
    text:
      'El aventurero estadounidense William Walker, invitado por los liberales, se proclamó presidente en 1856. Una coalición centroamericana lo derrotó en 1857. El episodio dejó una memoria fundacional de resistencia frente a la intervención extranjera.',
  },
  {
    period: 'Ocupación estadounidense y Sandino (1912–1933)',
    text:
      'Estados Unidos mantuvo tropas en Nicaragua entre 1912 y 1933. Augusto César Sandino encabezó la única resistencia armada que no se rindió, luchando hasta la retirada de los marines. Su figura es el origen del nombre "sandinismo".',
  },
  {
    period: 'La dinastía Somoza (1936–1979)',
    text:
      'Anastasio Somoza García tomó el control de la Guardia Nacional y del poder en 1936; él y sus hijos gobernaron el país durante más de cuatro décadas con apoyo de Estados Unidos, hasta la insurrección popular de 1979.',
  },
  {
    period: 'Revolución sandinista y guerra de la Contra (1979–1990)',
    text:
      'El Frente Sandinista de Liberación Nacional derrocó a Somoza en 1979 e impulsó reformas como la alfabetización y la reforma agraria, en medio de una alineación con Cuba y la URSS que llevó a Estados Unidos a financiar a la "Contra". El conflicto dejó unos 30 000 muertos antes de terminar con las elecciones de 1990.',
  },
  {
    period: 'De la transición democrática a la concentración de poder (1990–2026)',
    text:
      'Tras perder las elecciones de 1990, el FSLN regresó al poder con Daniel Ortega en 2007. Desde entonces, una serie de reformas constitucionales y decisiones documentadas por organismos internacionales —detalladas en la sección "Gobierno y sociedad"— han ido concentrando el poder en el Ejecutivo, hasta el anuncio en 2026 de que no habrá más elecciones.',
  },
];

export const sources: { label: string; url: string; note?: string }[] = [
  { label: 'Nicaragua — Wikipedia (datos demográficos y económicos generales)', url: 'https://en.wikipedia.org/wiki/Nicaragua' },
  { label: 'Geography of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/Geography_of_Nicaragua' },
  { label: 'List of volcanoes in Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/List_of_volcanoes_in_Nicaragua' },
  { label: 'Flag of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/Flag_of_Nicaragua' },
  { label: 'Coat of arms of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/Coat_of_arms_of_Nicaragua' },
  { label: 'Salve a ti, Nicaragua (himno nacional) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Salve_a_ti,_Nicaragua' },
  { label: 'National symbols of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/National_symbols_of_Nicaragua' },
  { label: 'Politics of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/Politics_of_Nicaragua' },
  { label: 'Economy of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/Economy_of_Nicaragua' },
  { label: 'North Caribbean Coast Autonomous Region — Wikipedia', url: 'https://en.wikipedia.org/wiki/North_Caribbean_Coast_Autonomous_Region' },
  { label: 'Nicaraguan cuisine — Wikipedia', url: 'https://en.wikipedia.org/wiki/Nicaraguan_cuisine' },
  { label: 'Palo de Mayo — Wikipedia', url: 'https://en.wikipedia.org/wiki/Palo_de_Mayo' },
  { label: 'El Güegüense — Wikipedia', url: 'https://en.wikipedia.org/wiki/El_G%C3%BCeg%C3%BCense' },
  { label: 'Rubén Darío — Wikipedia', url: 'https://en.wikipedia.org/wiki/Rub%C3%A9n_Dar%C3%ADo' },
  { label: 'Ernesto Cardenal — Wikipedia', url: 'https://en.wikipedia.org/wiki/Ernesto_Cardenal' },
  { label: 'List of World Heritage Sites in Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Nicaragua' },
  { label: 'History of Nicaragua — Wikipedia', url: 'https://en.wikipedia.org/wiki/History_of_Nicaragua' },
  {
    label: 'Freedom House — "Freedom in Focus: Elections Abolished in Nicaragua" (2026)',
    url: 'https://freedomhouse.org/article/freedom-focus-elections-abolished-nicaragua',
  },
  {
    label: 'CNN — "Nicaragua\'s Ortega says \'never again\' for elections" (julio de 2026)',
    url: 'https://www.cnn.com/2026/07/20/americas/nicaragua-ortega-no-elections-intl-hnk',
  },
  {
    label: 'Visit Nicaragua — La Gritería, celebración religiosa y popular',
    url: 'https://www.visitanicaragua.com/en/The-Griteria-is-a-great-religious-and-popular-celebration-in-Nicaragua/',
  },
];
