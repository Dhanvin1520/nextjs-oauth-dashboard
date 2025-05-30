🍕 Pizza Dashboard - Modern Order Management System

👤Dhanvin Vadlamudi

🔗 Live Link: https://nextjs-oauth-dashboard.vercel.app/

A stunning, interactive pizza order dashboard built with Next.js 14, featuring 3D animations, voice integration, and Google OAuth authentication.

✨ Features

🔐 Authentication: Google OAuth with NextAuth.js

🎨 3D Animations: Interactive pizza slice particles and pizza loader using Three.js

🔊 Voice Integration: AI voice greetings using Web Speech API

📱 Responsive Design: Beautiful UI optimized for all devices

🛡️ Protected Routes: Secure access to dashboard pages

📊 Order Management: Interactive table with sorting and filtering

🎭 Loading States: Custom 3D pizza loaders

🌟 Modern UI: Tailwind CSS with glass morphism effects

🚀 Tech Stack

Framework: Next.js 14 with App Router

Authentication: NextAuth.js with Google OAuth

TypeScript: Full type safety

3D Graphics: Three.js with React Three Fiber

Styling: Tailwind CSS

Deployment: Vercel

📦 Installation & Setup

1. Clone the Repository

git clone <your-repo-url>
cd pizza-dashboard-3d

2. Install Dependencies

npm install

3. Set Up Google OAuth

Go to Google Cloud Console

Add authorized redirect URIs:

http://localhost:3000/api/auth/callback/google (development)

https://your-domain.com/api/auth/callback/google (production)

4. Configure Environment Variables

Create a .env.local file in the root directory:

# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Google OAuth Configuration  
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

5. Run the Development Server

npm run dev

Open http://localhost:3000 in your browser.

🐛 Troubleshooting

Common Issues

OAuth Error: Double-check redirect URIs in Google Console and .env.local

Environment Variables: Ensure all required variables are defined correctly

Build Errors: Try clearing the .next folder and reinstalling packages with npm install

🧠 Assumptions & Challenges Faced

🧠 Voice Greeting Triggering: Ensured the greeting plays only once after login, not on every /hello route visit.

🎮 3D Performance Optimization: Balanced animation quality with performance across devices.

⚛️ OAuth Redirect Handling: Managed redirect URI transitions between development and production.

🔐 Protected Routes: Ensured session-aware rendering and unauthorized access redirection using NextAuth.

📚 Third-Party Libraries Used

Beyond Next.js and NextAuth.js:

Three.js – 3D graphics

Web Speech API – Voice greetings

React Three Fiber – Rendering Three.js in React

Tailwind CSS – Styling

🌟 Build by Dhanvin Vadlamudi
