# Login Page Project

A modern, responsive login page built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Premium UI**: Glassmorphism design with responsiveness.
- **Components**: Reusable `Button` and `Input` components.
- **Interactivity**: 
  - Password visibility toggle.
  - Loading states.
  - Form validation styling.
- **Tech Stack**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite

## 🛠️ Setup & Installation

This project is cross-platform and works on **macOS**, **Windows**, and **Linux**.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- Terminal:
  - **macOS/Linux**: Terminal, iTerm, etc.
  - **Windows**: PowerShell, Command Prompt, or WSL.

### Steps
1.  **Install Dependencies**:
    ```bash
    # macOs / Linux / Windows
    npm install --offline
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx    # Reusable button
│   │   └── Input.tsx     # Reusable input
│   └── LoginPage.tsx     # Main login view
├── App.tsx               # Root component
└── main.tsx              # Entry point
```

## 📦 Transferring to Offline Windows (No Node.js Required)

If your Windows machine **does not have Node.js** and **no internet**, follow these exact steps. You will build the site on your Mac and run it as a static file on Windows.

### Step 1: Build on Mac
Run this command on your Mac (where Node.js *is* installed):

```bash
npm run build
```

This will create a `dist` folder in your project. This folder contains the standalone website.

### Step 2: Transfer to Windows
1.  Copy the entire **`dist`** folder to a USB drive.
2.  Paste the **`dist`** folder onto your Windows Desktop.

### Step 3: Run on Windows
1.  Open the `dist` folder.
2.  Double-click **`index.html`**.
3.  The login page should open in your default browser.

*Note: I have configured the project to use relative paths (`base: './'`), so it should launch directly. However, standard browser security sometimes blocks "Module" scripts from running directly off the file system. If you see a blank page, try opening it in Firefox, or see if you can install a tiny portable web server.*


## 🎨 Customization


- **Tailwind Config**: Edit `tailwind.config.js` to change colors or fonts.
- **Images**: The background image is currently a URL. For offline use, replace it with a local asset in `src/assets/`.
