/**
 * Publications & Research Gallery - Modern Application Script
 * Lakshay Dhoundiyal's Academic Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------------------
    // 1. Data Store: Academic Publications & Citations
    // -------------------------------------------------------------------------
    const publicationsData = [
        {
            title: "Growth, Innovation and Sustainability",
            authors: "Lakshay Dhoundiyal, Himani Dua Sehgal, Puneet Sehgal",
            venue: "National Seminar on Vishwa Guru Bharat, Aryabhatta College, University of Delhi & ICSSR",
            year: "2022",
            type: "Conference Abstract",
            bibtexKey: "dhoundiyal2022growth",
            apa: "Dhoundiyal, L., Sehgal, H. D., & Sehgal, P. (2022). Growth, Innovation and Sustainability. National Seminar on Vishwa Guru Bharat, Aryabhatta College, University of Delhi in association with Bharatiya Shikshan Mandal & ICSSR.",
            ieee: 'L. Dhoundiyal, H. D. Sehgal, and P. Sehgal, "Growth, Innovation and Sustainability," in Nat. Seminar on Vishwa Guru Bharat, Delhi, India: Aryabhatta College & ICSSR, 2022.',
            mla: 'Dhoundiyal, Lakshay, Himani Dua Sehgal, and Puneet Sehgal. "Growth, Innovation and Sustainability." National Seminar on Vishwa Guru Bharat, Aryabhatta College, University of Delhi & ICSSR, 2022.',
            bibtex: `@inproceedings{dhoundiyal2022growth,
  title     = {Growth, Innovation and Sustainability},
  author    = {Dhoundiyal, Lakshay and Sehgal, Himani Dua and Sehgal, Puneet},
  booktitle = {National Seminar on Vishwa Guru Bharat},
  organization = {Aryabhatta College, University of Delhi and ICSSR},
  year      = {2022}
}`
        },
        {
            title: "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science",
            authors: "Lakshay Dhoundiyal, Himani Dua Sehgal, Puneet Sehgal",
            venue: "National Seminar – Bharat Manthan 2023",
            year: "2023",
            type: "Conference Abstract",
            bibtexKey: "dhoundiyal2023impact_abstract",
            apa: "Dhoundiyal, L., Sehgal, H. D., & Sehgal, P. (2023). The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science. National Seminar – Bharat Manthan.",
            ieee: 'L. Dhoundiyal, H. D. Sehgal, and P. Sehgal, "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science," in Nat. Seminar Bharat Manthan, 2023.',
            mla: 'Dhoundiyal, Lakshay, Himani Dua Sehgal, and Puneet Sehgal. "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science." National Seminar – Bharat Manthan, 2023.',
            bibtex: `@inproceedings{dhoundiyal2023impact_abstract,
  title     = {The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science},
  author    = {Dhoundiyal, Lakshay and Sehgal, Himani Dua and Sehgal, Puneet},
  booktitle = {National Seminar -- Bharat Manthan},
  year      = {2023}
}`
        },
        {
            title: "Smart Materials for Aerospace Sensing: Development & Prospects",
            authors: "Ekta Arora, Lakshay Dhoundiyal, Manisha Bagri, Nisha Jha",
            venue: "National Conference on Recent Advances in Functional Materials (RAFM 2024)",
            year: "2024",
            type: "Conference Abstract",
            bibtexKey: "arora2024smart_materials_abstract",
            apa: "Arora, E., Dhoundiyal, L., Bagri, M., & Jha, N. (2024). Smart Materials for Aerospace Sensing: Development & Prospects. National Conference on Recent Advances in Functional Materials (RAFM 2024).",
            ieee: 'E. Arora, L. Dhoundiyal, M. Bagri, and N. Jha, "Smart Materials for Aerospace Sensing: Development & Prospects," in Nat. Conf. on Recent Advances in Functional Materials (RAFM), 2024.',
            mla: 'Arora, Ekta, Lakshay Dhoundiyal, Manisha Bagri, and Nisha Jha. "Smart Materials for Aerospace Sensing: Development & Prospects." National Conference on Recent Advances in Functional Materials (RAFM 2024), 2024.',
            bibtex: `@inproceedings{arora2024smart_materials_abstract,
  title     = {Smart Materials for Aerospace Sensing: Development \\& Prospects},
  author    = {Arora, Ekta and Dhoundiyal, Lakshay and Bagri, Manisha and Jha, Nisha},
  booktitle = {National Conference on Recent Advances in Functional Materials (RAFM)},
  year      = {2024}
}`
        },
        {
            title: "Smart Devices and IoT in Industrial Applications",
            authors: "Lakshay Dhoundiyal, Ekta Arora, Nisha Jha",
            venue: "National Conference on Recent Advances in Functional Materials (RAFM 2024)",
            year: "2024",
            type: "Conference Abstract",
            bibtexKey: "dhoundiyal2024iot_abstract",
            apa: "Dhoundiyal, L., Arora, E., & Jha, N. (2024). Smart Devices and IoT in Industrial Applications. National Conference on Recent Advances in Functional Materials (RAFM 2024).",
            ieee: 'L. Dhoundiyal, E. Arora, and N. Jha, "Smart Devices and IoT in Industrial Applications," in Nat. Conf. on Recent Advances in Functional Materials (RAFM), 2024.',
            mla: 'Dhoundiyal, Lakshay, Ekta Arora, and Nisha Jha. "Smart Devices and IoT in Industrial Applications." National Conference on Recent Advances in Functional Materials (RAFM 2024), 2024.',
            bibtex: `@inproceedings{dhoundiyal2024iot_abstract,
  title     = {Smart Devices and IoT in Industrial Applications},
  author    = {Dhoundiyal, Lakshay and Arora, Ekta and Jha, Nisha},
  booktitle = {National Conference on Recent Advances in Functional Materials (RAFM)},
  year      = {2024}
}`
        },
        {
            title: "The Emerging Trends of UPI Transactions in India",
            authors: "Lakshay Dhoundiyal, Himani Dua Sehgal, Puneet Sehgal",
            venue: "CommClave 2024 Annual Flagship Event, ARSD College, University of Delhi",
            year: "2024",
            type: "Conference Abstract",
            bibtexKey: "dhoundiyal2024upi_abstract",
            apa: "Dhoundiyal, L., Sehgal, H. D., & Sehgal, P. (2024). The Emerging Trends of UPI Transactions in India. CommClave 2024, ARSD College, University of Delhi.",
            ieee: 'L. Dhoundiyal, H. D. Sehgal, and P. Sehgal, "The Emerging Trends of UPI Transactions in India," in CommClave 2024 Flagship Conf., ARSD College, Univ. of Delhi, 2024.',
            mla: 'Dhoundiyal, Lakshay, Himani Dua Sehgal, and Puneet Sehgal. "The Emerging Trends of UPI Transactions in India." CommClave 2024, ARSD College, University of Delhi, 2024.',
            bibtex: `@inproceedings{dhoundiyal2024upi_abstract,
  title     = {The Emerging Trends of UPI Transactions in India},
  author    = {Dhoundiyal, Lakshay and Sehgal, Himani Dua and Sehgal, Puneet},
  booktitle = {CommClave 2024 Annual Flagship Event},
  organization = {ARSD College, University of Delhi},
  year      = {2024}
}`
        },
        {
            title: "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science",
            authors: "Lakshay Dhoundiyal, Saruchi Tandon, Himani Dua Sehgal, Puneet Sehgal",
            venue: "National Seminar – Bharat Manthan 2023",
            year: "2023",
            type: "Research Paper",
            bibtexKey: "dhoundiyal2023impact_paper",
            apa: "Dhoundiyal, L., Tandon, S., Sehgal, H. D., & Sehgal, P. (2023). The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science. National Seminar – Bharat Manthan.",
            ieee: 'L. Dhoundiyal, S. Tandon, H. D. Sehgal, and P. Sehgal, "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science," in Nat. Seminar Bharat Manthan, 2023.',
            mla: 'Dhoundiyal, Lakshay, Saruchi Tandon, Himani Dua Sehgal, and Puneet Sehgal. "The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science." National Seminar – Bharat Manthan, 2023.',
            bibtex: `@article{dhoundiyal2023impact_paper,
  title   = {The Impact of Indian Research, Development and Outreaching Efforts Globally in the Field of Information Technology and Science},
  author  = {Dhoundiyal, Lakshay and Tandon, Saruchi and Sehgal, Himani Dua and Sehgal, Puneet},
  journal = {Proceedings of the National Seminar -- Bharat Manthan},
  year    = {2023}
}`
        },
        {
            title: "The Emerging Trends of UPI Transactions in India",
            authors: "Lakshay Dhoundiyal, Himani Dua Sehgal, Puneet Sehgal",
            venue: "CommClave 2024 Annual Flagship Event, CommTalks, ARSD College",
            year: "2024",
            type: "Research Paper",
            bibtexKey: "dhoundiyal2024upi_paper",
            apa: "Dhoundiyal, L., Sehgal, H. D., & Sehgal, P. (2024). The Emerging Trends of UPI Transactions in India. CommTalks, CommClave 2024, ARSD College, University of Delhi.",
            ieee: 'L. Dhoundiyal, H. D. Sehgal, and P. Sehgal, "The Emerging Trends of UPI Transactions in India," in CommTalks, CommClave 2024, ARSD College, Univ. of Delhi, 2024.',
            mla: 'Dhoundiyal, Lakshay, Himani Dua Sehgal, and Puneet Sehgal. "The Emerging Trends of UPI Transactions in India." CommTalks, CommClave 2024, ARSD College, University of Delhi, 2024.',
            bibtex: `@article{dhoundiyal2024upi_paper,
  title   = {The Emerging Trends of UPI Transactions in India},
  author  = {Dhoundiyal, Lakshay and Sehgal, Himani Dua and Sehgal, Puneet},
  journal = {CommTalks -- CommClave 2024, ARSD College},
  year    = {2024}
}`
        },
        {
            title: "Use of Indian Knowledge in Developing Interventions and Innovations for the Contemporary World",
            authors: "Lakshay Dhoundiyal, Himani Dua Sehgal, Puneet Sehgal",
            venue: "National Seminar on Vishwa Guru Bharat",
            year: "2022",
            type: "Research Paper",
            bibtexKey: "dhoundiyal2022indian_knowledge",
            apa: "Dhoundiyal, L., Sehgal, H. D., & Sehgal, P. (2022). Use of Indian Knowledge in Developing Interventions and Innovations for the Contemporary World. National Seminar on Vishwa Guru Bharat.",
            ieee: 'L. Dhoundiyal, H. D. Sehgal, and P. Sehgal, "Use of Indian Knowledge in Developing Interventions and Innovations for the Contemporary World," in Nat. Seminar on Vishwa Guru Bharat, 2022.',
            mla: 'Dhoundiyal, Lakshay, Himani Dua Sehgal, and Puneet Sehgal. "Use of Indian Knowledge in Developing Interventions and Innovations for the Contemporary World." National Seminar on Vishwa Guru Bharat, 2022.',
            bibtex: `@article{dhoundiyal2022indian_knowledge,
  title   = {Use of Indian Knowledge in Developing Interventions and Innovations for the Contemporary World},
  author  = {Dhoundiyal, Lakshay and Sehgal, Himani Dua and Sehgal, Puneet},
  journal = {National Seminar on Vishwa Guru Bharat},
  year    = {2022}
}`
        },
        {
            title: "Smart Devices and IoT in Industrial Applications",
            authors: "Lakshay Dhoundiyal, Ekta Arora, Nisha Jha",
            venue: "Recent Advances in Functional Materials (RAFM 2024)",
            year: "2024",
            type: "Research Paper",
            bibtexKey: "dhoundiyal2024smart_devices_paper",
            apa: "Dhoundiyal, L., Arora, E., & Jha, N. (2024). Smart Devices and IoT in Industrial Applications. Proceedings of Recent Advances in Functional Materials (RAFM 2024).",
            ieee: 'L. Dhoundiyal, E. Arora, and N. Jha, "Smart Devices and IoT in Industrial Applications," in Proc. Recent Advances in Functional Materials (RAFM), 2024.',
            mla: 'Dhoundiyal, Lakshay, Ekta Arora, and Nisha Jha. "Smart Devices and IoT in Industrial Applications." Proceedings of Recent Advances in Functional Materials (RAFM 2024), 2024.',
            bibtex: `@article{dhoundiyal2024smart_devices_paper,
  title   = {Smart Devices and IoT in Industrial Applications},
  author  = {Dhoundiyal, Lakshay and Arora, Ekta and Jha, Nisha},
  journal = {Proceedings of Recent Advances in Functional Materials (RAFM)},
  year    = {2024}
}`
        },
        {
            title: "Smart Materials for Aerospace Sensing: Development & Prospects",
            authors: "Ekta Arora, Lakshay Dhoundiyal, Manisha Bagri, Nisha Jha",
            venue: "Recent Advances in Functional Materials (RAFM 2024)",
            year: "2024",
            type: "Research Paper",
            bibtexKey: "arora2024smart_materials_paper",
            apa: "Arora, E., Dhoundiyal, L., Bagri, M., & Jha, N. (2024). Smart Materials for Aerospace Sensing: Development & Prospects. Proceedings of Recent Advances in Functional Materials (RAFM 2024).",
            ieee: 'E. Arora, L. Dhoundiyal, M. Bagri, and N. Jha, "Smart Materials for Aerospace Sensing: Development & Prospects," in Proc. Recent Advances in Functional Materials (RAFM), 2024.',
            mla: 'Arora, Ekta, Lakshay Dhoundiyal, Manisha Bagri, and Nisha Jha. "Smart Materials for Aerospace Sensing: Development & Prospects." Proceedings of Recent Advances in Functional Materials (RAFM 2024), 2024.',
            bibtex: `@article{arora2024smart_materials_paper,
  title   = {Smart Materials for Aerospace Sensing: Development \\& Prospects},
  author  = {Arora, Ekta and Dhoundiyal, Lakshay and Bagri, Manisha and Jha, Nisha},
  journal = {Proceedings of Recent Advances in Functional Materials (RAFM)},
  year    = {2024}
}`
        }
    ];

    // -------------------------------------------------------------------------
    // 2. DOM Elements
    // -------------------------------------------------------------------------
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const searchInput = document.getElementById("search-input");
    const searchClearBtn = document.getElementById("search-clear-btn");
    const typeFilterTabs = document.querySelectorAll(".type-tab-btn");
    const topicPillBtns = document.querySelectorAll(".topic-pill-btn");
    const resetFiltersBtn = document.getElementById("reset-filters-btn");
    const clearAllFiltersBtn = document.getElementById("clear-all-filters-btn");
    const paperCards = Array.from(document.querySelectorAll(".paper-card"));
    const visibleCountEl = document.getElementById("visible-count");
    const totalCountEl = document.getElementById("total-count");
    const noResultsState = document.getElementById("no-results-state");
    const backToTopBtn = document.getElementById("back-to-top-btn");
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    const copyrightYear = document.getElementById("copyright-year");

    // Modal Elements
    const citationModal = document.getElementById("citation-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const citationPaperTitle = document.getElementById("citation-paper-title");
    const citationText = document.getElementById("citation-text");
    const citationTabs = document.querySelectorAll(".citation-tab");
    const copyCitationBtn = document.getElementById("copy-citation-btn");

    // State Variables
    let currentFilterType = "all";
    let currentFilterTopic = "all";
    let currentSearchTerm = "";
    let activePaperIndex = 0;
    let activeCitationFormat = "apa";

    // Dynamic Copyright Year
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // -------------------------------------------------------------------------
    // 3. Theme Toggle & Persistence
    // -------------------------------------------------------------------------
    const savedTheme = localStorage.getItem("preferred_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = body.classList.contains("dark-theme");
            if (isDark) {
                body.classList.remove("dark-theme");
                body.classList.add("light-theme");
                localStorage.setItem("preferred_theme", "light");
            } else {
                body.classList.remove("light-theme");
                body.classList.add("dark-theme");
                localStorage.setItem("preferred_theme", "dark");
            }
        });
    }

    // -------------------------------------------------------------------------
    // 4. Filtering & Search Logic
    // -------------------------------------------------------------------------
    function applyFilters() {
        const query = currentSearchTerm.trim().toLowerCase();
        let visibleCount = 0;

        paperCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category") || "";
            const cardTopics = (card.getAttribute("data-topics") || "").toLowerCase();
            const title = (card.querySelector(".paper-title")?.textContent || "").toLowerCase();
            const authors = (card.querySelector(".paper-authors")?.textContent || "").toLowerCase();
            const conference = (card.querySelector(".paper-conference")?.textContent || "").toLowerCase();
            const abstract = (card.querySelector(".paper-abstract")?.textContent || "").toLowerCase();
            const tags = Array.from(card.querySelectorAll(".tag"))
                .map((t) => t.textContent.toLowerCase())
                .join(" ");

            // Type Check
            const matchesType = currentFilterType === "all" || cardCategory === currentFilterType;

            // Topic Check
            let matchesTopic = true;
            if (currentFilterTopic !== "all") {
                matchesTopic = cardTopics.includes(currentFilterTopic);
            }

            // Search Query Check
            let matchesSearch = true;
            if (query) {
                const combinedContent = `${title} ${authors} ${conference} ${abstract} ${tags}`;
                matchesSearch = combinedContent.includes(query);
            }

            if (matchesType && matchesTopic && matchesSearch) {
                card.classList.remove("is-hidden");
                visibleCount++;
            } else {
                card.classList.add("is-hidden");
            }
        });

        // Update Counter
        if (visibleCountEl) visibleCountEl.textContent = visibleCount;
        if (totalCountEl) totalCountEl.textContent = paperCards.length;

        // Toggle Empty State
        if (noResultsState) {
            noResultsState.style.display = visibleCount === 0 ? "block" : "none";
        }

        // Show/Hide Reset Button
        const hasActiveFilter = currentFilterType !== "all" || currentFilterTopic !== "all" || query.length > 0;
        if (resetFiltersBtn) {
            resetFiltersBtn.style.display = hasActiveFilter ? "inline-flex" : "none";
        }
    }

    // Type Tabs Click
    typeFilterTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            typeFilterTabs.forEach((t) => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            currentFilterType = tab.getAttribute("data-type") || "all";
            applyFilters();
        });
    });

    // Topic Pills Click
    topicPillBtns.forEach((pill) => {
        pill.addEventListener("click", () => {
            topicPillBtns.forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            currentFilterTopic = pill.getAttribute("data-topic") || "all";
            applyFilters();
        });
    });

    // Search Input
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = currentSearchTerm ? "inline-flex" : "none";
            }
            applyFilters();
        });

        // Keyboard Shortcut: '/' to focus search
        document.addEventListener("keydown", (e) => {
            if (e.key === "/" && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
        });
    }

    // Search Clear Button
    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearchTerm = "";
            searchClearBtn.style.display = "none";
            searchInput.focus();
            applyFilters();
        });
    }

    // Reset Filters Function
    function resetAllFilters() {
        currentFilterType = "all";
        currentFilterTopic = "all";
        currentSearchTerm = "";

        if (searchInput) {
            searchInput.value = "";
            if (searchClearBtn) searchClearBtn.style.display = "none";
        }

        typeFilterTabs.forEach((t) => {
            t.classList.toggle("active", t.getAttribute("data-type") === "all");
            t.setAttribute("aria-selected", t.getAttribute("data-type") === "all" ? "true" : "false");
        });

        topicPillBtns.forEach((p) => {
            p.classList.toggle("active", p.getAttribute("data-topic") === "all");
        });

        applyFilters();
    }

    if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetAllFilters);
    if (clearAllFiltersBtn) clearAllFiltersBtn.addEventListener("click", resetAllFilters);

    // Clicking individual card tags triggers search for that tag
    document.querySelectorAll(".tag").forEach((tag) => {
        tag.addEventListener("click", (e) => {
            e.stopPropagation();
            const tagText = tag.textContent.trim();
            if (searchInput) {
                searchInput.value = tagText;
                currentSearchTerm = tagText;
                if (searchClearBtn) searchClearBtn.style.display = "inline-flex";
                applyFilters();
                searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });

    // -------------------------------------------------------------------------
    // 5. Expandable Abstracts ("Read Abstract" Toggle)
    // -------------------------------------------------------------------------
    document.querySelectorAll(".abstract-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const wrapper = btn.closest(".paper-abstract-wrapper");
            const abstractP = wrapper.querySelector(".paper-abstract");
            const isExpanded = abstractP.classList.toggle("expanded");
            btn.classList.toggle("is-expanded", isExpanded);
            btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");

            const labelSpan = btn.querySelector("span");
            if (labelSpan) {
                labelSpan.textContent = isExpanded ? "Collapse Abstract" : "Read Abstract";
            }
        });
    });

    // -------------------------------------------------------------------------
    // 6. Citation Drawer / Modal
    // -------------------------------------------------------------------------
    function updateCitationDisplay() {
        const data = publicationsData[activePaperIndex];
        if (!data) return;

        if (citationPaperTitle) citationPaperTitle.textContent = data.title;
        if (citationText) {
            citationText.textContent = data[activeCitationFormat] || data.apa;
        }

        citationTabs.forEach((tab) => {
            tab.classList.toggle("active", tab.getAttribute("data-format") === activeCitationFormat);
        });
    }

    function openCitationModal(index) {
        activePaperIndex = index;
        updateCitationDisplay();
        if (citationModal) {
            citationModal.classList.add("is-active");
            citationModal.setAttribute("aria-hidden", "false");
            body.style.overflow = "hidden";
        }
    }

    function closeCitationModal() {
        if (citationModal) {
            citationModal.classList.remove("is-active");
            citationModal.setAttribute("aria-hidden", "true");
            body.style.overflow = "";
        }
    }

    document.querySelectorAll(".cite-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const index = parseInt(btn.getAttribute("data-index") || "0", 10);
            openCitationModal(index);
        });
    });

    citationTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activeCitationFormat = tab.getAttribute("data-format") || "apa";
            updateCitationDisplay();
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeCitationModal);

    if (citationModal) {
        citationModal.addEventListener("click", (e) => {
            if (e.target === citationModal) closeCitationModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && citationModal?.classList.contains("is-active")) {
            closeCitationModal();
        }
    });

    // Copy Citation Button
    if (copyCitationBtn) {
        copyCitationBtn.addEventListener("click", async () => {
            const textToCopy = citationText ? citationText.textContent : "";
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);
                showToast("Citation copied to clipboard!");
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement("textarea");
                textarea.value = textToCopy;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                showToast("Citation copied to clipboard!");
            }
        });
    }

    // -------------------------------------------------------------------------
    // 7. Toast Notification Utility
    // -------------------------------------------------------------------------
    let toastTimeout;
    function showToast(msg) {
        if (!toast) return;
        if (toastMessage) toastMessage.textContent = msg;
        toast.classList.add("is-shown");
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove("is-shown");
        }, 3200);
    }

    // -------------------------------------------------------------------------
    // 8. Back to Top Button
    // -------------------------------------------------------------------------
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add("is-visible");
            } else {
                backToTopBtn.classList.remove("is-visible");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Initialize View
    applyFilters();
});
