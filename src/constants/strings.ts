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
    events: string;
    news: string;
    presence: string;
    contact: string;
    donateNow: string;
    language: string;
  };
  hero: {
    tag: string;
    heading1: string;
    heading2: string;
    title: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watchVideo: string;
    trustText: string;
    altArtwork: string;
  };
  subHeroQuote: {
    quote: string;
    author: string;
  };
  vulnerable: {
    tag: string;
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      image: string;
      category: string;
    }>;
  };
  kindnessAction: {
    tag: string;
    title: string;
    description: string;
    checklist: string[];
    cta: string;
  };
  causes: {
    title: string;
    subtitle: string;
    items: Array<{
      tag: string;
      title: string;
      description: string;
      image: string;
      raised: string;
      goal: string;
      percent: number;
      cta: string;
    }>;
  };
  videoBanner: {
    title: string;
    subtitle: string;
    playLabel: string;
  };
  partners: {
    title: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    quoteBadge: string;
    items: Array<{
      name: string;
      role: string;
      location: string;
      quote: string;
    }>;
  };
  events: {
    title: string;
    subtitle: string;
    items: Array<{
      month: string;
      day: string;
      title: string;
      location: string;
      image: string;
      cta: string;
    }>;
  };
  directActionForm: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    categoryLabel: string;
    categories: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
    subtext: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    featured: {
      tag: string;
      title: string;
      date: string;
      excerpt: string;
      image: string;
    };
    recent: Array<{
      tag: string;
      title: string;
      date: string;
      image: string;
    }>;
  };
  donationBanner: {
    title: string;
    subtitle: string;
    cta: string;
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
  getInvolved: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  vision2047: {
    tag: string;
    title: string;
    subtitle: string;
    logoUrl: string;
    logoAlt: string;
    cardBadge: string;
    cards: Array<{
      category: string;
      stat: string;
      title: string;
      desc: string;
    }>;
    bannerTitle: string;
    bannerDesc: string;
    bannerPrimaryBtn: string;
    bannerSecondaryBtn: string;
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
      vision2047: string;
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
      programs: "Causes",
      events: "Events",
      news: "News",
      presence: "Network",
      contact: "Contact",
      donateNow: "Donate Now",
      language: "EN",
    },
    hero: {
      tag: "GIVE THEM A HELPING HAND",
      heading1: "Hope For A",
      heading2: "Better World",
      title: "Hope For A Better World",
      titleLine1: "Hope For A",
      titleLine2: "Better World",
      subtitle: "Dedicated to upholding human rights, delivering emergency relief, and providing direct legal representation to the world's most vulnerable communities.",
      ctaPrimary: "Donate Now",
      ctaSecondary: "Our Mission",
      watchVideo: "Our Mission",
      trustText: "15,000+ people supported across 45+ nations",
      altArtwork: "IHRO Human rights and community solidarity",
    },
    subHeroQuote: {
      quote: "It's not how much we give, but how much love we put into giving.",
      author: "Mother Teresa",
    },
    vulnerable: {
      tag: "HUMANITARIAN INITIATIVES",
      title: "Helping The Vulnerable, Your Support Matters",
      subtitle: "Targeted humanitarian initiatives delivering immediate aid, legal defense, and lasting justice.",
      cards: [
        {
          title: "Legal Advocacy & Justice",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          category: "Humanitarian Aid",
        },
        {
          title: "Child Protection & Safety",
          image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
          category: "Protection",
        },
        {
          title: "Emergency Medical Relief",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
          category: "Healthcare",
        },
        {
          title: "Community Empowerment",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
          category: "Education",
        },
      ],
    },
    kindnessAction: {
      tag: "KINDNESS, IN ACTION",
      title: "Kindness, In Action",
      description: "When crises strike and vulnerable voices are silenced, IHRO mobilizes legal advocates, emergency responders, and field teams to provide direct aid and judicial defense where it is needed most.",
      checklist: [
        "Direct Legal Counsel",
        "Crisis Intervention",
        "Human Rights Education",
        "Safe Community Shelters",
      ],
      cta: "Explore Our Work",
    },
    causes: {
      title: "Engage With Our Ongoing Causes",
      subtitle: "Support our active field missions and legal defense funds protecting individuals at risk.",
      items: [
        {
          tag: "LEGAL AID",
          title: "Emergency Legal Support for Displaced Families",
          description: "Providing pro-bono representation and safety support for families facing wrongful displacement.",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
          raised: "$38,400",
          goal: "$50,000",
          percent: 76,
          cta: "Support Cause",
        },
        {
          tag: "CRISIS RELIEF",
          title: "Frontline Medical Aid & Nutrition for Children",
          description: "Delivering life-saving nutrition packets, clean drinking water, and healthcare in crisis zones.",
          image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
          raised: "$42,100",
          goal: "$60,000",
          percent: 70,
          cta: "Support Cause",
        },
        {
          tag: "COMMUNITY DEFENSE",
          title: "Human Rights Advocates Protection & Training",
          description: "Equipping grassroots human rights defenders with digital security tools and emergency legal hotlines.",
          image: "https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg",
          raised: "$29,800",
          goal: "$35,000",
          percent: 85,
          cta: "Support Cause",
        },
      ],
    },
    videoBanner: {
      title: "Watch Our Story: Defending Human Rights Worldwide",
      subtitle: "See how our international network brings hope and justice to communities across 45+ nations.",
      playLabel: "Watch Story",
    },
    partners: {
      title: "Trusted By Global Human Rights Coalitions & Partners",
    },
    testimonials: {
      title: "Voices of Our Impact",
      subtitle: "Direct testimonies from community leaders and families protected through our field missions.",
      quoteBadge: "COMMUNITY ENDORSEMENT",
      items: [
        {
          name: "Dr. Sarah Jenkins",
          role: "Human Rights Counsel",
          location: "London, UK",
          quote: "Because of IHRO's swift intervention and legal aid, our community's voices were heard and protected when no one else stood with us.",
        },
        {
          name: "Tariq Al-Mansoor",
          role: "Field Relief Coordinator",
          location: "Middle East Bureau",
          quote: "Our rapid response teams bring immediate safety, shelter, and legal counseling to vulnerable families within hours of a crisis.",
        },
        {
          name: "Prof. Amara Okafor",
          role: "Civil Liberties Advocate",
          location: "Berlin, Germany",
          quote: "Empowering local legal defenders creates enduring community resilience and ensures that justice is never out of reach.",
        },
        {
          name: "Elena Rostova",
          role: "Community Defender",
          location: "Geneva, Switzerland",
          quote: "IHRO has demonstrated time and again that with compassion and law on our side, no community is forgotten.",
        },
      ],
    },
    events: {
      title: "Our Upcoming Events",
      subtitle: "Join our international summits, delegations, and educational forums.",
      items: [
        {
          month: "NOV",
          day: "28",
          title: "Global Human Rights Summit 2026",
          location: "Geneva, Switzerland & Online",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          cta: "Register Now",
        },
        {
          month: "DEC",
          day: "15",
          title: "Youth Advocacy & Defender Workshop",
          location: "Berlin, Germany",
          image: "https://images.pexels.com/photos/8926543/pexels-photo-8926543.jpeg",
          cta: "Register Now",
        },
        {
          month: "JAN",
          day: "20",
          title: "Emergency Relief & Law Symposium",
          location: "Dortmund Headquarters & Stream",
          image: "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg",
          cta: "Register Now",
        },
      ],
    },
    directActionForm: {
      title: "Stand With Us",
      subtitle: "Reach out to our international council with inquiries, case reports, or partnership proposals.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email address",
      categoryLabel: "Inquiry Category",
      categories: [
        "General Inquiry",
        "Emergency Human Rights Case",
        "Partnership & Coalitions",
        "Volunteer & Delegation",
      ],
      messageLabel: "Your Message",
      messagePlaceholder: "How can we assist you or collaborate?",
      submitCta: "Send Message",
      subtext: "We respond to all urgent inquiries and support requests promptly.",
    },
    news: {
      title: "Our Latest News & Field Reports",
      subtitle: "Stay updated on our field missions, legal victories, and human rights reports.",
      readMore: "Read More",
      featured: {
        tag: "FIELD DISPATCH",
        title: "IHRO Delivers Critical Relief & Legal Counsel to Displaced Communities",
        date: "November 2026",
        excerpt: "Our international delegation completed a 14-day field deployment, establishing safe community shelters and securing court protections for 250 families.",
        image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
      },
      recent: [
        {
          tag: "LEGAL VICTORY",
          title: "International Court Upholds Equal Educational Protections",
          date: "November 14, 2026",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
        },
        {
          tag: "COMMUNITY HEALTH",
          title: "Emergency Medical Mobile Clinics Reach Rural Areas",
          date: "November 08, 2026",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
        },
        {
          tag: "ADVOCACY TRAINING",
          title: "Over 500 Young Advocates Complete Human Rights Training",
          date: "October 29, 2026",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
      ],
    },
    donationBanner: {
      title: "Your Donation Empowers Those in Need",
      subtitle: "Together, we defend dignity, provide urgent relief, and champion universal justice.",
      cta: "Donate Now",
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
      sectionTitleLine2: "& Humanitarian Values",
      sectionSubtitle: "We operate dedicated programs designed to address the most urgent human rights challenges across borders.",
      ctaLabel: "Learn More",
      cards: [
        {
          title: "Protection",
          description: "Defending individuals and communities from human rights violations, ensuring safety through direct legal monitoring and intervention.",
          image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg",
        },
        {
          title: "Justice",
          description: "Advocating for legal accountability and the rule of law so victims receive redress and perpetrators face legal consequences.",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
        {
          title: "Equality",
          description: "Working toward a world where every person enjoys equal rights and opportunities, free from discrimination based on background or gender.",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
        },
      ],
    },
    presence: {
      title: "Our Global Humanitarian Presence",
      subtitle: "Active across continents with permanent delegations, national chapters, and legal councils.",
      stats: {
        nations: "Nations Covered",
        chapters: "Active Chapters",
        cases: "Cases Supported",
        volunteers: "Active Volunteers",
      },
    },
    getInvolved: {
      title: "Stand Up for Justice & Dignity",
      subtitle: "Whether through legal advocacy, volunteering, or community support, your involvement strengthens fundamental human rights.",
      ctaPrimary: "Join the Movement",
      ctaSecondary: "Explore Our Work",
    },
    vision2047: {
      tag: "National Mission · Roadmap to 2047",
      title: "Vision 2047: Vikasit Bharat",
      subtitle:
        "A nationwide mission celebrating 100 years of Indian independence by advancing human rights, expanding foundational education, empowering women, and securing justice across India.",
      logoUrl:
        "https://storage.allindiateachersfederation.com/uploads/2026/11/vikasit-bharat-mission-2047-logo.jpg",
      logoAlt: "Vikasit Bharat Mission 2047 - Celebrating 100 Years of Independence",
      cardBadge: "National Mission",
      cards: [
        {
          category: "Early Childhood Education",
          stat: "10,000",
          title: "Pre-Schools Nationwide",
          desc: "Setting up 10,000 joyful, high-quality preschools across urban and rural communities to give young children a strong start in life and learning.",
        },
        {
          category: "Career & Empowerment",
          stat: "1 Lakh",
          title: "New Career Opportunities",
          desc: "Creating one lakh rewarding opportunities for qualified women educators, school leaders, and early childhood care professionals.",
        },
        {
          category: "Community & Solidarity",
          stat: "1 Lakh+",
          title: "Human Rights & Educator Network",
          desc: "Uniting over one lakh dedicated teachers, rights defenders, and community advocates into an active nationwide solidarity network.",
        },
        {
          category: "Institutional Protection",
          stat: "36 States & UTs",
          title: "Statewide Legal Aid Cells",
          desc: "Establishing active legal aid cells across every state and union territory to safeguard human rights, protect educators, and resolve grievances.",
        },
      ],
      bannerTitle: "Building the Foundation for a Developed India",
      bannerDesc:
        "In alignment with the national vision of Vikasit Bharat 2047, IHRO bridges grassroots rights protection with institutional support — ensuring every citizen is protected, every child is nurtured, and every community thrives in equality.",
      bannerPrimaryBtn: "Get Involved",
      bannerSecondaryBtn: "Contact Legal Aid",
    },
    footer: {
      brandDesc: "The International Human Rights Organization (IHRO) is an independent non-governmental body defending the Universal Declaration of Human Rights.",
      quickLinksTitle: "QUICK LINKS",
      connectTitle: "CONNECT",
      copyright: "© 2026 International Human Rights Organization. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsCondition: "Terms & Conditions",
      links: {
        home: "Home",
        about: "About",
        mission: "Mission",
        programs: "Programs",
        presence: "Global Network",
        contact: "Contact",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        twitter: "X (Twitter)",
        vision2047: "Vision 2047: Vikasit Bharat",
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
      programs: "अभियान",
      events: "कार्यक्रम",
      news: "समाचार",
      presence: "वैश्विक नेटवर्क",
      contact: "संपर्क",
      donateNow: "दान करें",
      language: "HI",
    },
    hero: {
      tag: "मानवता का हाथ बढ़ाएं",
      heading1: "एक बेहतर दुनिया",
      heading2: "की आशा",
      title: "एक बेहतर दुनिया की आशा",
      titleLine1: "एक बेहतर दुनिया",
      titleLine2: "की आशा",
      subtitle: "मानवीय गरिमा की रक्षा, आपातकालीन सहायता और दुनिया भर में सबसे कमजोर समुदायों को निष्पक्ष कानूनी सहायता प्रदान करने के लिए समर्पित।",
      ctaPrimary: "दान करें",
      ctaSecondary: "हमारा मिशन",
      watchVideo: "हमारा मिशन",
      trustText: "45+ देशों में 15,000+ लोगों का समर्थन",
      altArtwork: "मानवाधिकार और सामुदायिक एकजुटता",
    },
    subHeroQuote: {
      quote: "यह मायने नहीं रखता कि हम कितना देते हैं, बल्कि यह कि हम देने में कितना प्रेम लगाते हैं।",
      author: "मदर टेरेसा",
    },
    vulnerable: {
      tag: "मानवीय पहल",
      title: "पीड़ितों की सहायता, आपका सहयोग महत्वपूर्ण है",
      subtitle: "प्रत्यक्ष कानूनी सुरक्षा, आपातकालीन राहत और स्थायी न्याय प्रदान करने वाले समर्पित कार्यक्रम।",
      cards: [
        {
          title: "कानूनी वकालत और न्याय",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          category: "मानवीय सहायता",
        },
        {
          title: "बाल सुरक्षा और संरक्षण",
          image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
          category: "सुरक्षा",
        },
        {
          title: "आपातकालीन चिकित्सा राहत",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
          category: "स्वास्थ्य सेवा",
        },
        {
          title: "सामुदायिक सशक्तिकरण",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
          category: "शिक्षा",
        },
      ],
    },
    kindnessAction: {
      tag: "सहानुभूति, कर्म में",
      title: "सहानुभूति, कर्म में",
      description: "संकट के समय जब निर्दोषों की आवाज दबा दी जाती है, IHRO की टीमें प्रत्यक्ष कानूनी और मानवीय राहत पहुंचाने के लिए तत्पर रहती हैं।",
      checklist: [
        "प्रत्यक्ष कानूनी सलाह",
        "संकटकालीन हस्तक्षेप",
        "मानवाधिकार शिक्षा",
        "सुरक्षित सामुदायिक आश्रय",
      ],
      cta: "हमारा कार्य देखें",
    },
    causes: {
      title: "हमारे निरंतर अभियानों से जुड़ें",
      subtitle: "जोखिम में पड़े व्यक्तियों की सुरक्षा के लिए हमारे सक्रिय कानूनी रक्षा कोष का समर्थन करें।",
      items: [
        {
          tag: "कानूनी सहायता",
          title: "विस्थापित परिवारों के लिए आपातकालीन कानूनी सहायता",
          description: "अवैध विस्थापन का सामना कर रहे परिवारों को निःशुल्क कानूनी सहायता और सुरक्षा प्रदान करना।",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
          raised: "$38,400",
          goal: "$50,000",
          percent: 76,
          cta: "सहयोग करें",
        },
        {
          tag: "संकट राहत",
          title: "बच्चों के लिए आपातकालीन चिकित्सा और पोषण",
          description: "संकटग्रस्त क्षेत्रों में जीवन रक्षक पोषण, स्वच्छ पेयजल और स्वास्थ्य सेवा पहुंचाना।",
          image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
          raised: "$42,100",
          goal: "$60,000",
          percent: 70,
          cta: "सहयोग करें",
        },
        {
          tag: "सामुदायिक रक्षा",
          title: "स्थानीय मानवाधिकार कार्यकर्ताओं का प्रशिक्षण",
          description: "जमीनी स्तर पर काम करने वाले कार्यकर्ताओं को कानूनी और डिजिटल सुरक्षा उपकरण उपलब्ध कराना।",
          image: "https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg",
          raised: "$29,800",
          goal: "$35,000",
          percent: 85,
          cta: "सहयोग करें",
        },
      ],
    },
    videoBanner: {
      title: "हमारी कहानी देखें: दुनिया भर में मानवाधिकारों की रक्षा",
      subtitle: "देखें कैसे हमारा अंतर्राष्ट्रीय नेटवर्क 45+ देशों में न्याय और आशा पहुंचा रहा है।",
      playLabel: "वीडियो देखें",
    },
    partners: {
      title: "वैश्विक मानवाधिकार गठबंधनों द्वारा समर्थित",
    },
    testimonials: {
      title: "हमारे प्रभाव की आवाजें",
      subtitle: "हमारे सहयोगी रक्षकों, साझेदारों और स्वयंसेवकों के प्रत्यक्ष अनुभव।",
      quoteBadge: "सामुदायिक समर्थन",
      items: [
        {
          name: "डॉ. सारा जेनकिंस",
          role: "कानूनी सलाहकार",
          location: "लंदन, यूके",
          quote: "IHRO के त्वरित कानूनी हस्तक्षेप के कारण, हमारे समुदाय की आवाज को सुना गया और सुरक्षा मिली जब कोई साथ नहीं था।",
        },
        {
          name: "तारिक अल-मंसूर",
          role: "क्षेत्रीय समन्वयक",
          location: "दुबई, यूएई",
          quote: "हमारा त्वरित प्रतिक्रिया नेटवर्क संकट के कुछ ही घंटों में परिवारों को कानूनी सहायता और सुरक्षा प्रदान करता है।",
        },
        {
          name: "प्रो. अमारा ओकाफोर",
          role: "मानवाधिकार प्रशिक्षक",
          location: "बर्लिन, जर्मनी",
          quote: "स्थानीय रक्षकों को प्रशिक्षित करने से कानून का शासन मजबूत होता है और न्याय की पहुँच सुनिश्चित होती है।",
        },
        {
          name: "प्रिया शर्मा",
          role: "सामुदायिक स्वयंसेवक",
          location: "नई दिल्ली, भारत",
          quote: "हर पहल से परिवारों को गरिमा, शिक्षा और कानूनी सुरक्षा का वास्तविक अधिकार मिलता है।",
        },
      ],
    },
    events: {
      title: "हमारे आगामी कार्यक्रम",
      subtitle: "हमारे अंतर्राष्ट्रीय सम्मेलनों, प्रतिनिधिमंडलों और शैक्षिक मंचों में शामिल हों।",
      items: [
        {
          month: "नवंबर",
          day: "28",
          title: "वैश्विक मानवाधिकार शिखर सम्मेलन 2026",
          location: "जिनेवा, स्विट्जरलैंड और ऑनलाइन",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          cta: "पंजीकरण करें",
        },
        {
          month: "दिसंबर",
          day: "15",
          title: "युवा वकालत और कानूनी प्रशिक्षण कार्यशाला",
          location: "बर्लिन, जर्मनी",
          image: "https://images.pexels.com/photos/8926543/pexels-photo-8926543.jpeg",
          cta: "पंजीकरण करें",
        },
        {
          month: "जनवरी",
          day: "20",
          title: "आपातकालीन राहत और कानूनी संगोष्ठी",
          location: "डॉर्टमुंड मुख्यालय और ऑनलाइन",
          image: "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg",
          cta: "पंजीकरण करें",
        },
      ],
    },
    directActionForm: {
      title: "हमारे साथ खड़े हों",
      subtitle: "प्रश्नों, केस रिपोर्ट या साझेदारी के प्रस्तावों के साथ हमारी अंतर्राष्ट्रीय परिषद से संपर्क करें।",
      nameLabel: "आपका नाम",
      namePlaceholder: "अपना पूरा नाम दर्ज करें",
      emailLabel: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      categoryLabel: "पूछताछ श्रेणी",
      categories: [
        "सामान्य पूछताछ",
        "आपातकालीन मानवाधिकार मामला",
        "साझेदारी और सहयोग",
        "स्वयंसेवक और प्रतिनिधिमंडल",
      ],
      messageLabel: "आपका संदेश",
      messagePlaceholder: "हम आपकी किस प्रकार सहायता कर सकते हैं?",
      submitCta: "संदेश भेजें",
      subtext: "हम सभी आवश्यक मामलों और सहायता अनुरोधों पर शीघ्र प्रतिक्रिया देते हैं।",
    },
    news: {
      title: "नवीनतम समाचार और जमीनी रिपोर्ट",
      subtitle: "हमारे मिशन, कानूनी जीतों और मानवाधिकार रिपोर्टों से अवगत रहें।",
      readMore: "और पढ़ें",
      featured: {
        tag: "जमीनी रिपोर्ट",
        title: "IHRO ने विस्थापित समुदायों को महत्वपूर्ण सहायता और कानूनी सुरक्षा पहुंचाई",
        date: "नवंबर 2026",
        excerpt: "हमारे अंतर्राष्ट्रीय प्रतिनिधिमंडल ने 14 दिवसीय मिशन पूरा किया, जिसमें 250 परिवारों को सुरक्षित आश्रय और कानूनी संरक्षण प्रदान किया गया।",
        image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
      },
      recent: [
        {
          tag: "कानूनी जीत",
          title: "अंतर्राष्ट्रीय न्यायालय ने समान शिक्षा के अधिकार को बरकरार रखा",
          date: "14 नवंबर 2026",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
        },
        {
          tag: "स्वास्थ्य सेवा",
          title: "आपातकालीन मोबाइल क्लीनिक दूरदराज के क्षेत्रों तक पहुंचे",
          date: "08 नवंबर 2026",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
        },
        {
          tag: "प्रशिक्षण",
          title: "500 से अधिक युवाओं ने मानवाधिकार प्रशिक्षण पूरा किया",
          date: "29 अक्टूबर 2026",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
      ],
    },
    donationBanner: {
      title: "आपका दान जरूरतमंदों को सशक्त बनाता है",
      subtitle: "हम मिलकर मानवीय गरिमा की रक्षा करते हैं और सार्वभौमिक न्याय सुनिश्चित करते हैं।",
      cta: "दान करें",
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
        cases: "सुलझाए गए मामले",
        volunteers: "सक्रिय स्वयंसेवक",
      },
    },
    getInvolved: {
      title: "न्याय और गरिमा के लिए आगे आएं",
      subtitle: "चाहे कानूनी वकालत, स्वयंसेवा या मानवीय समर्थन के माध्यम से, आपकी भागीदारी मौलिक अधिकारों को मजबूत करती है।",
      ctaPrimary: "आंदोलन से जुड़ें",
      ctaSecondary: "हमारा कार्य देखें",
    },
    vision2047: {
      tag: "राष्ट्रीय मिशन · 2047 का रोडमैप",
      title: "विजन 2047: विकसित भारत",
      subtitle:
        "भारतीय स्वतंत्रता के 100 वर्ष पूरे होने के उपलक्ष्य में मानवाधिकारों को बढ़ावा देने, बुनियादी शिक्षा का विस्तार करने, महिलाओं को सशक्त बनाने और पूरे भारत में न्याय सुनिश्चित करने का एक राष्ट्रव्यापी मिशन।",
      logoUrl:
        "https://storage.allindiateachersfederation.com/uploads/2026/11/vikasit-bharat-mission-2047-logo.jpg",
      logoAlt: "विकसित भारत मिशन 2047 - स्वतंत्रता के 100 वर्ष का उत्सव",
      cardBadge: "राष्ट्रीय मिशन",
      cards: [
        {
          category: "प्रारंभिक बाल्यावस्था शिक्षा",
          stat: "10,000",
          title: "देशभर में प्री-स्कूल",
          desc: "छोटे बच्चों को जीवन और शिक्षा में एक मजबूत शुरुआत देने के लिए शहरी और ग्रामीण क्षेत्रों में 10,000 आनंदमय और गुणवत्तापूर्ण प्री-स्कूल स्थापित करना।",
        },
        {
          category: "कैरियर और सशक्तिकरण",
          stat: "1 लाख",
          title: "कैरियर के नए अवसर",
          desc: "योग्य महिला शिक्षकों, विद्यालय प्रमुखों और प्रारंभिक बाल्यावस्था देखभाल विशेषज्ञों के लिए एक लाख उपयोगी रोजगार के अवसर सृजित करना।",
        },
        {
          category: "समुदाय और एकजुटता",
          stat: "1 लाख+",
          title: "मानवाधिकार और शिक्षक नेटवर्क",
          desc: "एक लाख से अधिक समर्पित शिक्षकों, मानवाधिकार रक्षकों और सामाजिक कार्यकर्ताओं को एक सक्रिय राष्ट्रव्यापी समर्थन नेटवर्क में एकजुट करना।",
        },
        {
          category: "संस्थागत सुरक्षा",
          stat: "36 राज्य और केंद्र शासित प्रदेश",
          title: "राज्यव्यापी कानूनी सहायता प्रकोष्ठ",
          desc: "मानवाधिकारों की सुरक्षा, शिक्षकों के अधिकारों की रक्षा और शिकायतों के समाधान के लिए प्रत्येक राज्य और केंद्र शासित प्रदेश में सक्रिय कानूनी प्रकोष्ठ स्थापित करना।",
        },
      ],
      bannerTitle: "विकसित भारत की मजबूत नींव का निर्माण",
      bannerDesc:
        "विकसित भारत 2047 के राष्ट्रीय विजन के अनुरूप, IHRO जमीनी स्तर पर अधिकारों की रक्षा को संस्थागत सहयोग से जोड़ता है — ताकि हर नागरिक सुरक्षित रहे, हर बच्चे को बुनियादी शिक्षा मिले और हर समुदाय उन्नति करे।",
      bannerPrimaryBtn: "हमसे जुड़ें",
      bannerSecondaryBtn: "कानूनी प्रकोष्ठ से संपर्क करें",
    },
    footer: {
      brandDesc: "अंतर्राष्ट्रीय मानवाधिकार संगठन (IHRO) एक स्वतंत्र गैर-सरकारी संस्था है जो मानवाधिकारों की सार्वभौम घोषणा की रक्षा करती है।",
      quickLinksTitle: "त्वरित लिंक",
      connectTitle: "संपर्क करें",
      copyright: "© 2026 अंतर्राष्ट्रीय मानवाधिकार संगठन। सर्वाधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      termsCondition: "नियम और शर्तें",
      links: {
        home: "होम",
        about: "हमारे बारे में",
        mission: "मिशन",
        programs: "कार्यक्रम",
        presence: "वैश्विक नेटवर्क",
        contact: "संपर्क",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        twitter: "X (Twitter)",
        vision2047: "विजन 2047: विकसित भारत",
      },
    },
    api: {
      contactSuccess: "IHRO से संपर्क करने के लिए धन्यवाद। आपका संदेश प्राप्त हो गया है और हमारी टीम जल्द ही आपसे संपर्क करेगी।",
      contactNameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
      contactEmailInvalid: "कृपया एक वैध ईमेल पता दर्ज करें।",
      contactMessageTooShort: "कृपया कम से कम 5 अक्षरों का संदेश लिखें।",
      contactSaveFailed: "हम अभी आपका संदेश सहेज नहीं सके। कृपया पुनः प्रयास करें।",
      newsletterSuccess: "IHRO वैश्विक समाचारों और मानवाधिकार रिपोर्टों की सदस्यता लेने के लिए धन्यवाद।",
      newsletterAlreadySubscribed: "यह ईमेल पता पहले से ही सदस्यता सूची में है।",
      newsletterEmailInvalid: "कृपया एक वैध ईमेल पता दर्ज करें।",
      newsletterSaveFailed: "हम अभी आपकी सदस्यता संसाधित नहीं कर सके। कृपया कुछ देर बाद प्रयास करें।",
      statsError: "हम अभी नवीनतम आंकड़े प्राप्त नहीं कर सके।",
      invalidFormat: "अनुरोध का प्रारूप सही नहीं था।",
    },
  },
  fr: {
    brand: {
      name: "IHRO",
      fullName: "Organisation Internationale des Droits de l'Homme",
      tagline: "Promouvoir et protéger les droits de l'homme dans le monde entier.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      mission: "Mission",
      programs: "Causes",
      events: "Événements",
      news: "Actualités",
      presence: "Réseau Mondial",
      contact: "Contact",
      donateNow: "Faire un Don",
      language: "FR",
    },
    hero: {
      tag: "TENDRE UNE MAIN SECOURABLE",
      heading1: "L'Espoir d'un",
      heading2: "Monde Meilleur",
      title: "L'Espoir d'un Monde Meilleur",
      titleLine1: "L'Espoir d'un",
      titleLine2: "Monde Meilleur",
      subtitle: "Dédiée à la défense des droits fondamentaux, aux secours d'urgence et à la représentation juridique directe des communautés les plus vulnérables.",
      ctaPrimary: "Faire un Don",
      ctaSecondary: "Notre Mission",
      watchVideo: "Notre Mission",
      trustText: "Plus de 15 000 personnes soutenues dans 45+ pays",
      altArtwork: "Droits de l'homme et solidarité communautaire IHRO",
    },
    subHeroQuote: {
      quote: "Ce qui compte, ce n'est pas ce que l'on donne, mais l'amour que l'on met à donner.",
      author: "Mère Teresa",
    },
    vulnerable: {
      tag: "INITIATIVES HUMANITAIRES",
      title: "Aider les Plus Vulnérables, Votre Soutien Compte",
      subtitle: "Des initiatives ciblées apportant aide d'urgence, défense juridique et justice durable.",
      cards: [
        {
          title: "Plaidoyer Juridique & Justice",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          category: "Aide Humanitaire",
        },
        {
          title: "Protection de l'Enfance",
          image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
          category: "Protection",
        },
        {
          title: "Secours Médicaux d'Urgence",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
          category: "Santé",
        },
        {
          title: "Autonomisation Communautaire",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
          category: "Éducation",
        },
      ],
    },
    kindnessAction: {
      tag: "LA BIENVEILLANCE EN ACTION",
      title: "La Bienveillance, En Action",
      description: "Face aux crises et lorsque les plus vulnérables sont réduits au silence, l'IHRO mobilise des juristes et des équipes de terrain pour apporter une aide directe et une protection juridique.",
      checklist: [
        "Conseil Juridique Direct",
        "Intervention de Crise",
        "Éducation aux Droits",
        "Espaces Communautaires Sécurisés",
      ],
      cta: "Découvrir Notre Action",
    },
    causes: {
      title: "Soutenez Nos Causes En Cours",
      subtitle: "Participez à nos missions de terrain et à nos fonds de protection juridique.",
      items: [
        {
          tag: "AIDE JURIDIQUE",
          title: "Assistance Juridique d'Urgence aux Familles Déplacées",
          description: "Représentation pro-bono et assistance sécuritaire pour les familles confrontées à l'expulsion illégale.",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
          raised: "38 400 $",
          goal: "50 000 $",
          percent: 76,
          cta: "Soutenir la Cause",
        },
        {
          tag: "SECOURS DE CRISE",
          title: "Aide Médicale et Nutritionnelle pour les Enfants",
          description: "Fourniture de compléments vitaux, d'eau potable et de soins médicaux d'urgence.",
          image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
          raised: "42 100 $",
          goal: "60 000 $",
          percent: 70,
          cta: "Soutenir la Cause",
        },
        {
          tag: "DÉFENSE COMMUNAUTAIRE",
          title: "Protection et Formation des Défenseurs des Droits",
          description: "Équiper les militants locaux d'outils de sécurité numérique et de lignes d'assistance juridique d'urgence.",
          image: "https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg",
          raised: "29 800 $",
          goal: "35 000 $",
          percent: 85,
          cta: "Soutenir la Cause",
        },
      ],
    },
    videoBanner: {
      title: "Découvrez Notre Histoire: Défendre la Dignité Humaine",
      subtitle: "Voyez comment notre réseau international apporte justice et espoir dans plus de 45 pays.",
      playLabel: "Regarder le Film",
    },
    partners: {
      title: "Soutenu par des Coalitions Mondiales des Droits de l'Homme",
    },
    testimonials: {
      title: "Les Voix de Notre Réseau Mondial",
      subtitle: "Témoignages de nos défenseurs, partenaires et familles protégées sur le terrain.",
      quoteBadge: "RECONNAISSANCE COMMUNAUTAIRE",
      items: [
        {
          name: "Dr. Sarah Jenkins",
          role: "Conseillère Juridique",
          location: "Londres, Royaume-Uni",
          quote: "Grâce à l'intervention rapide et au soutien juridique de l'IHRO, la voix de notre communauté a été entendue et protégée.",
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
          name: "Elena Rostova",
          role: "Défenseure Communautaire",
          location: "Genève, Suisse",
          quote: "Chaque action redonne concrètement dignité, accès à l'éducation et protection juridique aux familles.",
        },
      ],
    },
    events: {
      title: "Nos Prochains Événements",
      subtitle: "Rejoignez nos sommets internationaux, délégations et séminaires de formation.",
      items: [
        {
          month: "NOV",
          day: "28",
          title: "Sommet Mondial des Droits de l'Homme 2026",
          location: "Genève, Suisse & En ligne",
          image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
          cta: "S'inscrire",
        },
        {
          month: "DÉC",
          day: "15",
          title: "Atelier Plaidoyer Jeunesse et Défenseurs",
          location: "Berlin, Allemagne",
          image: "https://images.pexels.com/photos/8926543/pexels-photo-8926543.jpeg",
          cta: "S'inscrire",
        },
        {
          month: "JAN",
          day: "20",
          title: "Symposium Secours d'Urgence et État de Droit",
          location: "Siège de Dortmund & Direct",
          image: "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg",
          cta: "S'inscrire",
        },
      ],
    },
    directActionForm: {
      title: "Agissez Avec Nous",
      subtitle: "Contactez notre conseil international pour toute demande, alerte urgente ou proposition de partenariat.",
      nameLabel: "Votre Nom",
      namePlaceholder: "Entrez votre nom complet",
      emailLabel: "Adresse E-mail",
      emailPlaceholder: "Entrez votre adresse e-mail",
      categoryLabel: "Catégorie de Demande",
      categories: [
        "Demande Générale",
        "Cas Urgent de Droits de l'Homme",
        "Partenariat & Coalitions",
        "Bénévolat & Délégation",
      ],
      messageLabel: "Votre Message",
      messagePlaceholder: "Comment pouvons-nous vous assister ou collaborer ?",
      submitCta: "Envoyer le Message",
      subtext: "Nous répondons avec diligence à toutes les demandes d'intervention urgente.",
    },
    news: {
      title: "Dernières Actualités & Rapports de Terrain",
      subtitle: "Restez informé de nos missions, victoires juridiques et publications.",
      readMore: "Lire la Suite",
      featured: {
        tag: "RAPPORT DE TERRAIN",
        title: "L'IHRO Apporte une Aide Cruciale et une Défense Juridique aux Déplacés",
        date: "Novembre 2026",
        excerpt: "Notre délégation internationale a finalisé une mission de 14 jours, établissant des abris sûrs et assurant une protection judiciaire pour 250 familles.",
        image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
      },
      recent: [
        {
          tag: "VICTOIRE JURIDIQUE",
          title: "La Cour Internationale Confirme l'Égalité d'Accès à l'Éducation",
          date: "14 Novembre 2026",
          image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
        },
        {
          tag: "SANTÉ COMMUNAUTAIRE",
          title: "Des Cliniques Mobiles d'Urgence Déployées en Zones Isolées",
          date: "08 Novembre 2026",
          image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
        },
        {
          tag: "FORMATION",
          title: "Plus de 500 Jeunes Défenseurs Certifiés en Droit Humanitaire",
          date: "29 Octobre 2026",
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        },
      ],
    },
    donationBanner: {
      title: "Votre Don Donne du Pouvoir à Ceux Qui en Ont Besoin",
      subtitle: "Ensemble, nous défendons la dignité, apportons une aide d'urgence et garantissons la justice.",
      cta: "Faire un Don",
    },
    impact: {
      story1Title: "Défendre les Droits Fondamentaux Partout",
      story1Para1: "L'IHRO est une organisation internationale non gouvernementale qui défend les droits fondamentaux, milite pour la justice et soutient les populations victimes d'exactions.",
      story1Para2: "Par une présence active sur le terrain, nous nous assurons que les personnes vulnérables obtiennent un conseil juridique impartial, une protection et une aide d'urgence.",
      quote1: "Tous les êtres humains naissent libres et égaux en dignité et en droits.",
      quote1Author: "Déclaration Universelle des Droits de l'Homme, Article 1",
      story2Title: "Sécurité, Justice et Égalité pour Tous",
      story2Para1: "Guidés par l'Article 25, nous réaffirmons que la sécurité et la justice sont des droits inaliénables ne pouvant être compromis.",
      story2Para2: "Nous agissons directement auprès des communautés en fournissant aux militants locaux l'expertise juridique et les outils de protection nécessaires.",
      quote2: "La justice ne peut attendre lorsque des innocents souffrent. La loi doit protéger chacun.",
      quote2Author: "Conseil Juridique Consultatif de l'IHRO",
    },
    pillars: {
      sectionTitleLine1: "Notre Mission Fondamentale",
      sectionTitleLine2: "et Nos Valeurs Humanitaires",
      sectionSubtitle: "Nous menons des programmes rigoureux pour répondre aux crises humanitaires et juridiques les plus urgentes.",
      ctaLabel: "En Savoir Plus",
      cards: [
        {
          title: "Protection",
          description: "Protéger les individus contre les atteintes aux droits de l'homme par une veille active et des interventions juridiques concrètes.",
          image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg",
        },
        {
          title: "Justice",
          description: "Défendre l'état de droit afin que les victimes obtiennent réparation et que la primauté du droit s'impose équitablement.",
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
    getInvolved: {
      title: "Engagez-vous pour la Justice et la Dignité",
      subtitle: "Par le plaidoyer juridique, le bénévolat ou le soutien humanitaire, votre action renforce les droits fondamentaux.",
      ctaPrimary: "Rejoindre le Mouvement",
      ctaSecondary: "Découvrir Notre Travail",
    },
    vision2047: {
      tag: "Mission Nationale · Cap sur 2047",
      title: "Vision 2047: Vikasit Bharat",
      subtitle:
        "Une mission nationale célébrant les 100 ans de l'indépendance de l'Inde en faisant progresser les droits humains, l'éducation fondamentale, l'autonomisation des femmes et la justice.",
      logoUrl:
        "https://storage.allindiateachersfederation.com/uploads/2026/11/vikasit-bharat-mission-2047-logo.jpg",
      logoAlt: "Mission Vikasit Bharat 2047 - Célébration des 100 ans d'indépendance",
      cardBadge: "Mission Nationale",
      cards: [
        {
          category: "Éducation de la Petite Enfance",
          stat: "10 000",
          title: "Écoles Maternelles Nationales",
          desc: "Création de 10 000 écoles maternelles de haute qualité dans les zones urbaines et rurales pour offrir un bon départ aux enfants.",
        },
        {
          category: "Carrière & Autonomisation",
          stat: "100 000",
          title: "Nouvelles Opportunités de Carrière",
          desc: "Création de 100 000 opportunités valorisantes pour les éducatrices qualifiées, directrices d'écoles et professionnelles de la petite enfance.",
        },
        {
          category: "Communauté & Solidarité",
          stat: "100 000+",
          title: "Réseau des Défenseurs et Éducateurs",
          desc: "Fédération de plus de 100 000 enseignants dévoués, défenseurs des droits humains et acteurs sociaux dans un réseau national solidaire.",
        },
        {
          category: "Protection Institutionnelle",
          stat: "36 États & Territoires",
          title: "Cellules Juridiques d'État",
          desc: "Mise en place de cellules d'aide juridique dans tous les États et territoires de l'Union pour protéger les droits fondamentaux et résoudre les litiges.",
        },
      ],
      bannerTitle: "Bâtir les Fondations d'une Inde Développée",
      bannerDesc:
        "En accord avec la vision nationale de Vikasit Bharat 2047, l'IHRO allie la protection des droits sur le terrain à un soutien institutionnel — garantissant la protection de chaque citoyen, l'éducation de chaque enfant et l'épanouissement de chaque communauté.",
      bannerPrimaryBtn: "Participer",
      bannerSecondaryBtn: "Contacter la Cellule Juridique",
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
        vision2047: "Vision 2047: Vikasit Bharat",
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
