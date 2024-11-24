export const studentData = {
    student: {
        name: "Alice Dupont",
        id: "ETU001",
        option: "Génie Logiciel"
    },
    notifications: [
        { id: 1, message: "Votre proposition de PFE a été acceptée." },
        { id: 2, message: "Rappel : La date limite de soumission du rapport est dans 2 semaines." },
        { id: 3, message: "Nouvelle offre de PFE disponible dans votre domaine." }
    ],
    currentPFE: {
        title: "Développement d'une application mobile de gestion de tâches",
        description: "Création d'une application mobile cross-platform pour la gestion de tâches et de projets, utilisant React Native et Firebase."
    },
    upcomingDeadlines: [
        { id: 1, title: "Soumission du rapport intermédiaire", date: "2023-07-15" },
        { id: 2, title: "Présentation mi-parcours", date: "2023-07-30" },
        { id: 3, title: "Remise du code source", date: "2023-08-15" }
    ]
};

export const teacherData = {
    teacher: {
        name: "Dr. Martin Lefebvre",
        id: "ENS001",
        department: "Informatique"
    },
    supervisedProjects: [
        { id: 1, title: "Système de recommandation basé sur l'IA pour une plateforme e-commerce" },
        { id: 2, title: "Développement d'un chatbot pour le service client utilisant le NLP" },
        { id: 3, title: "Optimisation des performances d'une application web à grande échelle" }
    ],
    upcomingJuries: [
        { id: 1, projectTitle: "Système de détection de fraude bancaire", date: "2023-07-20" },
        { id: 2, projectTitle: "Plateforme de e-learning adaptative", date: "2023-07-25" },
        { id: 3, projectTitle: "Application de réalité augmentée pour l'éducation", date: "2023-08-05" }
    ]
};

export const companyData = {
    company: {
        name: "TechInnovate SA",
        id: "ENT001",
        sector: "Technologies de l'Information"
    },
    proposedProjects: [
        { id: 1, title: "Développement d'un tableau de bord IoT pour l'industrie 4.0" },
        { id: 2, title: "Création d'une plateforme de gestion de la relation client basée sur l'IA" },
        { id: 3, title: "Implémentation d'un système de sécurité basé sur la blockchain" }
    ],
    activeInternships: [
        { id: 1, studentName: "Sophie Martin", projectTitle: "Optimisation des algorithmes de machine learning" },
        { id: 2, studentName: "Lucas Dubois", projectTitle: "Développement d'une API RESTful pour les services cloud" },
        { id: 3, studentName: "Emma Petit", projectTitle: "Conception d'une architecture microservices" }
    ]
};

export const adminData = {
    stats: {
        students: 450,
        teachers: 30,
        companies: 25,
        activePFEs: 120
    },
    recentActivities: [
        { id: 1, description: "Nouvelle entreprise partenaire ajoutée : DataTech Solutions", date: "2023-06-30" },
        { id: 2, description: "Validation de 15 nouveaux sujets de PFE", date: "2023-06-29" },
        { id: 3, description: "Mise à jour du règlement des PFE", date: "2023-06-28" },
        { id: 4, description: "Attribution des jurys pour la session de soutenances de juillet", date: "2023-06-27" },
        { id: 5, description: "Ouverture des inscriptions pour les PFE de l'année prochaine", date: "2023-06-26" }
    ]
};

