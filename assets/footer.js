(function () {
  const FOOTER_HTML = `
    <footer class="bg-tertiary dark:bg-tertiary-container w-full pt-xl pb-md">
      <div
        class="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8"
      >
        <div class="col-span-1 md:col-span-1 flex flex-col gap-4">
          <span
            class="font-headline-md text-headline-md font-bold text-on-tertiary"
          >PlanWise</span>
          <p
            class="font-label-sm text-label-sm text-on-tertiary/75 dark:text-on-tertiary-container/75 -mt-2 text-xs font-bold tracking-wide"
          >
            Community Partners Trading as LG Community Partners Pty Ltd
          </p>
          <p
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 mt-2 text-sm"
          >
            Empowering NDIS participants with transparent, stress-free plan
            management and dedicated support across Australia.
          </p>
          <div class="flex gap-4 mt-2">
            <a
              aria-label="Facebook"
              class="text-on-tertiary/80 hover:text-secondary-fixed transition-colors"
              href="#"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 1"
              >thumb_up</span>
            </a>
            <a
              aria-label="LinkedIn"
              class="text-on-tertiary/80 hover:text-secondary-fixed transition-colors"
              href="#"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 1"
              >work</span>
            </a>
          </div>
        </div>
        <div class="col-span-1 flex flex-col gap-3">
          <h4
            class="font-headline-md text-headline-md font-bold text-secondary-fixed text-lg mb-2"
          >
            Quick Links
          </h4>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            data-footer-link="home"
            href="#home"
          >Home</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            data-footer-link="about"
            href="#about"
          >About Us</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            data-footer-link="services"
            href="#services"
          >Services</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            data-footer-link="switch"
            href="#switch-to-us"
          >Switch to Us</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            data-footer-link="contact"
            href="#contact"
          >Contact</a>
        </div>
        <div class="col-span-1 flex flex-col gap-3">
          <h4
            class="font-headline-md text-headline-md font-bold text-secondary-fixed text-lg mb-2"
          >
            Resources
          </h4>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="faq.html"
          >FAQ</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="service-agreement.html"
          >Service Agreement</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="privacy-policy.html"
          >Privacy Policy</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="terms-of-service.html"
          >Terms of Service</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="ndis-code-of-conduct.html"
          >NDIS Code of Conduct</a>
          <a
            class="font-label-sm text-label-sm text-on-tertiary/80 dark:text-on-tertiary-container/80 hover:text-on-tertiary dark:hover:text-on-tertiary-container hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            href="complaints.html"
          >Complaints &amp; Feedback</a>
        </div>
        <div class="col-span-1 flex flex-col gap-3">
          <h4
            class="font-headline-md text-headline-md font-bold text-secondary-fixed text-lg mb-2"
          >
            Contact Us
          </h4>
          <p
            class="font-label-sm text-label-sm text-on-tertiary/80 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-[18px]">call</span> 0498475578
          </p>
          <p
            class="font-label-sm text-label-sm text-on-tertiary/80 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-[18px]">mail</span>
            contact@plan-wise.lgpartners.com.au
          </p>
          <p
            class="font-label-sm text-label-sm text-on-tertiary/80 flex items-start gap-2"
          >
            <span class="material-symbols-outlined text-[18px] mt-1">location_on</span>
            8 White Cedar Drive,<br />Castle Hill NSW 2154
          </p>
        </div>
      </div>
      <div
        class="px-margin-desktop max-w-[1440px] mx-auto border-t border-on-tertiary/20 pt-6 mt-6"
      >
        <div
          class="bg-tertiary-container/50 p-4 rounded-lg mb-6 border border-on-tertiary/10"
        >
          <p
            class="font-label-sm text-label-sm text-on-tertiary/80 text-center italic"
          >
            <strong>NDIS Acknowledgement:</strong> PlanWise acknowledges the
            Traditional Custodians of country throughout Australia and their
            connections to land, sea and community. We pay our respect to their
            Elders past and present and extend that respect to all Aboriginal
            and Torres Strait Islander peoples today.
          </p>
        </div>
        <p
          class="font-label-sm text-label-sm text-on-tertiary/80 text-center"
          data-footer-year
        ></p>
      </div>
    </footer>
  `;

  function getPageName() {
    const pathname = window.location.pathname.replace(/\\/g, "/");
    const segments = pathname.split("/").filter(Boolean);
    return segments.length ? segments[segments.length - 1].toLowerCase() : "index.html";
  }

  function isIndexPage() {
    const pageName = getPageName();
    return pageName === "index.html" || pageName === "";
  }

  function adjustLinks(container) {
    const pageIsIndex = isIndexPage();

    const pageLinks = {
      home: pageIsIndex ? "#home" : "index.html#home",
      about: pageIsIndex ? "#about" : "index.html#about",
      services: pageIsIndex ? "#services" : "index.html#services",
      switch: pageIsIndex ? "#switch-to-us" : "index.html#switch-to-us",
      contact: pageIsIndex ? "#contact" : "index.html#contact",
      faq: pageIsIndex ? "#faq" : "index.html#faq",
    };

    Object.entries(pageLinks).forEach(([key, href]) => {
      container.querySelectorAll(`[data-footer-link="${key}"]`).forEach((link) => {
        link.setAttribute("href", href);
      });
    });
  }

  function setYear(container) {
    const yearElement = container.querySelector("[data-footer-year]");
    if (yearElement) {
      yearElement.textContent = `\u00A9 ${new Date().getFullYear()} PlanWise Community Partners Trading as LG Community Partners Pty Ltd. Registered NDIS Provider.`;
    }
  }

  function mountFooter() {
    const existingFooter = document.querySelector("footer");
    if (!existingFooter) {
      return;
    }

    const footerMount = document.createElement("div");
    footerMount.innerHTML = FOOTER_HTML;
    const renderedFooter = footerMount.firstElementChild;
    if (!renderedFooter) {
      return;
    }

    existingFooter.replaceWith(renderedFooter);
    adjustLinks(renderedFooter);
    setYear(renderedFooter);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFooter);
  } else {
    mountFooter();
  }
})();
