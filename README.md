# ✂️ FSW-Barber

**FSW-Barber** is a mobile-first web application designed for booking appointments at barbershops. Developed during the **Full Stack Week**, this project emphasizes a seamless user experience for clients seeking to schedule services online.

## 🚀 Technologies Used

- **Next.js 14** – React framework for server-rendered applications.
- **TypeScript** – Strongly typed programming language for JavaScript.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **ShadCN UI** – Accessible and customizable UI components.
- **Prisma ORM** – Type-safe database client for PostgreSQL.
- **NextAuth.js** – Authentication for Next.js applications.
- **Zod** – TypeScript-first schema declaration and validation library.
- **React Hook Form** – Performant, flexible, and extensible forms with easy-to-use validation.
- **date-fns** – Modern JavaScript date utility library.

## 🎯 Features

- 🔐 **Google Authentication**: Secure login using Google accounts via NextAuth.js.
- 🏢 **Barbershop Listings**: Browse a variety of barbershops with detailed information.
- 📅 **Appointment Scheduling**: Select services, dates, and times to book appointments.
- 📱 **Responsive Design**: Optimized for mobile devices to ensure a user-friendly experience.
- 🧾 **Booking Overview**: View and manage your scheduled appointments.
- 🧪 **Form Validation**: Robust client-side validation using Zod and React Hook Form.

## 📦 Getting Started

### Prerequisites

- Node.js installed on your machine.
- A PostgreSQL database setup.
- Google OAuth credentials for authentication.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mayza-ferreira/FSW-Barber.git
   cd FSW-Barber

  2. **Install dependencies:**
  
     
     ```bash
      npm install

  3. **Configure environment variables:**
   
     -Create a .env file in the root directory.
   
     -Populate it based on the .env.example file, including your PostgreSQL connection string and Google OAuth credentials.
   
4. **Set up the database:**
     ```bash
     npx prisma db push
     npx prisma db seed

5. **Run the development server:**

   ```bash
      npm run dev
   ```
    Open http://localhost:3000 in your browser to view the application.

## 🌐 Live Demo
Experience the application live at: https://fsw-barber-three-wine.vercel.app
