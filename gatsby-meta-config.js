module.exports = {
  title: `raoun4136.github.io`,
  description: `라운이의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://raoun4136.github.io`,
  ogImage: `og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `박성오`,
    bio: {
      role: `개발자`,
      description: ['원동연 보고있나?', '임태규 보고있나?', '강우석 보고있나?', '최정우 보고있나?'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Raoun4136`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/raoun4136`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `qkrtjddh1212@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.03 15~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/Raoun4136/Raoun4136.github.io',
          demo: 'https://raoun4136.github.io',
        },
      },
      {
        date: '2022.03 22~',
        activity: '헬로',
        links: {
          post: '/node-js-capstone-01',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 적용',
        description: '테마 적용기',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/Raoun4136/Raoun4136.github.io',
          demo: 'https://raoun4136.github.io',
        },
      },
    ],
  },
};
