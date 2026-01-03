// Configuration des fichiers pour chaque activité
const activityFiles = {
    "mon-avatar": [
        { title: "Fiche Pédagogique", file: "FichePedagogiqueMonAvatar.pdf", type: "pdf", icon: "📄" },
        { title: "Qualités", file: "Listedequalités.pdf", type: "pdf", icon: "📝" },
        { title: "Intérêts", file: "Listedinterets.pdf", type: "pdf", icon: "📝" },
        { title: "Exemples", file: "MonAvatarExempleEleves.pdf", type: "pdf", icon: "📄" },
        { title: "Speed Dating", file: "Outilsspeeddating.pdf", type: "pdf", icon: "📝" },
        { title: "P31 Intérêts", file: "P31interets.xlsx", type: "xlsx", icon: "📊" },
        { title: "P31 Qualités", file: "P31Qualités.xlsx", type: "xlsx", icon: "📊" }
    ],
    "20t1-secteurs": [
        { title: "Fiche Pédagogique", file: "FichePedagogique20T1secteurs.pdf", type: "pdf", icon: "📄" }
    ],
    "mythes-et-realites": [
        { title: "Fiche Pédagogique", file: "FichePedagogiqueMythesEtRealites.pdf", type: "pdf", icon: "📄" }
    ],
    "RIASEC": [
        { title: "Fiche Pédagogique", file: "FichePedagogiqueRIASEC.pdf", type: "pdf", icon: "📄" }
    ],
    "fp360": [
        { title: "Fiche Pédagogique", file: "FichePedagogique360FP.pdf", type: "pdf", icon: "📄" }
    ],
    "systeme-scolaire": [
        { title: "Fiche Pédagogique", file: "FichePedagogiqueSystemeScolaire.pdf", type: "pdf", icon: "📄" }
    ]
};

// Fonction pour générer les boutons de téléchargement sur la même ligne
function generateDownloadButtons(viewElement, activityKey) {
    // Vérifier si les fichiers existent pour cette activité
    const files = activityFiles[activityKey];
    if (!files || files.length <= 1) return; // Pas de fichiers supplémentaires
    
    // Chercher le bouton principal de téléchargement
    const mainButton = viewElement.querySelector('.download-button');
    if (!mainButton) return;
    
    // Vérifier si les boutons ont déjà été ajoutés
    if (mainButton.parentElement.classList.contains('downloads-row')) return;
    
    // Mapper les noms de dossiers
    const folderMap = {
        "mon-avatar": "Mon-Avatar",
        "20t1-secteurs": "20T1-secteurs",
        "mythes-et-realites": "Mythes-Et-Realites",
        "RIASEC": "RIASEC",
        "fp360": "360FP",
        "systeme-scolaire": "Systeme-Scolaire"
    };
    
    const folderName = folderMap[activityKey] || "";
    
    // Créer un conteneur pour mettre tous les boutons sur la même ligne
    const rowContainer = document.createElement('div');
    rowContainer.className = 'downloads-row';
    
    // Envelopper le bouton principal
    mainButton.parentNode.insertBefore(rowContainer, mainButton);
    rowContainer.appendChild(mainButton);
    
    // Générer les boutons supplémentaires (sauter le premier qui est déjà affiché)
    files.forEach((file, index) => {
        if (index === 0) return; // Sauter le premier fichier
        
        const filePath = `ActivteORI/${folderName}/${file.file}`;
        
        const button = document.createElement('a');
        button.href = filePath;
        button.target = '_blank';
        button.rel = 'noopener';
        button.className = 'download-button small-button';
        button.download = '';
        
        button.innerHTML = `
            <span>${file.icon}</span>${file.title}
        `;
        
        rowContainer.appendChild(button);
    });
}

// Modifier la fonction showActivity existante pour inclure generateDownloadButtons
(function() {
    // Sauvegarder la fonction originale
    const originalShowActivity = window.showActivity;
    
    // Remplacer par une nouvelle version
    window.showActivity = function(activityKey) {
        // Appeler la fonction originale
        const result = originalShowActivity(activityKey);
        
        // Ajouter notre fonctionnalité
        const activity = window.activityViews[activityKey];
        if (activity) {
            const targetView = document.getElementById(activity.id);
            if (targetView) {
                // Générer les boutons de téléchargement après un court délai
                setTimeout(() => {
                    generateDownloadButtons(targetView, activityKey);
                }, 100);
            }
        }
        
        return result;
    };
})();

console.log("Module 'Assets/activites-complementaires.js' chargé avec succès !");