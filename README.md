# DocAppoint

[![Live Site](https://img.shields.io/badge/Live%20Demo-DocAppoint-blue?style=for-the-badge&logo=vercel)](https://doc-appoint-a9.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

DocAppoint is a modern, responsive doctor appointment booking platform built on Next.js 15. The application seamlessly bridges the gap between healthcare providers and patients, allowing users to discover verified specialists, review comprehensive medical profiles, and secure real-time consultations quickly and effortlessly.

---

## 🚀 Key Features

### For Patients
* **Intelligent Specialist Search:** Explore a comprehensive registry of verified healthcare practitioners with instant, client-side real-time filtering by name and specialty.
* **Granular Doctor Profiles:** Review robust practitioner credentials including hospital affiliations, clinical experience, consultation fees, live availability windows, and aggregated patient ratings.
* **Streamlined Booking Engine:** Authenticated booking workflow capturing essential medical intake data (patient demographics, blood vitals, scheduling preferences, and clinical reasons for the visit).
* **Comprehensive Self-Service Dashboard:** Centralized portal allowing patients to track upcoming appointments, review historical bookings, process cancellations, and update profile avatars and demographic data.

### Technical Architectures
* **Secure Authentication:** Powered by `Better Auth` utilizing robust session-based management and strict middleware-enforced route protection.
* **Modern Design System:** Optimized for fluid responsive layouts across all device form factors via Tailwind CSS v4, HeroUI component primitives, and Lucide Icons.

---

## 🛠️ Tech Stack

* **Core Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components)
* **Database & ODM:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
* **Authentication:** [Better Auth](https://better-auth.com/) (Session-based access control)
* **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/), [HeroUI Components](https://heroui.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)


---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

* [Node.js](https://nodejs.org/) (v18.x or higher recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
* A running [MongoDB](https://www.mongodb.com/) Instance (Local or Atlas)

### Local Installation

1. **Clone the Repository:**
```bash
git clone [https://github.com/LingkonDash/doc-appoint.git](https://github.com/LinkongDash/doc-appoint.git)
cd doc-appoint

```


2. **Install Dependencies:**
```bash
npm install
# or
pnpm install

```


3. **Configure Environment Variables:**
Create a `.env.local` file in the root directory and populate it with the following configuration keys:
```env
# Database Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/docappoint

# Better Auth Configurations
BETTER_AUTH_SECRET=your_super_secret_session_key_here
BETTER_AUTH_URL=http://localhost:3000

# Next.js Public Deployment Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

```


4. **Run the Development Server:**
```bash
npm run dev
# or
pnpm dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

---

## 🔒 Security & Route Protection

DocAppoint uses structural route protection handled via `Better Auth` API integration and Next.js middleware.

* **Public Routes:** Home (`/`), Appointment Directory (`/appointments`), Individual Doctor Profiles (`/appointments/[id]`).
* **Protected Routes:** Private User Dashboard (`/dashboard`), Appointment Intake Bookings (`/doctors/[id]`) with modal. Unauthenticated attempts are seamlessly routed to the authentication portal.

---

## ✉️ Contact & Support

For inquiries, bug reporting, or feature requests, feel free to open a GitHub Issue or reach out via the live platform.
* **Live Deployment:** [https://doc-appoint-a9.vercel.app](https://doc-appoint-a9.vercel.app)
