// Translation dictionary
const translations = {
    en: {
        // Page 1: Cover & Info
        "restaurant-name": "Lo Stivale dei Sapori",
        "season-year": "Autumn 2025",
        "cover-title": "Cover & Info",
        "wait-message": "✨ A wait that matters With us, the wait is never empty. Every dish is prepared with care using fresh and selected raw materials. The time you wait is filled with our commitment to offering you an authentic experience.",
        "cover-charge-text": "Cover charge (Coperto): €2",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "I Taglieri (Platters)",
        "item-header": "Item",
        "price-header": "Price",
        "calabria-docet-name": "Calabria Docet (for 2 people)",
        "calabria-docet-desc": "sweet soppressata, sweet sausage, spicy sausage, Calabrian capocollo, Calabrian fillet, Calabrian pancetta, aged Pecorino d'Angiò, Gran Riserva Piacenza Pecorino, caciocavallo cheese, artisanal jams, artisanal acacia honey",
        "piccola-calabria-name": "Tagliere La piccola Calabria",
        "piccola-calabria-desc": "sweet soppressata, sweet sausage, Calabrian capocollo, Calabrian fillet, Calabrian pancetta, aged Pecorino d'Angiò, caciocavallo cheese, artisanal orange marmalade, artisanal acacia honey",
        "vegetariano-name": "Vegetariano",
        "vegetariano-desc": "Beetroot carpaccio, small friselle bread, Calabrian vegetables in oil, crudités and cheeses according to seasonal availability",
        
        // Page 3: Special Platters
        "special-title": "Special Platters",
        "item-header2": "Item",
        "price-header2": "Price",
        "stivale-name": "Lo Stivale dei Sapori (for 2 people)",
        "stivale-desc": "24-month Parma ham, Martina Franca capocollo, mortadella with almonds and pistachio, aged Pecorino d'Angiò, Gran Riserva Piacenza Pecorino, caciocavallo cheese, artisanal jams, artisanal acacia honey",
        "trilogi-name": "Trilogi di Crudo (for 2 people)",
        "trilogi-desc": "Culatello di Zibello DOP, Black Pig cured ham, Cinta Senese cured ham with burrata cheese",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "Le Tartare (Tartare Dishes)",
        "tartare-bovino-name": "Tartare di Bovino brasiliano e Tartufo umbro",
        "tartare-bovino-desc": "Brazilian Beef tartare with mixed greens and Umbrian truffle",
        "tartare-tonno-name": "Tartare di tonno",
        "tartare-tonno-desc": "Tuna tartare with mixed greens",
        "carpaccio-name": "Carpaccio di Black Angus",
        "carpaccio-desc": "Smoked Black Angus, truffle oil, premium Umbrian truffle, arugula",
        "zizzona-title": "La Zizzona",
        "zizzona-name": "La Zizzona di Battipaglia",
        "zizzona-desc": "Large Battipaglia buffalo mozzarella with Calabrian capocollo",
        
        // Page 5: Le Bruschette
        "bruschette-title": "Le Bruschette (on Altamura bread)",
        "item-header3": "Item",
        "price-header3": "Price",
        "caciocavallo-name": "Bruschette con caciocavallo",
        "caciocavallo-desc": "Altamura bread and Silano caciocavallo cheese",
        "lardo-name": "Bruschette con Lardo di Patanegra",
        "lardo-desc": "Altamura bread and Patanegra lard",
        "pomodori-name": "Bruschette con pomodori",
        "pomodori-desc": "Altamura bread, cherry tomatoes, extra virgin olive oil",
        "calabrese-name": "Bruschetta Calabrese",
        "calabrese-desc": "Altamura bread with Calabrian-style cod, potatoes and olives",
        "stivale-bruschetta-name": "Bruschetta Lo Stivale",
        "stivale-bruschetta-desc": "Altamura bread, Cantabrian anchovy fillets, single-serving butter squares",
        
        // Page 6: I Primi Piatti
        "primi-title": "I Primi Piatti (First Courses)",
        "item-header4": "Item",
        "price-header4": "Price",
        "bacco-name": "Spaghetto Bacco",
        "bacco-desc": "spaghetti with Calabrian wine and baked olives",
        "maccheroni-name": "Maccheroni, salsiccia calabrese e porcini della Sila",
        "maccheroni-desc": "maccheroni, fresh Calabrian sausage, Sila porcini mushrooms, extra virgin olive oil",
        "orecchiette-name": "Orecchiette con cime di rapa",
        "orecchiette-desc": "orecchiette pasta, turnip greens, extra virgin olive oil, garlic and breadcrumbs",
        
        // Page 7: Le Grigliate
        "grigliate-title": "Le Grigliate (Grilled Dishes)",
        "calabria-griglia-name": "Calabria alla griglia",
        "calabria-griglia-desc": "sausage, hamburger, bombette, black pork ribs",
        "caciocavallo-griglia-name": "Caciocavallo alla griglia",
        "caciocavallo-griglia-desc": "grilled caciocavallo cheese, mixed greens and truffle oil",
        "fiorentina-name": "Fiorentina",
        "fiorentina-desc": "weight between 950g and 1250g",
        "entrecote-name": "Entrecôte",
        "entrecote-desc": "weight between 250g and 350g",
        "tomahawk-name": "Tomahawk",
        "wagyu-name": "Wagyu Kobe",
        "picagna-name": "Picagna",
        "picagna-desc": "weight between 290g and 330g",
        "spigola-name": "Spigola al forno",
        "spigola-desc": "Baked Sea Bass",
        
        // Page 8: I Contorni
        "contorni-title": "I Contorni (Side Dishes)",
        "insalata-name": "Insalata mista",
        "insalata-desc": "lettuce, radicchio, arugula, cherry tomatoes, carrots, meloncelles/cucumber-melons",
        "patate-forno-name": "Patate al forno",
        "patate-forno-desc": "roasted potatoes and rosemary",
        "verdure-name": "Verdure di stagione",
        "verdure-desc": "stewed chicory or sautéed turnip greens",
        "patate-mblacchiuse-name": "Patate “mblacchiuse”",
        "patate-mblacchiuse-desc": "fried peppers and potatoes - traditional style",
        
        // Page 9: Baby Menu
        "baby-title": "Baby Menu",
        "pasta-sugo-name": "Pasta al sugo",
        "pasta-sugo-desc": "orecchiette pasta with tomato sauce",
        "baby-hamburger-name": "Baby Hamburger",
        "baby-hamburger-desc": "chicken burger with a side of fries"
    },
    ar: {
        // Page 1: Cover & Info
        "restaurant-name": "لو ستيفال داي سابوري",
        "season-year": "خريف 2025",
        "cover-title": "الغلاف والمعلومات",
        "wait-message": "✨ انتظار يهم معنا، الانتظار لا يكون فارغاً أبداً. يتم تحضير كل طبق بعناية باستخدام مواد أولية طازجة ومختارة. الوقت الذي تقضونه في الانتظار يُملأ بتفانينا في تقديم تجربة أصيلة لكم.",
        "cover-charge-text": "رسوم الغطاء (كوبيرتو): 2 يورو",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "الأطباق (الصواني)",
        "item-header": "العنصر",
        "price-header": "السعر",
        "calabria-docet-name": "كالابريا دوسيت (لشخصين)",
        "calabria-docet-desc": "سوسبيساتا حلوة، نقانق حلوة، نقانق حارة، كابوكولو كالابريزي، فيله كالابريزي، بانسيتا كالابريزية، بيكورينو دي أنجو Matured، بيكورينو غران ريزيرفا بياسنزا، جبنة تشاكافالو، مربى يدوي، عسل أكاشيا يدوي",
        "piccola-calabria-name": "تالييري لا بيتشولا كالابريا",
        "piccola-calabria-desc": "سوسبيساتا حلوة، نقانق حلوة، كابوكولو كالابريزي، فيله كالابريزي، بانسيتا كالابريزية، بيكورينو دي أنجو Matured، جبنة تشاكافالو، مربى برتقال يدوي، عسل أكاشيا يدوي",
        "vegetariano-name": "نباتي",
        "vegetariano-desc": "كارباتشيو بنجر، خبز فريسيلي صغير، خضروات كالابريا بالزيت، خضار وجبن حسب توفر الموسم",
        
        // Page 3: Special Platters
        "special-title": "أطباق خاصة",
        "item-header2": "العنصر",
        "price-header2": "السعر",
        "stivale-name": "لو ستيفال داي سابوري (لشخصين)",
        "stivale-desc": "لحم خام بارما 24 شهراً، كابوكولو مارتينا فرانكا، مورتاديللا باللوز والبستاشيو، بيكورينو دي أنجو Matured، بيكورينو غران ريزيرفا بياسنزا، جبنة تشاكافالو، مربى يدوي، عسل أكاشيا يدوي",
        "trilogi-name": "تريولوجي دي كرودو (لشخصين)",
        "trilogi-desc": "كولاتيلو دي زيبيلو DOP، لحم خنزير أسود مقدد، لحم خنزير سينتا سينيزي مقدد مع جبنة بوراتا",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "التارتار (أطباق التارتار)",
        "tartare-bovino-name": "تارتار دي بوفينو برازيليانو وتارتوف أومني",
        "tartare-bovino-desc": "تارتار لحمة برازيلية مع خضار مختلطة وتارتفل أومبريان",
        "tartare-tonno-name": "تارتار دي تونو",
        "tartare-tonno-desc": "تارتار تونة مع خضار مختلطة",
        "carpaccio-name": "كارباتشيو دي بلاك أنغوس",
        "carpaccio-desc": "أنغوس أسود مدخن، زيت الترافل، تارتفل أومبريان فاخر، جرجير",
        "zizzona-title": "لا زيتشونا",
        "zizzona-name": "لا زيتشونا دي باتي باجليا",
        "zizzona-desc": "موزاريلا جرائدية كبيرة من باتي باجليا مع كابوكولو كالابريزي",
        
        // Page 5: Le Bruschette
        "bruschette-title": "البروشيتا (على خبز ألتامورا)",
        "item-header3": "العنصر",
        "price-header3": "السعر",
        "caciocavallo-name": "بروشيتا كون تشاكيوفالو",
        "caciocavallo-desc": "خبز ألتامورا وجبنة سيلانو تشاكيوفالو",
        "lardo-name": "بروشيتا كون لاردو دي باتانغرا",
        "lardo-desc": "خبز ألتامورا ولارد باتانغرا",
        "pomodori-name": "بروشيتا كون بومودوري",
        "pomodori-desc": "خبز ألتامورا، طماطم شيري، زيت زيتون بكر ممتاز",
        "calabrese-name": "بروشيتا كالابريز",
        "calabrese-desc": "خبز ألتامورا مع كود أسلوب كالابريزي، بطاطس وزيتون",
        "stivale-bruschetta-name": "بروشيتا لو ستيفال",
        "stivale-bruschetta-desc": "خبز ألتامورا، شرائح أنشوفة كانتابريان، مربعات زبدة للتقديم الفردي",
        
        // Page 6: I Primi Piatti
        "primi-title": "الأطباق الأولى (المقبلات)",
        "item-header4": "العنصر",
        "price-header4": "السعر",
        "bacco-name": "سباغيتو باكو",
        "bacco-desc": "سباغيتي مع نبيذ كالابريزي وزيتون مشوي",
        "maccheroni-name": "ماكيرون، سالسيتشا كالابريزية وبوشيني ديللا سيلا",
        "maccheroni-desc": "ماكيرون، سالسيتشا كالابريزية طازجة، بويشيني سيلا، زيت زيتون بكر ممتاز",
        "orecchiette-name": "أوريشيتا كون تشيما دي رابا",
        "orecchiette-desc": "معكرونة أوريشيتا، خضار الشالة، زيت زيتون بكر ممتاز، ثوم وفتات خبز",
        
        // Page 7: Le Grigliate
        "grigliate-title": "المشويات",
        "calabria-griglia-name": "كالابريا الباربكيو",
        "calabria-griglia-desc": "نقانق، همبرغر، بومبيتي، أضلاع خنزير سوداء",
        "caciocavallo-griglia-name": "تشاكوفالو مشوي",
        "caciocavallo-griglia-desc": "جبنة تشاكيوفالو مشوية، خضار مختلطة وزيت الترافل",
        "fiorentina-name": "فيورنتينا",
        "fiorentina-desc": "وزن بين 950 جم و 1250 جم",
        "entrecote-name": "إنتريكوتي",
        "entrecote-desc": "وزن بين 250 جم و 350 جم",
        "tomahawk-name": "توماهوك",
        "wagyu-name": "واجيو كوبه",
        "picagna-name": "بيكانيا",
        "picagna-desc": "وزن بين 290 جم و 330 جم",
        "spigola-name": "سمكة باراموندي مشوية",
        "spigola-desc": "سمكة باراموندي مشوية",
        
        // Page 8: I Contorni
        "contorni-title": "الوجبات الجانبية",
        "insalata-name": "سالاتا ميستا",
        "insalata-desc": "خس، رديكيو، جرجير، طماطم شيري، جزر، ميلونسيليس/خيار ميلون",
        "patate-forno-name": "بطاطا فيرنو",
        "patate-forno-desc": "بطاطا مشوية وإكليل الجبل",
        "verdure-name": "فيردور دا ستاجيوني",
        "verdure-desc": "شوك تشيدونيا أو جريبيتاج تشيرينجلي",
        "patate-mblacchiuse-name": "باتاتي مبلاكيوسي",
        "patate-mblacchiuse-desc": "فلفل مقلية وبطاطا - نمط تقليدي",
        
        // Page 9: Baby Menu
        "baby-title": "قائمة الأطفال",
        "pasta-sugo-name": "باستا ألو سوغو",
        "pasta-sugo-desc": "معكرونة أوريشيتا مع صلصة الطماطم",
        "baby-hamburger-name": "هamburger للأطفال",
        "baby-hamburger-desc": "هamburger دجاج مع جانب من البطاطس المقلية"
    },
    es: {
        // Page 1: Cover & Info
        "restaurant-name": "Lo Stivale dei Sapori",
        "season-year": "Otoño 2025",
        "cover-title": "Portada e Información",
        "wait-message": "✨ Una espera que importa Con nosotros, la espera nunca está vacía. Cada plato se prepara con cuidado utilizando materias primas frescas y seleccionadas. El tiempo que esperas se llena con nuestro compromiso de ofrecerte una experiencia auténtica.",
        "cover-charge-text": "Cargo por cubierto (Coperto): €2",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "I Taglieri (Platos)",
        "item-header": "Artículo",
        "price-header": "Precio",
        "calabria-docet-name": "Calabria Docet (para 2 personas)",
        "calabria-docet-desc": "soppressata dulce, salchicha dulce, salchicha picante, capocollo calabrés, filete calabrés, panceta calabresa, Pecorino d'Angiò curado, Pecorino Gran Riserva Piacenza, queso caciocavallo, mermeladas artesanales, miel de acacia artesanal",
        "piccola-calabria-name": "Tagliere La piccola Calabria",
        "piccola-calabria-desc": "soppressata dulce, salchicha dulce, capocollo calabrés, filete calabrés, panceta calabresa, Pecorino d'Angiò curado, queso caciocavallo, mermelada de naranja artesanal, miel de acacia artesanal",
        "vegetariano-name": "Vegetariano",
        "vegetariano-desc": "Carpaccio de remolacha, pan friselle pequeño, verduras calabresas en aceite, crudités y quesos según disponibilidad estacional",
        
        // Page 3: Special Platters
        "special-title": "Platos Especiales",
        "item-header2": "Artículo",
        "price-header2": "Precio",
        "stivale-name": "Lo Stivale dei Sapori (para 2 personas)",
        "stivale-desc": "Jamón Parma de 24 meses, capocollo Martina Franca, mortadela con almendras y pistacho, Pecorino d'Angiò curado, Pecorino Gran Riserva Piacenza, queso caciocavallo, mermeladas artesanales, miel de acacia artesanal",
        "trilogi-name": "Trilogi di Crudo (para 2 personas)",
        "trilogi-desc": "Culatello di Zibello DOP, jamón curado de cerdo negro, jamón curado Cinta Senese con queso burrata",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "Le Tartare (Platos de tartar)",
        "tartare-bovino-name": "Tartare di Bovino brasiliano e Tartufo umbro",
        "tartare-bovino-desc": "Tartar de carne brasileña con hojas verdes mixtas y trufa umbra",
        "tartare-tonno-name": "Tartare di tonno",
        "tartare-tonno-desc": "Tartar de atún con hojas verdes mixtas",
        "carpaccio-name": "Carpaccio di Black Angus",
        "carpaccio-desc": "Black Angus ahumado, aceite de trufa, trufa umbra premium, rúcula",
        "zizzona-title": "La Zizzona",
        "zizzona-name": "La Zizzona di Battipaglia",
        "zizzona-desc": "Mozzarella de búfala grande de Battipaglia con capocollo calabrés",
        
        // Page 5: Le Bruschette
        "bruschette-title": "Le Bruschette (en pan Altamura)",
        "item-header3": "Artículo",
        "price-header3": "Precio",
        "caciocavallo-name": "Bruschette con caciocavallo",
        "caciocavallo-desc": "Pan Altamura y queso Silano caciocavallo",
        "lardo-name": "Bruschette con Lardo di Patanegra",
        "lardo-desc": "Pan Altamura y manteca de Patanegra",
        "pomodori-name": "Bruschette con pomodori",
        "pomodori-desc": "Pan Altamura, tomates cherry, aceite de oliva virgen extra",
        "calabrese-name": "Bruschetta Calabrese",
        "calabrese-desc": "Pan Altamura con bacalao estilo calabrés, patatas y aceitunas",
        "stivale-bruschetta-name": "Bruschetta Lo Stivale",
        "stivale-bruschetta-desc": "Pan Altamura, filetes de anchoa cantábrica, cuadrados individuales de mantequilla",
        
        // Page 6: I Primi Piatti
        "primi-title": "I Primi Piatti (Primeros Platos)",
        "item-header4": "Artículo",
        "price-header4": "Precio",
        "bacco-name": "Spaghetto Bacco",
        "bacco-desc": "Espaguetis con vino calabrés y aceitunas horneadas",
        "maccheroni-name": "Maccheroni, salsiccia calabrese e porcini della Sila",
        "maccheroni-desc": "Maccheroni, salchicha calabresa fresca, setas porcini de Sila, aceite de oliva virgen extra",
        "orecchiette-name": "Orecchiette con cime di rapa",
        "orecchiette-desc": "Pasta orecchiette, hojas de nabo, aceite de oliva virgen extra, ajo y migas de pan",
        
        // Page 7: Le Grigliate
        "grigliate-title": "Le Grigliate (Platos a la Parrilla)",
        "calabria-griglia-name": "Calabria alla griglia",
        "calabria-griglia-desc": "Salchichas, hamburguesa, bombette, costillas de cerdo negro",
        "caciocavallo-griglia-name": "Caciocavallo alla griglia",
        "caciocavallo-griglia-desc": "Queso caciocavallo a la parrilla, hojas verdes mixtas y aceite de trufa",
        "fiorentina-name": "Fiorentina",
        "fiorentina-desc": "Peso entre 950g y 1250g",
        "entrecote-name": "Entrecôte",
        "entrecote-desc": "Peso entre 250g y 350g",
        "tomahawk-name": "Tomahawk",
        "wagyu-name": "Wagyu Kobe",
        "picagna-name": "Picanha",
        "picagna-desc": "Peso entre 290g y 330g",
        "spigola-name": "Spigola al forno",
        "spigola-desc": "Lubina al horno",
        
        // Page 8: I Contorni
        "contorni-title": "I Contorni (Acompañamientos)",
        "insalata-name": "Insalata mista",
        "insalata-desc": "Lechuga, achicoria, rúcula, tomates cherry, zanahorias, meloncelles/melones pepino",
        "patate-forno-name": "Patate al forno",
        "patate-forno-desc": "Patatas asadas y romero",
        "verdure-name": "Verdure di stagione",
        "verdure-desc": "Acelga estofada o coles de Bruselas salteadas",
        "patate-mblacchiuse-name": "Patate “mblacchiuse”",
        "patate-mblacchiuse-desc": "Pimientos fritos y patatas - estilo tradicional",
        
        // Page 9: Baby Menu
        "baby-title": "Menú Infantil",
        "pasta-sugo-name": "Pasta al sugo",
        "pasta-sugo-desc": "Pasta orecchiette con salsa de tomate",
        "baby-hamburger-name": "Hamburguesa Infantil",
        "baby-hamburger-desc": "Hamburguesa de pollo con acompañamiento de patatas fritas"
    },
    fr: {
        // Page 1: Cover & Info
        "restaurant-name": "Lo Stivale dei Sapori",
        "season-year": "Automne 2025",
        "cover-title": "Couverture et informations",
        "wait-message": "✨ Une attente qui a de l'importance Chez nous, l'attente n'est jamais vide. Chaque plat est préparé avec soin en utilisant des matières premières fraîches et sélectionnées. Le temps d'attente est rempli par notre engagement à vous offrir une expérience authentique.",
        "cover-charge-text": "Couvert (Coperto) : €2",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "I Taglieri (Plateaux)",
        "item-header": "Article",
        "price-header": "Prix",
        "calabria-docet-name": "Calabria Docet (pour 2 personnes)",
        "calabria-docet-desc": "soppressata douce, saucisse douce, saucisse épicée, capocollo calabrais, filet calabrais, pancetta calabraise, Pecorino d'Angiò vieilli, Pecorino Gran Riserva Piacenza, fromage caciocavallo, confitures artisanales, miel d'acacia artisanal",
        "piccola-calabria-name": "Tagliere La piccola Calabria",
        "piccola-calabria-desc": "soppressata douce, saucisse douce, capocollo calabrais, filet calabrais, pancetta calabraise, Pecorino d'Angiò vieilli, fromage caciocavallo, confiture d'orange artisanale, miel d'acacia artisanal",
        "vegetariano-name": "Végétarien",
        "vegetariano-desc": "Carpaccio de betterave, petit pain friselle, légumes calabrais à l'huile, crudités et fromages selon disponibilité saisonnière",
        
        // Page 3: Special Platters
        "special-title": "Plateaux Spéciaux",
        "item-header2": "Article",
        "price-header2": "Prix",
        "stivale-name": "Lo Stivale dei Sapori (pour 2 personnes)",
        "stivale-desc": "Jambon Parma de 24 mois, capocollo Martina Franca, mortadelle aux amandes et pistaches, Pecorino d'Angiò vieilli, Pecorino Gran Riserva Piacenza, fromage caciocavallo, confitures artisanales, miel d'acacia artisanal",
        "trilogi-name": "Trilogi di Crudo (pour 2 personnes)",
        "trilogi-desc": "Culatello di Zibello DOP, jambon cuit de porc noir, jambon cuit Cinta Senese avec fromage burrata",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "Le Tartare (Plats de tartare)",
        "tartare-bovino-name": "Tartare di Bovino brasiliano e Tartufo umbro",
        "tartare-bovino-desc": "Tartare de bœuf brésilien avec mélange de feuilles vertes et truffe ombrienne",
        "tartare-tonno-name": "Tartare di tonno",
        "tartare-tonno-desc": "Tartare de thon avec mélange de feuilles vertes",
        "carpaccio-name": "Carpaccio di Black Angus",
        "carpaccio-desc": "Black Angus fumé, huile de truffe, truffe ombrienne premium, roquette",
        "zizzona-title": "La Zizzona",
        "zizzona-name": "La Zizzona di Battipaglia",
        "zizzona-desc": "Mozzarella de bufflonne géante de Battipaglia avec capocollo calabrais",
        
        // Page 5: Le Bruschette
        "bruschette-title": "Le Bruschette (sur pain Altamura)",
        "item-header3": "Article",
        "price-header3": "Prix",
        "caciocavallo-name": "Bruschette con caciocavallo",
        "caciocavallo-desc": "Pain Altamura et fromage Silano caciocavallo",
        "lardo-name": "Bruschette con Lardo di Patanegra",
        "lardo-desc": "Pain Altamura et lard Patanegra",
        "pomodori-name": "Bruschette con pomodori",
        "pomodori-desc": "Pain Altamura, tomates cerises, huile d'olive vierge extra",
        "calabrese-name": "Bruschetta Calabrese",
        "calabrese-desc": "Pain Altamura avec morue façon calabraise, pommes de terre et olives",
        "stivale-bruschetta-name": "Bruschetta Lo Stivale",
        "stivale-bruschetta-desc": "Pain Altamura, filets d'anchois cantabriques, carrés de beurre individuels",
        
        // Page 6: I Primi Piatti
        "primi-title": "I Primi Piatti (Plats Principaux)",
        "item-header4": "Article",
        "price-header4": "Prix",
        "bacco-name": "Spaghetto Bacco",
        "bacco-desc": "Spaghetti au vin calabrais et olives rôties",
        "maccheroni-name": "Maccheroni, salsiccia calabrese e porcini della Sila",
        "maccheroni-desc": "Maccheroni, saucisse calabraise fraîche, champignons porcini de Sila, huile d'olive vierge extra",
        "orecchiette-name": "Orecchiette con cime di rapa",
        "orecchiette-desc": "Pâtes orecchiette, cimes de navets, huile d'olive vierge extra, ail et chapelure",
        
        // Page 7: Le Grigliate
        "grigliate-title": "Le Grigliate (Plats Grillés)",
        "calabria-griglia-name": "Calabria alla griglia",
        "calabria-griglia-desc": "Saucisses, hamburger, bombettes, côtes de porc noir",
        "caciocavallo-griglia-name": "Caciocavallo alla griglia",
        "caciocavallo-griglia-desc": "Fromage caciocavallo grillé, mélange de feuilles vertes et huile de truffe",
        "fiorentina-name": "Florentine",
        "fiorentina-desc": "Poids entre 950g et 1250g",
        "entrecote-name": "Entrecôte",
        "entrecote-desc": "Poids entre 250g et 350g",
        "tomahawk-name": "Tomahawk",
        "wagyu-name": "Wagyu Kobe",
        "picagna-name": "Picanha",
        "picagna-desc": "Poids entre 290g et 330g",
        "spigola-name": "Spigola al forno",
        "spigola-desc": "Loup de mer au four",
        
        // Page 8: I Contorni
        "contorni-title": "I Contorni (Accompagnements)",
        "insalata-name": "Insalata mista",
        "insalata-desc": "Laitue, chicorée, roquette, tomates cerises, carottes, meloncelles/concombres-melon",
        "patate-forno-name": "Patate al forno",
        "patate-forno-desc": "Pommes de terre rôties et romarin",
        "verdure-name": "Verdure di stagione",
        "verdure-desc": "Chou chinois braisé ou cimes de navets sautées",
        "patate-mblacchiuse-name": "Patate « mblacchiuse »",
        "patate-mblacchiuse-desc": "Poivrons frits et pommes de terre - style traditionnel",
        
        // Page 9: Baby Menu
        "baby-title": "Menu Enfant",
        "pasta-sugo-name": "Pasta al sugo",
        "pasta-sugo-desc": "Pâtes orecchiette avec sauce tomate",
        "baby-hamburger-name": "Hamburger Enfant",
        "baby-hamburger-desc": "Hamburger de poulet avec accompagnement de frites"
    },
    de: {
        // Page 1: Cover & Info
        "restaurant-name": "Lo Stivale dei Sapori",
        "season-year": "Herbst 2025",
        "cover-title": "Deckblatt & Info",
        "wait-message": "✨ Ein Warten, das sich lohnt Bei uns ist die Wartezeit niemals leer. Jedes Gericht wird mit Sorgfalt aus frischen und ausgewählten Rohstoffen zubereitet. Die Zeit, die Sie warten, wird von unserem Engagement erfüllt, Ihnen ein authentisches Erlebnis zu bieten.",
        "cover-charge-text": "Gedeckgebühr (Coperto): €2",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "I Taglieri (Platten)",
        "item-header": "Artikel",
        "price-header": "Preis",
        "calabria-docet-name": "Calabria Docet (für 2 Personen)",
        "calabria-docet-desc": "süße Soppressata, süße Wurst, würzige Wurst, kalabrisches Capocollo, kalabrisches Filet, kalabrischer Speck, gereifter Pecorino d'Angiò, Gran Riserva Piacenza Pecorino, Caciocavallo-Käse, handgemachte Konfitüren, handgemachter Akazienhonig",
        "piccola-calabria-name": "Tagliere La piccola Calabria",
        "piccola-calabria-desc": "süße Soppressata, süße Wurst, kalabrisches Capocollo, kalabrisches Filet, kalabrischer Speck, gereifter Pecorino d'Angiò, Caciocavallo-Käse, handgemachte Orangenmarmelade, handgemachter Akazienhonig",
        "vegetariano-name": "Vegetarisch",
        "vegetariano-desc": "Rote-Bete-Carpaccio, kleine Frisellen, kalabrisches Gemüse in Öl, Rohkost und Käse je nach saisonaler Verfügbarkeit",
        
        // Page 3: Special Platters
        "special-title": "Spezielle Platten",
        "item-header2": "Artikel",
        "price-header2": "Preis",
        "stivale-name": "Lo Stivale dei Sapori (für 2 Personen)",
        "stivale-desc": "24 Monate alter Parmaschinken, Martina Franca Capocollo, Mortadella mit Mandeln und Pistazien, gereifter Pecorino d'Angiò, Gran Riserva Piacenza Pecorino, Caciocavallo-Käse, handgemachte Konfitüren, handgemachter Akazienhonig",
        "trilogi-name": "Trilogi di Crudo (für 2 Personen)",
        "trilogi-desc": "Culatello di Zibello DOP, Schwarzer Schinken, Cinta Senese Schinken mit Burrata-Käse",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "Le Tartare (Tatar-Gerichte)",
        "tartare-bovino-name": "Tartare di Bovino brasiliano e Tartufo umbro",
        "tartare-bovino-desc": "Brasilianisches Rinderfilet-Tatar mit gemischtem Blattgrün und umbrischem Trüffel",
        "tartare-tonno-name": "Tartare di tonno",
        "tartare-tonno-desc": "Thunfisch-Tatar mit gemischtem Blattgrün",
        "carpaccio-name": "Carpaccio di Black Angus",
        "carpaccio-desc": "Geräucherter Black Angus, Trüffelöl, Premium-Umbrischer Trüffel, Rucola",
        "zizzona-title": "La Zizzona",
        "zizzona-name": "La Zizzona di Battipaglia",
        "zizzona-desc": "Große Büffelmozzarella aus Battipaglia mit kalabrischem Capocollo",
        
        // Page 5: Le Bruschette
        "bruschette-title": "Le Bruschette (auf Altamura-Brot)",
        "item-header3": "Artikel",
        "price-header3": "Preis",
        "caciocavallo-name": "Bruschette con caciocavallo",
        "caciocavallo-desc": "Altamura-Brot und Silano Caciocavallo Käse",
        "lardo-name": "Bruschette con Lardo di Patanegra",
        "lardo-desc": "Altamura-Brot und Patanegra-Schmalz",
        "pomodori-name": "Bruschette con pomodori",
        "pomodori-desc": "Altamura-Brot, Kirschtomaten, natives Olivenöl extra",
        "calabrese-name": "Bruschetta Calabrese",
        "calabrese-desc": "Altamura-Brot mit kalabrischem Stockfisch, Kartoffeln und Oliven",
        "stivale-bruschetta-name": "Bruschetta Lo Stivale",
        "stivale-bruschetta-desc": "Altamura-Brot, Cantabrian-Anchovisfilets, Einzelportionen Butterquadrate",
        
        // Page 6: I Primi Piatti
        "primi-title": "I Primi Piatti (Vorspeisen)",
        "item-header4": "Artikel",
        "price-header4": "Preis",
        "bacco-name": "Spaghetto Bacco",
        "bacco-desc": "Spaghetti mit kalabrischem Wein und gebackenen Oliven",
        "maccheroni-name": "Maccheroni, salsiccia calabrese e porcini della Sila",
        "maccheroni-desc": "Maccheroni, frische kalabrische Wurst, Sila-Porcini-Pilze, natives Olivenöl extra",
        "orecchiette-name": "Orecchiette con cime di rapa",
        "orecchiette-desc": "Orecchiette-Nudeln, Rapsblätter, natives Olivenöl extra, Knoblauch und Semmelbrösel",
        
        // Page 7: Le Grigliate
        "grigliate-title": "Le Grigliate (Gegrilltes)",
        "calabria-griglia-name": "Calabria alla griglia",
        "calabria-griglia-desc": "Wurst, Hamburger, Bombette, schwarze Schweinerippchen",
        "caciocavallo-griglia-name": "Caciocavallo alla griglia",
        "caciocavallo-griglia-desc": "Gegrillter Caciocavallo-Käse, gemischtes Blattgrün und Trüffelöl",
        "fiorentina-name": "Fiorentina",
        "fiorentina-desc": "Gewicht zwischen 950g und 1250g",
        "entrecote-name": "Entrecôte",
        "entrecote-desc": "Gewicht zwischen 250g und 350g",
        "tomahawk-name": "Tomahawk",
        "wagyu-name": "Wagyu Kobe",
        "picagna-name": "Picanha",
        "picagna-desc": "Gewicht zwischen 290g und 330g",
        "spigola-name": "Spigola al forno",
        "spigola-desc": "Ofenbarsch",
        
        // Page 8: I Contorni
        "contorni-title": "I Contorni (Beilagen)",
        "insalata-name": "Insalata mista",
        "insalata-desc": "Lollo, Radicchio, Rucola, Kirschtomaten, Karotten, Meloncelles/Gurken-Melonen",
        "patate-forno-name": "Patate al forno",
        "patate-forno-desc": "Gebackene Kartoffeln und Rosmarin",
        "verdure-name": "Verdure di stagione",
        "verdure-desc": "Geschmorte Chicorée oder gebratene Rapsblätter",
        "patate-mblacchiuse-name": "Patate „mblacchiuse“",
        "patate-mblacchiuse-desc": "Gebratene Paprika und Kartoffeln - traditionelle Art",
        
        // Page 9: Baby Menu
        "baby-title": "Kinder-Menü",
        "pasta-sugo-name": "Pasta al sugo",
        "pasta-sugo-desc": "Orecchiette mit Tomatensauce",
        "baby-hamburger-name": "Kinder-Hamburger",
        "baby-hamburger-desc": "Hähnchen-Hamburger mit Pommes frites"
    },
    zh: {
        // Page 1: Cover & Info
        "restaurant-name": "Lo Stivale dei Sapori",
        "season-year": "2025年秋",
        "cover-title": "封面与信息",
        "wait-message": "✨ 值得等待 在我们这里，等待从不空虚。每道菜都用心制作，使用新鲜精选的原材料。您等待的时间充满了我们为您提供真实体验的承诺。",
        "cover-charge-text": "餐具费（Coperto）：€2",
        
        // Page 2: I Taglieri (Platters)
        "taglieri-title": "I Taglieri（拼盘）",
        "item-header": "项目",
        "price-header": "价格",
        "calabria-docet-name": "卡拉布里亚多塞特（两人份）",
        "calabria-docet-desc": "甜味索普雷萨塔、甜香肠、辣香肠、卡拉布里亚卡波科洛、卡拉布里亚菲莱、卡拉布里亚培根、陈年安吉奥佩科里诺奶酪、格兰里塞尔瓦皮亚琴察佩科里诺奶酪、卡乔卡瓦洛奶酪、手工果酱、手工刺槐蜜",
        "piccola-calabria-name": "小卡拉布里亚拼盘",
        "piccola-calabria-desc": "甜味索普雷萨塔、甜香肠、卡拉布里亚卡波科洛、卡拉布里亚菲莱、卡拉布里亚培根、陈年安吉奥佩科里诺奶酪、卡乔卡瓦洛奶酪、手工橙子果酱、手工刺槐蜜",
        "vegetariano-name": "素食",
        "vegetariano-desc": "甜菜根薄片、小弗里斯面包、油浸卡拉布里亚蔬菜、生食和奶酪根据季节供应",
        
        // Page 3: Special Platters
        "special-title": "特色拼盘",
        "item-header2": "项目",
        "price-header2": "价格",
        "stivale-name": "Lo Stivale dei Sapori（两人份）",
        "stivale-desc": "24个月帕尔马火腿、马蒂纳弗兰卡卡波科洛、杏仁开心果摩泰台拉、陈年安吉奥佩科里诺奶酪、格兰里塞尔瓦皮亚琴察佩科里诺奶酪、卡乔卡瓦洛奶酪、手工果酱、手工刺槐蜜",
        "trilogi-name": "生肉三重奏（两人份）",
        "trilogi-desc": "齐贝洛DOP库拉泰洛、黑猪风干火腿、辛塔森内斯风干火腿配布拉塔奶酪",
        
        // Page 4: Le Tartare & La Zizzona
        "tartare-title": "鞑靼料理（鞑靼菜肴）",
        "tartare-bovino-name": "巴西牛肉鞑靼和翁布里亚松露",
        "tartare-bovino-desc": "巴西牛肉鞑靼配混合绿叶和翁布里亚松露",
        "tartare-tonno-name": "金枪鱼鞑靼",
        "tartare-tonno-desc": "金枪鱼鞑靼配混合绿叶",
        "carpaccio-name": "黑安格斯薄片",
        "carpaccio-desc": "烟熏黑安格斯、松露油、优质翁布里亚松露、芝麻菜",
        "zizzona-title": "大莫扎瑞拉",
        "zizzona-name": "巴蒂帕利亚大莫扎瑞拉",
        "zizzona-desc": "巴蒂帕利亚大水牛芝士配卡拉布里亚卡波科洛",
        
        // Page 5: Le Bruschette
        "bruschette-title": "意式烤面包片（阿尔塔穆拉面包）",
        "item-header3": "项目",
        "price-header3": "价格",
        "caciocavallo-name": "卡乔卡瓦洛烤面包片",
        "caciocavallo-desc": "阿尔塔穆拉面包和锡拉诺卡乔卡瓦洛奶酪",
        "lardo-name": "帕塔内格拉猪油烤面包片",
        "lardo-desc": "阿尔塔穆拉面包和帕塔内格拉猪油",
        "pomodori-name": "番茄烤面包片",
        "pomodori-desc": "阿尔塔穆拉面包、圣女果、特级初榨橄榄油",
        "calabrese-name": "卡拉布里亚烤面包片",
        "calabrese-desc": "阿尔塔穆拉面包配卡拉布里亚鳕鱼、土豆和橄榄",
        "stivale-bruschetta-name": "Lo Stivale烤面包片",
        "stivale-bruschetta-desc": "阿尔塔穆拉面包、坎塔布里亚凤尾鱼片、独立包装黄油块",
        
        // Page 6: I Primi Piatti
        "primi-title": "头盘（第一道菜）",
        "item-header4": "项目",
        "price-header4": "价格",
        "bacco-name": "酒神意大利面",
        "bacco-desc": "意大利面条配卡拉布里亚葡萄酒和烘烤橄榄",
        "maccheroni-name": "通心粉、卡拉布里亚香肠和西拉松茸",
        "maccheroni-desc": "通心粉、新鲜卡拉布里亚香肠、西拉松茸、特级初榨橄榄油",
        "orecchiette-name": "猫耳面配芜菁叶",
        "orecchiette-desc": "猫耳面、芜菁叶、特级初榨橄榄油、大蒜和面包屑",
        
        // Page 7: Le Grigliate
        "grigliate-title": "烧烤（烧烤菜品）",
        "calabria-griglia-name": "卡拉布里亚烧烤",
        "calabria-griglia-desc": "香肠、汉堡、炸弹肉丸、黑猪肉排骨",
        "caciocavallo-griglia-name": "卡乔卡瓦洛烧烤",
        "caciocavallo-griglia-desc": "烧烤卡乔卡瓦洛奶酪、混合绿叶和松露油",
        "fiorentina-name": "佛罗伦萨牛排",
        "fiorentina-desc": "重量在950克到1250克之间",
        "entrecote-name": "西冷牛排",
        "entrecote-desc": "重量在250克到350克之间",
        "tomahawk-name": "战斧牛排",
        "wagyu-name": "神户和牛",
        "picagna-name": "臀尖牛排",
        "picagna-desc": "重量在290克到330克之间",
        "spigola-name": "烤海鲈鱼",
        "spigola-desc": "烤海鲈鱼",
        
        // Page 8: I Contorni
        "contorni-title": "配菜（配菜）",
        "insalata-name": "混合沙拉",
        "insalata-desc": "生菜、菊苣、芝麻菜、圣女果、胡萝卜、瓜形黄瓜/黄瓜瓜",
        "patate-forno-name": "烤土豆",
        "patate-forno-desc": "烤土豆和迷迭香",
        "verdure-name": "时令蔬菜",
        "verdure-desc": "炖菊苣或炒芜菁叶",
        "patate-mblacchiuse-name": "“mblacchiuse”土豆",
        "patate-mblacchiuse-desc": "炸胡椒和土豆-传统风格",
        
        // Page 9: Baby Menu
        "baby-title": "儿童菜单",
        "pasta-sugo-name": "酱汁面",
        "pasta-sugo-desc": "猫耳面配番茄酱",
        "baby-hamburger-name": "儿童汉堡",
        "baby-hamburger-desc": "鸡肉汉堡配薯条"
    }
};

// Get the user's preferred language
function getUserLanguage() {
    // Check browser language settings
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    // Extract the base language code (first two characters)
    const baseLang = browserLang.substring(0, 2).toLowerCase();
    
    // Map language codes to available languages
    const langMap = {
        'en': 'en',
        'ar': 'ar',
        'es': 'es',
        'fr': 'fr',
        'de': 'de',
        'zh': 'zh'
    };
    
    // Return the mapped language or default to English
    return langMap[baseLang] || 'en';
}

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Navigation functionality
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.menu-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding section
            const targetSectionId = button.getAttribute('data-page');
            document.getElementById(targetSectionId).classList.add('active');
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Apply translations based on user's language
    const userLanguage = getUserLanguage();
    applyTranslations(userLanguage);
    
    // Set up navigation
    setupNavigation();
});