(function () {
  const NAVBAR_HTML = `
    <nav
      class="fixed w-full top-0 z-50 bg-surface/90 dark:bg-surface-container-lowest/90 border-b border-outline-variant/30 backdrop-blur-md shadow-sm transition-all duration-300"
      id="main-header"
    >
      <div
        class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto"
      >
        <a class="flex items-center gap-2" data-nav-logo href="index.html">
          <img
            alt="PlanWise Logo"
            class="h-10 object-contain"
            src="assets/logo.png"
          />
        </a>
        <div class="hidden md:flex items-center gap-6">
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg transition-all active:scale-95 duration-200 px-2 py-1"
            data-nav-key="home"
            data-nav-mode="desktop"
            href="index.html"
            >Home</a
          >
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg transition-all active:scale-95 duration-200 px-2 py-1"
            data-nav-key="service"
            data-nav-mode="desktop"
            href="service-agreement.html"
            >Service Agreement</a
          >
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg transition-all active:scale-95 duration-200 px-2 py-1"
            data-nav-key="faq"
            data-nav-mode="desktop"
            href="faq.html"
            >FAQ</a
          >
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg transition-all active:scale-95 duration-200 px-2 py-1"
            data-nav-key="switch"
            data-nav-mode="desktop"
            href="index.html#switch-to-us"
            >Switch to Us</a
          >
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg transition-all active:scale-95 duration-200 px-2 py-1"
            data-nav-key="contact"
            data-nav-mode="desktop"
            href="index.html#contact"
            >Contact</a
          >
        </div>
        <div class="hidden lg:flex items-center gap-4">
          <a
            class="font-body-md text-body-md text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors"
            href="tel:1300CARE"
          >
            <span class="material-symbols-outlined text-[20px]">call</span>
            1300 CARE
          </a>
          <a
            class="bg-primary text-white hover:bg-primary-container transition-colors duration-200 font-body-md text-body-md px-6 py-2 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
            data-nav-key="contact"
            data-nav-mode="cta"
            href="index.html#contact"
          >
            Get Started
          </a>
        </div>
        <button
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Toggle Menu"
          class="md:hidden text-on-surface p-2"
          id="mobile-menu-btn"
          type="button"
        >
          <span class="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>
      <div
        class="md:hidden hidden bg-surface border-t border-outline-variant/30 absolute w-full shadow-lg"
        id="mobile-menu"
      >
        <nav class="flex flex-col px-margin-mobile py-4 gap-4">
          <a
            class="font-body-md text-on-surface-variant"
            data-nav-key="home"
            data-nav-mode="mobile"
            href="index.html"
            >Home</a
          >
          <a
            class="font-body-md text-on-surface-variant"
            data-nav-key="service"
            data-nav-mode="mobile"
            href="service-agreement.html"
            >Service Agreement</a
          >
          <a
            class="font-body-md text-on-surface-variant"
            data-nav-key="faq"
            data-nav-mode="mobile"
            href="faq.html"
            >FAQ</a
          >
          <a
            class="font-body-md text-on-surface-variant"
            data-nav-key="switch"
            data-nav-mode="mobile"
            href="index.html#switch-to-us"
            >Switch to Us</a
          >
          <a
            class="font-body-md text-on-surface-variant"
            data-nav-key="contact"
            data-nav-mode="mobile"
            href="index.html#contact"
            >Contact</a
          >
          <div
            class="border-t border-outline-variant/30 pt-4 mt-2 flex flex-col gap-3"
          >
            <a
              class="font-body-md text-on-surface-variant flex items-center gap-2"
              href="tel:1300CARE"
            >
              <span class="material-symbols-outlined">call</span> 1300 CARE
            </a>
            <a
              class="bg-primary text-on-primary text-center py-3 rounded-full font-body-md flex items-center justify-center"
              data-nav-key="contact"
              data-nav-mode="mobile-cta"
              href="index.html#contact"
              >Get Started</a
            >
          </div>
        </nav>
      </div>
    </nav>
  `;

  const ACTIVE_PAGE = {
    "index.html": "home",
    "service-agreement.html": "service",
    "faq.html": "faq",
    "complaints.html": null,
    "privacy-policy.html": null,
    "terms-of-service.html": null,
    "ndis-code-of-conduct.html": null,
  };

  const ACTIVE_CLASSSETS = {
    desktop: [
      "text-primary",
      "dark:text-primary-fixed-dim",
      "font-bold",
      "border-b-2",
      "border-primary",
      "dark:border-primary-fixed-dim",
      "pb-1",
    ],
    mobile: ["text-primary", "font-bold"],
    cta: [],
    logo: [],
  };

  const INACTIVE_CLASSSETS = {
    desktop: ["text-on-surface-variant", "dark:text-on-surface-variant"],
    mobile: ["text-on-surface-variant"],
    cta: [],
    logo: [],
  };

  function getPageName() {
    const pathname = window.location.pathname.replace(/\\/g, "/");
    const segments = pathname.split("/").filter(Boolean);
    return segments.length ? segments[segments.length - 1].toLowerCase() : "index.html";
  }

  function getTargetPageKey() {
    return ACTIVE_PAGE[getPageName()] || null;
  }

  function isIndexPage() {
    const pageName = getPageName();
    return pageName === "index.html" || pageName === "";
  }

  function applyHrefAdjustments(container) {
    const homeHref = isIndexPage() ? "#home" : "index.html";
    const contactHref = isIndexPage() ? "#contact" : "index.html#contact";
    const switchHref = isIndexPage() ? "#switch-to-us" : "index.html#switch-to-us";

    const logo = container.querySelector("[data-nav-logo]");
    if (logo) {
      logo.setAttribute("href", homeHref);
    }

    container.querySelectorAll("[data-nav-key='home']").forEach((link) => {
      link.setAttribute("href", homeHref);
    });

    container.querySelectorAll("[data-nav-key='contact']").forEach((link) => {
      link.setAttribute("href", contactHref);
    });

    container.querySelectorAll("[data-nav-key='switch']").forEach((link) => {
      link.setAttribute("href", switchHref);
    });
  }

  function applyActiveClasses(link, isActive) {
    const mode = link.getAttribute("data-nav-mode") || "desktop";
    const activeClasses = ACTIVE_CLASSSETS[mode] || [];
    const inactiveClasses = INACTIVE_CLASSSETS[mode] || [];

    link.classList.remove(...inactiveClasses, ...activeClasses);
    link.classList.add(...(isActive ? activeClasses : inactiveClasses));
  }

  function applyActiveState(container) {
    const activeKey = getTargetPageKey();

    container.querySelectorAll("[data-nav-key]").forEach((link) => {
      const key = link.getAttribute("data-nav-key");
      applyActiveClasses(link, key === activeKey);
    });
  }

  function wireMobileMenu(container) {
    const button = container.querySelector("#mobile-menu-btn");
    const menu = container.querySelector("#mobile-menu");
    const header = container.querySelector("#main-header");

    if (!button || !menu) {
      return;
    }

    const icon = button.querySelector(".material-symbols-outlined");

    function setMenuOpen(isOpen) {
      menu.classList.toggle("hidden", !isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      if (icon) {
        icon.textContent = isOpen ? "close" : "menu";
      }
    }

    button.addEventListener("click", () => {
      setMenuOpen(menu.classList.contains("hidden"));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    window.addEventListener("scroll", () => {
      if (!header) {
        return;
      }
      header.classList.toggle("shadow-md", window.scrollY > 10);
    });
  }

  function mountNavbar() {
    const mountPoint = document.getElementById("site-navbar");
    if (!mountPoint) {
      return;
    }

    mountPoint.innerHTML = NAVBAR_HTML;

    applyHrefAdjustments(mountPoint);
    applyActiveState(mountPoint);
    wireMobileMenu(mountPoint);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountNavbar);
  } else {
    mountNavbar();
  }
})();
