# 🍕 Pizza Dashboard 3D - Next.js Authentication Project

Dhanvin Vadlamudi 

👾Live Link:https://nextjs-oauth-dashboard.vercel.app/

A modern, interactive pizza order management dashboard built with Next.js, featuring Google OAuth authentication, 3D backgrounds, and a beautiful responsive UI.

## ✨ Features

- **🔐 Google OAuth Authentication** - Secure login with NextAuth.js
- **🎨 3D Interactive Background** - Three.js powered floating pizza elements
- **📱 Fully Responsive Design** - Works perfectly on all devices
- **🛡️ Protected Routes** - Middleware-based route protection
- **📊 Interactive Dashboard** - Real-time stats and order management
- **🔍 Advanced Filtering** - Search and filter orders by multiple criteria
- **📋 Sortable Tables** - Click to sort by any column
- **🎭 Glassmorphism UI** - Modern glass-effect design elements
- **🌙 Dark Mode Ready** - Beautiful dark theme support

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js with Google OAuth
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js for interactive backgrounds
- **UI Components**: Radix UI primitives
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready


## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Google Cloud Console account for OAuth setup
- Git installed

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd pizza-dashboard-3d
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install


## 3. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

## 4. Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Google OAuth Configuration  
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
\`\`\`


### 5. Run the Development Server

\`\`\`bash
npm run dev
Open [http://localhost:3000](http://localhost:3000) in your browser.

--------

🧠 Assumptions and Challenges Faced
	•	Voice Greeting Triggering: Ensured the greeting plays only once after login, not on every /hello route visit.
	•	3D Performance Optimization: Balanced animation quality with performance across devices.
	•	OAuth Redirect Handling: Managed redirect URI transitions between development and production.
	•	Protected Routes: Ensured session-aware rendering and unauthorized access redirection using NextAuth.

⸻

📚 Third-Party Libraries Used
	•	Three.js – For 3D graphics
	•	React Three Fiber – Rendering Three.js with React
	•	Web Speech API – Voice greetings
	•	Tailwind CSS – Styling
	•	Radix UI – UI primitives
	•	NextAuth.js – Authentication

⸻

🌟 Build by Dhanvin Vadlamudi

⸻


