// Base de données des informations de métiers - ExploIFP3
// Structure: filename -> { titre, taches[], profil[] }

const metiersInfo = {
  "adjoint-administration-profil.PNG": {
    titre: "Adjoint Administration",
    taches: [
      "Préparer documents administratifs",
      "Planification budgétaire",
      "Gestion de l'information",
      "Soutien technique"
    ],
    profil: [
      "Autonomie",
      "Organisation",
      "Dynamisme",
      "Lecture/écriture fr/angl",
      "Leadership",
      "Goût pour la variété"
    ]
  },

  "acheteuse-des-commerces-de-detail-et-en-gros-profil.PNG": {
    titre: "Acheteuse de commerce",
    taches: [
      "Détermine les quantités et achète des marchandises pour la vente",
      "Rencontre des fournisseurs, négocie les prix et les modalités",
      "Supervise la distribution des marchandises aux différents points de vente",
      "Surveille les tendances et la concurrence dans son secteur d'activité"
    ],
    profil: [
      "Tu sais être persuasive",
      "Tu es sociable, autonome et méthodique",
      "Tu fais preuve de curiosité et d'intuition"
    ]
  },

  "acteur-profil.PNG": {
    titre: "Acteur",
    taches: [
      "Interprète et joue des personnages au théâtre, à la télévision, en publicité, au cinéma",
      "Participe à la création d'un spectacle et répète des rôles",
      "Collabore avec les metteurs en scène, réalisateurs, régisseurs et autres membres de l'équipe",
      "Enregistre des narrations, des voix hors champ et effectue du doublage"
    ],
    profil: [
      "Tu as des aptitudes pour la communication orale",
      "Tu es polyvalent, créatif, responsable et capable de gérer le stress",
      "Tu es généreux et tu fais preuve d'ouverture d'esprit"
    ]
  },

  "acupunteur-profil.PNG": {
    titre: "Acupuncteur",
    taches: [
      "Recueille l'information sur l'état de santé d'un patient et analyse les données",
      "Établit des liens entre la médecine traditionnelle orientale et des données biomédicales",
      "Localise des points d'acupuncture sur le corps",
      "Applique les traitements d'acupuncture (aiguilles, chaleur, pression) et assure le suivi"
    ],
    profil: [
      "Tu es minutieux, précis et tu as un bon jugement",
      "Tu es calme et tu as une bonne dextérité manuelle",
      "Tu fais preuve d'empathie, d'écoute et de discrétion"
    ]
  },

  "affuteur-profil.PNG": {
    titre: "Affûteur",
    taches: [
      "Repère et mesure des anomalies sur des scies et des couteaux",
      "Affûte, entretient et répare des scies circulaires, des scies à ruban, des scies guidées",
      "Affûte des couteaux et des outils spéciaux",
      "Ajuste et aligne la machinerie de sciage d'une usine et installe des scies en entreprise"
    ],
    profil: [
      "Tu es précis et tu as une bonne attention",
      "Tu possèdes une bonne dextérité manuelle",
      "Tu es minutieux, prudent et organisé",
      "Tu as une excellente vision"
    ]
  },

  "agent-de-conservation-profil.PNG": {
    titre: "Agent de conservation",
    taches: [
      "Patrouille en forêt et fait observer les règlements de chasse et de pêche sur un territoire",
      "Porte assistance aux visiteurs en forêt et guide les chasseurs et les pêcheurs",
      "Applique des techniques de pêche, de chasse et de piégeage",
      "Participe à l'aménagement des territoires fauniques et assiste les biologistes lors des inventaires"
    ],
    profil: [
      "Tu aimes travailler en plein air et dans la nature",
      "Tu es débrouillard et autonome",
      "Tu es en bonne condition physique",
      "Tu possèdes une bonne dextérité manuelle"
    ]
  },

  "agent-de-developpement-touristique-profil.PNG": {
    titre: "Agent de développement touristique",
    taches: [
      "Analyse le potentiel touristique d'une destination",
      "Crée des forfaits touristiques",
      "Élabore, commercialise et vend des produits et des services de voyagistes",
      "Effectue des tâches administratives"
    ],
    profil: [
      "Tu es ouvert d'esprit, curieux et créatif",
      "Tu es sociable",
      "Tu as le sens de l'organisation et de l'initiative",
      "Tu fais preuve d'autonomie"
    ]
  },

  "agent-de-soutien-la-recherche-profil.PNG": {
    titre: "Agent de soutien à la recherche",
    taches: [
      "Participe aux étapes de recherche en sciences humaines, administratives et santé publique",
      "Recueille des informations pour des bases de données et réalise des entrevues",
      "Compile des données et les présente sous forme de tableaux et de graphiques",
      "Collabore au développement d'outils de recherche"
    ],
    profil: [
      "Tu as le sens de l'observation",
      "Tu es méthodique et analytique",
      "Tu aimes travailler en équipe",
      "Tu as le sens de l'organisation et des priorités"
    ]
  },

  "agent-de-voyage-profil.PNG": {
    titre: "Agent de voyage",
    taches: [
      "Vend des voyages de tout genre : croisière, soleil, culture, excursion",
      "Planifie des itinéraires et effectue des réservations de vols, d'hôtels, de voiture",
      "Fait de la sollicitation et de la promotion auprès des clients potentiels",
      "Assure le service après-vente"
    ],
    profil: [
      "Tu aimes la géographie",
      "Tu as des aptitudes pour la vente et la gestion",
      "Tu es sociable, dynamique et courtois",
      "Tu as le sens de l'organisation"
    ]
  },

  "agent-des-services-correctionnels-profil.PNG": {
    titre: "Agent des services correctionnels",
    taches: [
      "Procède à l'admission des personnes",
      "Surveille les détenus, escorte des personnes et effectue des fouilles",
      "Élabore et applique des programmes de réinsertion sociale pour les personnes détenues et en fait le suivi",
      "Intervient dans des contextes de crise et en situation d'autorité"
    ],
    profil: [
      "Tu as le sens du devoir",
      "Tu es un bon observateur",
      "Tu fais preuve d'autonomie et de contrôle",
      "Tu es en excellente condition physique et résistant au stress"
    ]
  },

  "agent-en-soutien-informatique-profil.PNG": {
    titre: "Agent en soutien informatique",
    taches: [
      "Installe, configure et met à jour des systèmes d'exploitation, des logiciels et des périphériques dans les ordinateurs",
      "Gère les accès d'un réseau, surveille les opérations de sauvegarde et les procédures de sécurité",
      "Dépanne et fournit de l'assistance technique auprès des usagers",
      "Dans un commerce, conseille les clients"
    ],
    profil: [
      "Tu es capable de t'adapter aux changements",
      "Tu es autonome et débrouillard",
      "Tu aimes résoudre des problèmes",
      "Tu as des aptitudes pour le travail d'équipe et le service au client"
    ]
  },

  "agent-et-courtier-assurance-profil.PNG": {
    titre: "Agent et courtier d'assurance",
    taches: [
      "Analyse les besoins du client en matière d'assurances personnelles et d'assurances de dommages",
      "Offre des conseils professionnels et recommande aux clients des produits d'assurance",
      "À titre de courtier, négocie avec les assureurs pour trouver le meilleur produit",
      "À titre d'agent, vend les différents produits d'assurance"
    ],
    profil: [
      "Tu as du talent pour la vente pour le service à la clientèle",
      "Tu as une bonne capacité d'analyse",
      "Tu es honnête, discret et minutieux"
    ]
  },

  "aide-de-maintien-domicile-profil.PNG": {
    titre: "Aide de maintien à domicile",
    taches: [
      "Donne des soins d'assistance pour le maintien des personnes à domicile",
      "Aide et accompagne les gens en perte d'autonomie dans les activités quotidiennes (se lever, se nourrir, se laver, etc.)",
      "Prépare des repas et fait le ménage au domicile de la personne",
      "Socialise avec la personne et anime des activités de vie"
    ],
    profil: [
      "Tu veux aider les autres",
      "Tu fais preuve d'empathie, de patience et d'écoute",
      "Tu as un bon jugement en cas d'urgence"
    ]
  },




  "animateur-3d-profil.PNG": {
    titre: "Animateur 3D",
    taches: [
      "Conçoit et modélise des personnages et des décors.",
      "Élabore des story-boards.",
      "Utilise des logiciels spécialisés en traitement d’images (numérisation, acquisition, montage, composition, par exemple).",
      "Crée des effets visuels numériques."
    ],
    profil: [
      "Tu as des aptitudes pour le dessin et la communication.",
      "Tu es créatif.",
      "Tu aimes travailler en équipe."
    ]
  },

  "animateur-en-sports-et-loisirs-profil.PNG": {
    titre: "Animateur en sports et loisirs",
    taches: [
      "Organise des activités de sport et de loisir.",
      "Anime des activités de sport et de loisir auprès de différentes clientèles et dans différents milieux (scolaire, municipal, institutionnel et communautaire).",
      "Gère les ressources matérielles et financières.",
      "Recrute et supervise du personnel."
    ],
    profil: [
      "Tu es actif et tu aimes bouger.",
      "Tu es un bon communicateur et un leader naturel.",
      "Tu es organisé, responsable et dynamique.",
      "Tu possèdes un esprit d’initiative."
    ]
  },

  "animateur-radio-profil.PNG": {
    titre: "Animateur radio",
    taches: [
      "Effectue des recherches et élabore la feuille de route de l’émission.",
      "Anime ou co-anime des segments ou des émissions à la radio.",
      "Effectue la mise en ondes des émissions.",
      "Effectue des reportages et rédige des nouvelles radiophoniques."
    ],
    profil: [
      "Tu as des aptitudes pour la communication.",
      "Tu es polyvalent, responsable et capable de gérer le stress.",
      "Tu aimes parler en public."
    ]
  },

  "arrangeur-musical-profil.PNG": {
    titre: "Arrangeur musical",
    taches: [
      "Compose des pièces de musique : pop, rock, jazz, folklorique, World Beat, etc.",
      "Arrange ou adapte des pièces de musique.",
      "Compose des chansons.",
      "Joue des instruments de musique."
    ],
    profil: [
      "Tu as des aptitudes pour la musique.",
      "Tu es créatif.",
      "Tu possèdes un bon sens du rythme.",
      "Tu es discipliné, polyvalent et rigoureux."
    ]
  },

  "artisan-profil.PNG": {
    titre: "Artisan",
    taches: [
      "Crée des produits originaux en un seul exemplaire ou en série limitée en tissus, en bois, en cuir, en métal, en céramique, en verre, en textile, etc.",
      "Fabrique et répare des instruments à cordes (guitare et violon par exemple).",
      "Effectue des recherches d’idées et développe des concepts.",
      "Expérimente des possibilités de création."
    ],
    profil: [
      "Tu es créatif.",
      "Tu as de bonnes habiletés manuelles et un sens esthétique développé.",
      "Tu es organisé.",
      "Tu es polyvalent, curieux et minutieux."
    ]
  },

  "artiste-de-cirque-profil.PNG": {
    titre: "Artiste de cirque",
    taches: [
      "Élabore des numéros de cirque.",
      "Participe à la conception d’un spectacle.",
      "Exécute son numéro devant le public selon les disciplines du cirque (manipulation, équilibre, acrobatie, art équestre, art clownesque, etc.).",
      "Intègre le chant, la danse ou le théâtre lors de sa prestation."
    ],
    profil: [
      "Tu en excellente condition physique.",
      "Tu es passionné, rigoureux et autonome.",
      "Tu aimes travailler en équipe."
    ]
  },

  "assembleur-de-materiel-electronique-profil.PNG": {
    titre: "Assembleur de matériel électronique",
    taches: [
      "Fabrique et assemble des fils et des câbles pour former des faisceaux.",
      "Effectue des travaux de soudure sur des composants électriques et électroniques.",
      "Réalise des tests de fonctionnement.",
      "Effectue l’entretien de composants d’un système optique photonique."
    ],
    profil: [
      "Tu es méticuleux.",
      "Tu es polyvalent, appliqué et responsable.",
      "Tu es habile de tes mains et tu aimes résoudre des problèmes."
    ]
  },

  "assembleur-de-plaques-et-de-charpentes-metalliques-profil.PNG": {
    titre: "Assembleur de plaques et charpentes",
    taches: [
      "Mesure, trace, coupe et perce des tôles, des plaques et des profilés.",
      "Fabrique des structures métalliques : poutres, colonnes, escaliers, rampes, etc.",
      "Façonne des pièces.",
      "Fabrique des éléments architecturaux : balcons, mains courantes, crinolines, etc."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu possèdes une excellente dextérité manuelle.",
      "Tu es minutieux, précis et responsable."
    ]
  },

  "assembleur-de-produits-de-plastique-profil.PNG": {
    titre: "Assembleur de produits de plastique",
    taches: [
      "Fabrique des gabarits et des moules en matériaux composites.",
      "Fabrique des pièces par procédés à moule ouvert et à moule fermé.",
      "Assemble et colle les pièces moulées.",
      "Stratifie des pièces."
    ],
    profil: [
      "Tu possèdes une excellente dextérité manuelle.",
      "Tu as une bonne vision.",
      "Tu es capable de visualiser des formes dans l’espace.",
      "Tu es minutieux, précis et endurant."
    ]
  },

  "assistant-technique-en-pharmacie-profil.PNG": {
    titre: "Assistant technique en pharmacie",
    taches: [
      "Reçoit les clients et répond à leurs demandes.",
      "Prépare les ordonnances sous la supervision du pharmacien (préparations non stériles et stériles).",
      "Tient à jour les dossiers informatisés des clients.",
      "Effectue des transactions à la caisse."
    ],
    profil: [
      "Tu es discret, respectueux et honnête.",
      "Tu aimes travailler en équipe.",
      "Tu as une bonne capacité d’écoute."
    ]
  },

  "assistante-dentaire-profil.PNG": {
    titre: "Assistante dentaire",
    taches: [
      "Prépare la salle de traitement et les instruments.",
      "Assiste le dentiste lors des traitements (obturation, orthodontie, prothèses dentaires, etc.).",
      "Assiste le dentiste au moment des radiographies.",
      "Donne des conseils d’hygiène et de prévention."
    ],
    profil: [
      "Tu possèdes une bonne acuité visuelle.",
      "Tu es une personne ordonnée et discrète.",
      "Tu as le souci de la propreté.",
      "Tu es méthodique."
    ]
  },

  "bijoutier-profil.PNG": {
    titre: "Bijoutier",
    taches: [
      "Conçoit des bijoux.",
      "Fabrique des bijoux à partir de métaux et d’alliages ainsi qu’avec des pierres précieuses, semi-précieuses et naturelles.",
      "Soude, polit, sertit, plaque, grave et nettoie les bijoux.",
      "Répare des bijoux."
    ],
    profil: [
      "Tu possèdes une bonne dextérité manuelle.",
      "Tu es patient, autonome et minutieux.",
      "Tu as une excellente vision."
    ]
  },

  "boucher-profil.PNG": {
    titre: "Boucher",
    taches: [
      "Effectue la réception et l’entreposage des viandes (bœuf, porc, volailles, etc.).",
      "Débite des pièces de viande.",
      "Effectue des coupes de détail.",
      "Tranche, hache, pare ou façonne les viandes."
    ],
    profil: [
      "Tu es en bonne condition physique et tu résiste au froid.",
      "Tu es rapide, minutieux et courtois.",
      "Tu possèdes une excellente dextérité manuelle."
    ]
  },

  "boulanger-profil.PNG": {
    titre: "Boulanger",
    taches: [
      "Confectionne des pains, des viennoiseries, des brioches et d’autres produits de boulangerie.",
      "Prépare les ferments et les levains.",
      "Pétrit la pâte, la coupe et la façonne.",
      "Cuit les pains et place les garnitures."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu es capable de travailler sous pression.",
      "Tu fais preuve d’une bonne endurance physique."
    ]
  },

  "briqueteur-macon-profil.PNG": {
    titre: "Briqueteur-maçon",
    taches: [
      "Taille, scie et pose des briques, des blocs de pierre, des blocs de béton, des blocs de verre, etc.",
      "Installe des éléments architecturaux.",
      "Prépare le mortier et tire les joints.",
      "Répare de la maçonnerie."
    ],
    profil: [
      "Tu es minutieux et perfectionniste.",
      "Tu possèdes une bonne endurance physique.",
      "Tu fais preuve de dextérité manuelle.",
      "Tu es productif."
    ]
  },

  "calorifugeur-profil.PNG": {
    titre: "Calorifugeur",
    taches: [
      "Installe de l’isolant souple et rigide sur de la tuyauterie, des conduits d’air, des équipements industriels et des réservoirs.",
      "Fabrique des protections en métal et en PVC et les installe sur les isolants.",
      "Installe des systèmes coupe-feu à l’intérieur des murs et des planchers.",
      "Enlève des matériaux contaminés dans un environnement de travail sécurisé."
    ],
    profil: [
      "Tu es minutieux, débrouillard et précis.",
      "Tu es perfectionniste.",
      "Tu es habile de tes mains.",
      "Tu aimes travailler dans des positions (postures) variées."
    ]
  },

  "carreleur-profil.PNG": {
    titre: "Carreleur",
    taches: [
      "Prépare les surfaces en appliquant des produits de liaison ou des ancrages.",
      "Prépare le mortier.",
      "Taille et pose des carreaux de céramique.",
      "Taille et pose des dalles intérieures et extérieures en marbre, en terrazzo, en ardoise, etc."
    ],
    profil: [
      "Tu es minutieux et perfectionniste.",
      "Tu fais preuve de dextérité manuelle.",
      "Tu es en bonne condition physique.",
      "Tu aimes les formes symétriques."
    ]
  },

  "carrossier-profil.PNG": {
    titre: "Carrossier",
    taches: [
      "Redresse les châssis des véhicules.",
      "Répare et remplace les éléments endommagés des véhicules (porte, capot, pare-choc, etc.).",
      "Remplace des accessoires mécaniques et électriques.",
      "Peint au pistolet les éléments de carrosserie."
    ],
    profil: [
      "Tu possèdes une excellente dextérité manuelle.",
      "Tu as le souci du détail.",
      "Tu es appliqué, méthodique et débrouillard.",
      "Tu es en excellente santé."
    ]
  },

  "charpentier-menuisier-profil.PNG": {
    titre: "Charpentier-menuisier",
    taches: [
      "Construit des coffrages pour des fondations.",
      "Construit des murs intérieurs et extérieurs.",
      "Installe des portes, des cadres de fenêtres, des escaliers, des armoires, etc.",
      "Pose des planchers."
    ],
    profil: [
      "Tu aimes le bois.",
      "Tu es minutieux et perfectionniste.",
      "Tu aimes lire des plans et tu es doué en calcul.",
      "Tu as une excellente vision et un bon sens de l’équilibre, même en hauteur."
    ]
  },

  "chaudronnier-profil.PNG": {
    titre: "Chaudronnier",
    taches: [
      "Construit, assemble, modifie, entretient et répare des chaudières, des générateurs de vapeur, des réservoirs et des systèmes d’épuration.",
      "Découpe et assemble des matériaux en acier et des matériaux composites.",
      "Soude des plaques de métal.",
      "Utilise du matériel de levage (treuils et palans, par exemple) et de l’équipement d’accès (charriots élévateurs et plateformes, par exemple)."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu aimes travailler à l’extérieur.",
      "Tu aimes travailler dans des positions (postures) variées.",
      "Tu as de bonnes habiletés manuelles et une bonne condition physique."
    ]
  },

  "cimentier-applicateur-profil.PNG": {
    titre: "Cimentier-applicateur",
    taches: [
      "Prépare et met en place différentes surfaces en béton : planchers, trottoirs, bordures, par exemple.",
      "Répare des surfaces de béton.",
      "Installe des membranes d’imperméabilisation sur les surfaces de béton.",
      "Réalise des revêtements en béton décoratif, en crépi et en acrylique."
    ],
    profil: [
      "Tu aimes travailler à l’extérieur.",
      "Tu fais preuve de dextérité manuelle.",
      "Tu es en bonne condition physique."
    ]
  },

  "classeur-de-bois-debite-profil.PNG": {
    titre: "Classeur de bois débité",
    taches: [
      "Dirige les opérations de séchage du bois.",
      "Mesure et évalue la qualité et le prix des planches de bois.",
      "Repère les défauts présents dans le bois.",
      "Effectue le classement de feuillus, de pins blancs, de pins rouges, ainsi que le classement d’autres résineux."
    ],
    profil: [
      "Tu aimes travailler en plein air et à l’intérieur.",
      "Tu as un bon sens de l’observation.",
      "Tu es actif, autonome et minutieux."
    ]
  },

  "coiffeuse-profil.PNG": {
    titre: "Coiffeuse",
    taches: [
      "Coupe les cheveux selon des styles variés (gradué, uniforme, texturé, etc.).",
      "Réalise des mèches, des permanentes, des mises en plis, des rallonges et des coiffures spécialisées.",
      "Taille les barbes et les moustaches.",
      "Applique des produits colorants, des shampoings et des produits défrisants."
    ],
    profil: [
      "Tu es habile de tes mains et tu as le souci du détail.",
      "Tu aimes parler aux gens.",
      "Tu aimes les couleurs.",
      "Tu es créatrice."
    ]
  },

  "commis-aux-pices-mcaniques-et-accessoires-profil.PNG": {
    titre: "Commis aux pièces mécaniques",
    taches: [
      "Effectue la réception des marchandises pour des concessionnaires et des commerces indépendants",
      "Accueille les clients et les renseigne sur les pièces de rechange, les outils et les accessoires",
      "Effectue des recherches de pièces et d'accessoires pour des véhicules automobiles, des véhicules de loisirs, et de la machinerie lourde",
      "Tient à jour des registres de vente et effectue la facturation"
    ],
    profil: [
      "Tu as des aptitudes pour la vente",
      "Tu es autonome, sociable et courtois",
      "Tu as des habiletés en communication et tu aimes vulgariser l'information",
      "Tu es capable de travailler sous pression"
    ]
  },

  "commis-la-comptabilite-profil.PNG": {
    titre: "Commis à la comptabilité",
    taches: [
      "Calcule et prépare des documents comme des factures, des relevés d'inventaire, des fiches de paye",
      "Gère l'encaisse (dépôt, transfert de fonds, petite caisse)",
      "Gère des comptes fournisseurs et des comptes clients",
      "Produit des déclarations de revenus",
      "Consigne dans un registre informatique les transactions",
      "Effectue d'autres tâches de bureau (classement, traitement de texte, etc.)"
    ],
    profil: [
      "Tu es honnête, discret et minutieux",
      "Tu as une bonne capacité de concentration et des aptitudes en calcul"
    ]
  },

  "concepteur-de-costumes-et-accessoires-profil.PNG": {
    titre: "Concepteur de costumes et accessoires",
    taches: [
      "Conçoit, réalise ou fait la recherche de costumes et des accessoires pour la scène (théâtre, opéra, etc.) la télévision, le vidéo, le cinéma, les événements et les expositions.",
      "Collabore avec les metteurs en scène, les réalisateurs, les régisseurs, les scénographes, les éclairagistes et d’autres membres de l’équipe de création.",
      "Utilise une variété de matériaux : papiers, tissus, bois,  peintures, etc.",
      "Coordonne les équipes qui réalisent les costumes et les  accessoires."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu aimes travailler en équipe.",
      "Tu es débrouillard et ton sens esthétique est bien développé."
    ]
  },

  "concepteur-exposition-profil.PNG": {
    titre: "Concepteur d'exposition",
    taches: [
      "Conçoit des décors d’événements et des décors thématiques.",
      "Aménage des vitrines et des stands d\'exposition.",
      "Propose des solutions créatives sous forme d’esquisses, de concept couleur, de maquettes, etc.",
      "Fabrique des accessoires et des éléments de décor."
    ],
    profil: [
      "Tu es créatif.",
      "Tu as des aptitudes pour le dessin et un bon sens esthétique.",
      "Tu es minutieux et organisé.",
      "Tu as des habiletés en communication et en dessin."
    ]
  },

  "concierge-profil.PNG": {
    titre: "Concierge",
    taches: [
      "Effectue des tâches d’entretien ménager.",
      "Effectue des réparations mineures (menuiserie et plomberie, par exemple).",
      "Assure l’entretien des systèmes de plomberie, de chauffage, de ventilation, etc.",
      "S’occupe, en partie, de la gestion de l’immeuble : location, plaintes, loyers, etc."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu es débrouillard, autonome et minutieux.",
      "Tu aimes travailler seul.",
      "Tu aimes les relations de voisinage."
    ]
  },

  "conducteur-de-camions-profil.PNG": {
    titre: "Conducteur de camions",
    taches: [
      "Planifie les voyages de livraison par camion.",
      "Conduit des camions sur des longues distances ou sur des distances courtes.",
      "Veille au chargement et au déchargement de la marchandise.",
      "Inspecte son véhicule."
    ],
    profil: [
      "Tu aimes la route et les voyages.",
      "Tu es autonome et responsable.",
      "Tu possèdes une bonne vision, une bonne endurance physique et de bons réflexes.",
      "Tu aimes gérer ton temps."
    ]
  },

  "conducteur-de-machines-dabattage-darbres-profil.PNG": {
    titre: "Conducteur de machines d'abattage",
    taches: [
      "Opère une machine de récolte de bois : tête multifonctionnelle, abatteuse-groupeuse, porteur ou transporteur de bois et débardeur à grappins, par exemple.",
      "Coupe, ébranche, tronçonne (façonne) et transporte les arbres.",
      "Assure l’entretien et le dépannage des machines."
    ],
    profil: [
      "Tu aimes travailler au grand air et dans la nature.",
      "Tu es autonome, débrouillard et tu es prêt à travailler en région éloignée.",
      "Tu as de bons réflexes.",
      "Tu as une excellente vision et une bonne endurance physique."
    ]
  },

  "conducteur-engins-de-chantier-profil.PNG": {
    titre: "Conducteur d'engins de chantier",
    taches: [
      "Opère une pelle mécanique, un bouteur (bulldozer), une niveleuse (grader), une épandeuse d’asphalte ou de béton et un rouleau.",
      "Creuse le terrain et charge les camions.",
      "Construit les fondations des routes, des autoroutes et des approches de ponts.",
      "Nivelle les chemins et les talus."
    ],
    profil: [
      "Tu aimes travailler au grand air.",
      "Tu possèdes une excellente dextérité manuelle et de bons réflexes.",
      "Tu as une bonne vision et une bonne endurance physique.",
      "Tu es autonome et tu es capable de travailler en équipe."
    ]
  },

  "conseiller-en-sante-et-securite-au-travail-profil.PNG": {
    titre: "Conseiller en santé et sécurité",
    taches: [
      "Inspecte les milieux de travail pour s’assurer qu’il n’y a pas de danger à la sécurité des travailleurs.",
      "Contrôle les conditions sanitaires et environnementales d’établissements publics et d’usines.",
      "Effectue des analyses d’échantillons d’eau, d’émissions atmosphériques, de sols contaminés, etc.",
      "Participe au développement et à l’implantation d’un programme de gestion environnementale."
    ],
    profil: [
      "Tu es soucieux de l’environnement et de la santé publique.",
      "Tu as de l’intérêt pour le travail de laboratoire.",
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu possèdes un bon sens de l’observation."
    ]
  },

  "conseiller-en-vente-au-detail-profil.PNG": {
    titre: "Conseiller en vente au détail",
    taches: [
      "Accueille la clientèle.",
      "Conseille la clientèle en matière d’achat.",
      "Prépare des contrats de vente, des factures et perçoit les paiements.",
      "Effectue le service après-vente."
    ],
    profil: [
      "Tu as des habiletés en communication.",
      "Tu es autonome, sociable et courtois.",
      "Tu es dynamique.",
      "Tu es capable de travailler sous pression."
    ]
  },

  "conseiller-technique-en-entretien-et-reparation-de-vehicules-profil.PNG": {
    titre: "Conseiller technique automobile",
    taches: [
      "Conseille la clientèle au sujet des réparations et des travaux d’entretien à effectuer sur des automobiles et d’autres types de véhicules.",
      "Donne de l’information la clientèle en ce qui a trait aux différents systèmes et pièces mécaniques présents sur les véhicules (frein, direction, transmission, etc.).",
      "Coordonne les travaux dans l’atelier mécanique et établit l’horaire des mécaniciens.",
      "Traite les garanties."
    ],
    profil: [
      "Tu as des aptitudes pour le service à la clientèle.",
      "Tu es sociable, courtois et organisé.",
      "Tu as l’esprit d’analyse et tu aimes résoudre des problèmes."
    ]
  },

  "controleur-aerien-profil.PNG": {
    titre: "Contrôleur aérien",
    taches: [
      "Analyse des cartes de navigation aérienne et des renseignements météorologiques",
      "Établit les plans de vol, les devis de poids et les devis de centrage de l'avion",
      "S'assure de l'approvisionnement de l'avion en ce qui a trait au carburant, au matériel et à la nourriture",
      "Assure la communication avec l'équipage et les pilotes"
    ],
    profil: [
      "Tu as d'excellentes aptitudes en français et en anglais parlé",
      "Tu as de l'intérêt pour la résolution de problèmes",
      "Tu es organisé, responsable et résistant au stress"
    ]
  },

  "coordonnateur-de-la-logistique-de-production-graphique-profil.PNG": {
    titre: "Coordonnateur logistique graphique",
    taches: [
      "Conseille la clientèle pour des projets d’impression (livres, emballages, articles promotionnels, etc.).",
      "Analyse les caractéristiques des produits à imprimer.",
      "Estime les coûts de production.",
      "Planifie les étapes de réalisation du projet."
    ],
    profil: [
      "Tu es débrouillard, flexible et bon communicateur.",
      "Tu as le sens de l’organisation et de la gestion.",
      "Tu as des aptitudes pour la vente et pour l’anglais parlé et écrit.",
      "Tu es résistant au stress."
    ]
  },

  "couturiere-profil.PNG": {
    titre: "Couturière",
    taches: [
      "Transforme des patrons.",
      "Confectionne des robes, des manteaux, des gilets et des vêtements sur mesure.",
      "Effectue la finition et la retouche de vêtements.",
      "Ajuste, modifie et répare des vêtements."
    ],
    profil: [
      "Tu es minutieuse, organisée et autonome.",
      "Tu possèdes une excellente vision.",
      "Tu es précise."
    ]
  },

  "couvreur-profil.PNG": {
    titre: "Couvreur",
    taches: [
      "Prépare le platelage et installe l’isolant.",
      "Pose différents types de revêtements de toiture (bardeaux, membranes monocouches et multicouches, tôles non soudées, par exemple).",
      "Utilise des apprêts, des adhésifs, du bitume, de la colle, des rubans, des détecteurs de chaleur, etc.",
      "Inspecte, trouve les infiltrations (fuites) et répare les toitures."
    ],
    profil: [
      "Tu aimes travailler à l’extérieur.",
      "Tu as de bonnes habiletés manuelles.",
      "Tu es en excellente condition physique.",
      "Tu ne souffres pas de vertige."
    ]
  },

  "cuisinier-profil.PNG": {
    titre: "Cuisinier",
    taches: [
      "Conçoit des menus.",
      "Prépare des soupes, des potages et des entrées.",
      "Fait sauter, griller, braiser ou frire des viandes, des légumes et des poissons.",
      "Prépare des sauces."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu as un bon esprit d’équipe.",
      "Tu es capable de travailler sous pression."
    ]
  },

  "danseur-profil.PNG": {
    titre: "Danseur",
    taches: [
      "Interprète des œuvres de danse classique ou contemporaine devant le public.",
      "S’entraîne et adopte une hygiène de vie adaptée aux exigences du métier.",
      "Répète en compagnie d’autres danseurs et du chorégraphe.",
      "Participe aux activités de la production."
    ],
    profil: [
      "Tu es en excellente condition physique.",
      "Tu es passionné, rigoureux et créatif.",
      "Tu aimes travailler en équipe."
    ]
  },

  "dcoratrice-dintrieur-profil.PNG": {
    titre: "Décoratrice d'intérieur",
    taches: [
      "Produit des esquisses et des plans de décoration intérieure pour des résidences, des espaces commerciaux et des bureaux",
      "Procède à l'aménagement et à la présentation visuelle d'espaces commerciaux, de vitrines, de stands d'exposition, etc.",
      "Propose des solutions en matière de stores, d'armoires de mobiliers, de matériaux, etc.",
      "Fabrique des éléments de décor"
    ],
    profil: [
      "Tu es créative",
      "Tu as des habiletés en communication et en dessin",
      "Tu es polyvalent, curieux et minutieux"
    ]
  },

  "denturologiste-profil.PNG": {
    titre: "Denturologiste",
    taches: [
      "Rencontre les patients, analyse leurs besoins et établit un plan de traitement denturologique.",
      "Prend des empreintes dentaires et fabrique un porte-empreinte.",
      "Conçoit, fabrique et répare des prothèses buccales (fixes et amovibles).",
      "Fabrique des protecteurs buccaux."
    ],
    profil: [
      "Tu as des habiletés pour le service à la clientèle.",
      "Tu as le goût de l\'entrepreneuriat.",
      "Tu as une excellente dextérité manuelle.",
      "Tu as le sens de l’esthétisme."
    ]
  },

  "designer-dintrieur-profil.PNG": {
    titre: "Designer d'intérieur",
    taches: [
      "Produit des esquisses et des plans de décoration intérieure pour des résidences, des espaces commerciaux et des bureaux",
      "Procède à l'aménagement et à la présentation visuelle d'espaces commerciaux, de vitrines, de stands d'exposition, etc.",
      "Propose des solutions en matière de stores, d'armoires de mobiliers, de matériaux, etc.",
      "Fabrique des éléments de décor"
    ],
    profil: [
      "Tu es créative",
      "Tu as des habiletés en communication et en dessin",
      "Tu es polyvalent, curieux et minutieux"
    ]
  },

  "designer-industriel-profil.PNG": {
    titre: "Designer industriel",
    taches: [
      "Analyse des produits au regard de leur utilisation et de leur fonctionnement.",
      "Rassemble des données sur les matériaux et les procédés de fabrication.",
      "Développe et dessine des produits industriels de forme esthétique dans le respect des règles ergonomiques.",
      "Réalise des modèles 3D et des prototypes."
    ],
    profil: [
      "Tu es créatif.",
      "Tu as des habiletés en dessin et un sens esthétique développé.",
      "Tu t’intéresses au fonctionnement des objets, aux nouveaux produits et aux nouvelles technologies.",
      "Tu es polyvalent, curieux et minutieux."
    ]
  },

  "dessinateur-de-mode-profil.PNG": {
    titre: "Dessinateur de mode",
    taches: [
      "Décèle des tendances dans le domaine de la mode.",
      "Effectue des recherches d’idées et développe des concepts de styles de vêtements.",
      "Dessine des collections de vêtements.",
      "Réalise des prototypes avec différentes matières premières."
    ],
    profil: [
      "Tu es créatif.",
      "Tu es organisé et autonome.",
      "Tu aimes travailler en équipe.",
      "Tu as un sens esthétique très développé."
    ]
  },

  "dessinateur-en-architecture-profil.PNG": {
    titre: "Dessinateur en architecture",
    taches: [
      "Dessine des plans de résidences familiales et de résidences à logements.",
      "Dessine des plans de structure en acier et en béton.",
      "Dessine des plans de mécanique du bâtiment (plomberie, ventilation et électricité)."
    ],
    profil: [
      "Tu as des habiletés en dessin et en calcul.",
      "Tu es débrouillard et méticuleux.",
      "Tu as le souci du détail."
    ]
  },

  "dessinateur-industriel-profil.PNG": {
    titre: "Dessinateur industriel",
    taches: [
      "Dessine des moteurs et des mécanismes à l’aide de logiciels.",
      "Dessine des pièces et des éléments d’assemblage à l’aide de logiciels.",
      "Dessine des machines industrielles élaborées par des ingénieurs."
    ],
    profil: [
      "Tu as des habiletés en dessin et en calcul.",
      "Tu es débrouillard et méticuleux.",
      "Tu as le souci du détail."
    ]
  },

  "directeur-des-services-hebergement-profil.PNG": {
    titre: "Directeur des services d'hébergement",
    taches: [
      "Planifie, coordonne et dirige les activités des hôtels, des lieux de villégiature et des résidences.",
      "Gère les ressources humaines, matérielles et financières.",
      "S’assure de la qualité du service à la clientèle et résout les plaintes.",
      "Voit au respect de la règlementation en matière de services d’hébergement."
    ],
    profil: [
      "Tu as le sens des responsabilités.",
      "Tu as un bon leadership.",
      "Tu sais faire preuve d’autorité.",
      "Tu as du talent pour la vente et le service à la clientèle."
    ]
  },

  "ebniste-profil.PNG": {
    titre: "Ébéniste",
    taches: [
      "Dessine et fabrique des meubles, des modules et des produits en bois",
      "Coupe, déligne, colle, assemble et sable le bois",
      "Fabrique des gabarits et des assemblages (aronde, mortaise, tenon, etc.)",
      "Effectue la finition (peinture, vernis, placage, etc.)"
    ],
    profil: [
      "Tu aimes le bois et les essences de toutes sortes",
      "Tu as de bonnes habiletés manuelles et en dessin",
      "Tu es minutieux et créatif",
      "Tu aimes travailler seul"
    ]
  },

  "eclairagiste-profil.PNG": {
    titre: "Éclairagiste",
    taches: [
      "Conçoit, prépare et réalise des ambiances de lumière pour la scène (théâtre, danse, etc.), les événements, la télévision, le cinéma, la vidéo, ainsi que pour différentes expositions.",
      "Collabore avec les metteurs en scène, les réalisateurs, les régisseurs, les accessoiristes, les décorateurs et d’autres membres de l’équipe de création.",
      "Installe et règle les projecteurs.",
      "Programme les différents éclairages sur une console."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu aimes travailler en équipe.",
      "Tu ne crains pas de travailler en hauteur et dans des positions inconfortables."
    ]
  },

  "educatrice-de-la-petite-enfance-profil.PNG": {
    titre: "Éducatrice de la petite enfance",
    taches: [
      "Observe et évalue le développement et les besoins des enfants : poupons, trottineurs et enfants d’âge préscolaire et scolaire.",
      "Planifie et anime des activités récréatives et éducatives avec des enfants.",
      "Assure une saine alimentation aux enfants.",
      "Assure des soins d’hygiène et de santé aux enfants."
    ],
    profil: [
      "Tu as une facilité à communiquer avec les enfants.",
      "Tu fais preuve d’empathie, d’autonomie et d’écoute.",
      "Tu es responsable, vigilante et créative."
    ]
  },



  "Service_de_garde_en_milieu_scolaire-profil.PNG": {
    titre: "Service de garde en milieu scolaire",
    taches: [
      "Observer et évaluer le développement global et les besoins des enfants d'âge préscolaire (maternelle) et scolaire (jusqu'à 12 ans).",
      "Planifier, organiser et animer des activités récréatives et éducatives en tenant compte des intérêts des enfants et de leur développement global.",
      "Assurer une saine alimentation aux enfants (collations, dîners).",
      "Assurer les soins d’hygiène et de santé de base aux enfants.",
      "Participer à l'intégration dans le milieu de travail et appliquer les règles du contexte scolaire."
    ],
    profil: [
      "Tu as une facilité à communiquer avec les enfants.",
      "Tu fais preuve de patience, de tolérance, d'empathie, d’autonomie et d’écoute.",
      "Tu es responsable, vigilante et créative.",
      "Tu as le désir de t'investir et de retrouver ton « cœur d’enfant »."
    ]
  },


  "electricien-profil.PNG": {
    titre: "Électricien",
    taches: [
      "Installe et répare des circuits et de l’équipement électriques (moteurs, interrupteurs, disjoncteurs, automates, etc.).",
      "Installe des systèmes électroniques et des réseaux de communication.",
      "Installe et répare des systèmes d’éclairage, des systèmes de chauffage et des systèmes d’alarme."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes.",
      "Tu es prêt à travailler en hauteur, dans des lieux exigus et à l’extérieur."
    ]
  },

  "electromcanicien-profil.PNG": {
    titre: "Électromécanicien",
    taches: [
      "Installe et modifie des équipements électriques, électroniques et divers types de bobinages.",
      "Répare des moteurs électriques, des transformateurs et d’autres dispositifs électriques.",
      "Programme des automates.",
      "Effectue l’entretien et la réparation d’équipement mécanique industriel."
    ],
    profil: [
      "Tu es agile, rapide et fais preuve d’initiative.",
      "Tu aimes résoudre des problèmes.",
      "Tu aimes apprendre le fonctionnement de systèmes."
    ]
  },

  "electronicien-appareils-audiovideo-profil.PNG": {
    titre: "Électronicien appareils audiovidéo",
    taches: [
      "Vérifie le fonctionnement de mécanismes d’entraînement, de circuits électroniques et de circuits d’alimentation.",
      "Répare des appareils audio analogiques et numériques.",
      "Répare des télévisions numériques.",
      "Répare des lecteurs audiovidéo."
    ],
    profil: [
      "Tu es habile de tes mains et tu aimes résoudre des problèmes.",
      "Tu aimes apprendre le fonctionnement de systèmes électroniques.",
      "Tu es polyvalent, appliqué et méthodique.",
      "Tu as des aptitudes pour le service à la clientèle."
    ]
  },

  "eleveur-de-chevaux-profil.PNG": {
    titre: "Éleveur de chevaux",
    taches: [
      "Entraîne les chevaux pour l’équitation classique et western.",
      "Effectue des randonnées équestres avec des groupes.",
      "Procure les soins quotidiens aux chevaux.",
      "Gère le travail des employés d’un centre équestre."
    ],
    profil: [
      "Tu aimes les chevaux.",
      "Tu es organisé, prudent et responsable.",
      "Tu possèdes un bon sens de l’observation et une bonne dextérité manuelle.",
      "Tu as de l’intérêt pour la gestion et pour l’enseignement."
    ]
  },

  "eleveur-profil.PNG": {
    titre: "Éleveur",
    taches: [
      "Gère et coordonne les activités d\'une ferme de production laitière, de production porcine, de production avicole, etc.",
      "Élabore un programme d’alimentation en production animale.",
      "Élabore un programme de culture végétale destinée à l’alimentation des animaux.",
      "Supervise le personnel ouvrier qui s’occupe des soins aux animaux."
    ],
    profil: [
      "Tu es organisé, responsable et tu aimes les animaux.",
      "Tu possèdes un bon sens de l’observation et de la débrouillardise.",
      "Tu as du talent pour la gestion.",
      "Tu as des aptitudes pour les sciences."
    ]
  },

  "entrepreneur-de-services-agricoles-profil.PNG": {
    titre: "Entrepreneur de services agricoles",
    taches: [
      "Élabore un plan de développement d’une production agricole (végétale ou animale).",
      "Planifie la production annuelle et les activités à réaliser.",
      "Gère le personnel, l’approvisionnement et les activités quotidiennes d’une production agricole.",
      "Gère le parc de machinerie et d’équipements ainsi que les bâtiments."
    ],
    profil: [
      "Tu aimes la ferme, les animaux et le plein air.",
      "Tu as une grande endurance physique.",
      "Tu es organisé, débrouillard et possèdes un bon leadership."
    ]
  },

  "estheticienne-profil.PNG": {
    titre: "Esthéticienne",
    taches: [
      "Donne des soins de beauté pour le visage et le corps en utilisant des techniques et des produits spécialisés.",
      "Effectue des maquillages, des manucures et des épilations.",
      "Conseille les clients en vue de l’achat de produits cosmétiques."
    ],
    profil: [
      "Tu as des aptitudes artistiques.",
      "Tu es habile de tes mains et tu as le souci du détail.",
      "Tu es discrète, empathique et polie.",
      "Tu aimes les couleurs."
    ]
  },

  "estimateurvaluateur-en-btiment-profil.PNG": {
    titre: "Estimateur-évaluateur en bâtimenfot",
    taches: [
      "Établit les coûts détaillés de matériaux et de main-d'œuvre de projets de construction",
      "Analyse et produit des soumissions",
      "Inspecte des immeubles",
      "Établit la valeur immobilière de propriétés"
    ],
    profil: [
      "Tu as le sens de l'observation",
      "Tu as des habiletés en mathématiques",
      "Tu es débrouillard, méthodique et responsable",
      "Tu as une grande capacité d'analyse"
    ]
  },

  "expert-en-sinistres-profil.PNG": {
    titre: "Expert en sinistres",
    taches: [
      "Effectue des enquêtes, par téléphone et sur la route, sur les circonstances d’un vol, d’un feu, d’un accident, etc.",
      "Évalue les pertes et les dommages à la suite d’un sinistre.",
      "Règle les dossiers de réclamation.",
      "Rédige des rapports."
    ],
    profil: [
      "Tu es curieux et tu as un bon esprit d’analyse.",
      "Tu aimes résoudre des problèmes.",
      "Tu es honnête, discret et minutieux."
    ]
  },

  "ferblantier-profil.PNG": {
    titre: "Ferblantier",
    taches: [
      "Monte, installe et répare des systèmes de climatisation, de ventilation, de chauffage à air chaud, d’évaporation de liquide ou de gaz, etc.",
      "Découpe, façonne et assemble des pièces de métal.",
      "Opère des machines-outils conventionnelles ou à commande numérique.",
      "Installe des recouvrements de toiture en métal."
    ],
    profil: [
      "Tu es habile de tes mains et  tu as de la facilité à t’orienter dans l’espace.",
      "Tu as des aptitudes en calcul et en dessin.",
      "Tu es autonome, minutieux et inventif."
    ]
  },

  "ferrailleur-profil.PNG": {
    titre: "Ferrailleur",
    taches: [
      "Installe des barres et des treillis en acier qui servent à renforcer le béton utilisé pour la construction de murs, de colonnes, de dalles et d’escaliers.",
      "Attache avec de la broche les barres d’armature et les treillis.",
      "Assemble des éléments préfabriqués.",
      "Installe des éléments de post-tension."
    ],
    profil: [
      "Tu as une bonne endurance physique.",
      "Tu es autonome, minutieux et responsable.",
      "Tu aimes travailler dans des positions (postures) variées."
    ]
  },

  "fleuriste-profil.PNG": {
    titre: "Fleuriste",
    taches: [
      "Reçoit les clients et les conseille en matière de produits de fleuristerie.",
      "Crée et assemble des bouquets et des arrangements de fleurs naturelles et artificielles pour différentes occasions ou pour différents projets (funérailles, mariage, anniversaires, décoration intérieure, etc.).",
      "Entretient les plantes et les fleurs coupées.",
      "Assure le service à la clientèle."
    ],
    profil: [
      "Tu as le sens de l’esthétisme.",
      "Tu es douée d’une bonne dextérité manuelle.",
      "Tu es créative, minutieuse et courtoise.",
      "Tu as des aptitudes pour le service à la clientèle et la vente."
    ]
  },

  "foreur-dynamiteur-profil.PNG": {
    titre: "Foreur-dynamiteur",
    taches: [
      "Conduit la machinerie et l’outillage de forage (pneumatique, hydraulique, fond de trou, par exemple).",
      "Charge des explosifs.",
      "Cisaille des parois à l’explosif.",
      "Effectue du sautage en tranchée, en carrière, etc."
    ],
    profil: [
      "Tu aimes travailler à l’extérieur.",
      "Tu as de bons réflexes.",
      "Tu as une bonne endurance physique.",
      "Tu as un bon sens de l’observation et tu aimes le travail en équipe."
    ]
  },

  "foreur-profil.PNG": {
    titre: "Foreur",
    taches: [
      "Démonte et transporte l’équipement de forage.",
      "Prépare et installe des foreuses hydrauliques et pneumatiques.",
      "Réalise des opérations de forage au diamant dans les sédiments (mort-terrain).",
      "Réalise des opérations de forage au diamant dans le roc en surface et sous terre."
    ],
    profil: [
      "Tu aimes travailler à l’extérieur.",
      "Tu es en excellente condition physique.",
      "Tu es minutieux, précis et responsable.",
      "Tu es prêt à travailler dans des conditions physiques difficiles."
    ]
  },

  "gerant-de-commerces-de-detail-profil.PNG": {
    titre: "Gérant de commerces de détail",
    taches: [
      "Analyse et traite des données commerciales.",
      "Effectue la promotion et la mise en marché de produits et de services pour des commerces de détail, des commerces en gros et des commerces spécialisés.",
      "Embauche et forme le personnel de vente.",
      "Gère les horaires et assigne les tâches."
    ],
    profil: [
      "Tu as une bonne capacité d’analyse et de synthèse.",
      "Tu as des habiletés en leadership et en négociation.",
      "Tu es autonome, dynamique et sûr de toi.",
      "Tu es doué pour travailler en équipe."
    ]
  },

  "gestionnaire-de-projets-de-construction-profil.PNG": {
    titre: "Gestionnaire de projets de construction",
    taches: [
      "Interprète des plans et des devis de construction.",
      "Vérifier la conformité d’un bâtiment au regard du code du bâtiment du Québec.",
      "Recherche de nouveaux contrats.",
      "Prépare des soumissions."
    ],
    profil: [
      "Tu possèdes un bon leadership.",
      "Tu es organisé, autonome et diplomate.",
      "Tu as de la facilité à prendre des décisions rapides."
    ]
  },

  "gouvernante-hoteliere-profil.PNG": {
    titre: "Gouvernante hôtelière",
    taches: [
      "Coordonne le travail d’une équipe de femmes de chambre dans les hôtels et les auberges.",
      "Contrôle la qualité des services.",
      "Gérer l’équipement, les fournitures et le budget de l’unité d’entretien.",
      "Assure le service à la clientèle."
    ],
    profil: [
      "Tu as le sens des responsabilités.",
      "Tu as un bon leadership.",
      "Tu es dynamique et polyvalente.",
      "Tu as le souci du détail."
    ]
  },

  "graphiste-profil.PNG": {
    titre: "Graphiste",
    taches: [
      "Élabore des concepts visuels.",
      "Crée des esquisses.",
      "Conçoit des maquettes de logos, d’icônes, de sites web, de campagnes de publicité, de produits d’emballage, etc.",
      "Fait la mise en pages pour des imprimés et des sites Internet."
    ],
    profil: [
      "Tu es créatif.",
      "Tu as des habiletés en communication et en dessin.",
      "Tu es polyvalent, curieux et minutieux."
    ]
  },

  "grutier-profil.PNG": {
    titre: "Grutier",
    taches: [
      "Transporte et assemble des grues mobiles et des grues à tour.",
      "Charge, décharge et déplace des matériaux.",
      "Construit des murs de soutènement et enfonce des pieux.",
      "Opère une pompe à béton."
    ],
    profil: [
      "Tu es observateur.",
      "Tu possèdes une excellente dextérité manuelle et de bons réflexes.",
      "Tu as une bonne vision et une bonne endurance physique.",
      "Tu es autonome, minutieux et tu es capable de concentration."
    ]
  },

  "guide-touristique-profil.PNG": {
    titre: "Guide touristique",
    taches: [
      "Prépare la visite : information culturelle, itinéraire, matériel nécessaire, etc.",
      "Accueille et guide les groupes de touristes.",
      "Coordonne le transport des personnes et de leurs bagages.",
      "Anime des activités de divertissement."
    ],
    profil: [
      "Tu es ouvert d’esprit.",
      "Tu as des aptitudes pour l’apprentissage des langues étrangères.",
      "Tu es sociable, responsable et courtois.",
      "Tu as le sens de l’organisation et de l’initiative."
    ]
  },

  "horloger-profil.PNG": {
    titre: "Horloger",
    taches: [
      "Nettoie et règle les mécanismes d’horloges et de montres.",
      "Vérifie et répare des horloges à carillon, à tubes et à coucou musical.",
      "Vérifie et répare des montres électroniques et mécaniques.",
      "Vérifie et répare des compteurs mécaniques et électromécaniques."
    ],
    profil: [
      "Tu possèdes une bonne dextérité manuelle.",
      "Tu es patient, autonome et minutieux.",
      "Tu as une excellente vision."
    ]
  },

  "hyginiste-dentaire-profil.PNG": {
    titre: "Hygiéniste dentaire",
    taches: [
      "Prend des radiographies",
      "Assure le nettoyage (détartrage) et le polissage des dents",
      "Donne des conseils d'hygiène et de prévention sur la santé dentaire",
      "Enlève des points de suture et des pansements parodontaux",
      "Assiste le dentiste ou l'orthodontiste en salle de traitement et pose des attaches orthodontiques"
    ],
    profil: [
      "Tu es méticuleuse",
      "Tu as une excellente dextérité",
      "Tu possèdes une bonne acuité visuelle",
      "Tu es une personne ordonnée et discrète",
      "Tu as le souci de la propreté"
    ]
  },

  "illustrateur-profil.PNG": {
    titre: "Illustrateur",
    taches: [
      "Élabore des concepts d’illustration.",
      "Crée des esquisses.",
      "Réalise des illustrations pour les livres, les magazines, la publicité, le dessin animé, les jeux vidéo, les murales urbaines, etc.",
      "Utilise, pour ses créations, des médiums traditionnels (graphite, fusain, crayon, pinceau, encre, par exemple), des médiums numériques (logiciels de dessin, tablettes graphiques, appareils photographiques, par exemple), ainsi que des matériaux variés (papier, carton, tissus, objets récupérés, par exemple)."
    ],
    profil: [
      "Tu es créatif.",
      "Tu es polyvalent, curieux et minutieux.",
      "Tu as des habiletés en dessin."
    ]
  },

  "infirmiere-profil.PNG": {
    titre: "Infirmière autorisée",
    taches: [
      "Évalue la condition physique et mentale d’une personne.",
      "Intervient auprès de personnes en périnatalité.",
      "Intervient auprès de personnes dans des services ambulatoires.",
      "Intervient auprès d\'adultes et de personnes âgées en perte d\'autonomie en établissement hospitalier."
    ],
    profil: [
      "Tu as une excellente santé.",
      "Tu fais preuve d’empathie, d’écoute, de vigilance et de discrétion.",
      "Tu es capable de travailler sous la pression, en équipe."
    ]
  },

  "infirmire-auxiliaire-profil.PNG": {
    titre: "Infirmière auxiliaire",
    taches: [
      "Observe les signes vitaux des patients",
      "Administre, par des voies autres que la voie intraveineuse, des médicaments ou d'autres substances",
      "Donne des soins auprès de personnes présentant des problèmes de santé mentale, des déficits cognitifs, en situation de réadaptation physique",
      "Donne des soins à des mères et à des nouveau-nés",
      "Applique et respecte le protocole de soins selon les lois en vigueur"
    ],
    profil: [
      "Tu es en excellente condition physique",
      "Tu fais preuve d'empathie, d'écoute, de vigilance et de discrétion",
      "Tu as un bon jugement et fais preuve d'initiative"
    ]
  },

  "infographiste-profil.PNG": {
    titre: "Infographiste",
    taches: [
      "Prend des photographies, numérise et retouche des images.",
      "Intègre des images dans des mises en pages web et des mises en pages d’imprimés.",
      "Traite la typographie des textes et les intègre dans des mises en pages web et des mises en pages d’imprimés.",
      "Réalise des gabarits de mises en pages web et d’imprimés."
    ],
    profil: [
      "Tu as des aptitudes pour le dessin et la communication.",
      "Tu es curieux, créatif et débrouillard.",
      "Tu aimes travailler en équipe.",
      "Tu es appliqué et méthodique."
    ]
  },

  "inhalotherapeute-profil.PNG": {
    titre: "Inhalothérapeute",
    taches: [
      "Effectue des prélèvements (gazométrie sanguine, sécrétions bronchiques, etc.).",
      "Exécute des épreuves diagnostiques (capacité pulmonaire, électrocardiogramme, par exemple).",
      "Utilise des appareils de traitement d’inhalothérapie, des analyseurs de gaz et des appareils d’administration de gaz.",
      "Administre des traitements : oxygénothérapie, aérosolthérapie, carbogénothérapie, etc."
    ],
    profil: [
      "Tu possèdes une bonne capacité d’analyse et de synthèse.",
      "Tu as des aptitudes pour les sciences.",
      "Tu aimes travailler avec le public et en équipe.",
      "Tu fais preuve d’empathie et d’écoute."
    ]
  },

  "inspecteur-de-produits-alimentaires-profil.PNG": {
    titre: "Inspecteur de produits alimentaires",
    taches: [
      "Fait la promotion de l’hygiène et de la sécurité auprès des employés.",
      "Effectue des analyses en laboratoire pour s’assurer de la conformité des aliments aux normes gouvernementales.",
      "Contrôle la fabrication de produits à base de viande, de produits à base de végétaux, de produits de boulangerie et de produits laitiers.",
      "Intervient en cas de problèmes de fonctionnement de l’équipement de production."
    ],
    profil: [
      "Tu es soucieux de la santé publique.",
      "Tu as des aptitudes pour les sciences.",
      "Tu possèdes un bon sens de l’observation.",
      "Tu es autonome, débrouillard et responsable."
    ]
  },

  "installateur-de-systemes-de-securite-profil.PNG": {
    titre: "Installateur de systèmes de sécurité",
    taches: [
      "Installe des systèmes de sécurité et de surveillance (avertisseurs d’incendie, dispositifs antivol, contrôle d’accès, caméra vidéo, par exemple) dans des résidences privées et des édifices commerciaux, industriels et publics.",
      "Installe des systèmes de téléphonie.",
      "Inspecte les différents systèmes et en vérifie le fonctionnement.",
      "Configure les différents systèmes."
    ],
    profil: [
      "Tu as une bonne acuité visuelle.",
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes.",
      "Tu es autonome, responsable et minutieux."
    ]
  },

  "installateur-et-reparateur-equipements-de-telecommunication-profil.PNG": {
    titre: "Installateur équipements télécom",
    taches: [
      "Installe des antennes de télécommunication.",
      "Installe et raccorde des systèmes de radiocommunication.",
      "Installe et configure des systèmes de téléphonie.",
      "Installe et configure des systèmes de câblodistribution."
    ],
    profil: [
      "Tu aimes résoudre des problèmes.",
      "Tu aimes apprendre le fonctionnement de systèmes électroniques.",
      "Tu es autonome, débrouillard et minutieux.",
      "Tu es habile de tes mains."
    ]
  },

  "integrateur-multimedia-profil.PNG": {
    titre: "Intégrateur multimédia",
    taches: [
      "Produit des pages web.",
      "Traite des images et du son.",
      "Effectue du design de page-écran.",
      "Intègre et met à l’essai différents contenus interactifs (textes, images, son, vidéo, animations, etc.)."
    ],
    profil: [
      "Tu aimes le travail en équipe et tu veux réaliser des projets.",
      "Tu possèdes un esprit logique.",
      "Tu es curieux, créatif et minutieux.",
      "Tu es polyvalent."
    ]
  },

  "lagueur-profil.PNG": {
    titre: "Élagueur",
    taches: [
      "Élague et taille des arbres en milieu urbain et en milieu semi-urbain",
      "Abat des arbres en les coupant à leur base ou en les démontant en sections (tronçons)",
      "Fertilise et apporte les soins aux arbres",
      "Utilise de l'équipement d'accès spécialisé pour le travail en hauteur : engin élévateur à nacelle, cordes, longes, mousquetons, éperons, etc."
    ],
    profil: [
      "Tu aimes travailler en hauteur et tu ne ressens pas le vertige",
      "Tu aimes le travail à l'extérieur",
      "Tu possèdes une bonne endurance physique"
    ]
  },

  "lectronicien-industriel-profil.PNG": {
    titre: "Électronicien industriel",
    taches: [
      "Installe et modifie du matériel électrique industriel, des commandes électriques et électroniques ainsi que de l'équipement électrique de puissance",
      "Programme des capteurs, des actionneurs et des unités de commande dans les usines de transformation et de fabrication",
      "Dépanne, entretient et répare de l'équipement industriel et en effectue la remise en service"
    ],
    profil: [
      "Tu aimes le secteur industriel",
      "Tu es polyvalent, appliqué et méthodique",
      "Tu es habile de tes mains et tu aimes résoudre des problèmes dans un domaine en constante évolution"
    ]
  },

  "machiniste-sur-machines-cnc-profil.PNG": {
    titre: "Machiniste sur machines CNC",
    taches: ["prépare et programme la machine (entre les instructions dans l’ordinateur)",
      "installe les pièces et les outils",
      "surveille le processus pour s’assurer que les dimensions sont exactes",
      "effectue des ajustements et vérifie la qualité des pièces produites."
    ],
    profil: ["Tu aimes le concret, la précision et la technologie.",
      "Tu aimes fabriquer des objets,",
      "Tu aimes comprendre comment les choses fonctionnent,",
      "Tu aimes voir le résultat de ton travail."]
  },

  "maitre-hotel-profil.PNG": {
    titre: "Maître d'hôtel",
    taches: [
      "Coordonne et supervise le travail des employés d’un restaurant.",
      "Accueille la clientèle et gère les réservations.",
      "Assure la bonne marche de la salle à manger.",
      "Planifie et contrôle les approvisionnements."
    ],
    profil: [
      "Tu aimes travailler en équipe.",
      "Tu es sociable, responsable et courtois.",
      "Tu as du talent pour le service à la clientèle.",
      "Tu es dynamique et tu as un bon leadership."
    ]
  },

  "manoeuvre-de-exploitation-forestiere-profil.PNG": {
    titre: "Manoeuvre de l'exploitation forestière",
    taches: [
      "Plante différents arbres dans le cadre de travaux de reboisement.",
      "Effectue des travaux de préparation de terrain.",
      "Effectue des travaux de dégagement de plantation et d’éclaircie précommerciale.",
      "Opère et entretient une débroussailleuse et une scie à chaîne."
    ],
    profil: [
      "Tu aimes travailler au grand air et dans la nature.",
      "Tu possèdes une bonne dextérité manuelle et une bonne endurance physique.",
      "Tu es débrouillard et polyvalent."
    ]
  },

  "manoeuvre-en-aquaculture-profil.PNG": {
    titre: "Manoeuvre en aquaculture",
    taches: [
      "Fabrique des structures de captage et d’élevage et les installe en mer.",
      "Assure le fonctionnement du système d’élevage et le développement des espèces élevées (reproduction qualité de l’eau, alimentation, santé et maladie, par exemple).",
      "Prépare les produits pour leur mise en marché.",
      "Entretient les équipements."
    ],
    profil: [
      "Tu aimes les milieux marins.",
      "Tu possèdes une bonne dextérité manuelle et une bonne endurance physique.",
      "Tu es minutieux et débrouillard."
    ]
  },

  "matelot-profil.PNG": {
    titre: "Matelot",
    taches: [
      "Effectue le chargement de la cargaison : véhicules, conteneurs, marchandises en vrac, etc.",
      "Assiste l’officier pendant les travaux d’entretien et de réparation des moteurs, des systèmes de propulsion, etc.",
      "Vérifie et répare les circuits électriques de base.",
      "Participe aux opérations d’appareillage et d’accostage."
    ],
    profil: [
      "Tu veux voyager.",
      "Tu aimes la mer.",
      "Tu es habile de tes mains."
    ]
  },

  "mcanicien-de-vhicules-lgers-profil.PNG": {
    titre: "Mécanicien de véhicules légers",
    taches: [
      "Diagnostique les pannes sur des motocyclettes, des motoneiges, des moteurs hors-bord, des véhicules tout-terrain, des petits tracteurs, des souffleuses à neige, des tondeuses à gazon, etc.",
      "Répare des moteurs à essence à 2 temps et à 4 temps, des systèmes d'alimentation, des carburateurs, des freins, des embrayages et tout autre système défectueux",
      "Entretient les différents systèmes des véhicules",
      "Remise les véhicules en fin de saison et les remet en service au début de la saison"
    ],
    profil: [
      "Tu aimes la mécanique générale",
      "Tu es habile de tes mains",
      "Tu as l'esprit d'analyse et tu aimes résoudre des problèmes",
      "Tu es appliqué et méthodique"
    ]
  },

  "mecanicien-ascenseur-profil.PNG": {
    titre: "Mécanicien d'ascenseur",
    taches: [
      "Installe des systèmes de déplacement mécanisé (ascenseurs, escaliers roulants, monte-charge, trottoirs roulants, etc.).",
      "Vérifie et met en marche les systèmes de déplacement mécanisé.",
      "Entretien et répare les systèmes (composants mécaniques et électriques).",
      "Intervient en situation d’urgence."
    ],
    profil: [
      "Tu aimes le travail en hauteur.",
      "Tu es autonome, responsable et minutieux.",
      "Tu aimes résoudre des problèmes.",
      "Tu es en bonne condition physique."
    ]
  },

  "mecanicien-de-machines-fixes-profil.PNG": {
    titre: "Mécanicien de machines fixes",
    taches: [
      "Surveille le fonctionnement des centrales thermiques présentes dans les bâtiments et dans les usines de transformation.",
      "Opère le fonctionnement des systèmes de chauffage, de réfrigération, de climatisation, d’alimentation en eau, etc.",
      "Utilise des commandes automatisées.",
      "Entretient et répare les défectuosités des différents systèmes de la centrale."
    ],
    profil: [
      "Tu es soucieux de l’environnement et de la santé publique.",
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanicien-de-motocyclettes-profil.PNG": {
    titre: "Mécanicien de motocyclettes",
    taches: [
      "Diagnostique les pannes sur des motocyclettes à deux et à trois roues.",
      "Répare des moteurs à essence, des systèmes d’alimentation et d’injection, des freins, des transmissions et tout autre système défectueux.",
      "Ajuste et programme les commandes électriques et électroniques des motocyclettes.",
      "Entretient les différents systèmes des véhicules."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanicien-de-vehicules-lourds-routiers-profil.PNG": {
    titre: "Mécanicien de véhicules lourds",
    taches: [
      "Diagnostique les pannes sur des camions, des autobus et des véhicules d’urgence.",
      "Répare des moteurs diesels, des systèmes d’alimentation et d’injection, des freins, des transmissions et tout autre système défectueux.",
      "Répare, remplace et ajuste les systèmes de chauffage, de ventilation et de climatisation.",
      "Ajuste et programme les commandes électriques et électroniques des véhicules."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu as l’esprit d’analyse et tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanicien-en-refrigration-et-climatisation-profil.PNG": {
    titre: "Mécanicien en réfrigération",
    taches: [
      "Installe et soude la tuyauterie des systèmes de climatisation et de réfrigération.",
      "Installe les appareils des systèmes de climatisation et de réfrigération (compresseur, condenseur, évaporateur, réservoir, comptoir réfrigéré, etc.).",
      "Effectue la mise en marche des systèmes et le réglage des commandes électroniques.",
      "Entretien et répare les systèmes."
    ],
    profil: [
      "Tu es soucieux de l’environnement.",
      "Tu aimes résoudre des problèmes.",
      "Tu es habile de tes mains, minutieux et précis."
    ]
  },

  "mecanicien-engins-de-chantier-profil.PNG": {
    titre: "Mécanicien d'engins de chantier",
    taches: [
      "Diagnostique les pannes sur des pelles mécaniques, des bouteurs (bulldozer), des niveleuses (grader), des chargeuses (pépine), etc.",
      "Répare des moteurs diesels, des freins, des transmissions et tout autre système défectueux.",
      "Répare des chenilles et des systèmes de traction.",
      "Ajuste et programme les commandes hydrauliques pour le travail de l’opérateur."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu as l’esprit d’analyse et tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanicien-equipement-agricole-profil.PNG": {
    titre: "Mécanicien d'équipement agricole",
    taches: [
      "Diagnostique les pannes sur des tracteurs, des moissonneuses-batteuses, des presses à foin, des machines à semence, etc.",
      "Répare des moteurs diesels, des freins, des transmissions et tout autre système défectueux.",
      "Effectue l’entretien et la mise au point des moteurs et des systèmes mécaniques, hydrauliques, pneumatiques, électriques et électroniques.",
      "Assemble et prépare de l’équipement agricole."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu as l’esprit d’analyse et tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanicien-et-controleur-aeronefs-profil.PNG": {
    titre: "Mécanicien et contrôleur d'aéronefs",
    taches: [
      "Inspecte et vérifie les différents composants et systèmes présents sur des avions et des hélicoptères (systèmes hydrauliques, moteurs, turbines, systèmes de navigation, structures, etc.).",
      "Effectue la recherche de pannes et de problèmes techniques sur les avions et les hélicoptères.",
      "Répare (révise) ou effectue la maintenance des différents systèmes.",
      "Rédige des rapports techniques de conformité et de non-conformité."
    ],
    profil: [
      "Tu aimes les nouvelles technologies.",
      "Tu aimes résoudre des problèmes.",
      "Tu es minutieux, responsable et autonome.",
      "Tu es habile de tes mains."
    ]
  },

  "mecanicien-industriel-profil.PNG": {
    titre: "Mécanicien industriel",
    taches: [
      "Vérifie le fonctionnement d’un équipement industriel.",
      "Répare et entretient des moteurs et des pompes.",
      "Répare et entretient des circuits hydrauliques et pneumatiques.",
      "Répare et entretient des systèmes d’entrainement et des convoyeurs."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes dans un domaine en constante évolution.",
      "Tu es appliqué et méthodique."
    ]
  },

  "mecanique-automobile-profil.PNG": {
    titre: "Mécanique automobile",
    taches: [
      "Diagnostique les pannes sur des automobiles de différentes marques.",
      "Répare des moteurs à essence, des systèmes d’alimentation et d’injection, des freins, des transmissions et tout autre système défectueux.",
      "Répare et remplace les systèmes de chauffage et de climatisation.",
      "Ajuste et programme les commandes électriques et électroniques des automobiles."
    ],
    profil: [
      "Tu es habile de tes mains.",
      "Tu as l’esprit d’analyse et tu aimes résoudre des problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },
  "MecaniqueVehiculesElectriques-profil.PNG": {
    titre: "Mécanique de véhicules électriques",
    taches: [
      "Diagnostique les pannes électriques et électroniques sur des véhicules électriques.",
      "Effectue l’entretien et la réparation des systèmes haute tension : batteries, moteurs électriques, onduleurs et convertisseurs.",
      "Inspecte, remplace et calibre les composantes électriques et électroniques spécialisées.",
      "Assure la maintenance préventive des systèmes de charge, du câblage haute tension et des systèmes de refroidissement des batteries.",
      "Applique les protocoles de sécurité haute tension pour travailler en toute sécurité."
    ],
    profil: [
      "Tu es à l’aise avec la technologie et les systèmes électroniques.",
      "Tu as l’esprit d’analyse et aimes diagnostiquer des problèmes complexes.",
      "Tu es minutieux, méthodique et respectes les procédures de sécurité."
    ]
  },

  "mineur-dextraction-profil.PNG": {
    titre: "Mineur d'extraction",
    taches: [
      "Exécute des travaux de forage et de dynamitage",
      "Règle et opère différentes machineries d'extraction (foreuses, chargeuses et treuils)",
      "Consolide les parois de tunnels et de galeries souterraines",
      "Déblaie et transporte du minerai"
    ],
    profil: [
      "Tu es en excellente condition physique",
      "Tu as de bons réflexes",
      "Tu es prêt à travailler dans des conditions physiques difficiles"
    ]
  },

  "monteur-aeronefs-profil.PNG": {
    titre: "Monteur d'aéronefs",
    taches: [
      "Effectue des opérations d’usinage sur des matériaux métalliques.",
      "Fabrique avec des machines-outils (plieuse et poinçonneuse) des pièces.",
      "Assemble et installe les différents composants et ensembles d’un aéronef.",
      "Effectue des opérations de moulage sur des matériaux composites."
    ],
    profil: [
      "Tu aimes le travail en équipe.",
      "Tu possèdes une excellente dextérité manuelle et une bonne vision.",
      "Tu es minutieux, précis et responsable."
    ]
  },

  "monteur-dappareils-et-daccessoires-electriques-profil.PNG": {
    titre: "Monteur d'appareils électriques",
    taches: [
      "Fabrique et assemble des fils et des câbles pour former des faisceaux.",
      "Effectue des travaux de soudure sur des composants électriques et électroniques.",
      "Installe et connecte des faisceaux dans des sous-ensembles et des ensembles d’avions."
    ],
    profil: [
      "Tu es méticuleux.",
      "Tu es polyvalent, appliqué et responsable.",
      "Tu es habile de tes mains et tu aimes résoudre des problèmes."
    ]
  },

  "monteur-de-charpentes-metalliques-profil.PNG": {
    titre: "Monteur de charpentes métalliques",
    taches: [
      "Assemble et installe des poutres, des colonnes et d’autres éléments de structure en acier.",
      "Installe des composants préfabriqués : panneaux, dalles, murs, etc.",
      "Assemble et installe des escaliers et des accès en acier.",
      "Pose des recouvrements ornementaux."
    ],
    profil: [
      "Tu aimes travailler en hauteur et tu ne ressens pas le vertige.",
      "Tu aimes le travail à l’extérieur.",
      "Tu possèdes une bonne endurance physique.",
      "Tu es autonome, minutieux et responsable."
    ]
  },

  "monteur-de-lignes-profil.PNG": {
    titre: "Monteur de lignes",
    taches: [
      "Construit des pylônes et d’autres structures métalliques.",
      "Installe et répare des câbles et des transformateurs ou d’autre équipements de puissance sur les réseaux électriques et dans les postes.",
      "Installe, entretien et répare des équipements de câblodistribution, de téléphonie et de communication sans fil."
    ],
    profil: [
      "Tu aimes travailler en hauteur.",
      "Tu as un bon sens de l’équilibre.",
      "Tu aimes travailler en équipe.",
      "Tu aimes le travail à l’extérieur."
    ]
  },

  "monteur-installation-au-gaz-profil.PNG": {
    titre: "Monteur d'installation au gaz",
    taches: [
      "Inspecte et entretient des appareils au gaz (brûleurs commerciaux, appareils de chauffage, chaudières d’eau chaude, etc.).",
      "Répare ou remplace les composants défectueux des appareils au gaz (régulateurs, détenteurs, dispositifs de commande électronique, par exemple).",
      "Règle le débit et la pression des appareils.",
      "Répond à des appels de service."
    ],
    profil: [
      "Tu aimes résoudre des problèmes.",
      "Tu es habile de tes mains, minutieux et précis.",
      "Tu es courtois et autonome."
    ]
  },

  "mouliste-de-moules-en-metal-profil.PNG": {
    titre: "Mouliste de moules en métal",
    taches: [
      "Fabrique et polit divers types de moules industriels.",
      "Usine des canalisations, des empreintes et des noyaux.",
      "Opère et entretient des machines-outils conventionnelles et numériques servant à fabriquer des composantes de moules industriels.",
      "Contrôle la qualité des moules avec des instruments de mesure complexes."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu possèdes une grande dextérité manuelle.",
      "Tu as un esprit logique, méthodique et analytique.",
      "Tu as le sens du détail."
    ]
  },

  "musicien-profil.PNG": {
    titre: "Musicien",
    taches: [
      "Joue, seul ou en groupe, des pièces de musique rock, pop, jazz, blues, folklorique, World Beat, etc.",
      "Accompagne des interprètes.",
      "Réalise des enregistrements.",
      "Compose et interprète des chansons."
    ],
    profil: [
      "Tu es créatif.",
      "Tu possèdes un bon sens du rythme.",
      "Tu es passionné, rigoureux et discipliné."
    ]
  },

  "officier-de-navigation-profil.PNG": {
    titre: "Officier de navigation",
    taches: [
      "Gouverne des navires de transport, des remorqueurs, des barges et des traversiers.",
      "Supervise et coordonne le travail des matelots.",
      "S’assure de l’état de fonctionnement des équipements d’urgence.",
      "Effectue les opérations d’appareillage et d’accostage."
    ],
    profil: [
      "Tu veux voyager.",
      "Tu aimes la mer.",
      "Tu es organisé et responsable.",
      "Tu possèdes un bon jugement et tu aimes résoudre des problèmes."
    ]
  },

  "operateur-appareils-reprographier-profil.PNG": {
    titre: "Opérateur d'appareils à reprographier",
    taches: [
      "Conseille la clientèle.",
      "Reproduit, en couleurs et en noir et blanc, des documents à l\'aide d’un copieur numérique.",
      "Effectue la coupe de papier et de carton au massicot (guillotine).",
      "Assemble et plie des documents de différentes épaisseurs."
    ],
    profil: [
      "Tu es minutieux, responsable.",
      "Tu as le souci du détail et tu distingues bien les couleurs.",
      "Tu as des aptitudes pour le service à la clientèle."
    ]
  },

  "operateur-de-machines-dans-les-usines-de-pate-papier-profil.PNG": {
    titre: "Opérateur de machines - pâte à papier",
    taches: [
      "Surveille le fonctionnement des procédés de transformation du bois en pâtes et papiers",
      "Opère les machines servant à l'approvisionnement et à la transformation (épurateurs, laveurs, digesteurs, réservoirs de mélange, lessiveurs, par exemple)",
      "Règle le fonctionnement des commandes automatisées",
      "Effectue l'entretien mineur et général de la machinerie",
      "Effectue des prélèvements et des essais chimiques sur les produits"
    ],
    profil: [
      "Tu possèdes une bonne endurance physique et une excellente vision",
      "Tu es minutieux, précis et responsable",
      "Tu as une bonne dextérité manuelle"
    ]
  },

  "operateur-de-machines-de-traitement-des-matieres-plastiques-profil.PNG": {
    titre: "Opérateur de machines - plastiques",
    taches: [
      "Règle et entretient des machines numériques et traditionnelles servant à transformer les plastiques et les caoutchoucs.",
      "Fabrique des produits en plastique en utilisant des procédés d’injection, de soufflage, de thermoformage, etc.",
      "Fabrique des produits en caoutchouc en utilisant des procédés d’injection, d’extrusion, de compression, etc.",
      "S’assure de la conformité des produits avec les devis de production."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu possèdes une bonne dextérité manuelle et une excellente vision.",
      "Tu es autonome, minutieux et précis."
    ]
  },

  "operateur-de-machines-de-traitement-des-metaux-profil.PNG": {
    titre: "Opérateur de machines - métaux",
    taches: [
      "Surveille le fonctionnement des procédés de traitement des minerais (fer, cuivre, or, par exemple);",
      "Opère des broyeurs, des tables à secousses, des appareils de filtration, des circuits de lixiviation, des circuits d’agglomération, etc.;",
      "Effectue des tournées d’inspection;",
      "Effectue des prélèvements et des essais de contrôle sur les produits;"
    ],
    profil: [
      "Tu es habile de tes mains, minutieux et responsable.",
      "Tu as de l’intérêt pour la résolution de problèmes.",
      "Tu es appliqué et méthodique."
    ]
  },

  "operateur-de-machines-dusinage-profil.PNG": {
    titre: "Opérateur de machines d'usinage",
    taches: [
      "Règle, programme et opère les machines-outils : tour, fraiseuse, aléseuse, cisaille, etc.",
      "Usine des pièces mécaniques dans différents types de métaux (acier, aluminium, cuivre, acier inoxydable, par exemple)",
      "Corrige, redresse ou rectifie des pièces",
      "Vérifie les dimensions des pièces usinées à l'aide d'outils de précision",
      "Effectue l'entretien des machines-outils"
    ],
    profil: [
      "Tu aimes travailler avec les objets",
      "Tu es minutieux, précis et tu as le sens du détail",
      "Tu as une excellente vision"
    ]
  },

  "operateur-de-machines-scier-dans-les-scieries-profil.PNG": {
    titre: "Opérateur de machines à scier",
    taches: [
      "Scie des feuillus, des pins blancs, des pins rouges, ainsi que d’autres résineux.",
      "Refend des pièces de bois.",
      "Déligne des pièces de bois.",
      "Tronçonne le bois avec une ébouteuse."
    ],
    profil: [
      "Tu es en excellente condition physique.",
      "Tu as un bon sens de l’observation.",
      "Tu es minutieux, autonome et vigilant.",
      "Tu possèdes une bonne dextérité manuelle."
    ]
  },

  "operateur-de-presse-commercial-profil.PNG": {
    titre: "Opérateur de presse commercial",
    taches: [
      "Prépare des plaques, des papiers, des encres et des solutions de mouillage.",
      "Effectue la mise en train de duplicateurs, de presses offset et de l’équipement sérigraphique.",
      "Effectue le tirage d’imprimés sur du papier de différents formats et sur des tissus.",
      "Exécute des travaux de débitage et de finition."
    ],
    profil: [
      "Tu es minutieux.",
      "Tu es observateur.",
      "Tu as le souci du détail.",
      "Tu distingues bien les couleurs."
    ]
  },

  "operateur-de-procedes-chimiques-profil.PNG": {
    titre: "Opérateur de procédés chimiques",
    taches: [
      "Surveille le fonctionnement des procédés de transformation : électrochimie, électrolyse, polymérisation, bioprocédés, etc.",
      "Fait fonctionner des échangeurs de chaleur, des chaudières, des compresseurs, des turbines, des centrifugeuses, des systèmes de commande automatisés, etc.",
      "Contrôle les débits, les pressions et les températures des différents procédés de transformation.",
      "Prélève des échantillons et effectue des analyses."
    ],
    profil: [
      "Tu es soucieux de l’environnement.",
      "Tu as de l’intérêt pour la résolution de problèmes.",
      "Tu es résistant au stress."
    ]
  },

  "operateur-engins-de-debardage-profil.PNG": {
    titre: "Opérateur d'engins de débardage",
    taches: [
      "Attache les arbres abattus.",
      "Transporte les arbres en forêt avec l’engin de débardage.",
      "Participe à la construction des chemins forestiers.",
      "Assure l’entretien et le dépannage des engins de débardage."
    ],
    profil: [
      "Tu aimes travailler au grand air et dans la nature.",
      "Tu es actif, autonome et vigilant.",
      "Tu possèdes une bonne dextérité manuelle."
    ]
  },

  "operateur-installations-du-traitement-eau-et-dechets-profil.PNG": {
    titre: "Opérateur de traitement d'eau",
    taches: [
      "Surveille le fonctionnement des procédés de traitement.",
      "Opère des systèmes de filtration, de pompage, de filtration, de désinfection et de clarification.",
      "Opère des bioréacteurs et des systèmes de traitement des boues.",
      "Règle le fonctionnement des commandes électroniques des systèmes."
    ],
    profil: [
      "Tu es soucieux de l’environnement et de la santé publique.",
      "Tu as de l’intérêt pour la résolution de problèmes.",
      "Tu es habile de tes mains, minutieux  et responsable.",
      "Tu possèdes un bon sens de l’observation."
    ]
  },

  "oprateur-de-machineries-en-voirie-forestire-profil.PNG": {
    titre: "Opérateur de machineries en voirie",
    taches: ["Opère une pelle mécanique, un bouteur (bulldozer) et une niveleuse (grader).",
      "Construit des chemins forestiers et installe des ponceaux dans les ruisseaux.",
      "Nivelle les chemins.",
      "Effectue l’entretien des chemins forestiers."],
    profil: ["Tu aimes travailler au grand air et dans la nature.",
      "Tu possèdes une excellente dextérité manuelle et de bons réflexes.",
      "Tu es débrouillard, autonome et responsable.",
      "Tu as une bonne endurance physique."]
  },

  "ouvrier-agricole-production-animale-profil.PNG": {
    titre: "Ouvrier agricole - production animale",
    taches: [
      "Nourrit les animaux (bovins, porcs, agneaux, par exemple).",
      "Donne les soins aux animaux.",
      "Participe à la reproduction biologique des animaux.",
      "Selon le type de production, participe à la traite, à la pesée et au déplacement des animaux."
    ],
    profil: [
      "Tu aimes les animaux.",
      "Tu possèdes une bonne endurance physique.",
      "Tu es calme et attentionné."
    ]
  },

  "ouvrier-de-fonderie-profil.PNG": {
    titre: "Ouvrier de fonderie",
    taches: [
      "Fabrique des moules permanents et non permanents selon diverses techniques et avec différents matériaux.",
      "Fabrique les noyaux utilisés à l’inférieur des moules.",
      "Fond des métaux et des alliages dans différents fours (à gaz, à résistance, à induction, par exemple).",
      "Effectue des coulées de métal en fusion."
    ],
    profil: [
      "Tu es en excellente condition physique et tu es tolérant à la chaleur.",
      "Tu es minutieux, débrouillard et responsable.",
      "Tu es prudent et tu n’as pas peur du danger."
    ]
  },

  "ouvrier-de-pepiniere-et-de-serres-profil.PNG": {
    titre: "Ouvrier de pépinière et de serres",
    taches: [
      "Prépare le sol et le site de culture (avec une herse à disques, un cultivateur, par exemple).",
      "Implante des cultures à l’extérieur.",
      "Implante des cultures en serre (en contenants, dans des bacs, dans des sacs, etc.).",
      "Entretient les cultures (légumes, arbres fruitiers, gazon, sapin de Noël, etc.)."
    ],
    profil: [
      "Tu aimes travailler en plein air.",
      "Tu possèdes une bonne endurance physique.",
      "Tu es actif, autonome et minutieux.",
      "Tu es habile de tes mains."
    ]
  },

  "ouvrier-en-sylviculture-et-en-exploitation-forestire-profil.PNG": {
    titre: "Ouvrier en sylviculture",
    taches: [
      "Effectue l’inventaire forestier.",
      "Reboise les sites forestiers.",
      "Effectue des travaux d’éclaircie (débroussaillage).",
      "Trace les chemins forestiers et détermine les aires de coupe.",
      "Classe les arbres destinés à la récolte (martelage).",
      "Effectue la coupe d’arbres forestiers avec une scie à chaîne.",
      "Surveille les travaux et contrôle les coupes effectuées."
    ],
    profil: [
      "Tu aimes travailler en plein air.",
      "Tu es en excellente condition physique",
      "Tu es autonome, minutieux et rigoureux."
    ]
  },

  "patissier-profil.PNG": {
    titre: "Pâtissier",
    taches: [
      "Confectionner des gâteaux, des biscuits, des produits en chocolat, des crèmes, des entremets, des tartes, des desserts, etc.",
      "Prépare les garnitures.",
      "Décore les pâtisseries.",
      "Contrôle la qualité et la fraicheur des produits."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu es capable de travailler sous pression.",
      "Tu aimes travailler en équipe."
    ]
  },

  "patronniere-de-vetements-profil.PNG": {
    titre: "Patronnière de vêtements",
    taches: [
      "Réalise et met au point des patrons de vêtements ou d’autres articles textiles et en cuir.",
      "Fabrique des prototypes de vêtements.",
      "Détermine les modalités de réalisation du vêtement (choix du fil, types de points et d’aiguilles, méthode d’assemblage, par exemple).",
      "Adapte la taille des vêtements (gradation)."
    ],
    profil: [
      "Tu es douée en dessin.",
      "Tu es créative, organisée et autonome.",
      "Tu possèdes une excellente vision."
    ]
  },

  "pecheur-professionnel-profil.PNG": {
    titre: "Pêcheur professionnel",
    taches: [
      "Navigue un bateau de pêche et dirige l’équipe de pêcheurs.",
      "Choisis les lieux de pêche.",
      "Fabrique et manœuvre des engins de pêche : filets, casiers, lignes, etc.",
      "Pêche des poissons et capture des crustacés."
    ],
    profil: [
      "Tu aimes les milieux marins.",
      "Tu possèdes une bonne dextérité manuelle et une bonne endurance physique.",
      "Tu es prudent.",
      "Tu es responsable et méticuleux."
    ]
  },

  "peintre-en-btiment-profil.PNG": {
    titre: "Peintre en bâtiment",
    taches: ["Prépare des surfaces en bois, en gypse, en métal, etc.",
      "Applique, au pinceau et avec un équipement de pulvérisation, de la peinture, des vernis et d’autres produits.",
      "Pose et colle des revêtements muraux (papier peint, vinyle, tissu).",
      "Reproduit du lettrage et des dessins.",
      "Réalise des effets spéciaux et des faux finis (reproduction de la brique ou du bois, par exemple)"],
    profil: [
      "Tu es habile de tes mains et en bonne condition physique.",
      "Tu es minutieux et débrouillard.",
      "Tu as une bonne perception des couleurs et des textures.",
      "Tu es prêt à travailler en hauteur."
    ]
  },

  "photographe-profil.PNG": {
    titre: "Photographe",
    taches: [
      "Réalise des prises de vues en studio et en extérieur.",
      "Réalise des portraits, des photographies d’évènements, des photographies de publicité, ainsi que des photographies commerciales et industrielles.",
      "Réalise des projets photographiques à caractère artistique.",
      "Réalise des photographies documentaires et des photoreportages."
    ],
    profil: [
      "Tu as des aptitudes artistiques et le souci du détail.",
      "Tu es créatif, minutieux et organisé.",
      "Tu es un bon communicateur."
    ]
  },

  "pilote-aeronefs-profil.PNG": {
    titre: "Pilote d'aéronefs",
    taches: [
      "Analyse des cartes aéronautiques et des renseignements météorologiques.",
      "Planifie des vols à vue et aux instruments, de jour et de nuit.",
      "Assure le pilotage d’un avion ou d’un hélicoptère.",
      "Assure la liaison avec les services au sol."
    ],
    profil: [
      "Tu es sérieux et prudent.",
      "Tu possèdes une bonne vision et une excellente santé.",
      "Tu as des aptitudes en sciences et tu aimes résoudre des problèmes.",
      "Tu es organisé, responsable et résistant au stress."
    ]
  },

  "planificateur-de-congres-et-evenement-profil.PNG": {
    titre: "Planificateur de congrès et événements",
    taches: [
      "Développe des projets touristiques et des outils promotionnels.",
      "Fait de la sollicitation auprès de nouveaux clients.",
      "Coordonne les ressources matérielles, humaines et financières lors d’évènements culturels, sportifs, corporatifs, etc.",
      "Effectuer des tâches administratives."
    ],
    profil: [
      "Tu es ouvert d’esprit.",
      "Tu es créatif, débrouillard, flexible et bon communicateur.",
      "Tu as le sens de l’organisation.",
      "Tu as des aptitudes pour la vente et la gestion."
    ]
  },

  "platrier-profil.PNG": {
    titre: "Plâtrier",
    taches: [
      "Pose du ruban sur les joints des feuilles de gypse.",
      "Applique des enduits (plâtre, mortier, ciment, stuc, etc.) sur différents types de surfaces.",
      "Répare et sable les surfaces.",
      "Réalise et installe des moulures."
    ],
    profil: [
      "Tu es minutieux et perfectionniste.",
      "Tu aimes travailler dans des différentes positions.",
      "Tu es endurant.",
      "Tu es habile de tes mains."
    ]
  },

  "plombier-profil.PNG": {
    titre: "Plombier",
    taches: [
      "Lit et analyse des plans et des devis de plomberie et de chauffage.",
      "Installe, répare et entretient de la tuyauterie domestique, industrielle et spécialisée.",
      "Installe, répare et entretient des systèmes de plomberie : appareils sanitaires, évacuation des eaux, drains, etc.",
      "Installe, répare et entretient des systèmes de chauffage à l’eau, à la vapeur, à haute pression, etc."
    ],
    profil: [
      "Tu es minutieux et débrouillard.",
      "Tu es prêt à travailler dans des conditions physiques particulières (humidité, froid, noirceur, etc.).",
      "Tu es habile de tes mains."
    ]
  },

  "policier-profil.PNG": {
    titre: "Policier",
    taches: [
      "Patrouille le territoire en voiture, à pied et en vélo.",
      "Veille au maintien de l\'ordre public et à la sécurité routière.",
      "Intervient dans les situations d’urgence (accidents, crimes, sinistres, conflits, etc.).",
      "Enquête sur des délits et témoigne devant les tribunaux."
    ],
    profil: [
      "Tu as le sens du devoir.",
      "Tu es en excellente condition physique et résistant au stress.",
      "Tu es un bon observateur.",
      "Tu as un excellent jugement et un bon esprit d’analyse."
    ]
  },

  "pompier-profil.PNG": {
    titre: "Pompier",
    taches: [
      "Combat les incendies.",
      "Manœuvre des échelles, de l’équipement de sauvetage, des pompes, des lances d’incendie, etc.",
      "Effectue des sauvetages en hauteur, dans un espace clos, à l’intérieur d’un véhicule accidenté, etc.",
      "Assure le bon fonctionnement du matériel de lutte contre les incendies."
    ],
    profil: [
      "Tu as le sens du devoir.",
      "Tu es courageux, altruiste et résistant au stress.",
      "Tu es en excellente condition physique.",
      "Tu aimes travailler en équipe."
    ]
  },

  "poseur-de-gicleurs-profil.PNG": {
    titre: "Poseur de gicleurs",
    taches: [
      "Installe des systèmes de protection-incendie à eau, à air, à préaction, etc.",
      "Met en service des systèmes de pompage.",
      "Règle des soupapes.",
      "Effectuer des raccordements à des panneaux annonciateurs et à des panneaux d’alarme."
    ],
    profil: [
      "Tu es en bonne condition physique et ne ressens pas le vertige.",
      "Tu as le sens du devoir.",
      "Tu es soucieux de la sécurité des autres.",
      "Tu es minutieux, débrouillard et rigoureux."
    ]
  },

  "poseur-de-revetements-interieur-profil.PNG": {
    titre: "Poseur de revêtements intérieurs",
    taches: [
      "Prépare des surfaces avant de procéder à l’installation.",
      "Installe différents revêtements de sol (tapis, vinyle, revêtements pour installations sportives, etc.).",
      "Utilise des polisseuses, des marteaux pneumatiques, des aspirateurs, des mélangeurs à ciment, des couteaux, des tendeurs à tapis, etc.",
      "Répare différents revêtements souples."
    ],
    profil: [
      "Tu es minutieux, perfectionniste, tu as le sens du détail.",
      "Tu as une bonne endurance physique."
    ]
  },

  "poseur-de-systemes-interieurs-profil.PNG": {
    titre: "Poseur de systèmes d'intérieurs",
    taches: [
      "Assemble les colombages métalliques de murs extérieurs et intérieurs.",
      "Installe des ancrages et des dispositifs de suspension.",
      "Installe et visse des panneaux de gypse.",
      "Suspend et attache des plafonds acoustiques, décoratifs et ornementaux."
    ],
    profil: [
      "Tu es minutieux et perfectionniste.",
      "Tu veux découvrir de nouveaux matériaux de finition.",
      "Tu aimes travailler en équipe.",
      "Tu aimes les formes symétriques."
    ]
  },

  "prepose-entretien-appareils-electromenagers-profil.PNG": {
    titre: "Préposé entretien électroménagers",
    taches: [
      "Vérifie le fonctionnement des mécanismes d’entraînement, des circuits électroniques et des circuits d’alimentation des appareils électroménagers (lave-vaisselle, cuisinière, laveuse, sécheuse, micro-ondes, déshumidificateur, climatiseur, etc.).",
      "Répare ou remplace les pièces défectueuses des systèmes mécaniques.",
      "Répare ou remplace les pièces défectueuses des systèmes électriques et électroniques.",
      "Répare ou remplace les pièces défectueuses des systèmes d’eau."
    ],
    profil: [
      "Tu as des aptitudes pour le service à la clientèle.",
      "Tu es habile de tes mains et tu aimes résoudre des problèmes.",
      "Tu aimes apprendre le fonctionnement de systèmes électroniques.",
      "Tu es polyvalent, appliqué et méthodique."
    ]
  },

  "producteur-de-sirop-derable-profil.PNG": {
    titre: "Producteur de sirop d'érable",
    taches: [
      "Aménage l’érablière.",
      "Entaille les érables.",
      "Installe et entretient le réseau de tubulures.",
      "Transforme l’eau d’érable en sirop (évaporation, cuisson, filtration, etc.)."
    ],
    profil: [
      "Tu aimes travailler en plein air.",
      "Tu possèdes une bonne endurance physique et un bon sens de l’observation.",
      "Tu es autonome et minutieux."
    ]
  },

  "prpos-aux-bnficiaires-profil.PNG": {
    titre: "Préposé aux bénéficiaires",
    taches: [
      "Donne des soins d'hygiène aux patients",
      "Donne des soins et des services d'assistance de longue durée auprès de clientèles en perte d'autonomie (personnes âgées, par exemple)",
      "Donne des soins et des services d'assistance de courte durée auprès de clientèles variées (chirurgie d'un jour, brève hospitalisation, par exemple)",
      "Donne des soins et des services d'assistance auprès de personnes atteintes de problèmes de santé mentale, de déficits cognitifs ou d'incapacités intellectuelles",
      "Applique et respecte le protocole de soins selon les lois en vigueur"
    ],
    profil: [
      "Tu veux aider les autres",
      "Tu fais preuve de dévouement, de patience et d'écoute",
      "Tu as un bon jugement et fais preuve d'initiative"
    ]
  },

  "receptionniste-hotel-profil.PNG": {
    titre: "Réceptionniste d'hôtel",
    taches: [
      "Consigne les réservations et accueille la clientèle.",
      "Vend des services hôteliers : hébergement et restauration.",
      "Oriente la clientèle vers les services à proximité et les points d’intérêts.",
      "Effectue des suivis de tout genre (sécurité des personnes, transfert des bagages, classement des documents, etc.)."
    ],
    profil: [
      "Tu es ouvert d’esprit.",
      "Tu es sociable, responsable et courtois.",
      "Tu as des aptitudes pour l’apprentissage des langues étrangères.",
      "Tu as le sens de l’organisation et de la diplomatie."
    ]
  },

  "rembourreur-profil.PNG": {
    titre: "Rembourreur",
    taches: [
      "Rembourre des meubles neufs.",
      "Restaure le rembourrage de meubles usagés et de sièges de véhicules.",
      "Taille et coud des tissus.",
      "Pose ou tisse du rotin sur des sièges."
    ],
    profil: [
      "Tu as de bonnes habiletés manuelles.",
      "Tu es précis.",
      "Tu es minutieux et patient.",
      "Tu aimes travailler seul."
    ]
  },

  "representant-des-services-financiers-profil.PNG": {
    titre: "Représentant des services financiers",
    taches: [
      "Conseille la clientèle en matière de produits financiers (comptes personnels, crédits, investissements, etc.).",
      "Conseille la clientèle en matière d’assurances (vie, automobile, habitation, responsabilités, etc.).",
      "Élabore différents programmes en fonction des besoins de la clientèle.",
      "Effectue la promotion de produits financiers et d’assurances."
    ],
    profil: [
      "Tu as une bonne capacité d’analyse et de synthèse.",
      "Tu as une bonne capacité de concentration et des aptitudes en calcul.",
      "Tu as de l’intérêt pour le service à la clientèle.",
      "Tu es honnête, discret et minutieux."
    ]
  },

  "representant-des-ventes-profil.PNG": {
    titre: "Représentant des ventes",
    taches: [
      "Fait la promotion de produits et de services auprès de détaillants et de grossistes.",
      "Calcule des escomptes, des prix de vente, des marges de profit, etc.",
      "Négocie des conditions et rédige des contrats de vente.",
      "Offre un service-conseil visant l’augmentation des ventes."
    ],
    profil: [
      "Tu as des habiletés en communication et en leadership.",
      "Tu es autonome, sociable et courtois.",
      "Tu es dynamique.",
      "Tu es capable de travailler sous pression."
    ]
  },

  "restaurateur-finisseur-meubles-profil.PNG": {
    titre: "Restaurateur-finisseur de meubles",
    taches: [
      "Effectue la finition de meubles neufs.",
      "Restaure et répare des meubles usés ou vieillis.",
      "Décape et sable des meubles.",
      "Démonte et assemble des meubles."
    ],
    profil: [
      "Tu aimes le bois et les essences de toutes sortes.",
      "Tu as de bonnes habiletés manuelles.",
      "Tu es minutieux et patient.",
      "Tu aimes travailler seul."
    ]
  },

  "scenographe-profil.PNG": {
    titre: "Scénographe",
    taches: [
      "Planifie et réalise des décors et des espaces scénographiques pour la scène (théâtre, opéra, etc.) la télévision, le vidéo, le cinéma, les événements et les expositions.",
      "Collabore avec les metteurs en scène, les réalisateurs, les régisseurs, les accessoiristes, les éclairagistes et d’autres membres de l’équipe de création.",
      "Réalise des maquettes à l’échelle.",
      "Planifie et gère l’équipe de réalisation de décors (construction, peinture, choix des revêtements, etc.)."
    ],
    profil: [
      "Tu es créatif, minutieux et habile de tes mains.",
      "Tu aimes le milieu des arts.",
      "Tu as des aptitudes pour le dessin et la communication."
    ]
  },

  "secretaire-juridique-profil.PNG": {
    titre: "Secrétaire juridique",
    taches: [
      "Reçoit les appels et accueille la clientèle.",
      "Fixe et confirme les rendez-vous chez le notaire ou l’avocat.",
      "Prépare des documents juridiques (actes notariés, contrats, lettres, testaments, baux, adoption, etc.).",
      "Prend des notes et rédige des procès-verbaux."
    ],
    profil: [
      "Tu aimes le secteur juridique.",
      "Tu es honnête, discrète et méthodique.",
      "Tu as de la facilité à communiquer avec le public."
    ]
  },

  "secretaire-medicale-profil.PNG": {
    titre: "Secrétaire médicale",
    taches: [
      "Reçoit les appels et accueille la clientèle.",
      "Fixe et confirme les rendez-vous chez le médecin.",
      "Prépare les dossiers médicaux, les formulaires pour les paiements des assurances, les demandes d\'indemnisation, les résumés de dossiers, etc.",
      "Classe des documents confidentiels."
    ],
    profil: [
      "Tu aimes le secteur de la santé.",
      "Tu es honnête, discrète et méthodique.",
      "Tu as de la facilité à communiquer avec le public."
    ]
  },

  "secretaire-profil.PNG": {
    titre: "Secrétaire",
    taches: [
      "Reçoit les appels et assure le service à la clientèle.",
      "Fixe et confirme les rendez-vous et les réunions des gestionnaires.",
      "Prépare, à l’ordinateur, des lettres,  des publications, des résumés, des factures, etc.",
      "Répond aux courriels et gère le courrier."
    ],
    profil: [
      "Tu es honnête, discrète et méthodique.",
      "Tu as de la facilité à communiquer avec le public.",
      "Tu aimes lire et écrire en français et en anglais."
    ]
  },

  "serrurier-profil.PNG": {
    titre: "Serrurier",
    taches: [
      "Installe des serrures mécaniques, des systèmes de verrouillage, des serrures électriques et des dispositifs électromagnétiques.",
      "Répare des cadenas et des systèmes de verrouillage : verrous, coffres forts, serrures de véhicules, etc.",
      "Taille des clés, programme des serrures et installe des accessoires de quincaillerie.",
      "Effectue la vente de produits de serrurerie."
    ],
    profil: [
      "Tu possèdes une bonne dextérité manuelle.",
      "Tu es patient, minutieux et organisé.",
      "Tu as une excellente vision.",
      "Tu es une personne honnête."
    ]
  },

  "serveur-profil.PNG": {
    titre: "Serveur",
    taches: [
      "Prend les commandes de nourritures et de boissons.",
      "Dresse les tables dans différents lieux : restaurants, bars, cafés, bistros, salles de réception, hôtels et auberges.",
      "Prépare des boissons et suggère des vins en accord avec les mets.",
      "Assure les services de restauration avec table d’hôte, menu à la carte et menu gastronomique."
    ],
    profil: [
      "Tu es sociable, responsable et courtois.",
      "Tu es en bonne condition physique.",
      "Tu es capable de travailler sous pression."
    ]
  },

  "sommelier-profil.PNG": {
    titre: "Sommelier",
    taches: [
      "Conseille la clientèle sur les vins et les spiritueux.",
      "Gère les achats et la conservation des vins pour des restaurants.",
      "Conçoit des cartes de vins et de spiritueux.",
      "Évalue la qualité des vins."
    ],
    profil: [
      "Tu as le palais fin et un bon odorat.",
      "Tu es passionné, curieux et sociable.",
      "Tu possèdes une bonne mémoire."
    ]
  },

  "soudeur-haute-pression-profil.PNG": {
    titre: "Soudeur haute pression",
    taches: [
      "Effectue les travaux préparatoires au soudage haute pression.",
      "Soude avec un niveau élevé de précision et avec une grande efficacité de la tuyauterie et des appareils fonctionnant avec des pressions élevées.",
      "Répare des soudures sur de la tuyauterie et des appareils à haute pression.",
      "Utilise plusieurs procédés de soudage : arc électrique avec électrodes enrobées (SMAW) sous gaz avec électrodes de tungstène (GTAW) soudage semi-automatique (GMAW), etc."
    ],
    profil: [
      "Tu es perfectionniste.",
      "Tu as une bonne acuité visuelle et une excellente dextérité manuelle.",
      "Tu aimes travailler dans des positions (postures) variées.",
      "Tu es minutieux, précis et responsable."
    ]
  },

  "soudeur-profil.PNG": {
    titre: "Soudeur",
    taches: [
      "Coupe, cisaille et perce des pièces de métal.",
      "Réalise des montages.",
      "Soude des pièces de métal et des alliages de tout type en utilisant plusieurs procédés de soudage : arc électrique avec électrodes enrobées (SMAW) sous gaz avec électrodes de tungstène (GTAW) soudage semi-automatique (GMAW), etc.",
      "Effectue la finition en meulant, en ébavurant et en polissant les pièces soudées."
    ],
    profil: [
      "Tu es perfectionniste.",
      "Tu as une bonne acuité visuelle et une excellente dextérité manuelle.",
      "Tu aimes travailler dans des positions (postures) variées.",
      "Tu es minutieux, précis et responsable."
    ]
  },

  "specialiste-des-systemes-de-chauffage-de-ventilation-et-de-climatisation-profil.PNG": {
    titre: "Spécialiste CVCA",
    taches: [
      "Effectue la conception technique de systèmes de chauffage, de ventilation, de climatisation, de plomberie et de réfrigération.",
      "Estime les coûts en mécanique du bâtiment.",
      "Participe à l’installation des systèmes.",
      "Supervise le travail des employés en mécanique du bâtiment."
    ],
    profil: [
      "Tu as de l’intérêt pour les sciences et le dessin.",
      "Tu es organisé, responsable et minutieux.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "superviseur-des-services-alimentaires-profil.PNG": {
    titre: "Superviseur des services alimentaires",
    taches: [
      "Assure la bonne marche de la cuisine et de la salle à manger.",
      "Élabore des menus et standardise des recettes.",
      "Gère l’approvisionnement et les coûts.",
      "Voit au respect de la règlementation en matière de services alimentaires."
    ],
    profil: [
      "Tu as le sens des responsabilités.",
      "Tu as un bon leadership.",
      "Tu es créatif et débrouillard.",
      "Tu as du talent pour la vente et le service à la clientèle."
    ]
  },

  "surveillant-dans-la-fabrication-de-meubles-et-accessoires-profil.PNG": {
    titre: "Surveillant fabrication de meubles",
    taches: [
      "Dessine des meubles, des gabarits et des outils de coupe.",
      "Effectuer la conception technique d’éléments pour des projets de fabrication sur mesure.",
      "Estime les coûts de fabrication.",
      "Supervise le travail des ouvriers qui fabriquent des meubles et des accessoires et qui en assurent la finition."
    ],
    profil: [
      "Tu possèdes une excellente dextérité manuelle et une bonne vision.",
      "Tu as une capacité d’analyse et de synthèse.",
      "Tu es minutieux et précis.",
      "Tu aimes résoudre des problèmes et travailler en équipe."
    ]
  },

  "surveillant-dans-la-fabrication-de-produits-en-plastique-profil.PNG": {
    titre: "Surveillant fabrication plastique",
    taches: [
      "Conçoit outils à l’ordinateur (moules, filières et gabarits).",
      "Procède à des achats de matières premières.",
      "Transforme les matériaux en objets selon différents procédés (extrusion, injection, thermoformage, etc.).",
      "Organise la production et assure le contrôle de la qualité."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu aimes résoudre des problèmes.",
      "Tu es minutieux, précis et responsable.",
      "Tu sais faire preuve de leadership."
    ]
  },

  "surveillant-dans-la-transformation-des-produits-forestiers-profil.PNG": {
    titre: "Surveillant transformation forestière",
    taches: [
      "Établit les normes d’un plan de transformation de produits forestiers.",
      "Contrôle les opérations de transformation du bois (écorçage, sciage, rabotage, débitage, délignage, déroulage, etc.).",
      "Supervise et coordonne les ouvriers qui transforment le bois.",
      "Gère l\'arrivage des matières premières."
    ],
    profil: [
      "Tu aimes travailler en plein air et à l’intérieur.",
      "Tu as un bon sens de l’observation.",
      "Tu es minutieux et précis.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "tailleur-de-pierre-profil.PNG": {
    titre: "Tailleur de pierre",
    taches: [
      "Extrait des blocs de granite, de marbre et de calcaire des carrières.",
      "Scie et manipule des blocs de pierre.",
      "Fabrique des éléments architecturaux en pierre : arcs, voûtes, escaliers, piliers, etc.",
      "Fabrique des éléments décoratifs en pierre : manteaux de cheminée, stèles, urnes, etc."
    ],
    profil: [
      "Tu es en bonne condition physique.",
      "Tu fais preuve de dextérité manuelle et de minutie.",
      "Tu es doué en dessin.",
      "Tu es prêt à travailler dans des conditions physiques difficiles."
    ]
  },

  "technicien-ambulancier-profil.PNG": {
    titre: "Technicien ambulancier",
    taches: [
      "Analyse les problèmes de santé, les problèmes de dysfonctionnement ou les blessures chez les personnes en situation d’urgence.",
      "Donne des soins préhospitaliers d\'urgence pour des situations de traumatismes, de détresses respiratoires, d’intoxications, etc.",
      "Déplace les personnes et les transporte sécuritairement à l’hôpital.",
      "Aide le personnel du centre hospitalier à dispenser des soins."
    ],
    profil: [
      "Tu es en excellente condition physique et résistant au stress.",
      "Tu as un excellent jugement et un esprit d’initiative.",
      "Tu fais preuve d’empathie."
    ]
  },

  "technicien-de-bibliotheques-et-de-services-archives-publiques-profil.PNG": {
    titre: "Technicien de bibliothèques",
    taches: [
      "Référence, classe, indexe et décrit des livres, des documents audio et vidéo, ainsi que des documents administratifs dans une bibliothèque, un centre de gestion de documents et un centre d’archives.",
      "Implante, organise et met à jour un système de gestion de documents.",
      "Aide les usagers dans leurs recherches.",
      "Prête des documents."
    ],
    profil: [
      "Tu as de l’intérêt pour l’informatique et la recherche.",
      "Tu es méthodique et tu as le sens de l’analyse.",
      "Tu as de l’intérêt pour le service à la clientèle."
    ]
  },

  "technicien-de-laboratoire-de-sciences-physiques-profil.PNG": {
    titre: "Technicien de laboratoire",
    taches: [
      "Assiste un chercheur en physique dans la conception et la mise au point de produits de haute technologie.",
      "Effectue des montages d’instruments optiques et acoustiques permettant de caractériser des composants et des appareils.",
      "Caractérise des matériaux.",
      "Assemble des appareils de haute technologie et des systèmes de positionnement."
    ],
    profil: [
      "Tu aimes les sciences et les technologies.",
      "Tu as des aptitudes pour les mathématiques.",
      "Tu es polyvalent, appliqué et méthodique.",
      "Tu es habile de tes mains et tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-amenagement-urbain-profil.PNG": {
    titre: "Technicien en aménagement urbain",
    taches: [
      "Analyse des cartes géographiques ainsi que des données environnementales et des données socio-économiques en lien avec des problématiques d’aménagement.",
      "Conseille et informe les citoyens sur les questions d’aménagement.",
      "Traite les demandes de permis et de certificats.",
      "Inspecte le territoire et des travaux de construction."
    ],
    profil: [
      "Tu as le sens de l’observation.",
      "Tu es responsable, minutieux et diplomate.",
      "Tu aimes travailler en équipe.",
      "Tu as une grande capacité d’analyse."
    ]
  },

  "technicien-en-aquaculture-profil.PNG": {
    titre: "Technicien en aquaculture",
    taches: [
      "Analyse le potentiel d’élevage d’un site (poissons et coquillages).",
      "Fabrique des structures de captage et d’élevage et les installe en mer.",
      "Effectue des analyses chimiques et microbiologiques.",
      "Gère les activités d’un établissement d’élevage."
    ],
    profil: [
      "Tu aimes les milieux marins.",
      "Tu possèdes une bonne dextérité manuelle et une bonne endurance physique.",
      "Tu as des aptitudes pour les sciences."
    ]
  },

  "technicien-en-architecture-profil.PNG": {
    titre: "Technicien en architecture",
    taches: [
      "Réalise des dessins techniques et des dessins d’exécution selon les plans conçus par un architecte.",
      "S’assure de la conformité des projets et des bâtiments avec le Code de la construction et les règlements en vigueur.",
      "Estime les coûts des matériaux et de la main-d’œuvre, produit les devis, les contrats et les soumissions.",
      "Coordonne des travaux de construction."
    ],
    profil: [
      "Tu as le sens de l’observation.",
      "Tu as des habiletés en dessin et en science.",
      "Tu es débrouillard et méticuleux.",
      "Tu es créatif."
    ]
  },

  "technicien-en-arpentage-profil.PNG": {
    titre: "Technicien en arpentage",
    taches: [
      "Mesure des terrains et des bâtiments à l’aide d’outils d’arpentage (systèmes GPS, stations totales, niveaux électroniques, etc.).",
      "Effectue des implantations de travaux de construction et des levés de terrain.",
      "Calcule des quantités de matériaux pour la réalisation de travaux publics et de voirie.",
      "Dessine des plans topographiques, des plans cadastraux et des plans de localisation."
    ],
    profil: [
      "Tu aimes travailler en équipe et en plein air.",
      "Tu as des aptitudes pour le calcul et la géométrie.",
      "Tu es minutieux, méthodique et autonome."
    ]
  },

  "technicien-en-assainissement-de-leau-profil.PNG": {
    titre: "Technicien en assainissement de l'eau",
    taches: [
      "Effectue des analyses physiques, chimiques et microbiologiques",
      "Assure le suivi de la production d'eau potable",
      "Assure le suivi du traitement des eaux usées",
      "Assure le suivi du fonctionnement des réseaux d'aqueduc et d'égouts",
      "Interprète des plans et des devis d'aménagement des stations de traitement",
      "Prépare des rapports et voit à l'application des règlements",
      "Analyse des situations problématiques et propose des solutions visant l'amélioration des procédés de traitement des eaux"
    ],
    profil: [
      "Tu es soucieux de l'environnement et de la santé publique",
      "Tu as de l'intérêt pour la résolution de problèmes",
      "Tu possèdes un bon sens de l'observation"
    ]
  },

  "technicien-en-audiovisuel-profil.PNG": {
    titre: "Technicien en audiovisuel",
    taches: [
      "Installe, entretient et répare différents équipements de production et de postproduction dans les domaines de la radio, de la télévision, de la vidéo, des spectacles, des présentations multimédias, etc.",
      "Effectue la sonorisation des salles.",
      "Effectue l’éclairage, la prise de son et l’enregistrement vidéo d’événements.",
      "Assure la direction technique de projets audiovisuels."
    ],
    profil: [
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu aimes travailler en équipe.",
      "Tu es polyvalent, appliqué et méthodique.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-avionique-et-controle-instruments-aeronefs-profil.PNG": {
    titre: "Technicien en avionique",
    taches: [
      "Vérifie le fonctionnement des différents systèmes avioniques (communication, radionavigation, distribution électrique, systèmes asservis, etc.).",
      "Dépanne et répare des systèmes avioniques.",
      "Remplace des composants électriques et électroniques (analogiques et numériques) défectueux.",
      "Installe des systèmes avioniques."
    ],
    profil: [
      "Tu aimes les nouvelles technologies.",
      "Tu es polyvalent, appliqué et méthodique.",
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-bioecologie-profil.PNG": {
    titre: "Technicien en bioécologie",
    taches: [
      "Prélève des échantillons en milieu naturel et effectue des analyses;",
      "Détermine les caractéristiques biologiques du milieu (espèces animales, aquatiques et végétales);",
      "Participe à des analyses sur des écosystèmes (population, habitat, aménagement, exploitation, conservation, études d’impact, par exemple);",
      "Compile, traite les données et rédige des rapports;"
    ],
    profil: [
      "Tu aimes travailler au grand air et dans la nature.",
      "Tu as des aptitudes pour les sciences et les questions environnementales",
      "Tu es débrouillard et autonome"
    ]
  },

  "technicien-en-comptabilite-profil.PNG": {
    titre: "Technicien en comptabilité",
    taches: [
      "Tient à jour et vérifie les écritures comptables à l’aide de logiciels.",
      "Produit des budgets, des inventaires, des rapports sur les finances et des déclarations de revenus.",
      "Effectue des activités liées au démarrage d’une entreprise.",
      "Gère les stocks de biens."
    ],
    profil: [
      "Tu as une bonne capacité d’analyse et de synthèse.",
      "Tu as une bonne capacité de concentration et des aptitudes en calcul.",
      "Tu es honnête, discret et minutieux.",
      "Tu as de l’intérêt pour les tâches complexes et le service à la clientèle."
    ]
  },

  "technicien-en-ebenisterie-profil.PNG": {
    titre: "Technicien en ébénisterie",
    taches: [
      "Dessine les plans et conçoit des prototypes (meubles, armoires, portes, éléments architecturaux, etc.).",
      "Choisit des matériaux.",
      "Estime les coûts de production au regard des ressources matérielles et des techniques de travail à utiliser.",
      "Organise la production pour une usine de fabrication."
    ],
    profil: [
      "Tu as une bonne capacité d’analyse.",
      "Tu possèdes une bonne dextérité manuelle.",
      "Tu es minutieux, précis et responsable.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-electronique-profil.PNG": {
    titre: "Technicien en électronique",
    taches: [
      "Entretien et répare de l’équipement informatique, audiovisuel et de télécommunication.",
      "Installe et modifie de l’équipement informatique, audiovisuel et de télécommunication.",
      "Implante des réseaux informatiques locaux et offre de l’assistance technique à la clientèle.",
      "Dessine des schémas électroniques."
    ],
    profil: [
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu es appliqué et méthodique.",
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes dans un domaine en constante évolution."
    ]
  },

  "technicien-en-electronique-telecommunication-profil.PNG": {
    titre: "Technicien en électronique télécom",
    taches: [
      "Installe et met en service des réseaux de télécommunication (par fil, optique et sans-fil).",
      "Effectue la surveillance de l’équipement de télécommunication.",
      "Dessine des schémas électroniques.",
      "Assure la réparation et la maintenance de l’équipement de télécommunication."
    ],
    profil: [
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu es appliqué et méthodique.",
      "Tu es habile de tes mains.",
      "Tu aimes résoudre des problèmes dans un domaine en constante évolution."
    ]
  },

  "technicien-en-genie-aerospatial-profil.PNG": {
    titre: "Technicien en génie aérospatial",
    taches: [
      "Participe à la conception des pièces de moteurs et des composants de structures d’aéronefs.",
      "Conçoit de l’outillage pour la fabrication.",
      "Élabore les gammes de fabrication des pièces et des composants (usinage, assemblage et démontage).",
      "Élabore des méthodes de contrôle de qualité et assure le suivi de leur implantation."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu as des aptitudes pour les sciences, le calcul et le dessin technique.",
      "Tu es minutieux et tu es capable d’une grande concentration.",
      "Tu as le souci du détail."
    ]
  },

  "technicien-en-genie-civil-profil.PNG": {
    titre: "Technicien en génie civil",
    taches: [
      "Réalise des plans détaillés pour des projets d’infrastructures (routes, services publics, etc.) et des projets de structures de bâtiments.",
      "Effectue des enquêtes terrain (arpentage, analyse de sols, indices de contamination, etc.).",
      "Prépare des soumissions, des devis de construction et des calendriers des travaux.",
      "Coordonne des travaux de construction pour s’assurer de leur conformité aux plans et aux devis."
    ],
    profil: [
      "Tu as le sens de l’observation.",
      "Tu as des habiletés en dessin et en science.",
      "Tu es responsable, minutieux et méthodique.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-genie-mecanique-profil.PNG": {
    titre: "Technicien en génie mécanique",
    taches: [
      "Dessine des plans de pièces mécaniques ou de pièces de machinerie.",
      "Participe à la conception de moules, d’outils, de matrices, de gabarits, etc.",
      "Programme des machines-outils.",
      "Fabrique des pièces mécaniques."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu as des aptitudes pour le calcul et le dessin technique.",
      "Tu es minutieux, créatif et tu as le souci du détail."
    ]
  },

  "technicien-en-geologie-et-en-mineralogie-profil.PNG": {
    titre: "Technicien en géologie et minéralogie",
    taches: [
      "Cartographie et échantillonne des zones minéralisées, contrôle la stabilité du terrain.",
      "Coordonne les essais en vue de trouver des sites prometteurs.",
      "Effectue les levées géologiques, géochimiques et géophysiques en collaboration avec les ingénieurs et les géologues.",
      "Supervise les travaux de forage et d’abattage du minerai."
    ],
    profil: [
      "Tu as de l’intérêt pour les sciences et le dessin technique.",
      "Tu aimes travailler en plein air et tu es en excellence condition physique.",
      "Tu es organisé, minutieux et tu as un bon sens de l’observation."
    ]
  },

  "technicien-en-geomatique-profil.PNG": {
    titre: "Technicien en géomatique",
    taches: [
      "Effectue des mesures sur le terrain.",
      "Effectue des implantations.",
      "Interprète des photographies aériennes et des images satellitaires.",
      "Traite des données et effectue des calculs."
    ],
    profil: [
      "Tu aimes travailler en équipe.",
      "Tu as des aptitudes pour le calcul et la géométrie.",
      "Tu es minutieux, méthodique et autonome."
    ]
  },

  "technicien-en-informatique-de-gestion-profil.PNG": {
    titre: "Technicien en informatique de gestion",
    taches: [
      "Développe, conçoit et implante des outils informatiques de gestion d’une organisation (applications bureautiques, outils internet, base de données, etc.).",
      "Effectue les essais, détecte les problèmes et fait la mise au point des systèmes et programmes.",
      "Forme les utilisateurs des programmes et logiciels et apporte un soutien technique.",
      "Utilise des langages de programmation variés."
    ],
    profil: [
      "Tu as l’esprit d’analyse et tu possèdes un esprit logique.",
      "Tu es curieux, minutieux et persévérant.",
      "Tu es capable de t’adapter aux changements."
    ]
  },

  "technicien-en-informatique-gestion-de-reseaux-profil.PNG": {
    titre: "Technicien en gestion de réseaux",
    taches: [
      "Participe à la conception des réseaux informatiques.",
      "Installe et met en services des serveurs et des réseaux informatiques.",
      "Effectue la surveillance de réseaux, détecte les problèmes et apporte les correctifs nécessaires.",
      "Utilise des langages de programmation variés."
    ],
    profil: [
      "Tu as l’esprit d’analyse et tu possèdes un esprit logique.",
      "Tu es curieux, minutieux et persévérant.",
      "Tu es capable de t’adapter aux changements."
    ]
  },

  "technicien-en-informatique-programmeur-analyste-profil.PNG": {
    titre: "Technicien programmeur-analyste",
    taches: [
      "Participe à la conception de programmes informatiques pour des ordinateurs et des appareils mobiles : base de données, jeux vidéo, web, etc.",
      "Développe des programmes informatiques et teste leur fonctionnement.",
      "Débogue les programmes.",
      "Utilise des langages de programmation variés."
    ],
    profil: [
      "Tu as l’esprit d’analyse et tu possèdes un esprit logique.",
      "Tu es curieux, minutieux et persévérant.",
      "Tu es capable de t’adapter aux changements."
    ]
  },

  "technicien-en-logistique-du-transport-profil.PNG": {
    titre: "Technicien en logistique du transport",
    taches: [
      "Organise les itinéraires et les horaires des services de transport de personnes.",
      "Organise le transport national et international des marchandises.",
      "Veille à l’expédition et à l’entreposage des marchandises.",
      "Assure le dédouanement des marchandises."
    ],
    profil: [
      "Tu as d’excellentes aptitudes en français et en anglais parlé.",
      "Tu as de l’intérêt pour le service à la clientèle et la résolution de problèmes.",
      "Tu es organisé, responsable et résistant au stress."
    ]
  },

  "technicien-en-maintenance-industrielle-profil.PNG": {
    titre: "Technicien en maintenance industrielle",
    taches: [
      "Calibre et ajuste des instruments de mesure et des commandes industrielles.",
      "Effectue des mesures sur de l’équipement industriel.",
      "Analyse et résout des problèmes de fonctionnement d’équipement industriel (vibration et lubrification, par exemple).",
      "Coordonne des activités d’entretien et de maintenance sur de la machinerie."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu aimes résoudre des problèmes dans un domaine en constante évolution.",
      "Tu es appliqué et méthodique.",
      "Tu es habile de tes mains."
    ]
  },

  "technicien-en-metallurgie-profil.PNG": {
    titre: "Technicien en métallurgie",
    taches: [
      "Participe à la production des métaux et des alliages (acier et aluminium).",
      "Élabore des procédures de soudage.",
      "Contrôle la qualité des métaux et des alliages par des analyses chimiques.",
      "Contrôle la qualité des métaux et des alliages par des essais non destructifs et destructifs."
    ],
    profil: [
      "Tu as de l’intérêt pour le travail de laboratoire et le travail à l’usine.",
      "Tu as de l’intérêt pour la chimie et la physique.",
      "Tu aimes résoudre des problèmes."
    ]
  },

  "technicien-en-museologie-profil.PNG": {
    titre: "Technicien en muséologie",
    taches: [
      "Assure la protection et met en valeur des objets de collection à caractère scientifique, patrimonial, artistique et audiovisuel.",
      "Conçoit des espaces d’exposition avec des éclairages et des éléments de décors.",
      "Monte et démonte des expositions.",
      "Prépare le déplacement de biens culturels."
    ],
    profil: [
      "Tu es créatif.",
      "Tu as de l’intérêt pour les beaux-arts et le patrimoine.",
      "Tu es curieux, méthodique et autonome.",
      "Tu as des habiletés en communication et en dessin."
    ]
  },

  "technicien-en-orthse-visuelle-profil.PNG": {
    titre: "Technicien en orthèse visuelle",
    taches: [
      "Détermine les spécifications des lunettes et des lentilles cornéennes à partir d'ordonnances",
      "Prend des mesures (courbure de l'œil, largeur du visage, etc.) à l'aide d'instruments optiques et effectue certains tests",
      "Conseille la clientèle dans le choix des montures, des lentilles d'une lunette et des lentilles cornéennes",
      "Ajuste et répare les lunettes",
      "Informe la clientèle sur l'utilisation et l'entretien des orthèses visuelles"
    ],
    profil: [
      "Tu es minutieux, sociable et polyvalent",
      "Tu as une bonne dextérité fine et un bon sens esthétique",
      "Tu as des aptitudes pour la vente et le service à la clientèle"
    ]
  },

  "technicien-en-prevention-dincendies-profil.PNG": {
    titre: "Technicien en prévention d'incendies",
    taches: [
      "Combat les incendies dans des situations complexes : installations souterraines, zone à accès limité, parc industriel d’envergure, par exemple.",
      "Manœuvre des échelles, de l’équipement de sauvetage, des pompes, des lances d’incendie, etc.",
      "Effectue la recherche et le sauvetage de victimes en milieu urbain.",
      "Intervient en tant que premier répondant (premiers soins)."
    ],
    profil: [
      "Tu as le sens du devoir.",
      "Tu es courageux, altruiste et résistant au stress.",
      "Tu es en excellente condition physique.",
      "Tu aimes travailler en équipe."
    ]
  },

  "technicien-en-production-agricole-et-horticole-profil.PNG": {
    titre: "Technicien en production agricole",
    taches: [
      "Planifie la mise en production d’une culture conventionnelle ou biologique.",
      "Assure le suivi d’une culture : irrigation, fertilisation, etc.",
      "Gère une équipe de production.",
      "Participe à l’amélioration des sols et à l’implantation de nouvelles technologies."
    ],
    profil: [
      "Tu aimes travailler en plein air et dans la nature.",
      "Tu as des aptitudes en gestion.",
      "Tu es actif, autonome et responsable.",
      "Tu possèdes un bon sens de l’observation et de l’organisation."
    ]
  },

  "technicien-en-production-pharmaceutique-profil.PNG": {
    titre: "Technicien en production pharmaceutique",
    taches: [
      "Prépare des matières premières et des mélanges.",
      "Règle et opère les machines servant à la production des médicaments (pompes, encapsuleuses, distillateurs, injecteurs, turbines, etc.).",
      "Produit des comprimés, des crèmes, des onguents, des gels, des vaccins, etc.",
      "Assure le suivi des procédés de fabrication et s’assure du respect des normes de qualité."
    ],
    profil: [
      "Tu es minutieux et prudent.",
      "Tu possèdes une bonne vue.",
      "Tu as des aptitudes pour la résolution de problèmes.",
      "Tu fais preuve d’un bon jugement et un esprit d’initiative."
    ]
  },

  "technicien-en-radiotelediffusion-profil.PNG": {
    titre: "Technicien en radiotélédiffusion",
    taches: [
      "Participe aux étapes de préproduction d’une émission.",
      "Participe au tournage d’images vidéo à titre de cadreur, de preneur de son, etc.",
      "Assure le montage et le mixage d’images et de sons à l’aide de logiciels spécialisés.",
      "Produit des images d’infographie ou des effets spéciaux."
    ],
    profil: [
      "Tu es organisé, débrouillard, et résistant au stress.",
      "Tu aimes travailler en équipe.",
      "Tu es intéressé par les nouvelles technologies."
    ]
  },

  "technicien-en-science-forestiere-profil.PNG": {
    titre: "Technicien en science forestière",
    taches: [
      "Inventorie et analyse l’état de la forêt.",
      "Planifie des plans d’aménagement et de protection de la forêt.",
      "Planifie et supervise des travaux forestiers (récolte, reboisement, projets de recherche, etc.).",
      "Coordonne les travaux de réalisation d’infrastructures (chemins forestiers, drainage et camps)."
    ],
    profil: [
      "Tu aimes travailler au grand air et dans la nature.",
      "Tu as des aptitudes en science, en calcul et en leadership.",
      "Tu possèdes une bonne dextérité manuelle et une grande endurance physique.",
      "Tu es responsable, organisé et débrouillard."
    ]
  },

  "technicien-en-transformation-de-materiaux-composites-profil.PNG": {
    titre: "Technicien en matériaux composites",
    taches: [
      "Dessine des croquis de pièces à mouler.",
      "Fabrique des prototypes.",
      "Élabore des gammes de fabrication.",
      "Conçoit et fabrique de l’outillage."
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu as de l’intérêt pour les sciences et le dessin technique.",
      "Tu es organisé, minutieux et bon communicateur.",
      "Tu possèdes un bon sens d’observation et d’analyse"
    ]
  },

  "technicien-en-travail-social-profil.PNG": {
    titre: "Technicien en travail social",
    taches: [
      "Accompagne des groupes, des familles et des personnes présentant des problèmes personnels, familiaux et sociaux.",
      "Effectue de l’animation de groupes.",
      "Aide des personnes à défendre des droits individuels et collectifs.",
      "Amène les personnes à trouver des solutions à leurs problèmes et s’assure qu’ils bénéficient des ressources nécessaires."
    ],
    profil: [
      "Tu veux aider les autres.",
      "Tu souhaites vivre dans une société plus juste.",
      "Tu es respectueuse, empathique, discrète et vigilante.",
      "Tu fais preuve d’un bon jugement, d’un esprit d’analyse et de facilité à entrer en communication avec autrui."
    ]
  },

  "technicien-en-travaux-miniers-profil.PNG": {
    titre: "Technicien en travaux miniers",
    taches: [
      "Planifie et supervise activités des travailleurs des mines et de carrières.",
      "Gère la formation et la sécurité des travailleurs.",
      "Effectue des travaux d’arpentage minier.",
      "Contrôle les activités de sautage."
    ],
    profil: [
      "Tu possèdes une bonne endurance physique.",
      "Tu as un excellent leadership.",
      "Tu aimes résoudre des problèmes.",
      "Tu es organisé, diplomate et débrouillard."
    ]
  },

  "technicien-juridique-profil.PNG": {
    titre: "Technicien juridique",
    taches: [
      "Rédige des projets de documents juridiques (testaments, contrats, procédures administratives, etc.).",
      "Fait des recherches juridiques dans les lois et les registres et produit des rapports.",
      "Gère un centre de documentation juridique.",
      "Signifie les actes de procédures émanant d’un tribunal, en conformité avec la Loi sur les huissiers de justice."
    ],
    profil: [
      "Tu aimes le secteur juridique.",
      "Tu es méticuleux, discret et débrouillard.",
      "Tu as d’excellentes habiletés en rédaction.",
      "Tu as un esprit logique et le sens de la synthèse."
    ]
  },

  "technicienne-de-dossiers-medicaux-profil.PNG": {
    titre: "Technicienne de dossiers médicaux",
    taches: [
      "Analyse des dossiers médicaux (pathologie, anatomie, problèmes psychosociaux, oncologie, etc.).",
      "Archive des dossiers médicaux dans une base de données informatisées.",
      "Gère et contrôle l’accès aux informations des patients.",
      "Assure la gestion de services d’archives."
    ],
    profil: [
      "Tu aimes le secteur de la santé.",
      "Tu es honnête, discrète et méthodique.",
      "Tu as des habiletés en rédaction et en communication."
    ]
  },

  "technicienne-de-laboratoire-medical-profil.PNG": {
    titre: "Technicienne de laboratoire médical",
    taches: [
      "Prépare le matériel de laboratoire et les échantillons.",
      "Effectue des analyses biochimiques, hématologiques, microbiologiques, etc..",
      "Prépare des produits sanguins.",
      "Compile et analyse les données de laboratoire."
    ],
    profil: [
      "Tu as de l’intérêt pour le travail de laboratoire.",
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu es méticuleuse et tu possèdes une bonne dextérité manuelle.",
      "Tu fais preuve d’un bon jugement et un esprit d’analyse."
    ]
  },

  "technicienne-dentaire-profil.PNG": {
    titre: "Technicienne dentaire",
    taches: [
      "Confectionne des prothèses buccales fixes et amovibles.",
      "Fabrique des appareils orthodontiques.",
      "Confectionne des prothèses fixes sur implants.",
      "Fabrique des pièces squelettiques en métal."
    ],
    profil: [
      "Tu as une excellente dextérité manuelle.",
      "Tu es minutieuse, responsable et organisée.",
      "Tu as le sens de l’esthétisme."
    ]
  },

  "technicienne-en-bureautique-profil.PNG": {
    titre: "Technicienne en bureautique",
    taches: [
      "Reçoit les appels et assure le service à la clientèle.",
      "Fixe et confirme les rendez-vous et les réunions des gestionnaires.",
      "Prépare, à l’ordinateur, des lettres, des publications, des résumés, des factures, etc.",
      "Élabore des méthodes de classement pour des systèmes de gestion ainsi que des procédures de travail."
    ],
    profil: [
      "Tu es honnête, discrète et méthodique.",
      "Tu as de la facilité à communiquer avec le public.",
      "Tu as une bonne capacité de concentration et des aptitudes en calcul.",
      "Tu as de l’intérêt pour les tâches complexes et le service à la clientèle."
    ]
  },

  "technicienne-en-chimie-analytique-profil.PNG": {
    titre: "Technicienne en chimie analytique",
    taches: [
      "Prépare le matériel de laboratoire et les échantillons;",
      "Effectue des analyses chimiques, électrochimiques, thermiques, spectrométriques, etc.;",
      "Compile des données et analyse les résultats de laboratoire;",
      "Rédige des rapports d’analyse."
    ],
    profil: [
      "Tu as de l’intérêt pour le travail de laboratoire",
      "Tu as des aptitudes pour les mathématiques et les sciences",
      "Tu es méticuleuse et tu possèdes une bonne dextérité manuelle",
      "Tu fais preuve d’un bon jugement et d’un esprit d’analyse"
    ]
  },

  "technicienne-en-dietetique-profil.PNG": {
    titre: "Technicienne en diététique",
    taches: [
      "Contrôle la qualité des produits alimentaires et des emballages.",
      "Coordonne l’approvisionnement, la production et la distribution des repas dans le respect des règles d’hygiène, de santé et de salubrité.",
      "Participe à l’élaboration des menus.",
      "Anime des activités de sensibilisation et conseille les patients."
    ],
    profil: [
      "Tu as des habiletés en communication.",
      "Tu es responsable, organisée et empathique.",
      "Tu possèdes de bonnes capacités d’analyse et de synthèse."
    ]
  },

  "technicienne-en-education-specialisee-profil.PNG": {
    titre: "Technicienne en éducation spécialisée",
    taches: [
      "Apprend aux élèves avec des troubles d’apprentissage à lire et à écrire.",
      "Apprend aux personnes ayant une déficience physique à se servir d’appareils conçus pour minimiser leur handicap.",
      "Aide les personnes ayant une déficience intellectuelle à développer des habiletés sociales à travers différentes activités (sports, arts, jeu, technologies, etc.).",
      "Aide les personnes âgées en perte d’autonomie."
    ],
    profil: [
      "Tu veux aider les autres.",
      "Tu fais preuve d’empathie, d’autonomie et d’écoute.",
      "Tu as une facilité à communiquer.",
      "u veux travailler dans une équipe multidisciplinaire."
    ]
  },

  "technicienne-en-physiotherapie-profil.PNG": {
    titre: "Technicienne en physiothérapie",
    taches: [
      "Interprète l’information sur la santé des personnes avec des limitations fonctionnelles.",
      "Effectue des traitements de physiothérapie (électrothérapie, massages, relaxation, renforcement musculaire, etc.).",
      "Rééduque des personnes avec des problèmes orthopédiques, rhumatologiques, vasculaires, respiratoires ou neurologiques.",
      "Rééduque des personnes âgées en perte d’autonomie."
    ],
    profil: [
      "Tu veux aider les autres.",
      "Tu fais preuve d’empathie, d’autonomie et d’écoute.",
      "Tu as des aptitudes en communication et en relation d’aide.",
      "Tu es organisée, responsable et rigoureuse."
    ]
  },

  "technicienne-en-protheses-auditives-profil.PNG": {
    titre: "Technicienne en prothèses auditives",
    taches: [
      "Rencontre les patients, analyse leurs besoins et établit leur profil audiométrique.",
      "Prend des empreintes auriculaires.",
      "Choisit l’appareillage et procède à des réglages sur la prothèse auditive.",
      "Aide le patient à s’adapter à sa prothèse auditive."
    ],
    profil: [
      "Tu fais preuve d’empathie, de discrétion et d’écoute.",
      "Tu une bonne ouïe et une excellente dextérité.",
      "Tu as des aptitudes en communication et en relation d’aide."
    ]
  },

  "technicienne-en-sante-animale-profil.PNG": {
    titre: "Technicienne en santé animale",
    taches: [
      "S’occupe d’une animalerie.",
      "Prend soin des animaux.",
      "Prélève des échantillons et effectue des analyses en laboratoire.",
      "Assiste le vétérinaire pendant des traitements et des chirurgies."
    ],
    profil: [
      "Tu aimes les animaux.",
      "Tu as une bonne dextérité manuelle.",
      "Tu es discrète, empathique et polie.",
      "Tu es calme et attentionnée."
    ]
  },

  "technologue-architecture-navale-profil.PNG": {
    titre: "Technologue en architecture navale",
    taches: [
      "Dessine des plans de différents types de structures flottantes (bateaux, navires marchands, embarcations de plaisance, etc.).",
      "Dessine des plans de structures auxiliaires (installations mécaniques et électriques).",
      "Analyse la stabilité et le comportement d’une structure flottante.",
      "Produit la documentation nécessaire pour la modification ou la réparation d’une structure flottante."
    ],
    profil: [
      "Tu as des aptitudes pour le calcul et le dessin technique.",
      "Tu es débrouillard, méticuleux et créatif.",
      "Tu aimes travailler en équipe."
    ]
  },

  "technologue-en-accessoires-orthopediques-profil.PNG": {
    titre: "Technologue en accessoires orthopédiques",
    taches: [
      "Interprète les ordonnances des médecins.",
      "Analyse les mouvements du corps au regard des exigences de réadaptation.",
      "Prend des mesures anthropométriques et effectue des prises d’empreintes.",
      "Fabrique différentes orthèses et prothèses (membres artificiels, corsets médicaux, supports, par exemple)."
    ],
    profil: [
      "Tu es habile de tes mains et intéressé par la biomécanique du corps humain.",
      "Tu fais preuve d’empathie, d’écoute et de responsabilité.",
      "Tu as de bonnes aptitudes pour communiquer.",
      "Tu as le sens de l’esthétisme."
    ]
  },

  "technologue-en-electrophysiologie-diagnostique-profil.PNG": {
    titre: "Technologue en électrophysiologie",
    taches: [
      "Effectue des enregistrements avec des appareils électroniques pour capter l’activité cardiaque et cérébrale des patients.",
      "Prépare et accompagne les patients pendant les enregistrements.",
      "Traite les images numériques afin de permettre aux médecins d’établir leurs diagnostics : maladies, lésions et anomalies.",
      "Étalonne et effectue l\'entretien courant des appareils de diagnostic."
    ],
    profil: [
      "Tu as des aptitudes pour les sciences.",
      "Tu possèdes une bonne capacité d’analyse et de synthèse.",
      "Tu aimes travailler avec le public.",
      "Tu es responsable et organisé"
    ]
  },

  "technologue-en-genie-industriel-profil.PNG": {
    titre: "Technologue en génie industriel",
    taches: [
      "Détermine le potentiel de différentes technologies pour des fins de production.",
      "Effectue des analyses sur des méthodes de production au sein d’une entreprise.",
      "Planifie la production et en évalue l’efficacité.",
      "Participe à l’élaboration de programmes d’assurance-qualité et assure le contrôle de la qualité."
    ],
    profil: [
      "Tu as de l’intérêt pour les sciences, les technologies, les mathématiques et le dessin technique.",
      "Tu as le sens de l’initiative.",
      "Tu es organisé, minutieux et bon communicateur.",
      "Tu possèdes un bon sens de l’observation et d’analyse."
    ]
  },

  "technologue-en-geologie-profil.PNG": {
    titre: "Technologue en géologie",
    taches: [
      "Effectue des travaux de recherche de gîtes minéraux.",
      "Cartographie et échantillonne des zones minéralisées.",
      "Contrôle la stabilité du sol.",
      "Effectue les levées géologiques, géochimiques et géophysiques en collaboration avec les géologues."
    ],
    profil: [
      "Tu as de l’intérêt pour les sciences et le dessin technique.",
      "Tu aimes travailler en plein air.",
      "Tu es organisé, minutieux et débrouillard.",
      "Tu possèdes un bon sens de la visualisation."
    ]
  },

  "technologue-en-imagerie-medicale-profil.PNG": {
    titre: "Technologue en imagerie médicale",
    taches: [
      "Prépare et accompagne les patients pendant les examens.",
      "Effectue des examens par imagerie médicale (radiographie conventionnelle, fluoroscopie, mammographie, échographie, tomodensitométrie, imagerie par résonance magnétique, etc.) afin de permettre aux radiologistes d’établir leurs diagnostics.",
      "Traite les images diagnostiques.",
      "Donne des consignes aux patients à la suite des examens."
    ],
    profil: [
      "Tu as des aptitudes pour les sciences.",
      "Tu possèdes une bonne capacité d’analyse et de synthèse.",
      "Tu aimes travailler avec le public.",
      "Tu fais preuve d’empathie et d’écoute."
    ]
  },

  "technologue-en-mineralogie-profil.PNG": {
    titre: "Technologue en minéralogie",
    taches: [
      "Participe au développement de procédés de traitement de minerais (broyage, flottation, bouletage, par exemple).",
      "Règle l’équipement et les machines de traitement de minerais.",
      "Coordonne les activités des opérateurs d’équipement et de machines de traitement de minerais.",
      "Effectue des analyses d’échantillons miniers."
    ],
    profil: [
      "Tu as des aptitudes pour les mathématiques et les sciences.",
      "Tu aimes résoudre des problèmes.",
      "Tu aimes la recherche et le développement."
    ]
  },

  "thanatologue-profil.PNG": {
    titre: "Thanatologue",
    taches: [
      "Accueille et conseille les familles en deuil quant aux dispositions funéraires.",
      "Effectue le transport des défunts.",
      "Traite les viscères et les tissus du défunt.",
      "Restaure et prépare le corps du défunt pour son exposition et sa sépulture."
    ],
    profil: [
      "Tu fais preuve d’empathie, de discrétion et d’écoute.",
      "Tu as un sens artistique développé et une bonne dextérité.",
      "Tu es sociale et équilibré psychologiquement.",
      "Tu es calme."
    ]
  },

  "tolier-de-precision-profil.PNG": {
    titre: "Tôlier de précision",
    taches: [
      "Programme des machines-outils;",
      "Produit des pièces pliées;",
      "Roule ou cintre du métal en feuille;",
      "Découpe, perce et embosse (relief) des tôles;"
    ],
    profil: [
      "Tu aimes le secteur industriel.",
      "Tu es habile de tes mains et rapide.",
      "Tu es autonome, minutieux et méthodique"
    ]
  },

  "vitrier-profil.PNG": {
    titre: "Vitrier",
    taches: [
      "Fabrique des fenêtres et des portes.",
      "Installe des produits en verre (murs rideaux, fenêtres, douches, miroirs, vitrines, etc.).",
      "Installe des systèmes de contrôle (ferme-porte, serrure magnétique, ouvre porte de garage, lecteur de carte, etc.).",
      "Répare des produits en verre."
    ],
    profil: [
      "Tu es précis et habile de tes mains.",
      "Tu aimes travailler en hauteur et tu ne ressens pas le vertige.",
      "Tu es en excellente condition physique."
    ]
  }
};
