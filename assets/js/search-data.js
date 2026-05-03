// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications grouped by research theme. Click any entry to expand its BibTeX.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of R. D. S. Yadava.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-shape-of-charge",
        
          title: "The shape of charge",
        
        description: "A second look at the charging exponent c — why where the charge sits on a fractal island is more important than how big the island is.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/shape-of-charge/";
          
        },
      },{id: "post-the-hidden-geometry-of-conduction-in-thin-films",
        
          title: "The hidden geometry of conduction in thin films",
        
        description: "How a fractal picture of the metallic islands resolves the long-standing puzzle of the temperature exponent x in discontinuous metal films and cermets.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hidden-geometry-conduction-thin-films/";
          
        },
      },{id: "post-fractals-unify-noise-and-breakdown",
        
          title: "Fractals unify noise and breakdown",
        
        description: "A second look at why dielectric breakdown statistics and 1/f noise in MOS devices share a single physical origin — the fractal geometry of oxide defects and the Si–SiO₂ interface.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fractals-unify-noise-and-breakdown/";
          
        },
      },{id: "post-fractals-solve-semiconductor-puzzles",
        
          title: "Fractals solve semiconductor puzzles",
        
        description: "A fractal lens reframes two decades-old MOS device problems — anomalous defect-density area dependence and the persistent 1/f noise spectrum — as two faces of one geometric fact.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fractals-solve-semiconductor-puzzles/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%64%69%75%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
