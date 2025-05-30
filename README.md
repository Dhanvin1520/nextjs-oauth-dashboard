# 🍕 Pizza Dashboard - Modern Order Management System
Dhanvin Vadlamudi
#Live Link:https://nextjs-oauth-dashboard.vercel.app/
A stunning, interactive pizza order dashboard built with Next.js 14, featuring 3D animations, voice integration, and Google OAuth authentication.

## ✨ Features
- **🔐 Authentication**: Google OAuth with NextAuth.js
- **🎨 3D Animations**: Interactive pizza slice particles and pizza loader using Three.js
- **🔊 Voice Integration**: AI voice greetings using Web Speech API
- **📱 Responsive Design**: Beautiful UI optimized for all devices
- **🛡️ Protected Routes**: Secure access to dashboard pages
- **📊 Order Management**: Interactive table with sorting and filtering
- **🎭 Loading States**: Custom 3D pizza loaders
- **🌟 Modern UI**: Tailwind CSS with glass morphism effects

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Authentication**: NextAuth.js with Google OAuth
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## 📦 Installation & Setup

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd pizza-dashboard-3d
\`\`\`

### 2. Install Dependencies

npm install

### 3. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### 4. Environment Variables

Create a `.env.local` file in the root directory:

# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Google OAuth Configuration  
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
\`\`\`

### 5. Run the Development Server
npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.



## 🐛 Troubleshooting

### Common Issues

1. **OAuth Error**: Check Google Console settings and redirect URIs
2. **Environment Variables**: Ensure all required vars are set
3. **Build Errors**: Clear `.next` folder and reinstall dependencies

📚## Third-Party Libraries Used

Beyond Next.js and NextAuth.js:
	•	Three.js – 3D graphics
  •Web Speech API – Voice greetings
	•	React Three Fiber – Three.js in React
	•	Tailwind CSS – Styling


Build by Dhanvin Vadlamudi
