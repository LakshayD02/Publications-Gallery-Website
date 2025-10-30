        // Dark/Light Theme toggle
        const toggleSwitch = document.getElementById("theme-toggle")
        const body = document.body

        toggleSwitch.addEventListener("change", () => {
            if (toggleSwitch.checked) {
                body.classList.add("dark-theme")
                body.classList.remove("light-theme")
            } else {
                body.classList.add("light-theme")
                body.classList.remove("dark-theme")
            }
        })

        // Filter functionality
        const filterButtons = document.querySelectorAll(".filter-btn")
        const paperCards = document.querySelectorAll(".paper-card")

        // Set default view to abstracts only
        document.addEventListener("DOMContentLoaded", () => {
            // Show only abstracts initially
            paperCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category")
                if (cardCategory === "abstract") {
                    card.style.display = "flex"
                } else {
                    card.style.display = "none"
                }
            })

            // Add click event listeners to filter buttons
            filterButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    // Remove active class from all buttons
                    filterButtons.forEach((btn) => btn.classList.remove("active"))
                    // Add active class to clicked button
                    button.classList.add("active")

                    const filterValue = button.getAttribute("data-filter")

                    paperCards.forEach((card) => {
                        const cardCategory = card.getAttribute("data-category")
                        if (cardCategory === filterValue) {
                            card.classList.remove("hidden")
                            setTimeout(() => {
                                card.style.display = "flex"
                            }, 10)
                        } else {
                            card.classList.add("hidden")
                            setTimeout(() => {
                                card.style.display = "none"
                            }, 300)
                        }
                    })
                })
            })
        })

        // Modal functionality
        const viewMoreOverlays = document.querySelectorAll(".view-more-overlay")
        const paperModal = document.getElementById("paper-modal")
        const modalContent = document.querySelector(".modal-content")
        const modalBackBtn = document.getElementById("modal-back-btn")

        // Close modal function
        function closeModal() {
            paperModal.style.display = "none"
            document.body.style.overflow = "auto"
        }

        // Back button click handler
        modalBackBtn.addEventListener("click", closeModal)

        // Close modal when clicking outside content (optional)
        paperModal.addEventListener("click", (e) => {
            if (e.target === paperModal) {
                closeModal()
            }
        })

        viewMoreOverlays.forEach((overlay) => {
            const viewMoreBtn = overlay.querySelector(".view-more-btn")
            const paperCard = overlay.parentElement

            viewMoreBtn.addEventListener("click", (e) => {
                e.stopPropagation()

                // Check if we're on small device
                if (window.innerWidth <= 600) {
                    // Clone the paper card for modal
                    const clonedCard = paperCard.cloneNode(true)
                    clonedCard.classList.add("modal-paper-card")
                    clonedCard.classList.remove("paper-card")

                    // Remove the view more overlay from cloned card
                    const clonedOverlay = clonedCard.querySelector(".view-more-overlay")
                    if (clonedOverlay) {
                        clonedOverlay.remove()
                    }

                    // Clear modal content and add cloned card
                    modalContent.innerHTML = ""
                    modalContent.appendChild(clonedCard)

                    // Show modal
                    paperModal.style.display = "flex"
                    document.body.style.overflow = "hidden"
                } else {
                    if (paperCard.classList.contains("expanded")) {
                        paperCard.classList.remove("expanded")
                        viewMoreBtn.textContent = "View More"
                        // Smooth scroll to top of card when collapsing
                        setTimeout(() => {
                            paperCard.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                            })
                        }, 100)
                    } else {
                        paperCard.classList.add("expanded")
                        viewMoreBtn.textContent = "View Less"
                    }
                }
            })
        })

        function handleResize() {
            if (window.innerWidth > 600) {
                closeModal()
            }
        }

        window.addEventListener("resize", handleResize)
        handleResize() // Call once on load
   