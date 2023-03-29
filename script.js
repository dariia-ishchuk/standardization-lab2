const cc = CookiesConsentJS({
    content: {
        title: "Cookies compliance",
        message: "We use cookies",
        btnAccept: "Accept all",
        btnReject: "Reject all",
        btnDismiss: "Cookies policy",
        btnSettings: "Settings",
        btnSettingsSelectAll: "Select all",
        btnSettingsUnselectAll: "Unselect all",
        btnSettingsAccept: "Accept selection",
        btnInfo: "More info",
        policy: "Privacy Policy",
        align: "center",
        policyLink: "https://alwaysjudgeabookbyitscover.com/privacy/",
        info: "Cookies are small text files that are stored on your device when you visit a website. " +
            "They are important because they help the website remember your preferences and improve your browsing " +
            "experience. For example, cookies can remember your login information, language preference, and " +
            "shopping cart contents. Cookies can also be used by websites to track your activity and show you " +
            "personalized advertisements. You can choose to disable cookies through your browser settings, but " +
            "doing so may limit the functionality and user experience of certain websites.",
    },
    expirationDays: 365,
    buttons: ["reject", "accept", "settings", "info", "dismiss"],
    cookies: {
        access: {
            name: "access",
            title: "Right to access",
            description: "Visitors have the right to request access to the personal data collected about them."
        },
        rectification: {
            name: "rectification",
            title: "Right to rectification",
            description: "Visitors have the right to request corrections to any inaccurate personal data.",
            checked: true
        },
        erasure: {
            name: "erasure",
            title: "Right to erasure",
            description: "Visitors have the right to request the deletion of their personal data."
        },
        restrict_processing: {
            name: "restrict_processing",
            title: "Right to restrict processing",
            description: "Visitors have the right to request that their personal data not be processed."
        },
        data_portability: {
            name: "data_portability",
            title: "Right to data portability",
            description: "Visitors have the right to request a copy of their personal data in a commonly used, machine-readable format."
        },
        object: {
            name: "object",
            title: "Right to object",
            description: "Visitors have the right to object to the processing of their personal data."
        },
        withdraw_consent: {
            name: "withdraw_consent",
            title: "Right to withdraw consent",
            description: "Visitors have the right to withdraw their consent to the processing of their personal data.",
            checked: true
        },
        lodge_complaint: {
            name: "lodge_complaint",
            title: "Right to lodge a complaint",
            description: "Visitors have the right to file a complaint with a data protection authority if they believe their personal data has been mishandled."
        }
    },
    callback: {
        first_load: null,
        accept: null,
        reject: null,
        load: null,
    }
});