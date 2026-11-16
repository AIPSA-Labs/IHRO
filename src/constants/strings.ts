//- Centralized user-facing strings and copy for IHRO

export type LocaleCode = 'en' | 'hi' | 'fr';

export interface AppStrings {
  brand: {
    name: string;
    fullName: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    mission: string;
    programs: string;
    presence: string;
    contact: string;
    donateNow: string;
    language: string;
  };
  hero: {
    title: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    altArtwork: string;
  };
  impact: {
    story1Title: string;
    story1Para1: string;
    story1Para2: string;
    quote1: string;
    quote1Author: string;
    story2Title: string;
    story2Para1: string;
    story2Para2: string;
    quote2: string;
    quote2Author: string;
  };
  pillars: {
    sectionTitleLine1: string;
    sectionTitleLine2: string;
    sectionSubtitle: string;
    ctaLabel: string;
    cards: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  presence: {
    title: string;
    subtitle: string;
    stats: {
      nations: string;
      chapters: string;
      cases: string;
      volunteers: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      location: string;
      quote: string;
    }>;
  };
  getInvolved: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    brandDesc: string;
    quickLinksTitle: string;
    connectTitle: string;
    copyright: string;
    privacyPolicy: string;
    termsCondition: string;
    links: {
      home: string;
      about: string;
      mission: string;
      programs: string;
      presence: string;
      contact: string;
      linkedin: string;
      instagram: string;
      youtube: string;
      twitter: string;
    };
  };
  api: {
    contactSuccess: string;
    contactNameRequired: string;
    contactEmailInvalid: string;
    contactMessageTooShort: string;
    contactSaveFailed: string;
    newsletterSuccess: string;
    newsletterAlreadySubscribed: string;
    newsletterEmailInvalid: string;
    newsletterSaveFailed: string;
    statsError: string;
    invalidFormat: string;
  };
}

export const STRINGS: Record<LocaleCode, AppStrings> = {
  en: {
    brand: {
      name: "IHRO",
      fullName: "International Human Rights Organization",
      tagline: "Promoting and protecting human rights worldwide.",
    },
    nav: {
      home: "Home",
      about: "About Us",
      mission: "Mission",
      programs: "Our Programs",
      presence: "Global Network",
      contact: "Contact",
      donateNow: "Donate Now",
      language: "EN",
    },
    hero: {
      title: "Defending Human Dignity, Powering Global Justice",
      titleLine1: "Defending Human Dignity,",
      titleLine2: "Powering Global Justice",
      subtitle: "Promoting and protecting human rights worldwide. We provide frontline legal defense, empower local advocates, and champion equality across borders.",
      ctaPrimary: "Join Us",
      ctaSecondary: "Our Mission",
      altArtwork: "IHRO Human rights and community solidarity",
    },
    impact: {
      story1Title: "Standing Up for Human Rights Worldwide",
      story1Para1: "IHRO is a global non-governmental organization dedicated to defending human rights, advocating for justice, and supporting communities affected by violations across multiple countries.",
      story1Para2: "Through strategic international cooperation, field monitoring, and rapid crisis response, we ensure that vulnerable individuals receive fair legal representation, protection, and humanitarian assistance.",
      quote1: "All human beings are born free and equal in dignity and rights.",
      quote1Author: "UN Universal Declaration of Human Rights, Article 1",
      story2Title: "Protection, Justice & Equality for Everyone",
      story2Para1: "Guided by Article 25 and international human rights conventions, we believe that security, basic freedoms, and protection from harm are universal necessities that must never be compromised.",
      story2Para2: "We bridge the gap between global diplomatic forums and grassroots communities, equipping local defenders with legal resources, digital security tools, and immediate emergency aid.",
      quote2: "Justice cannot sleep while innocent people suffer. The law must protect everyone.",
      quote2Author: "IHRO Legal Advisory Council",
    },
    pillars: {
      sectionTitleLine1: "Our Core Mission",
      sectionTitleLine2: "& Values for Humanity",
      sectionSubtitle: "We operate dedicated humanitarian and legal initiatives to address the most urgent human rights challenges across borders.",
      ctaLabel: "Learn More",
      cards: [
        {
          title: "Protection",
          description: "Safeguarding individuals and communities from human rights violations, ensuring a safe world for everyone through monitoring and direct intervention.",
          image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg",
        },
        {
          title: "Justice",
          description: "Advocating for legal accountability and the rule of law to ensure that victims receive redress and perpetrators face appropriate legal action.",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
        {
          title: "Equality",
          description: "Striving for a world where every person enjoys equal rights and opportunities, regardless of race, gender, background, or nationality.",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
        },
      ],
    },
    presence: {
      title: "Our Global Humanitarian Presence",
      subtitle: "Operating across continents with active regional delegations, national chapters, and grassroots legal councils.",
      stats: {
        nations: "Nations Reached",
        chapters: "Active Chapters",
        cases: "Cases Supported",
        volunteers: "Active Volunteers",
      },
    },
    testimonials: {
      title: "Voices Across Our Global Network",
      subtitle: "Hear directly from advocates, community partners, and volunteers working on the frontlines.",
      items: [
        {
          name: "Dr. Sarah Jenkins",
          role: "Legal Counsel",
          location: "London, UK",
          quote: "IHRO bridges international legal frameworks with urgent local action so vulnerable families never stand alone.",
        },
        {
          name: "Tariq Al-Mansoor",
          role: "Regional Coordinator",
          location: "Dubai, UAE",
          quote: "Our cross-border rapid response network ensures legal representation and humanitarian aid reach communities within hours.",
        },
        {
          name: "Prof. Amara Okafor",
          role: "Human Rights Educator",
          location: "Berlin, Germany",
          quote: "Equipping grassroots defenders with training and resources creates lasting institutional accountability.",
        },
        {
          name: "Priya Sharma",
          role: "Community Volunteer",
          location: "New Delhi, India",
          quote: "Every initiative directly restores dignity, education access, and fair legal standing to marginalized families.",
        },
      ],
    },
    getInvolved: {
      title: "Stand With Us for Justice & Dignity",
      subtitle: "Whether through legal advocacy, volunteering, or humanitarian sponsorship, your action strengthens fundamental rights worldwide.",
      ctaPrimary: "Join the Movement",
      ctaSecondary: "Explore Our Work",
    },
    footer: {
      brandDesc: "International Human Rights Organization (IHRO) is an independent global advocacy body committed to upholding the United Nations Universal Declaration of Human Rights.",
      quickLinksTitle: "QUICK LINKS",
      connectTitle: "CONNECT",
      copyright: "© 2026 International Human Rights Organization. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsCondition: "Terms & Conditions",
      links: {
        home: "Home",
        about: "About Us",
        mission: "Mission",
        programs: "Programs",
        presence: "Global Network",
        contact: "Contact",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        twitter: "X (Twitter)",
      },
    },
    api: {
      contactSuccess: "Thank you for contacting IHRO. Your inquiry has been recorded and our coordination team will get back to you shortly.",
      contactNameRequired: "Please enter your full name.",
      contactEmailInvalid: "Please enter a valid email address.",
      contactMessageTooShort: "Please provide a message with at least 5 characters.",
      contactSaveFailed: "We couldn't save your message right now. Please try again or email us directly.",
      newsletterSuccess: "Thank you for subscribing to IHRO global updates and human rights reports.",
      newsletterAlreadySubscribed: "This email address is already subscribed to IHRO updates.",
      newsletterEmailInvalid: "Please provide a valid email address.",
      newsletterSaveFailed: "We couldn't process your subscription right now. Please try again in a moment.",
      statsError: "We couldn't retrieve the latest statistics right now.",
      invalidFormat: "The submitted request format was not recognized.",
    },
  },
  hi: {
    brand: {
      name: "IHRO",
      fullName: "अंतर्राष्ट्रीय मानवाधिकार संगठन",
      tagline: "दुनिया भर में मानवाधिकारों को बढ़ावा देने और उनकी रक्षा करने के लिए प्रतिबद्ध।",
    },
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      mission: "मिशन",
      programs: "कार्यक्रम",
      presence: "वैश्विक नेटवर्क",
      contact: "संपर्क",
      donateNow: "दान करें",
      language: "HI",
    },
    hero: {
      title: "मानवीय गरिमा की रक्षा, वैश्विक न्याय का सशक्तिकरण",
      titleLine1: "मानवीय गरिमा की रक्षा,",
      titleLine2: "वैश्विक न्याय का सशक्तिकरण",
      subtitle: "दुनिया भर में मानवाधिकारों को बढ़ावा देने और उनकी रक्षा करने के लिए प्रतिबद्ध। हम कानूनी सुरक्षा प्रदान करते हैं और सीमाओं के पार समानता को बढ़ावा देते हैं।",
      ctaPrimary: "हमसे जुड़ें",
      ctaSecondary: "हमारा मिशन",
      altArtwork: "मानवाधिकार और सामुदायिक एकजुटता",
    },
    impact: {
      story1Title: "दुनिया भर में मानवाधिकारों के लिए खड़े हैं",
      story1Para1: "IHRO एक वैश्विक संगठन है जो मानवाधिकारों की रक्षा, न्याय के लिए वकालत और उल्लंघनों से प्रभावित समुदायों का समर्थन करने के लिए समर्पित है।",
      story1Para2: "अंतर्राष्ट्रीय सहयोग और जमीनी टीमों के माध्यम से, हम यह सुनिश्चित करते हैं कि जरूरतमंद समुदायों को निष्पक्ष कानूनी सहायता मिले।",
      quote1: "सभी मानव जन्म से स्वतंत्र और गरिमा व अधिकारों में समान हैं।",
      quote1Author: "संयुक्त राष्ट्र मानवाधिकार घोषणापत्र, अनुच्छेद 1",
      story2Title: "सभी के लिए सुरक्षा, न्याय और समानता",
      story2Para1: "अंतर्राष्ट्रीय मानवाधिकार सम्मेलनों से प्रेरित होकर, हम मानते हैं कि सुरक्षा और न्याय सभी के लिए आवश्यक अधिकार हैं।",
      story2Para2: "हम वैश्विक मंचों और ज़मीनी हकीकत के बीच की खाई को पाटते हैं और स्थानीय रक्षकों को कानूनी संसाधन उपलब्ध कराते हैं।",
      quote2: "जब तक निर्दोष लोग पीड़ित हैं, न्याय चुप नहीं बैठ सकता।",
      quote2Author: "IHRO कानूनी सलाहकार परिषद",
    },
    pillars: {
      sectionTitleLine1: "हमारा मुख्य मिशन",
      sectionTitleLine2: "और मानवीय मूल्य",
      sectionSubtitle: "हम सीमाओं के पार सबसे गंभीर मानवाधिकार चुनौतियों को संबोधित करने के लिए समर्पित कार्यक्रम संचालित करते हैं।",
      ctaLabel: "और जानें",
      cards: [
        {
          title: "सुरक्षा",
          description: "मानवाधिकार उल्लंघनों से व्यक्तियों और समुदायों की रक्षा करना, निगरानी और हस्तक्षेप के माध्यम से सुरक्षित दुनिया सुनिश्चित करना।",
          image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg",
        },
        {
          title: "न्याय",
          description: "कानूनी जवाबदेही और कानून के शासन की वकालत करना ताकि पीड़ितों को न्याय मिले और अपराधियों पर कानूनी कार्रवाई हो सके।",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
        {
          title: "समानता",
          description: "एक ऐसी दुनिया के लिए प्रयास करना जहाँ हर व्यक्ति को समान अधिकार और अवसर प्राप्त हों, चाहे जाति या पृष्ठभूमि कुछ भी हो।",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
        },
      ],
    },
    presence: {
      title: "हमारी वैश्विक मानवीय उपस्थिति",
      subtitle: "सक्रिय क्षेत्रीय प्रतिनिधिमंडलों, राष्ट्रीय इकाइयों और कानूनी परिषदों के साथ महाद्वीपों में कार्यरत।",
      stats: {
        nations: "देशों में उपस्थिति",
        chapters: "सक्रिय इकाइयाँ",
        cases: "सहायता प्राप्त मामले",
        volunteers: "सक्रिय स्वयंसेवक",
      },
    },
    testimonials: {
      title: "हमारे वैश्विक नेटवर्क की आवाज़ें",
      subtitle: "जमीनी स्तर पर काम करने वाले अधिवक्ताओं, साझेदारों और स्वयंसेवकों के अनुभव।",
      items: [
        {
          name: "डॉ. सारा जेनकिंस",
          role: "कानूनी सलाहकार",
          location: "लंदन, यूके",
          quote: "IHRO अंतर्राष्ट्रीय कानूनी ढाँचों को स्थानीय कार्रवाई से जोड़ता है ताकि कोई भी परिवार अकेला न रहे।",
        },
        {
          name: "तारिक अल-मंसूर",
          role: "क्षेत्रीय समन्वयक",
          location: "दुबई, यूएई",
          quote: "हमारा त्वरित प्रतिक्रिया नेटवर्क सुनिश्चित करता है कि कानूनी और मानवीय सहायता समय पर पहुँचे।",
        },
        {
          name: "प्रो. अमारा ओकाफोर",
          role: "मानवाधिकार शिक्षक",
          location: "बर्लिन, जर्मनी",
          quote: "स्थानीय रक्षकों को प्रशिक्षण और संसाधन देना स्थायी न्याय प्रणाली का निर्माण करता है।",
        },
        {
          name: "प्रिया शर्मा",
          role: "सामुदायिक स्वयंसेवक",
          location: "नई दिल्ली, भारत",
          quote: "प्रत्येक पहल वंचित परिवारों को गरिमा, शिक्षा और निष्पक्ष कानूनी अधिकार दिलाने में मदद करती है।",
        },
      ],
    },
    getInvolved: {
      title: "न्याय और गरिमा के लिए हमारे साथ खड़े हों",
      subtitle: "चाहे कानूनी वकालत हो, स्वयंसेवा हो या मानवीय सहयोग, आपका योगदान दुनिया भर में मौलिक अधिकारों को मजबूत करता है।",
      ctaPrimary: "आंदोलन से जुड़ें",
      ctaSecondary: "हमारा कार्य देखें",
    },
    footer: {
      brandDesc: "अंतर्राष्ट्रीय मानवाधिकार संगठन (IHRO) संयुक्त राष्ट्र के मानवाधिकार घोषणापत्र के सिद्धांतों को आगे बढ़ाने वाला एक स्वतंत्र वैश्विक संगठन है।",
      quickLinksTitle: "त्वरित लिंक",
      connectTitle: "जुड़ें",
      copyright: "© 2026 अंतर्राष्ट्रीय मानवाधिकार संगठन। सभी अधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      termsCondition: "नियम एवं शर्तें",
      links: {
        home: "होम",
        about: "हमारे बारे में",
        mission: "मिशन",
        programs: "कार्यक्रम",
        presence: "वैश्विक नेटवर्क",
        contact: "संपर्क",
        linkedin: "लिंक्डइन",
        instagram: "इंस्टाग्राम",
        youtube: "यूट्यूब",
        twitter: "एक्स (ट्विटर)",
      },
    },
    api: {
      contactSuccess: "IHRO से संपर्क करने के लिए धन्यवाद। आपका संदेश प्राप्त हो गया है और हमारी टीम जल्द ही आपसे संपर्क करेगी।",
      contactNameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
      contactEmailInvalid: "कृपया एक वैध ईमेल पता दर्ज करें।",
      contactMessageTooShort: "कृपया कम से कम 5 अक्षरों का संदेश लिखें।",
      contactSaveFailed: "हम अभी आपका संदेश सहेज नहीं सके। कृपया पुनः प्रयास करें या हमें सीधे ईमेल करें।",
      newsletterSuccess: "IHRO वैश्विक अपडेट और मानवाधिकार रिपोर्ट की सदस्यता लेने के लिए धन्यवाद।",
      newsletterAlreadySubscribed: "यह ईमेल पता पहले से ही IHRO अपडेट की सदस्यता ले चुका है।",
      newsletterEmailInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
      newsletterSaveFailed: "हम अभी आपकी सदस्यता संसाधित नहीं कर सके। कृपया कुछ देर बाद प्रयास करें।",
      statsError: "हम अभी नवीनतम आंकड़े प्राप्त नहीं कर सके।",
      invalidFormat: "अनुरोध का प्रारूप सही नहीं था।",
    },
  },
  fr: {
    brand: {
      name: "IHRO",
      fullName: "Organisation Internationale des Droits de l'Homme",
      tagline: "Promouvoir et protéger les droits humains dans le monde.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      mission: "Mission",
      programs: "Nos Programmes",
      presence: "Réseau Mondial",
      contact: "Contact",
      donateNow: "Faire un don",
      language: "FR",
    },
    hero: {
      title: "Défendre la Dignité Humaine, Propulser la Justice Mondiale",
      titleLine1: "Défendre la Dignité Humaine,",
      titleLine2: "Propulser la Justice Mondiale",
      subtitle: "Promouvoir et protéger les droits humains dans le monde. Nous assurons une protection juridique de première ligne et promouvons l'égalité.",
      ctaPrimary: "Rejoignez-nous",
      ctaSecondary: "Notre Mission",
      altArtwork: "Droits humains et solidarité communautaire",
    },
    impact: {
      story1Title: "Défendre les Droits Humains dans le Monde",
      story1Para1: "IHRO est une organisation mondiale dédiée à la défense des droits humains, à la promotion de la justice et au soutien des communautés touchées par les violations.",
      story1Para2: "Grâce à notre coopération internationale, nous veillons à ce que les populations vulnérables bénéficient d'une défense équitable et d'un secours humanitaire direct.",
      quote1: "Tous les êtres humains naissent libres et égaux en dignité et en droits.",
      quote1Author: "Déclaration Universelle des Droits de l'Homme, Article 1",
      story2Title: "Protection, Justice et Égalité pour Tous",
      story2Para1: "Guidés par l'article 25 et les conventions internationales, nous affirmons que la sécurité et la justice sont des nécessités absolues pour tous.",
      story2Para2: "Nous faisons le pont entre les assemblées internationales et les réalités du terrain, en fournissant aux défenseurs locaux les outils nécessaires.",
      quote2: "La justice ne peut dormir pendant que des innocents souffrent. La loi doit protéger chacun.",
      quote2Author: "Conseil Juridique Consultatif de l'IHRO",
    },
    pillars: {
      sectionTitleLine1: "Notre Mission Principale",
      sectionTitleLine2: "et Valeurs pour l'Humanité",
      sectionSubtitle: "Nous menons des initiatives humanitaires et juridiques dédiées aux défis les plus urgents en matière de droits fondamentaux.",
      ctaLabel: "En savoir plus",
      cards: [
        {
          title: "Protection",
          description: "Protéger les individus et les communautés contre les violations des droits humains par une surveillance active et une intervention directe.",
          image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg",
        },
        {
          title: "Justice",
          description: "Plaider pour la responsabilité juridique et l'état de droit afin de garantir que les victimes obtiennent réparation.",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
        {
          title: "Égalité",
          description: "Œuvrer pour un monde où chaque personne jouit de droits et d'opportunités égaux, sans distinction d'origine ou de genre.",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
        },
      ],
    },
    presence: {
      title: "Notre Présence Humanitaire Mondiale",
      subtitle: "Présente sur tous les continents avec des délégations régionales, des sections nationales et des conseils juridiques.",
      stats: {
        nations: "Pays Couverts",
        chapters: "Sections Actives",
        cases: "Dossiers Soutenus",
        volunteers: "Bénévoles Actifs",
      },
    },
    testimonials: {
      title: "Les Voix de Notre Réseau Mondial",
      subtitle: "Témoignages de nos défenseurs, partenaires et bénévoles engagés sur le terrain.",
      items: [
        {
          name: "Dr. Sarah Jenkins",
          role: "Conseillère Juridique",
          location: "Londres, Royaume-Uni",
          quote: "IHRO relie le droit international à l'action locale urgente afin qu'aucune famille ne reste seule.",
        },
        {
          name: "Tariq Al-Mansoor",
          role: "Coordinateur Régional",
          location: "Dubaï, Émirats Arabes Unis",
          quote: "Notre réseau d'intervention rapide permet d'apporter une assistance juridique et humanitaire en quelques heures.",
        },
        {
          name: "Prof. Amara Okafor",
          role: "Formatrice aux Droits Humains",
          location: "Berlin, Allemagne",
          quote: "Former et équiper les défenseurs locaux renforce durablement l'état de droit.",
        },
        {
          name: "Priya Sharma",
          role: "Bénévole Communautaire",
          location: "New Delhi, Inde",
          quote: "Chaque action redonne concrètement dignité, accès à l'éducation et protection juridique aux familles.",
        },
      ],
    },
    getInvolved: {
      title: "Engagez-vous pour la Justice et la Dignité",
      subtitle: "Par le plaidoyer juridique, le bénévolat ou le soutien humanitaire, votre action renforce les droits fondamentaux.",
      ctaPrimary: "Rejoindre le Mouvement",
      ctaSecondary: "Découvrir Notre Travail",
    },
    footer: {
      brandDesc: "L'Organisation Internationale des Droits de l'Homme (IHRO) est une organisation indépendante qui défend la Déclaration Universelle des Droits de l'Homme.",
      quickLinksTitle: "LIENS RAPIDES",
      connectTitle: "CONNECTER",
      copyright: "© 2026 Organisation Internationale des Droits de l'Homme. Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      termsCondition: "Conditions Générales",
      links: {
        home: "Accueil",
        about: "À propos",
        mission: "Mission",
        programs: "Programmes",
        presence: "Réseau Mondial",
        contact: "Contact",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        twitter: "X (Twitter)",
      },
    },
    api: {
      contactSuccess: "Merci d'avoir contacté l'IHRO. Votre demande a bien été enregistrée et notre équipe vous répondra dans les plus brefs délais.",
      contactNameRequired: "Veuillez entrer votre nom complet.",
      contactEmailInvalid: "Veuillez entrer une adresse e-mail valide.",
      contactMessageTooShort: "Veuillez fournir un message d'au moins 5 caractères.",
      contactSaveFailed: "Nous n'avons pas pu enregistrer votre message pour le moment. Veuillez réessayer ou nous écrire directement.",
      newsletterSuccess: "Merci de vous être abonné aux actualités mondiales et aux rapports de l'IHRO.",
      newsletterAlreadySubscribed: "Cette adresse e-mail est déjà abonnée aux actualités de l'IHRO.",
      newsletterEmailInvalid: "Veuillez fournir une adresse e-mail valide.",
      newsletterSaveFailed: "Nous n'avons pas pu traiter votre abonnement pour le moment. Veuillez réessayer dans un instant.",
      statsError: "Nous n'avons pas pu récupérer les dernières statistiques pour le moment.",
      invalidFormat: "Le format de la requête envoyée n'a pas été reconnu.",
    },
  },
};

//- Helper function to safely get strings for a locale
export function getStrings(locale?: string): AppStrings {
  if (locale === 'hi') {
    return STRINGS.hi;
  }
  if (locale === 'fr') {
    return STRINGS.fr;
  }
  return STRINGS.en;
}
