# 🍕 Pizza Dashboard - Modern Order Management System

A stunning, interactive pizza order dashboard built with Next.js 14, featuring 3D animations, voice integration, and Google OAuth authentication.

## ✨ Features

- **🔐 Authentication**: Google OAuth with NextAuth.js
- **🎨 3D Animations**: Interactive pizza slice and pepperoni particles using Three.js
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

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd pizza-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Fill in your Google OAuth credentials:
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
   - `NEXTAUTH_SECRET`: A random secret for NextAuth.js

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.vercel.app/api/auth/callback/google` (production)

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── api/auth/[...nextauth]/     # NextAuth.js API routes
│   ├── components/                 # Reusable components
│   │   ├── login-form.tsx         # Google OAuth login form
│   │   ├── navbar.tsx             # Navigation bar
│   │   ├── pizza-slice.tsx        # 3D pizza slice animation
│   │   ├── pizza-loader.tsx       # 3D loading animation
│   │   ├── pepperoni-particles.tsx # 3D particle system
│   │   ├── voice-toggle.tsx       # Voice control button
│   │   ├── orders-table.tsx       # Orders data table
│   │   └── protected-route.tsx    # Route protection wrapper
│   ├── hello/                     # Protected hello page
│   ├── orders/                    # Protected orders page
│   ├── providers/                 # Context providers
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css               # Global styles
\`\`\`

## 🎯 Key Features Explained

### 3D Animations
- **Pizza Slice**: Floating, rotating pizza slice on the hello page
- **Pepperoni Particles**: Animated background particles
- **Loading Animation**: 3D pizza loader during authentication

### Voice Integration
- Automatic voice greeting when entering the hello page
- Toggle button to enable/disable voice features
- Uses Web Speech API for text-to-speech

### Protected Routes
- `/hello` and `/orders` require authentication
- Automatic redirect to login for unauthenticated users
- Loading states during authentication checks

### Order Management
- Responsive table with order data
- Sorting by Order ID or Date
- Filtering by order status
- Color-coded status badges

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Update OAuth settings**
   - Add your Vercel domain to Google OAuth authorized URIs
   - Update `NEXTAUTH_URL` in environment variables

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'pizza-orange': '#ff6b35',
        'pizza-red': '#d32f2f',
      }
    }
  }
}
\`\`\`

### 3D Models
Modify the 3D components in `/components/` to change animations:
- `pizza-slice.tsx`: Main pizza animation
- `pepperoni-particles.tsx`: Background particles
- `pizza-loader.tsx`: Loading animation

## 🐛 Troubleshooting

### Common Issues

1. **OAuth Error**: Check your Google OAuth credentials and authorized URIs
2. **3D Not Loading**: Ensure Three.js dependencies are installed correctly
3. **Voice Not Working**: Check browser permissions for speech synthesis
4. **Build Errors**: Verify all environment variables are set

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Limited Web Speech API support

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ and 🍕 by [Your Name]
