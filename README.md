# Core-X Architect

**Core-X Architect** is an advanced, AI-powered internal tool designed to streamline and automate the process of generating secure, scalable, and clean backend architectures. It serves as a visual "wizard" that guides developers through defining their project requirements, selecting their tech stack, and configuring essential features, ultimately generating a production-ready backend foundation.

![Core-X Architect Screenshot](screenshot.png)

## 🚀 Core Philosophy

The primary goal of Core-X Architect is to reduce the repetitive setup time for new backend projects from days to minutes. By leveraging AI (Gemini) and a structured blueprint system, it ensures that every generated project adheres to:

*   **Clean Architecture:** Separation of concerns and maintainable code structure.
*   **Security First:** Built-in authentication, authorization, and secure coding practices.
*   **Scalability:** Ready-to-scale databases and cloud infrastructure integration.

## 🤖 How We Used Gemini

Core-X Architect uses **Google Gemini 2.0 Flash** as the brain of the operation. It doesn't just autocomplete code; it acts as a Solutions Architect:

*   **Requirement Analysis:** It parses raw user descriptions into structured technical requirements.
*   **Schema Engineering:** It designs optimized SQL schemas for Supabase, including vector embeddings for AI features.
*   **Code Synthesis:** It generates clean, modular TypeScript code based on our strict "Core-X" security templates.

## ✨ Key Features

*   **AI Blueprint Analysis:** specialized AI analyzes your project description and database schema (JSON, SQL, or diagram images) to propose the optimal backend structure.
*   **Visual Configuration Wizard:**
    *   **Project Overview:** Intelligent description parsing with quick-start templates (E-commerce, Chat App, LMS).
    *   **Stack Selection:** Support for modern stacks (initially TypeScript/Supabase, with Python/Go & SQL/NoSQL coming soon).
    *   **Feature Modules:** One-click integration for:
        *   🔐 **Auth (JWT):** Secure login/signup endpoints.
        *   👤 **User Profiles:** Role-based profile management.
        *   💳 **Payments:** Integrated Stripe/PayPal gateways.
        *   ☁️ **File Storage:** S3/Supabase storage wrappers.
        *   🧪 **Unit Testing:** Auto-generated test suites (Coming Soon).
        *   📄 **Swagger Docs:** Automated API documentation.
        *   ⚡ **Admin Panel:** Ready-to-use administrative dashboard.
        *   🧠 **Vector Search:** AI embeddings and semantic search capabilities.
*   **Modern Dashboard UI:** A sleek, dark-mode ready interface built with Next.js, TailwindCSS, and Framer Motion for a premium user experience.

## 🛠️ Tech Stack

*   **AI Engine:** Google Gemini 3.0 Flash & Google Gemini 3.0 pro (via @google/generative-ai SDK)
*   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** TypeScript

## 🏁 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

*   Node.js 18+ installed.
*   npm or yarn package manager.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ymzerotwo/core-x-architect.git
    cd core-x-architect
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to see the application in action.

## 🔮 Future Roadmap

*   [ ] Python (FastAPI/Django) and Go (Gin) backend generation support.
*   [ ] Integration with PostgreSQL and MongoDB (Self-hosted).
*   [ ] Direct deployment to cloud providers (Vercel, AWS, DigitalOcean).
*   [ ] Real-time collaboration on project blueprints.

---

**Version:** 0.0.0 (Alpha)
**License:** MIT
