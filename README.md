# Scowtt Challenge - Movie Facts App

# I have included my cursor chat log

## ✨ Features

- 🔐 **Google OAuth Authentication** - Secure sign-in with Google
- 👤 **User Profile Display** - Shows name, email, and profile photo
- 🎬 **Favorite Movie Storage** - Save your favorite movie in the database
- 🤖 **AI-Generated Movie Facts** - Unique facts powered by OpenAI GPT-3.5-turbo
- 🔄 **Smart Fact Refresh** - Get new facts with manual refresh button
- 🚪 **Logout Functionality** - Clean sign-out process
- 🌙 **Dark Theme UI** - Modern, sleek dark interface with cyan accents
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🧩 **Component Architecture** - Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Google Provider
- **AI**: OpenAI GPT-3.5-turbo for movie facts
- **Styling**: Tailwind CSS with custom animations and gradients
- **Architecture**: Component-based with TypeScript interfaces

## 📋 Prerequisites

Before running this application, you'll need:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **Database** - Choose one:
   - **PostgreSQL** (recommended for production) - [Download here](https://www.postgresql.org/download/)
   - **SQLite** (easier for development) - Built into Node.js

> **Note**: Prisma is an ORM that works with databases - you still need a database engine (PostgreSQL/SQLite) running!
> **API Keys**: All Google OAuth and OpenAI API keys are provided - no account setup needed!

## 🚀 Step-by-Step Setup Instructions

### Step 1: Clone and Install Dependencies

```bash
# Clone the repository (if not already done)
git clone https://github.com/chazwilson01/Scowtt_Challenge_CW.git
cd movie-app

# Install all dependencies
npm install
```

### Step 2: Install and Setup PostgreSQL

#### 2.1 Install PostgreSQL
- **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
- **macOS**: Use Homebrew: `brew install postgresql`
- **Linux**: `sudo apt-get install postgresql postgresql-contrib`

#### 2.2 Start PostgreSQL Service
```bash
# Windows (if installed as service, it starts automatically)
# macOS/Linux
brew services start postgresql
# OR
sudo systemctl start postgresql
```

#### 2.3 Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE movieapp;

```

### Step 3: Google OAuth Setup

### Step 4: Database Setup

#### 4.1 Generate Prisma Client
```bash
npx prisma generate
```

#### 4.2 Push Database Schema
```bash
npx prisma db push
```

#### 4.3 Verify Database (Optional)
```bash
# Open Prisma Studio to view your database
npx prisma studio
```

### Step 5: Run the Application

#### 5.1 Start Development Server
```bash
npm run dev
```

#### 5.2 Access the Application
Open your browser and go to: `http://localhost:3000`

