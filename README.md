
```md  
![Visa Navigator]([https://yourimageurl.com/visa-nav.png](https://i.postimg.cc/brn4kDnw/Visa-nav.png))  
```  

# Live Link : https://visa-navigator-6e2d7.web.app/

## Visa Application Project

# Overview

This project is a comprehensive Visa Application System built with the MERN stack (MongoDB, Express.js, React, and Node.js). The system is designed to simplify and streamline the visa application process, providing users with an intuitive interface and powerful backend features.

Here is your `README.md` file in Markdown format:  

```markdown
# Visa Navigator - Visa Application System

You're absolutely right! Exposing **environment variables** publicly is a security risk. I’ll update the **README.md** to remove the actual keys and provide instructions on how users should configure their own `.env.local` file.  

Also, I’ll include **a better project description** and guide you on how to add an image to your README. Here’s the improved version:

---

# 🛂 Visa Navigator  

**A user-friendly web platform for checking visa requirements, applying online, and tracking applications seamlessly.**  

![Visa Navigator](Visa%20nav.png)  

## 📌 Table of Contents  
- [Introduction](#-introduction)  
- [Features](#-features)  
- [Installation](#-installation)  
- [Environment Variables](#-environment-variables)  
- [Usage](#-usage)  
- [Dependencies](#-dependencies)  
- [Development](#-development)  
- [Adding an Image](#-adding-an-image)  
- [License](#-license)  

## 🚀 Introduction  

Visa Navigator is a **modern**, **responsive**, and **interactive** web application designed to:  
✅ Help users check visa requirements for different countries.  
✅ Allow seamless **online visa applications**.  
✅ Enable users to **track visa application status** in real time.  
✅ Provide a **secure authentication system** using Firebase.  
✅ Offer a **smooth user experience** with animations and a clean UI.  

This project aims to **simplify the immigration process** by providing a streamlined and accessible visa application system.  

## 🎯 Features  
✔ **Visa Requirement Checker** – Get instant information on visa policies.  
✔ **Online Visa Application** – Easily apply for visas through the platform.  
✔ **Application Tracking** – Monitor the status of your visa applications.  
✔ **Secure User Authentication** – Firebase-based login system.  
✔ **Interactive UI** – Engaging animations with **Lottie, AOS, and React libraries**.  
✔ **Dark Mode Support** – Switch between light and dark themes effortlessly.  

## 🛠️ Installation  

### 1️⃣ Clone the Repository:  
```sh  
git clone https://github.com/yourusername/visa-navigator.git  
cd visa-navigator  
```  

### 2️⃣ Install Dependencies:  
```sh  
npm install  
```  

### 3️⃣ Set Up Environment Variables:  

Create a `.env.local` file in the root directory and add the following (**Do NOT share your API keys!**):  

```ini  
VITE_apiKey=api_key_here  
VITE_authDomain=domain_here  
VITE_projectId=project_id_here  
VITE_storageBucket=storage_bucket_here  
VITE_messagingSender_Id= messaging_sender_id_here  
VITE_appId=app_id_here  
```  

🔒 **Important:** Keep this file **private** and never commit it to GitHub! You can add `.env.local` to `.gitignore` to prevent accidental leaks.  

### 4️⃣ Start the Development Server:  
```sh  
npm run dev  
```  
The application will be available at **`http://localhost:5173/`**.  

## 🔑 Dependencies  

### Core Dependencies:  
- **React** – Frontend framework  
- **React Router DOM** – Routing library  
- **Firebase** – Authentication & backend services  

### UI Enhancements:  
- **TailwindCSS & DaisyUI** – Styling & UI components  
- **Animate.css, AOS, Lottie-React** – Smooth animations  
- **React Icons & React Toastify** – UI & notifications  

### Development Tools:  
- **Vite** – Fast development bundler  
- **ESLint & Prettier** – Code linting & formatting  

## 🔧 Development  

### Running in Development Mode:  
```sh  
npm run dev  
```  

### Building for Production:  
```sh  
npm run build  
```  

### Running ESLint:  
```sh  
npm run lint  


## 📜 License  

This project is licensed under the **MIT License**.  
