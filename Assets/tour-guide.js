// ExploCLV Tour Guide Script
// Uses driver.js library


function startTour() {
    // Check if driver is loaded
    if (!window.driver) {
        console.error("Driver.js not loaded");
        return;
    }

    const driver = window.driver.js.driver;

    const driverConfig = {
        showProgress: true,
        animate: true,
        allowClose: false, // Prevent clicking outside to close since we have a Quit button
        doneBtnText: 'Terminé',
        nextBtnText: 'Suivant',
        prevBtnText: 'Précédent',
        steps: [
            {
                element: 'body',
                popover: {
                    title: 'Bienvenue sur ExploCLV ! 👋',
                    description: 'Ce guide interactif va vous montrer comment utiliser l\'application en quelques secondes.',
                    side: "left",
                    align: 'start'
                }
            },

            {
                element: '.sectors-grid',
                popover: {
                    title: 'Les Secteurs d\'Activité',
                    description: 'Voici les 21 secteurs disponibles. Cliquez sur une image (par exemple Entretien déquipement Motorisé) pour découvrir les métiers qui s\'y cachent.',
                    side: "top"
                },
                onHighlightStarted: (element, step, options) => {
                    // Ensure we are on the sectors view when entering this step
                    if (window.goToSectors) {
                        window.goToSectors();
                    }
                }
            },
            {
                // Targeting the whole view allows interaction with cards inside
                element: '#metiers-view',
                popover: {
                    title: 'Résultats du secteur',
                    description: 'Pour chaque métier, une pastille indique s’il s’agit d’un DEP ou d’un DEC ainsi que la durée de la formation. En survolant la souris sur la photo, le profil et les tâches s’affichent, et en cliquant sur l’image du métier, une courte vidéo démarre.',
                    side: "top"
                },
                onHighlightStarted: (element, step, options) => {
                    // Automatically switch to the specific sector view when entering this step
                    if (window.showMetiers) {
                        window.showMetiers('entretien-equipement-motorise');
                    }

                    // Demo the tooltip by simulating mouse enter on the first card
                    // We wait a bit for the grid to render
                    setTimeout(() => {
                        const firstCardImg = document.querySelector('#metiersGrid .metier-card img');
                        if (firstCardImg) {
                            // Scroll slightly to make sure it's in view
                            firstCardImg.scrollIntoView({ behavior: 'smooth', block: 'center' });

                            // Get coordinates for the event
                            const rect = firstCardImg.getBoundingClientRect();
                            const event = new MouseEvent('mouseenter', {
                                bubbles: true,
                                cancelable: true,
                                clientX: rect.right - 20, // Shift to the right edge
                                clientY: rect.top + rect.height / 2
                            });
                            firstCardImg.dispatchEvent(event);
                        }
                    }, 800);
                },
                onDeselected: (element, step, options) => {
                    // cleanup: hide tooltip
                    const firstCardImg = document.querySelector('#metiersGrid .metier-card img');
                    if (firstCardImg) {
                        const event = new MouseEvent('mouseleave', {
                            bubbles: true,
                            cancelable: true
                        });
                        firstCardImg.dispatchEvent(event);
                    }
                }
            },
            {
                element: '.menu-button[onclick="goToSectors()"]',
                popover: {
                    title: 'Revenir à l\'accueil',
                    description: 'Si vous êtes perdu, ce bouton vous ramène toujours à la liste des secteurs.',
                    side: "bottom"
                }
            },
            {
                element: '#tour-resources-stages',
                popover: {
                    title: 'Ressources et Stages',
                    description: 'ces deux boutons permettent d’accéder à d’autres sites similaires pour obtenir plus d’informations ou pour s’inscrire à un stage élève d’un jour.',
                    side: "bottom"
                }
            },
            {
                element: '.menu-button[onclick="toggleActivitesDropdown()"]',
                popover: {
                    title: 'Activités',
                    description: 'Le bouton Activités donne accès à la liste des activités ORIE réalisées au premier trimestre. Pour chaque activité, on trouve une description, tous les fichiers utiles à sa réalisation ainsi que quelques exemples de résultats d’élèves. Ces contenus seront enrichis au fur et à mesure de la réalisation de nouvelles activités.',
                    side: "bottom"
                }
            },
            {
                element: '.menu-button[onclick="toggleLes2joursDesExplosDropdown()"]',
                popover: {
                    title: 'Les 2 jours des Explos',
                    description: 'Le bouton Les 2 jours des Explos donne accès à la liste des 11 formations choisies par les élèves de CLV. Pour chaque formation, on trouve tous les documents importants ayant servi au bon déroulement des Explos, soit les cahiers d’activités, les rôles des accompagnateurs et le formulaire de retour des élèves.',
                    side: "bottom"
                }
            },
            {
                element: 'body',
                popover: {
                    title: 'À vous de jouer ! 🚀',
                    description: 'Explorez, cliquez et découvrez votre futur métier !',
                    side: "top"
                }
            }
        ],

    };

    // Assign to window.tourDriver so it's globally accessible
    window.tourDriver = driver(driverConfig);

    window.tourDriver.drive();
}

// Add event listener to auto-start if needed or just wait for button click
console.log("Tour guide loaded");
