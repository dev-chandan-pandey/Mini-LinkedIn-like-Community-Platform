# 🧑‍💼 Mini LinkedIn-like Community Platform

A mini LinkedIn clone built using modern web technologies, allowing users to register, login, view feeds, and interact with a simplified professional network.

---

## 🔗 Live Demo

[🌐 Click to View Live](https://mini-linked-in-like-community-platf.vercel.app/)

## 📂 GitHub Repository

[💻 GitHub Repo](https://github.com/dev-chandan-pandey/Mini-LinkedIn-like-Community-Platform)

---

## 🛠 Stack Used

- **Frontend Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **State Management:** Context API / useState
- **Backend:** Next.js API Routes (can be replaced with external server)
- **Authentication:** (Optional: JWT or local auth)
- **Database:** (Optional: MongoDB / Local JSON / Dummy Data)
- **Deployment:** Vercel

---

```
/linkedin-clone
├── /app                  ← App router pages and routes
│   └── /api              ← API route handlers (e.g., login, register)
├── /components           ← Reusable UI components (e.g., PostCard, Navbar)
├── /lib                  ← Helpers, db connection, JWT utils
│   ├── db.ts             ← ✅ Your MongoDB connection
│   └── auth.ts           ← JWT utilities
├── /models               ← ✅ All your Mongoose schemas/models
│   └── User.ts           ← User schema
│   └── Post.ts           ← (upcoming) Post schema
├── .env.local            ← Environment variables
├── tailwind.config.js
├── tsconfig.json
└── ...

```
## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/linkedin-clone.git
   cd linkedin-clone

`
`
npm install
`

`NEXT_PUBLIC_API_URL=http://localhost:3000
`

`npm run dev
`