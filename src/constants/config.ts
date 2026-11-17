//- Reusable configuration constants to prevent magic numbers across the application

export const CONFIG = {
  //- Animation timing, thresholds, and parallax settings
  INTERSECTION_THRESHOLD: 0.1,
  DRAWER_TRANSITION_MS: 500,
  SCROLL_ANIMATION_DELAY_STEP_MS: 50,
  PARALLAX: {
    LERP_FACTOR: 0.1,
    MAX_OFFSET_PX: 90,
    SETTLE_EPSILON_PX: 0.05,
    HERO_TEXT_SPEED: -0.06,
    HERO_IMAGE_SPEED: 0.14,
    HERO_STATS_SPEED: 0.04,
    ABOUT_SHAPE_1_SPEED: 0.2,
    ABOUT_SHAPE_2_SPEED: -0.16,
    ABOUT_SHAPE_3_SPEED: 0.14,
    STORY_IMAGE_SPEED: 0.06,
    STORY_QUOTE_SPEED: -0.04,
    MAP_IMAGE_SPEED: 0.1,
  },

  //- Organization statistics
  STATS: {
    NATIONS_COUNT: 45,
    CHAPTERS_COUNT: 120,
    CASES_SUPPORTED: 15000,
    VOLUNTEERS_COUNT: 8500,
  },

  //- Carousel and grid configuration
  TESTIMONIAL_AUTOPLAY_SECONDS: 40,
  PILLARS_PER_ROW: 3,
  DEFAULT_MAP_ASPECT_RATIO: 1,

  //- Organization Official Contact & Social URLs
  SOCIAL_URLS: {
    LINKEDIN: "https://www.linkedin.com/company/ihro-world",
    INSTAGRAM: "https://www.instagram.com/ihro_official",
    YOUTUBE: "https://www.youtube.com/@ihro_world",
    TWITTER: "https://twitter.com/ihro_world",
  },
  CONTACT_INFO: {
    EMAIL: "info@ihro.world",
    PHONE: "+4917645983857",
    PHONE_FORMATTED: "+49 176 4598 3857",
    ADDRESS: "Mallinckrodstraße 167, Dortmund, Germany",
  },

  //- AIPSA Database REST API connection settings
  AIPSA_DB: {
    BASE_URL: "https://db.aipsa.in/api/v1/projects/8cd1903fb8bfe5554424331687e0b6c6",
    PROJECT_ID: "8cd1903fb8bfe5554424331687e0b6c6",
    PUBLIC_KEY: "apsk_9465c41b9bbe2d45ee61cf02c94a597d344e0904da2fa7ea8e2afcf83294b918",
    SERVICE_KEY: "apsk_71b4ed841680f7ba612b04521846030fbdb7b8bc2df6cfdb8905408a71d24feb",
    TIMEOUT_MS: 5000,
    CACHE_MAX_AGE_SECONDS: 60,
    CACHE_TTL_MS: 30000,
    STALE_TTL_MS: 300000,
  },
};

