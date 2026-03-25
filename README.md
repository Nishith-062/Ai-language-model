# 🤖 Virtual AI Coach & AI Language Model

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Welcome to the **Virtual AI Coach & AI Language Model**! This is a comprehensive, full-stack application designed to help users practice language, improve their grammar, and engage in real-time conversations powered by machine learning and AI.

---


## ✨ Features

- **🔐 User Authentication:** Secure signup and login functionality using JWT and bcrypt.
- **💬 Real-Time Chat:** Seamless real-time messaging using Socket.io and AI agent interaction.
- **📝 Grammar Correction:** Intelligent grammar analysis and feedback for text input.
- **🎙️ Speech Processing:** Audio analysis and speech recognition features powered by Librosa and Transformers.
- **📈 Progress Tracking:** Monitor user progress through dedicated exercise records and tracking history.
- **📱 Responsive UI:** A beautifully crafted, modern user interface built with React, Tailwind CSS, and daisyUI.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Real-Time:** [Socket.io Client](https://socket.io/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (Mongoose)
- **Security:** JWT, Bcrypt.js, CORS

### ML / Microservice
- **Language:** [Python](https://www.python.org/)
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
- **AI/ML:** [PyTorch](https://pytorch.org/), [HuggingFace Transformers](https://huggingface.co/docs/transformers/index)
- **Audio Processing:** [Librosa](https://librosa.org/), Soundfile

---

## 🚀 Installation & Usage

To run this project locally, you will need Node.js, Python, and MongoDB installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Ai-language-model.git
cd Ai-language-model
```

### 2. Setup the Backend
```bash
cd backend
npm install
# Create a .env file and add your PORT, MONGO_URI, and JWT_SECRET
npm run dev
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Setup the ML Library (Python API)
```bash
cd ../ml-library
pip install -r requirements.txt
# Run the FastAPI server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

---

## 📂 Project Structure

```text
Ai-language-model/
├── backend/                  # Node.js + Express backend
│   ├── src/                  # Controllers, routes, models, and ML API integration
│   ├── package.json          # Node dependencies
│   └── .env                  # Environment Variables (ignored by git)
├── frontend/                 # React UI Client
│   ├── src/                  # React components, pages, and Zustand store
│   ├── index.html            # Main HTML entry point
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite & Tailwind configuration
└── ml-library/               # Python/FastAPI Microservice
    ├── app/                  # FastAPI routers for chat, grammar, and speech models
    ├── requirements.txt      # Python dependencies
    └── Dockerfile            # Docker configuration for ML service
```

---

## 🤝 Contribution Guidelines

We welcome contributions to make this Virtual AI Coach even better! Here's how you can help:

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature/amazing-feature`).
3. **Commit** your changes (`git commit -m 'Add amazing feature'`).
4. **Push** to the branch (`git push origin feature/amazing-feature`).
5. Open a **Pull Request**.

Please ensure your code adheres to our formatting standards and includes appropriate tests.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

*Made with ❤️ by open-source contributors.*
