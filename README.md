# RoastGPT 🔥

A full-stack application that humorously analyzes and "roasts" GitHub repositories using AI. Submit a GitHub repo URL and get a witty, roast-style code review powered by Google's Gemini AI.

## Features ✨

- **AI-Powered Roasting**: Uses Google Gemini AI to generate funny, insightful code roasts
- **GitHub Integration**: Fetches repository data from GitHub API
- **Beautiful UI**: Modern React frontend with Tailwind CSS styling
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Multiple Roast Modes**: Different styles of roasts (savage, gentle, constructive, etc.)
- **Real-time Processing**: Instant analysis of GitHub repositories

## Tech Stack 🛠️

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web server framework
- **Node.js** - JavaScript runtime
- **Google Gemini API** - AI for roasting
- **GitHub API** - Repository data fetching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure 📁

```
RoastGPT/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   ├── data/          # Constants and data
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── server/                 # Express backend
    ├── controllers/       # Request handlers
    ├── routes/           # API routes
    ├── services/         # Business logic (GitHub, Gemini)
    ├── server.js         # App entry point
    ├── package.json
    └── .env              # Environment variables
```

## Installation 📦

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- GitHub Personal Access Token
- Google Gemini API Key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Houria-hs/RoastGPT.git
   cd RoastGPT
   ```

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd ../server
   npm install
   ```

## Configuration ⚙️

### Backend Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
GITHUB_TOKEN=your_github_token_here
GEMINI_API_KEY=your_gemini_api_key_here
FRONTEND_URL=http://localhost:5173
```

### Frontend Environment Variables

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Running Locally 🚀

### Start Backend
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

### Start Frontend (in another terminal)
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

## Usage 🎮

1. Open the application in your browser
2. Enter a GitHub repository URL (e.g., `https://github.com/username/repo`)
3. Select a roast mode (optional)
4. Click "Roast This Repo"
5. Watch as Gemini AI generates a hilarious roast! 😂

## Building for Production 🏗️

### Frontend Build
```bash
cd client
npm run build
# Output: dist/
```

### Backend Build
```bash
cd server
npm run build
```

## Deployment 🌐

### Frontend - Vercel
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set root directory to `client`
4. Configure `VITE_API_URL` environment variable
5. Deploy

### Backend - Render
1. Push to GitHub
2. Connect repository to [Render](https://render.com)
3. Create Web Service with root directory `server`
4. Set Start Command: `npm start`
5. Configure environment variables (GITHUB_TOKEN, GEMINI_API_KEY)
6. Deploy

## API Endpoints 📡

### POST `/api/roast`
Generates a roast for a GitHub repository

**Request Body:**
```json
{
  "repoUrl": "https://github.com/username/repo",
  "mode": "savage" // optional
}
```

**Response:**
```json
{
  "roast": "Your roast text here...",
  "repoName": "repo-name",
  "author": "username"
}
```

## Getting API Keys 🔑

### GitHub Personal Access Token
1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Create a new token with `repo` and `user` scopes
3. Copy and save in `.env`

### Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and save in `.env`

## Contributing 🤝

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## License 📄

This project is open source and available under the MIT License.

## Author 👨‍💻

Created by [Houria-hs](https://github.com/Houria-hs)

---

**Disclaimer**: All roasts are generated for entertainment purposes. No repositories were harmed in the making of this application. 😄
