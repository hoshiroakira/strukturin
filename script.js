document.addEventListener('DOMContentLoaded', function() {
    enableJSStyles();
    enableSidebar();
    mainframeFix();
    imageFix();
    enableCopyright();
    copyrightDate();
    generateSidebar();
})

// Basic website descriptions
const year = "2025";
const version = "1.0.0";

// Function to enable JavaScript-dependent element if the browser allows JavaScript
function enableJSStyles() {
    // Get references to the elements we need to modify
    const noJSWarning = document.querySelector('.mainframe-no-js-warning');
    // Clear floats after container if needed
    const container = document.querySelector('.container');
    if (container) {
        container.style.overflow = 'hidden';
    }
    // Only proceed if all elements exist
    if (noJSWarning) {
        // Apply the JavaScript-enabled styles
        noJSWarning.style.display = 'none';
    }
}

// Function to enable the sidebar
function enableSidebar() {
    // Create or reuse a style element
    let styleElement = document.getElementById('js-sidebar-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'js-sidebar-styles';
        document.head.appendChild(styleElement);
    }
    // Update only the sidebar display and width rule
    styleElement.textContent = `
        @media only screen and (min-width: 1010px) {
            .sidebar {
                display: block !important;
                width: 25% !important;
            }
        }
    `;
}

// Function to fix mainframe width based on screen width calculated in CSS
function mainframeFix() {
    // Create or reuse a style element
    let styleElement = document.getElementById('js-mainframe-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'js-mainframe-styles';
        document.head.appendChild(styleElement);
    }
    // Update only the mainframe width rule
    styleElement.textContent = `
        @media only screen and (min-width: 1010px) {
            .mainframe {
                width: 75% !important;
            }
        }
    `;
}

// Function to fix image border radius based on screen width calculated in CSS
function imageFix() {
    // Create or reuse a style element
    let styleElement = document.getElementById('js-image-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'js-image-styles';
        document.head.appendChild(styleElement);
    }
    // Update only the image border radius rule
    styleElement.textContent = `
        @media only screen and (min-width: 1010px) {
            .mainframe-content-image img {
                border-radius: 0 0 0 8px !important;
            }
        }
    `;
}

// Function to enable the sidebar
function enableCopyright() {
    // Create or reuse a style element
    let styleElement = document.getElementById('js-copyright-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'js-copyright-styles';
        document.head.appendChild(styleElement);
    }
    // Update only the copyright display rule
    styleElement.textContent = `
        @media only screen and (min-width: 300px) {
            .copyright {
                display: block !important;
            }
        }
    `;
}

// Function to add copyright date and version
function copyrightDate() {
    const copyrightDiv = document.querySelector('.copyright');
    const copyrightParagraph = document.createElement('p');
    // Text node for the static parts
    const copyrightStaticText = document.createTextNode(`© ${year} Vesperon Lunaris. Web Version ${version}. See the `);
    // Link element
    const copyrightLink = document.createElement('a');
    copyrightLink.href = 'https://github.com/hoshiroakira/vesperon-lunaris';
    copyrightLink.target = '_blank';
    copyrightLink.rel = 'noopener noreferrer';
    copyrightLink.textContent = 'documentation';
    // Ending period text node
    const copyrightEndingText = document.createTextNode('.');
    // Append all elements
    copyrightParagraph.appendChild(copyrightStaticText);
    copyrightParagraph.appendChild(copyrightLink);
    copyrightParagraph.appendChild(copyrightEndingText);
    copyrightDiv.appendChild(copyrightParagraph);
}

// List of sidebar items with absolute directory
const sidebarItems = [
    { name: "Vesperon Lunaris", link: "/" },
    { name: "Penafian dan Lisensi Konten", link: "/disclaimer/" },
    { name: "Cara Mengunduh Materi", link: "/download/" },
    { 
        name: "Teknik Sipil (teori)", link: "/civil/classes/", 
        submenu: [
            { name: "Ilmu Ukur Tanah", link: "/civil/classes/surveying/" }
        ]
    },
    { 
        name: "Teknik Sipil (praktikum)", link: "/civil/labs/",
        submenu: [
            { name: "Mekanika Tanah", link: "/civil/labs/soil-test/" }
        ]
    },
    { 
        name: "Fisika Dasar", link: "/physics/",
        submenu: [
            { name: "Kesetimbangan Benda Tegar", link: "/physics/" }
        ]
    },
    { 
        name: "Kimia Dasar", link: "/chemistry/",
        submenu: [
            { name: "Asam dan Basa Konjugasi", link: "/chemistry/" }
        ]
    }
];

// Function to generate the sidebar based on the data provided in the list
function generateSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const ul = document.createElement('ul');
    ul.classList.add('sidebar-item'); // Apply the sidebar-item class
    sidebarItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link || '#'; // Default to '#' if no link is provided
        a.target = "_blank";
        const span = document.createElement('span');
        span.textContent = item.name;
        a.appendChild(span);
        // Highlight current page
        if (window.location.pathname === a.pathname) {
            a.classList.add('sidebar-item-active');
        }
        li.appendChild(a);
        // Check if the item has a submenu
        if (item.submenu) {
            const submenuUl = document.createElement('ul');
            submenuUl.classList.add('sidebar-item-submenu'); // Apply the sidebar-item-submenu class
            item.submenu.forEach(subitem => {
                const submenuLi = document.createElement('li');
                const submenuA = document.createElement('a');
                submenuA.href = subitem.link || '#';
                submenuA.target = "_blank";
                const submenuSpan = document.createElement('span');
                submenuSpan.textContent = subitem.name;
                submenuA.appendChild(submenuSpan);
                // Maintain the original styling for submenu items
                submenuLi.classList.add('sidebar-item-submenu-item'); // Apply the sidebar-item-submenu-item class
                // Highlight current subpage
                if (window.location.pathname === submenuA.pathname) {
                    submenuA.classList.add('sidebar-item-active');
                }
                submenuLi.appendChild(submenuA);
                submenuUl.appendChild(submenuLi);
            });
            li.appendChild(submenuUl);
        }
        ul.appendChild(li);
    });
    // Clear existing content and append the new sidebar
    sidebar.appendChild(ul);
}