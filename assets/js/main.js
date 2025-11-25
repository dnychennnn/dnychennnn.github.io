import { resume } from "../data/resume.js";

const THEME_STORAGE_KEY = "preferred-theme";
const themeChangeHandlers = new Set();

const getStoredTheme = () => {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
        return null;
    }
};

const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

const getSystemTheme = () => (systemPreference.matches ? "dark" : "light");

const subscribeToThemeChange = (handler) => {
    themeChangeHandlers.add(handler);
    return () => themeChangeHandlers.delete(handler);
};

const storedTheme = getStoredTheme();
let currentTheme = storedTheme ?? getSystemTheme();
let hasExplicitPreference = Boolean(storedTheme);

const applyTheme = (theme, { persist = true } = {}) => {
    currentTheme = theme;
    // Use Primer's data-color-mode attribute system
    document.documentElement.setAttribute("data-color-mode", theme);
    if (persist) {
        hasExplicitPreference = true;
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (error) {
            // Ignore storage errors (e.g., Safari private mode).
        }
    }
    themeChangeHandlers.forEach((handler) => handler(theme));
};

// Set Primer theme attributes once during initialization
document.documentElement.setAttribute("data-light-theme", "light");
document.documentElement.setAttribute("data-dark-theme", "dark");

if (!storedTheme) {
    systemPreference.addEventListener("change", (event) => {
        if (hasExplicitPreference) {
            return;
        }
        applyTheme(event.matches ? "dark" : "light", { persist: false });
    });
}

applyTheme(currentTheme, { persist: false });

const createElement = (tag, { className, text, html, attrs } = {}) => {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    if (html) {
        element.innerHTML = html;
    }
    if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    return element;
};

const applyExternalAttributes = (element, external) => {
    if (external) {
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noreferrer noopener");
    }
};

const createThemeToggle = () => {
    const button = createElement("button", {
        className: "theme-toggle",
        attrs: { type: "button" },
    });
    const icon = createElement("span", { className: "theme-toggle__icon" });
    const label = createElement("span", { className: "theme-toggle__label" });
    button.appendChild(icon);
    button.appendChild(label);

    const update = (theme) => {
        button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        button.setAttribute("data-theme", theme);
        icon.textContent = theme === "dark" ? "☀️" : "🌙";
        const buttonLabel = theme === "dark" ? "Switch to day mode" : "Switch to night mode";
        label.textContent = buttonLabel;
        button.setAttribute("aria-label", buttonLabel);
        button.setAttribute("title", buttonLabel);
    };

    button.addEventListener("click", () => {
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });

    update(currentTheme);
    subscribeToThemeChange(update);

    return button;
};

const renderHero = (hero) => {
    const container = document.getElementById("hero");
    container.classList.add("site-hero");

    const nav = createElement("nav", {
        className: "site-hero__nav",
        attrs: { "aria-label": "Primary" },
    });
    hero.navigation.forEach((link) => {
        const navLink = createElement("a", { text: link.label, attrs: { href: link.target } });
        nav.appendChild(navLink);
    });
    nav.appendChild(createThemeToggle());
    container.appendChild(nav);

    const layout = createElement("div", { className: "hero-layout" });

    const copy = createElement("div", { className: "hero-copy" });
    const name = createElement("h1", { className: "site-hero__name", text: hero.name });
    const title = createElement("p", { className: "site-hero__title", text: hero.title });
    const lead = createElement("p", { className: "site-hero__lead", text: hero.summary });
    copy.appendChild(name);
    copy.appendChild(title);
    copy.appendChild(lead);

    if (hero.spotlights?.length) {
        const spotlights = createElement("ul", { className: "hero-spotlights" });
        hero.spotlights.forEach((item) => {
            spotlights.appendChild(createElement("li", { text: item }));
        });
        copy.appendChild(spotlights);
    }

    const meta = createElement("div", { className: "hero-meta" });
    meta.appendChild(createElement("span", { className: "hero-location", text: hero.location }));
    hero.contact.forEach((item) => {
        if (item.reveal) {
            const button = createElement("button", {
                className: "hero-contact__reveal",
                text: item.label,
                attrs: { type: "button", "aria-expanded": "false" },
            });

            button.addEventListener("click", () => {
                button.setAttribute("aria-expanded", "true");
                const link = createElement("a", {
                    text: item.reveal.label,
                    attrs: { href: item.reveal.href },
                });
                applyExternalAttributes(link, item.reveal.external);
                button.replaceWith(link);
                link.focus({ preventScroll: true });
            });

            meta.appendChild(button);
            return;
        }

        const link = createElement("a", { text: item.label, attrs: { href: item.href } });
        applyExternalAttributes(link, item.external);
        meta.appendChild(link);
    });
    copy.appendChild(meta);

    layout.appendChild(copy);

    if (hero.photo?.src) {
        const figure = createElement("figure", { className: "hero-portrait" });
        const image = createElement("img", {
            attrs: {
                src: hero.photo.src,
                alt: hero.photo.alt ?? hero.name,
                loading: "lazy",
            },
        });
        figure.appendChild(image);
        layout.appendChild(figure);
    }

    container.appendChild(layout);
};

const renderExperience = (experience) => {
    const section = document.getElementById("experience");
    section.classList.add("section");

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { text: "Experience" }));
    header.appendChild(createElement("span", { text: experience.timeframe }));
    section.appendChild(header);

    const timeline = createElement("div", { className: "timeline" });
    experience.roles.forEach((role) => {
        const card = createElement("article", { className: "timeline-card" });

        const metaRow = createElement("div", { className: "meta-row" });
        metaRow.appendChild(createElement("span", { className: "subtitle", text: role.company }));
        metaRow.appendChild(
            createElement("span", { text: `${role.title} — ${role.location}` })
        );
        metaRow.appendChild(createElement("span", { text: role.period }));
        card.appendChild(metaRow);

        card.appendChild(createElement("h3", { text: role.headline }));

        const highlights = createElement("ul", { className: "highlights" });
        role.highlights.forEach((item) => {
            highlights.appendChild(createElement("li", { text: item }));
        });
        card.appendChild(highlights);

        timeline.appendChild(card);
    });
    section.appendChild(timeline);
};

const renderSkills = (skills) => {
    const section = document.getElementById("skills");
    section.classList.add("section");

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { text: "Expertise" }));
    header.appendChild(createElement("span", { text: skills.subtitle }));
    section.appendChild(header);

    const grid = createElement("div", { className: "skills-grid" });
    skills.groups.forEach((group) => {
        const card = createElement("div", { className: "skill-card" });
        card.appendChild(createElement("h3", { text: group.name }));

        const list = createElement("ul");
        group.items.forEach((item) => {
            list.appendChild(createElement("li", { text: item }));
        });
        card.appendChild(list);
        grid.appendChild(card);
    });
    section.appendChild(grid);
};

const renderEducation = (education) => {
    const section = document.getElementById("education");
    section.classList.add("section");

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { text: "Education" }));
    header.appendChild(createElement("span", { text: education.subtitle }));
    section.appendChild(header);

    const grid = createElement("div", { className: "grid" });
    education.entries.forEach((entry) => {
        const card = createElement("div", { className: "education-card" });
        card.appendChild(createElement("h3", { text: entry.degree }));

        const meta = createElement("div", { className: "education-card__meta" });
        meta.appendChild(createElement("span", { className: "institution", text: entry.institution }));
        const details = createElement("div", { className: "education-card__details" });
        details.appendChild(createElement("span", { className: "location", text: entry.location }));
        details.appendChild(createElement("span", { className: "period", text: entry.period }));
        meta.appendChild(details);
        card.appendChild(meta);

        card.appendChild(createElement("p", { text: entry.summary }));

        if (entry.publications?.length) {
            const publications = createElement("div", { className: "publications" });
            publications.appendChild(
                createElement("span", { className: "publications__label", text: "Selected publications" })
            );
            const list = createElement("ul", { className: "publications__list" });
            entry.publications.forEach((publication) => {
                const item = createElement("li");
                const link = createElement("a", {
                    text: publication.title,
                    attrs: { href: publication.href },
                });
                applyExternalAttributes(link, true);
                item.appendChild(link);
                if (publication.outlet) {
                    item.appendChild(
                        createElement("span", {
                            className: "publication-outlet",
                            text: ` — ${publication.outlet}`,
                        })
                    );
                }
                list.appendChild(item);
            });
            publications.appendChild(list);
            card.appendChild(publications);
        }
        grid.appendChild(card);
    });
    section.appendChild(grid);
};

const renderHighlights = (highlights) => {
    const section = document.getElementById("highlights");
    section.classList.add("section", "highlights-section");

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { text: highlights.title }));
    header.appendChild(createElement("span", { text: highlights.subtitle }));
    section.appendChild(header);

    section.appendChild(createElement("p", { className: "highlights-intro", text: highlights.intro }));

    const grid = createElement("div", { className: "highlights-grid" });
    highlights.cards.forEach((card) => {
        const item = createElement("article", { className: "highlight-card" });
        if (card.backgroundImage) {
            item.classList.add("highlight-card--with-media");
            item.style.setProperty("--highlight-image", `url(${card.backgroundImage})`);
        }
        if (card.icon) {
            item.appendChild(createElement("span", { className: "highlight-icon", text: card.icon }));
        }
        item.appendChild(createElement("h3", { text: card.title }));
        if (card.descriptionHtml) {
            item.appendChild(createElement("p", { html: card.descriptionHtml }));
        } else {
            item.appendChild(createElement("p", { text: card.description }));
        }
        grid.appendChild(item);
    });
    section.appendChild(grid);
};

const renderContact = (contact) => {
    const section = document.getElementById("contact");
    section.classList.add("section");

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { text: "Let's Connect" }));
    header.appendChild(createElement("span", { text: contact.subtitle }));
    section.appendChild(header);

    const card = createElement("div", { className: "education-card contact-card" });
    card.appendChild(createElement("p", { className: "contact-copy", text: contact.copy }));

    const actions = createElement("div", { className: "action-bar" });
    contact.actions.forEach((action) => {
        const attrs = { href: action.href };
        if (action.download) {
            attrs.download = action.download === true ? "" : action.download;
        }
        const link = createElement("a", {
            className: action.style,
            text: action.label,
            attrs,
        });
        applyExternalAttributes(link, action.external);
        actions.appendChild(link);
    });
    card.appendChild(actions);
    section.appendChild(card);
};

const renderFooter = (hero, footer) => {
    const footerEl = document.getElementById("footer");
    footerEl.classList.add("site-footer");
    const year = new Date().getFullYear();
    footerEl.innerHTML = `&copy; ${year} ${hero.name}. <span class="location">${footer.location}.</span>`;
};

const init = () => {
    document.title = `${resume.hero.name} — ${resume.hero.title}`;
    renderHero(resume.hero);
    renderExperience(resume.experience);
    renderSkills(resume.skills);
    renderHighlights(resume.highlights);
    renderEducation(resume.education);
    renderContact(resume.contact);
    renderFooter(resume.hero, resume.footer);
};

init();