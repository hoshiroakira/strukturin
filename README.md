# Strukturin

The official source code for **Strukturin**, an educational website providing in-depth learning materials in **Civil Engineering**, built with Eleventy.

---

## Table of Contents

* [About the Project](#about-the-project)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running Locally](#running-locally)
* [Usage](#usage)
* [Deployment](#deployment)
* [License](#license)

---

## About the Project

Strukturin is a dedicated online platform designed to serve as an additional learning resource for students and enthusiasts in the exact sciences. This website aims to provide comprehensive and insightful materials particularly focusing on Civil Engineering.

Our mission is to foster a deeper understanding of these subjects through well-structured content and detailed discussions, making complex topics more accessible.

---

## Features

* Comprehensive articles, explanations, and examples for each subject.
* Dedicated sections covering various aspects of civil engineering.
* Fundamental concepts explained clearly for foundational understanding.
* Designed for easy navigation and optimal readability.
* **Static site generation with Eleventy** for fast, secure, and maintainable output.

---

## Technologies Used

* **Eleventy (11ty):** The static site generator that transforms Markdown content and Nunjucks templates into static HTML.
* **Nunjucks:** The templating language used for creating reusable layouts and components in Eleventy.
* **Markdown:** Used for writing the primary content of articles and pages.
* **HTML5:** The base for structuring the web content.
* **CSS3:** For styling and layout.
* **JavaScript:** For interactive elements and dynamic content that runs client-side.
* **npm:** Node.js package manager for managing project dependencies.

---

## Getting Started

To get a local copy of this project up and running for development, follow these simple steps.

### Prerequisites

You'll need Node.js and npm (Node Package Manager) installed on your system.
* **Node.js & npm:** [Download and install Node.js](https://nodejs.org/en/download/) (npm is included with Node.js).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hoshiroakira/strukturin.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd strukturin
    ```
3.  **Install Node.js dependencies:**
    This command installs Eleventy and any other packages listed in `package.json`.
    ```bash
    npm install
    ```

### Running Locally

To build the site and serve it on your local machine with live reloading for development:

1.  **Start the Eleventy development server:**
    ```bash
    npx @11ty/eleventy --serve
    ```
2.  Open your web browser and navigate to the address shown in your terminal (usually `http://localhost:8080/`).

Eleventy will watch for changes in your source files and automatically rebuild and refresh your browser.

To just build the static files without starting a server (e.g., for deployment preparation):
```bash
npx @11ty/eleventy