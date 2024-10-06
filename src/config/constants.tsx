const profile = {
  name: 'Gangeshwar Krishnamurthy',
  title: 'Gangeshwar Krishnamurthy | Co-Founder & CTO @ MindFi (Y Combinator S21) | Singapore',
  description: 'a software architect, platform engineer and a product manager interested in building software products that are delightful and scalable. YC founder based in Singapore',
  image: '/profile.jpg',
  username: 'gangeshwark',
  links: {
    email: 'mailto:me@gangeshwark.com',
    github: 'https://github.com/gangeshwark',
    twitter: 'https://twitter.com/gangeshwark',
    linkedin: 'https://linkedin.com/in/gangeshwark',
  },
}

export const constants = {
  profile,
  site: import.meta.env.SITE,

  links: {
    internal: [
      { name: 'Home', link: '/' },
      { name: 'Publications', link: '/publications' },
    ],
    external: [
      { name: 'Email', link: profile.links.email },
      { name: 'GitHub', link: profile.links.github },
      { name: 'Twitter', link: profile.links.twitter },
      { name: 'LinkedIn', link: profile.links.linkedin },
    ],
  },

  publications: [
    {
      name: 'SocCogCom at Semeval-2020 task 11: characterizing and detecting propaganda using sentence-level emotional salience features',
      description: 'SEMEVAL 2020',
      link: 'https://arxiv.org/abs/2008.13012',
      using: ['Gangeshwar Krishnamurthy, Raj Kumar Gupta, Yinping Yang'],
    },
    {
      name: 'Variational Fusion for Multimodal Sentiment Analysis',
      description: 'pre-print - arxiv',
      link: 'https://arxiv.org/abs/1908.06008',
      using: ['Navonil Majumder, Soujanya Poria, Gangeshwar Krishnamurthy, Niyati Chhaya, Rada Mihalcea, Alexander Gelbukh'],
    },
    {
      name: 'Multi-task Learning for Detecting Stance in Tweets',
      description: 'CICLing 2019',
      link: '/papers/CICLING_Multi_task_Stance.pdf',
      using: ['Devamanyu Hazarika*, Gangeshwar Krishnamurthy*, Soujanya Poria, Roger Zimmermann.'],
    },
    {
      name: 'Modeling Inter-Aspect Dependencies for Aspect-Based Sentiment Analysis.',
      description: 'NAACL-HLT 2018',
      link: 'http://www.aclweb.org/anthology/N18-2043',
      using: ['Devamanyu Hazarika, Soujanya Poria, Prateek Vij, Gangeshwar Krishnamurthy, Erik Cambria, Roger Zimmermann.'],
    },
    {
      name: 'A Deep Learning Approach for Multimodal Deception Detection.',
      description: 'CICLing 2018',
      link: 'https://arxiv.org/pdf/1803.00344.pdf',
      using: ['Gangeshwar Krishnamurthy, Navonil Majumder, Soujanya Poria, Erik Cambria.'],
    },
    {
      name: 'On Human-like Performance Artificial Intelligence - A Demonstration Using an Atari Game',
      description: 'ICAIS 2019',
      link: '/papers/On-Human-like-Performance-Artificial-Intelligence-HSB-XY-TQ-GK-FL-final.pdf',
      using: ['Seng Beng Ho, Xiwen Yang, Gangeshwar Krishnamurthy, Therese Quieta, Fiona Liausvia.'],
    },
    {
      name: 'Towards Verifying Semantic Roles Co-occurrence',
      description: 'pre-print - arxiv',
      link: 'https://arxiv.org/abs/1810.03875',
      using: ['Aliaksandr Huminski, Hao Zhang, Gangeshwar Krishnamurthy.'],
    },
  ],

  uses: {
    environment: [
      { name: 'Arch', description: 'Lightweight Linux distribution', link: 'https://archlinux.org' },
      { name: 'Brave', description: 'Privacy focused web browser', link: 'https://brave.com' },
      { name: 'Fish', description: 'User friendly interactive shell', link: 'https://fishshell.com' },
      { name: 'Gnome', description: 'Desktop environment - Wayland', link: 'https://www.gnome.org' },
      { name: 'JetBrains', description: 'Font with ligatures support', link: 'https://www.jetbrains.com/lp/mono' },
      { name: 'Kitty', description: 'GPU accelerated terminal emulator', link: 'https://sw.kovidgoyal.net/kitty' },
      { name: 'Neovim', description: 'Vim-based text editor', link: 'https://neovim.io' },
      { name: 'Raycast', description: 'Better Spotlight - Productivity', link: 'https://www.raycast.com' },
      { name: 'Tmux', description: 'Terminal sessions management', link: 'https://github.com/tmux/tmux' },
    ],
    cli: [
      { name: 'FZF', description: 'General purpose fuzzy finder', link: 'https://github.com/junegunn/fzf' },
      { name: 'PNPM', description: 'JavaScript package manager', link: 'https://pnpm.io' },
      { name: 'Ripgrep', description: 'Better grep', link: 'https://github.com/BurntSushi/ripgrep' },
      { name: 'Slides', description: 'Terminal-based presentation', link: 'https://github.com/maaslalani/slides' },
      { name: 'Stow', description: 'Dotfiles management', link: 'https://www.gnu.org/software/stow' },
      { name: 'Vifm', description: 'Vim-based file manager', link: 'https://vifm.info' },
      { name: 'Volta', description: 'JavaScript tool manager', link: 'https://volta.sh' },
    ],
  },
}
