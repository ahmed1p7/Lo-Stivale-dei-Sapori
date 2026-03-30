// Translation keys for Lo Stivale dei Sapori menu
export type Language = 'en' | 'ar' | 'it' | 'fr';

export const translations: Record<string, Record<Language, string>> = {
  // Cover Page
  'restaurant-name': {
    it: 'Lo Stivale dei Sapori',
    en: 'Lo Stivale dei Sapori',
    ar: 'لو ستيفالي داي سابوري',
    fr: 'Lo Stivale dei Sapori',
  },
  'restaurant-year': {
    it: '2026',
    en: '2026',
    ar: '2026',
    fr: '2026',
  },
  'cover-title': {
    it: "✨ Un'attesa che conta",
    en: '✨ A Wait That Matters',
    ar: '✨ انتظار له قيمة',
    fr: '✨ Une Attente Qui Compte',
  },
  'cover-description': {
    it: 'Da noi l\'attesa non è vuota. Ogni piatto è preparato con cura utilizzando materie prime fresche e selezionate.\nIl tempo che aspetti è pieno del nostro impegno per offrirti un\'esperienza autentica.',
    en: 'With us, waiting is never empty. Every dish is carefully prepared using fresh and selected ingredients.\nThe time you wait is filled with our commitment to offer you an authentic experience.',
    ar: 'لدينا الانتظار ليس فارغاً. كل طبق يُحضّر بعناية باستخدام مكونات طازجة ومختارة.\nالوقت الذي تنتظره مليء بالتزامنا لتقديم تجربة أصيلة لك.',
    fr: "Chez nous, l'attente n'est jamais vide. Chaque plat est soigneusement préparé avec des ingrédients frais et sélectionnés.\nLe temps d'attente est rempli de notre engagement à vous offrir une expérience authentique.",
  },
  'coperto': {
    it: 'Coperto — € 2,5',
    en: 'Cover Charge — € 2.5',
    ar: 'رسوم التغطية — € 2,5',
    fr: 'Couvert — € 2,5',
  },
  'enter-menu': {
    it: 'Entra nel Menu',
    en: 'Enter Menu',
    ar: 'الدخول إلى القائمة',
    fr: 'Entrer dans le Menu',
  },

  // Navigation
  'nav-home': {
    it: 'Home',
    en: 'Home',
    ar: 'الرئيسية',
    fr: 'Accueil',
  },
  'nav-tartare': {
    it: 'Tartare',
    en: 'Tartare',
    ar: 'التارتار',
    fr: 'Tartare',
  },
  'nav-bruschette': {
    it: 'Bruschette',
    en: 'Bruschetta',
    ar: 'البروشيتا',
    fr: 'Bruschetta',
  },
  'nav-taglieri': {
    it: 'Taglieri',
    en: 'Cutting Boards',
    ar: 'ألواح التقديم',
    fr: 'Planches',
  },
  'nav-primi': {
    it: 'Primi Piatti',
    en: 'First Courses',
    ar: 'الأطباق الأولى',
    fr: 'Premiers Plats',
  },
  'nav-grigliate': {
    it: 'Grigliate',
    en: 'Grills',
    ar: 'المشويات',
    fr: 'Grillades',
  },
  'nav-contorni': {
    it: 'Contorni',
    en: 'Side Dishes',
    ar: 'الأطباق الجانبية',
    fr: 'Accompagnements',
  },
  'nav-baby': {
    it: 'Baby Menu',
    en: 'Baby Menu',
    ar: 'قائمة الأطفال',
    fr: 'Menu Enfant',
  },

  // Tartare Page
  'tartare-title': {
    it: 'Le Tartare',
    en: 'Tartares',
    ar: 'التارتار',
    fr: 'Les Tartares',
  },
  'tartare-desc-page': {
    it: 'Selezione di tartare e carpacci preparati al momento',
    en: 'Selection of tartares and carpaccios prepared fresh',
    ar: 'تشكيلة من التارتار والكارباتشو المحضرة طازجة',
    fr: 'Sélection de tartares et carpaccios préparés fraîchement',
  },
  'tartare-bovino': {
    it: 'Tartare di Bovino brasiliano e Tartufo umbro',
    en: 'Brazilian Beef Tartare with Umbrian Truffle',
    ar: 'تارتار لحم البقر البرازيلي مع الكمأ الأومبري',
    fr: 'Tartare de Bœuf Brésilien et Truffe Ombrienne',
  },
  'tartare-bovino-desc': {
    it: 'tartare di bovino brasiliano con misticanza e tartufo',
    en: 'Brazilian beef tartare with mixed greens and truffle',
    ar: 'تارتار لحم بقري برازيلي مع خضر مشكلة وكمأ',
    fr: 'Tartare de bœuf brésilien avec salade composée et truffe',
  },
  'tartare-tonno': {
    it: 'Tartare di tonno',
    en: 'Tuna Tartare',
    ar: 'تارتار التونة',
    fr: 'Tartare de Thon',
  },
  'tartare-tonno-desc': {
    it: 'tonno con misticanza',
    en: 'tuna with mixed greens',
    ar: 'تونة مع خضر مشكلة',
    fr: 'thon avec salade composée',
  },
  'carpaccio': {
    it: 'Carpaccio di Black Angus',
    en: 'Black Angus Carpaccio',
    ar: 'كارباتشو بلاك أنجوس',
    fr: 'Carpaccio de Black Angus',
  },
  'carpaccio-desc': {
    it: 'black angus affumicato, olio al tartufo, tartufo umbro di prima scelta, rucola',
    en: 'smoked black angus, truffle oil, premium umbrian truffle, arugula',
    ar: 'بلاك أنجوس مدخن، زيت كمأ، كمأ أومبري فاخر، جرجير',
    fr: 'black angus fumé, huile à la truffe, truffe ombrienne de premier choix, roquette',
  },

  // Zizzona Section
  'zizzona-title': {
    it: 'La Zizzona',
    en: 'The Zizzona',
    ar: 'الزيتزونا',
    fr: 'La Zizzona',
  },
  'zizzona-desc-page': {
    it: 'Specialità campana di mozzarella gigante',
    en: 'Campanian specialty of giant mozzarella',
    ar: ' spécialité campanienne de mozzarella géante',
    fr: 'Spécialité campanienne de mozzarella géante',
  },
  'zizzona': {
    it: 'La Zizzona di Battipaglia',
    en: 'Zizzona from Battipaglia',
    ar: 'الزيتزونا من باتيباليا',
    fr: 'La Zizzona de Battipaglia',
  },
  'zizzona-desc': {
    it: 'Zizzona di Battipaglia con capocollo calabrese',
    en: 'Zizzona from Battipaglia with Calabrian capocollo',
    ar: 'زيتزونا من باتيباليا مع كابوكولو كالابري',
    fr: 'Zizzona de Battipaglia avec capocollo calabrais',
  },
  'zizzona-1k': {
    it: 'Zizzona al Kg',
    en: 'Zizzona per Kg',
    ar: 'الزيتزونا للكيلو',
    fr: 'Zizzona au Kg',
  },
  'zizzona-1k-desc': {
    it: 'prezzo al chilogrammo',
    en: 'price per kilogram',
    ar: 'السعر للكيلوغرام',
    fr: 'prix au kilogramme',
  },

  // Bruschette Page
  'bruschette-title': {
    it: 'Le Bruschette',
    en: 'Bruschettas',
    ar: 'البروشيتا',
    fr: 'Les Bruschettas',
  },
  'bruschette-subtitle': {
    it: '(con pane di Altamura)',
    en: '(with Altamura bread)',
    ar: '(مع خبز ألتامورا)',
    fr: '(avec pain d\'Altamura)',
  },
  'bruschette-desc-page': {
    it: 'Bruschette tradizionali con pane di Altamura DOP',
    en: 'Traditional bruschettas with Altamura DOP bread',
    ar: 'بروشيتا تقليدية مع خبز ألتامورا DOP',
    fr: 'Bruschettas traditionnelles avec pain d\'Altamura DOP',
  },
  'caciocavallo': {
    it: 'Bruschette con caciocavallo',
    en: 'Bruschetta with Caciocavallo',
    ar: 'بروشيتا مع كاتشوكافالو',
    fr: 'Bruschetta au Caciocavallo',
  },
  'caciocavallo-desc': {
    it: 'pane di Altamura e caciocavallo Silano',
    en: 'Altamura bread and Silano caciocavallo',
    ar: 'خبز ألتامورا وكاتشوكافالو سيلانو',
    fr: 'pain d\'Altamura et caciocavallo Silano',
  },
  'lardo': {
    it: 'Bruschette con Lardo di Patanegra',
    en: 'Bruschetta with Patanegra Lardo',
    ar: 'بروشيتا مع لاردو باتانيغرا',
    fr: 'Bruschetta au Lardo de Patanegra',
  },
  'lardo-desc': {
    it: 'pane di Altamura e lardo Patanegra',
    en: 'Altamura bread and Patanegra lardo',
    ar: 'خبز ألتامورا ولاردو باتانيغرا',
    fr: 'pain d\'Altamura et lardo Patanegra',
  },
  'pomodori': {
    it: 'Bruschette con pomodori',
    en: 'Bruschetta with Tomatoes',
    ar: 'بروشيتا مع الطماطم',
    fr: 'Bruschetta aux Tomates',
  },
  'pomodori-desc': {
    it: 'pane di Altamura, ciliegini, olio di oliva evo',
    en: 'Altamura bread, cherry tomatoes, extra virgin olive oil',
    ar: 'خبز ألتامورا، طماطم كرزية، زيت زيتون بكر ممتاز',
    fr: 'pain d\'Altamura, tomates cerises, huile d\'olive extra vierge',
  },
  'calabrese': {
    it: 'Bruschetta Calabrese',
    en: 'Calabrian Bruschetta',
    ar: 'بروشيتا كالابرية',
    fr: 'Bruschetta Calabraise',
  },
  'calabrese-desc': {
    it: 'pane di Altamura con baccalà alla calabrese, patate e olive',
    en: 'Altamura bread with Calabrian-style cod, potatoes and olives',
    ar: 'خبز ألتامورا مع سمك القد بالكالابرية، بطاطس وزيتون',
    fr: 'pain d\'Altamura avec morue à la calabraise, pommes de terre et olives',
  },
  'stivale-bruschetta': {
    it: 'Bruschetta Lo Stivale',
    en: 'Lo Stivale Bruschetta',
    ar: 'بروشيتا لو ستيفالي',
    fr: 'Bruschetta Lo Stivale',
  },
  'stivale-bruschetta-desc': {
    it: 'pane di Altamura, filetti di acciughe Cantabrico, burro a quadretti mono',
    en: 'Altamura bread, Cantabrico anchovy fillets, single-serving butter cubes',
    ar: 'خبز ألتامورا، شرائح أنشوفة كانتابريكو، مكعبات زبدة فردية',
    fr: 'pain d\'Altamura, filets d\'anchois de Cantabrie, cubes de beurre individuels',
  },

  // Taglieri Page
  'taglieri-title': {
    it: 'I Taglieri',
    en: 'Cutting Boards',
    ar: 'ألواح التقديم',
    fr: 'Les Planches',
  },
  'taglieri-desc-page': {
    it: 'Selezione di salumi e formaggi italiani',
    en: 'Selection of Italian cured meats and cheeses',
    ar: 'تشكيلة من اللحوم المقددة والأجبان الإيطالية',
    fr: 'Sélection de charcuteries et fromages italiens',
  },
  'calabria-docet': {
    it: 'Calabria Docet',
    en: 'Calabria Docet',
    ar: 'كالابريا دوسيت',
    fr: 'Calabria Docet',
  },
  'calabria-docet-desc': {
    it: 'soppressata dolce, salsiccia dolce, salsiccia piccante, capocollo calabrese, filetto calabrese, pancetta calabrese, pecorino d\'Angiò stagionato, pecorino di Piacenza Gran riserva, caciocavallo, marmellate artigianali, miele di acacia artigianale',
    en: 'sweet soppressata, sweet sausage, spicy sausage, Calabrian capocollo, Calabrian fillet, Calabrian pancetta, aged Pecorino d\'Angiò, Pecorino di Piacenza Gran Riserva, caciocavallo, artisan jams, artisan acacia honey',
    ar: 'سوببريساتا حلوة، سجق حلو، سجق حار، كابوكولو كالابري، فيليه كالابري، بانتشيتا كالابرية، بيكورينو دانجو معتق، بيكورينو دي بياتشنزا جراند ريزيرفا، كاتشوكافالو، مربيات حرفية، عسل أكاسيا حرفي',
    fr: 'soppressata douce, saucisse douce, saucisse piquante, capocollo calabrais, filet calabrais, pancetta calabraise, pecorino d\'Angiò affiné, pecorino di Piacenza Gran Riserva, caciocavallo, confitures artisanales, miel d\'acacia artisanal',
  },
  'calabria-docet-serves': {
    it: '(per 2 persone)',
    en: '(for 2 people)',
    ar: '(لشخصين)',
    fr: '(pour 2 personnes)',
  },
  'piccola-calabria': {
    it: 'Tagliere La piccola Calabria',
    en: 'Little Calabria Board',
    ar: 'لوح كالابريا الصغير',
    fr: 'Planche La Piccola Calabria',
  },
  'piccola-calabria-desc': {
    it: 'soppressata dolce, salsiccia dolce, capocollo calabrese, filetto calabrese, pancetta calabrese, pecorino d\'Angiò stagionato, caciocavallo, marmellata di arancia artigianale, miele di acacia artigianale',
    en: 'sweet soppressata, sweet sausage, Calabrian capocollo, Calabrian fillet, Calabrian pancetta, aged Pecorino d\'Angiò, caciocavallo, artisan orange marmalade, artisan acacia honey',
    ar: 'سوببريساتا حلوة، سجق حلو، كابوكولو كالابري، فيليه كالابري، بانتشيتا كالابرية، بيكورينو دانجو معتق، كاتشوكافالو، مربى برتقال حرفي، عسل أكاسيا حرفي',
    fr: 'soppressata douce, saucisse douce, capocollo calabrais, filet calabrais, pancetta calabraise, pecorino d\'Angiò affiné, caciocavallo, marmelade d\'orange artisanale, miel d\'acacia artisanal',
  },
  'vegetariano': {
    it: 'Vegetariano',
    en: 'Vegetarian',
    ar: 'نباتي',
    fr: 'Végétarien',
  },
  'vegetariano-desc': {
    it: 'carciofi, sott\'olio calabresi e novità dello cheff secondo disponibilità stagionale',
    en: 'artichokes, Calabrian preserved vegetables and chef\'s seasonal specialties',
    ar: 'أرضي شوكي، خضروات كالابرية محفوظة، وموسميات الشيف حسب المتوفر',
    fr: 'artichauts, légumes calabrais conservés et spécialités saisonnières du chef',
  },
  'stivale-tagliere': {
    it: 'Lo Stivale dei Sapori',
    en: 'Lo Stivale dei Sapori',
    ar: 'لو ستيفالي داي سابوري',
    fr: 'Lo Stivale dei Sapori',
  },
  'stivale-tagliere-desc': {
    it: 'prosciutto crudo di Parma 24 mesi, capocollo di Martina Franca, mortadella con mandorle e pistacchio, pecorino d\'Angiò stagionato, pecorino di Piacenza Gran riserva, caciocavallo, marmellate artigianali, miele di acacia artigianale',
    en: '24-month Parma ham, Martina Franca capocollo, mortadella with almonds and pistachio, aged Pecorino d\'Angiò, Pecorino di Piacenza Gran Riserva, caciocavallo, artisan jams, artisan acacia honey',
    ar: 'بروشوتو بارما 24 شهر، كابوكولو مارتينا فرانكا، مرتديلا مع لوز وفستق، بيكورينو دانجو معتق، بيكورينو دي بياتشنزا جراند ريزيرفا، كاتشوكافالو، مربيات حرفية، عسل أكاسيا حرفي',
    fr: 'jambon cru de Parme 24 mois, capocollo de Martina Franca, mortadelle aux amandes et pistache, pecorino d\'Angiò affiné, pecorino di Piacenza Gran Riserva, caciocavallo, confitures artisanales, miel d\'acacia artisanal',
  },
  'trilogia-crudo': {
    it: 'Trilogi di Crudo',
    en: 'Raw Trilogy',
    ar: 'ثلاثية النيء',
    fr: 'Trilogie de Cru',
  },
  'trilogia-crudo-desc': {
    it: 'culatello di Zibello dop con bocconcini di bufala di Battipaglia',
    en: 'Culatello di Zibello DOP with Battipaglia buffalo mozzarella bites',
    ar: 'كولاتيلو دي زيبيللو DOP مع قطع موزاريلا جاموس باتيباليا',
    fr: 'Culatello di Zibello DOP avec bouchées de mozzarella de buffle de Battipaglia',
  },
  'tagliere-umbro': {
    it: 'Tagliere Umbro',
    en: 'Umbrian Board',
    ar: 'اللوح الأومبري',
    fr: 'Planche Ombrienne',
  },
  'tagliere-umbro-desc': {
    it: 'prosciutto crudo, capocollo, salame, soppressata, morbidone Umbro, pecorino d\'Angiò stagionato, pecorino di Piacenza Gran riserva, caciocavallo, marmellate artigianali, miele di acacia artigianale',
    en: 'raw ham, capocollo, salami, soppressata, Morbidone Umbro, aged Pecorino d\'Angiò, Pecorino di Piacenza Gran Riserva, caciocavallo, artisan jams, artisan acacia honey',
    ar: 'لحم مقدد، كابوكولو، سلامي، سوبريساتا، موربيدوني أومبرو، بيكورينو دانجو معتق، بيكورينو دي بياتشنزا جراند ريزيرفا، كاتشوكافالو، مربيات حرفية، عسل أكاسيا حرفي',
    fr: 'jambon cru, capocollo, salami, soppressata, Morbidone Umbro, pecorino d\'Angiò affiné, pecorino di Piacenza Gran Riserva, caciocavallo, confitures artisanales, miel d\'acacia artisanal',
  },

  // Primi Piatti Page
  'primi-title': {
    it: 'I Primi Piatti',
    en: 'First Courses',
    ar: 'الأطباق الأولى',
    fr: 'Les Premiers Plats',
  },
  'primi-desc-page': {
    it: 'Pasta fresca e primi piatti della tradizione italiana',
    en: 'Fresh pasta and traditional Italian first courses',
    ar: 'باستا طازجة وأطباق أولى من التقاليد الإيطالية',
    fr: 'Pâtes fraîches et premiers plats de la tradition italienne',
  },
  'spaghetto-bacco': {
    it: 'Spaghetto Bacco',
    en: 'Bacco Spaghetti',
    ar: 'سباغيتو باكو',
    fr: 'Spaghetti Bacco',
  },
  'spaghetto-bacco-desc': {
    it: 'spaghetto con vino calabrese ed olive infornate',
    en: 'spaghetti with Calabrian wine and baked olives',
    ar: 'سباغيتي مع نبيذ كالابري وزيتون مخبوز',
    fr: 'spaghetti avec vin calabrais et olives cuites au four',
  },
  'maccheroni-porcini': {
    it: 'Maccheroni, salsiccia calabrese e porcini della Sila',
    en: 'Maccheroni, Calabrian Sausage and Sila Porcini',
    ar: 'مكاروني، سجق كالابري وبورسيني سيلا',
    fr: 'Maccheroni, Saucisse Calabraise et Porcini de la Sila',
  },
  'maccheroni-porcini-desc': {
    it: 'maccheroni, salsiccia fresca calabrese, porcini della Sila, olio d\'oliva evo',
    en: 'maccheroni, fresh Calabrian sausage, Sila porcini mushrooms, extra virgin olive oil',
    ar: 'مكاروني، سجق كالابري طازج، فطر بورسيني سيلا، زيت زيتون بكر ممتاز',
    fr: 'maccheroni, saucisse calabraise fraîche, champignons porcini de la Sila, huile d\'olive extra vierge',
  },
  'orecchiette-rapa': {
    it: 'Orecchiette con cime di rapa',
    en: 'Orecchiette with Turnip Tops',
    ar: 'أوريكييتي مع قمم اللفت',
    fr: 'Orecchiette aux Cimes de Rave',
  },
  'orecchiette-rapa-desc': {
    it: 'orecchiette, cime di rapa, olio d\'oliva evo, aglio e granella di pane',
    en: 'orecchiette, turnip tops, extra virgin olive oil, garlic and breadcrumbs',
    ar: 'أوريكييتي، قمم اللفت، زيت زيتون بكر ممتاز، ثوم وفتات خبز',
    fr: 'orecchiette, cimes de rave, huile d\'olive extra vierge, ail et chapelure',
  },
  'spaghetto-nduja': {
    it: 'Spaghetto N\'duja',
    en: 'N\'duja Spaghetti',
    ar: 'سباغيتو ندوجا',
    fr: 'Spaghetti N\'duja',
  },
  'spaghetto-nduja-desc': {
    it: 'Spaghetto, pomodorini, olio d\'oliva evo, N\'duja, granella di mandorle tostate, aglio e granella di pane',
    en: 'Spaghetti, cherry tomatoes, extra virgin olive oil, N\'duja, toasted almond crumbs, garlic and breadcrumbs',
    ar: 'سباغيتي، طماطم كرزية، زيت زيتون بكر ممتاز، ندوجا، فتات لوز محمص، ثوم وفتات خبز',
    fr: 'Spaghetti, tomates cerises, huile d\'olive extra vierge, N\'duja, chapelure d\'amandes grillées, ail et chapelure',
  },
  'pastora-calabrese': {
    it: 'La pastora Calabrese',
    en: 'The Calabrian Shepherdess',
    ar: 'الراعية الكالابرية',
    fr: 'La Bergère Calabraise',
  },
  'pastora-calabrese-desc': {
    it: 'Spaghetto, scamorsa affumicata, ricotta, rucola, e olive infornate',
    en: 'Spaghetti, smoked scamorza, ricotta, arugula, and baked olives',
    ar: 'سباغيتي، سكامورزا مدخنة، ريكوتا، جرجير، وزيتون مخبوز',
    fr: 'Spaghetti, scamorza fumée, ricotta, roquette et olives cuites au four',
  },
  'spaghetto-stivale': {
    it: 'Spaghetto lo stivale',
    en: 'Lo Stivale Spaghetti',
    ar: 'سباغيتو لو ستيفالي',
    fr: 'Spaghetti Lo Stivale',
  },
  'spaghetto-stivale-desc': {
    it: 'spaghetto, olio d\'oliva evo, aglio, alici del Cantabrico, olive infornate e mollica di pane',
    en: 'spaghetti, extra virgin olive oil, garlic, Cantabrico anchovies, baked olives and breadcrumbs',
    ar: 'سباغيتي، زيت زيتون بكر ممتاز، ثوم، أنشوفة كانتابريكو، زيتون مخبوز وفتات خبز',
    fr: 'spaghetti, huile d\'olive extra vierge, ail, anchois de Cantabrie, olives cuites au four et chapelure',
  },

  // Grigliate Page
  'grigliate-title': {
    it: 'Le Grigliate',
    en: 'Grills',
    ar: 'المشويات',
    fr: 'Les Grillades',
  },
  'grigliate-desc-page': {
    it: 'Carni alla griglia e specialità italiane',
    en: 'Grilled meats and Italian specialties',
    ar: 'لحوم مشوية وتخصصات إيطالية',
    fr: 'Viandes grillées et spécialités italiennes',
  },
  'calabria-griglia': {
    it: 'Calabria alla griglia',
    en: 'Calabria on the Grill',
    ar: 'كالابريا على الشواية',
    fr: 'Calabre sur le Grill',
  },
  'calabria-griglia-desc': {
    it: 'salsiccia € 8 a pz, hamburger € 8 a pz, bombette € 3 a pz, costata nero di suino € 10',
    en: 'sausage €8 each, hamburger €8 each, bombette €3 each, pork rib €10',
    ar: 'سجق 8€ للقطعة، همبرغر 8€ للقطعة، بومبيت 3€ للقطعة، ضلع خنزير 10€',
    fr: 'saucisse 8€ pièce, hamburger 8€ pièce, bombette 3€ pièce, côte de porc 10€',
  },
  'caciocavallo-griglia': {
    it: 'Caciocavallo alla griglia',
    en: 'Grilled Caciocavallo',
    ar: 'كاتشوكافالو مشوي',
    fr: 'Caciocavallo Grillé',
  },
  'caciocavallo-griglia-desc': {
    it: 'caciocavallo, misticanza e olio al tartufo',
    en: 'caciocavallo, mixed greens and truffle oil',
    ar: 'كاتشوكافالو، خضر مشكلة وزيت كمأ',
    fr: 'caciocavallo, salade composée et huile à la truffe',
  },
  'fiorentina': {
    it: 'Fiorentina',
    en: 'Fiorentina Steak',
    ar: 'ستيك فيورنتينا',
    fr: 'Fiorentina',
  },
  'fiorentina-desc': {
    it: 'al Kg',
    en: 'per Kg',
    ar: 'للكيلو',
    fr: 'au Kg',
  },
  'entrecote': {
    it: 'Entrecôte',
    en: 'Entrecôte',
    ar: 'أنتريكوت',
    fr: 'Entrecôte',
  },
  'entrecote-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },
  'tomahawk': {
    it: 'Tomahawk',
    en: 'Tomahawk',
    ar: 'توماهوك',
    fr: 'Tomahawk',
  },
  'tomahawk-desc': {
    it: 'al kg',
    en: 'per kg',
    ar: 'للكيلو',
    fr: 'au kg',
  },
  'lombata-irlandese': {
    it: 'Lombata irlandese',
    en: 'Irish Loin',
    ar: 'لحم خاصرة أيرلندي',
    fr: 'Lombat Irlandaise',
  },
  'lombata-irlandese-desc': {
    it: 'al kg',
    en: 'per kg',
    ar: 'للكيلو',
    fr: 'au kg',
  },
  'picagna': {
    it: 'Picagna',
    en: 'Picagna',
    ar: 'بيكانيا',
    fr: 'Picagna',
  },
  'picagna-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },
  'ribeye-entrecote': {
    it: 'Ribaye entrecôte',
    en: 'Ribeye Entrecôte',
    ar: 'ريب آي أنتريكوت',
    fr: 'Ribeye Entrecôte',
  },
  'ribeye-entrecote-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },

  // Contorni Page
  'contorni-title': {
    it: 'I Contorni',
    en: 'Side Dishes',
    ar: 'الأطباق الجانبية',
    fr: 'Les Accompagnements',
  },
  'contorni-desc-page': {
    it: 'Contorni freschi e tradizionali',
    en: 'Fresh and traditional side dishes',
    ar: 'أطباق جانبية طازجة وتقليدية',
    fr: 'Accompagnements frais et traditionnels',
  },
  'insalata-mista': {
    it: 'Insalata mista',
    en: 'Mixed Salad',
    ar: 'سلطة مشكلة',
    fr: 'Salade Composée',
  },
  'insalata-mista-desc': {
    it: 'lattuga, radicchio, rucola, pomodorini, carote, meloncelle',
    en: 'lettuce, radicchio, arugula, cherry tomatoes, carrots, pickled vegetables',
    ar: 'خس، راديكيو، جرجير، طماطم كرزية، جزر، مخللات',
    fr: 'laitue, radicchio, roquette, tomates cerises, carottes, légumes marinés',
  },
  'patate-forno': {
    it: 'Patate al forno',
    en: 'Baked Potatoes',
    ar: 'بطاطس فرن',
    fr: 'Pommes de Terre au Four',
  },
  'patate-forno-desc': {
    it: 'patate e rosmarino',
    en: 'potatoes and rosemary',
    ar: 'بطاطس وإكليل الجبل',
    fr: 'pommes de terre et romarin',
  },
  'patate-fritte': {
    it: 'Patate fritte',
    en: 'French Fries',
    ar: 'بطاطس مقلية',
    fr: 'Frites',
  },
  'patate-fritte-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },
  'verdure-stagione': {
    it: 'Verdure di stagione',
    en: 'Seasonal Vegetables',
    ar: 'خضروات موسمية',
    fr: 'Légumes de Saison',
  },
  'verdure-stagione-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },
  'patate-mblacchiuse': {
    it: 'Patate "mblacchiuse"',
    en: '"Mblacchiuse" Potatoes',
    ar: 'بطاطس "مبلاكّيوز"',
    fr: 'Pommes de Terre "Mblacchiuse"',
  },
  'patate-mblacchiuse-desc': {
    it: 'peperoni e patate fritti',
    en: 'fried peppers and potatoes',
    ar: 'فلفل وبطاطس مقلية',
    fr: 'poivrons et pommes de terre frits',
  },

  // Baby Menu Page
  'baby-title': {
    it: 'Baby Menu',
    en: 'Baby Menu',
    ar: 'قائمة الأطفال',
    fr: 'Menu Enfant',
  },
  'baby-desc-page': {
    it: 'Piatti dedicati ai più piccoli',
    en: 'Dishes dedicated to the little ones',
    ar: 'أطباق مخصصة للصغار',
    fr: 'Plats dédiés aux plus petits',
  },
  'pasta-sugo': {
    it: 'Pasta al sugo',
    en: 'Pasta with Tomato Sauce',
    ar: 'باستا بصلصة الطماطم',
    fr: 'Pâtes à la Sauce Tomate',
  },
  'pasta-sugo-desc': {
    it: '',
    en: '',
    ar: '',
    fr: '',
  },
  'baby-hamburger': {
    it: 'Baby Hamburger',
    en: 'Baby Hamburger',
    ar: 'همبرغر أطفال',
    fr: 'Baby Hamburger',
  },
  'baby-hamburger-desc': {
    it: 'hamburger di pollo',
    en: 'chicken hamburger',
    ar: 'همبرغر دجاج',
    fr: 'hamburger de poulet',
  },

  // Special/NotFound pages
  'notfound-title': {
    it: 'Pagina non trovata',
    en: 'Page Not Found',
    ar: 'الصفحة غير موجودة',
    fr: 'Page Non Trouvée',
  },
  'notfound-desc': {
    it: 'La pagina che stai cercando non esiste.',
    en: 'The page you are looking for does not exist.',
    ar: 'الصفحة التي تبحث عنها غير موجودة.',
    fr: 'La page que vous cherchez n\'existe pas.',
  },
  'notfound-back': {
    it: 'Torna alla Home',
    en: 'Back to Home',
    ar: 'العودة للرئيسية',
    fr: 'Retour à l\'Accueil',
  },
};

export function t(key: string, lang: Language): string {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translations[key][lang] || translations[key]['en'] || key;
}
