# JXTY Website Builder

An AI-powered website builder that lets you create websites simply by describing what you want. Powered by Claude AI, JXTY Website Builder transforms natural language prompts into fully functional websites with React or Node.js templates.

## ✨ Features

- **Natural Language Website Creation**: Describe your website in plain English and watch it come to life
- **Real-time Preview**: See your website take shape instantly
- **Code Editor Integration**: View and edit the generated code with Monaco Editor
- **Multiple Project Types**: Create React or Node.js applications automatically
- **WebContainer Technology**: Test your website in a virtual browser environment
- **Responsive UI**: Built with Tailwind CSS for a modern, responsive design
- **Developer-Friendly**: Full access to the generated code

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/website-builder.git
cd website-builder
```

2. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:

```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
PORT=3000
```

4. Start the development servers:

```bash
# Start backend server
cd backend
npm run dev

# In a new terminal, start frontend server
cd frontend
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🧰 Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Monaco Editor
- WebContainer API
- React Router
- Radix UI Components

### Backend

- Express.js
- Anthropic AI API (Claude)
- TypeScript
- dotenv for environment variables

## 🧪 How It Works

1. **Input**: Users describe the website they want to build in natural language
2. **AI Processing**: The backend uses Claude AI to analyze the prompt and determine the best template (React or Node.js)
3. **Code Generation**: The AI generates all necessary project files
4. **Rendering**: The WebContainer API creates a virtual environment to run the generated code
5. **Preview**: Users can see their website in real-time and make adjustments

## 🙏 Acknowledgements

- [Anthropic](https://www.anthropic.com/) for the Claude AI API
- [WebContainer API](https://webcontainers.io/) for in-browser code execution
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editing experience
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
