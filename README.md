# React + TypeScript + Vite

# 🏛️ MBAZA — Citizen Engagement System (MVP)

MBAZA is a modern web application that bridges the communication gap between **citizens** and **government institutions** by providing a unified platform for **submitting**, **tracking**, and **managing complaints and feedback** on public services.

---

## 🚩 Problem Statement

Citizens often face difficulties when trying to submit complaints or feedback due to fragmented channels, inconsistent responses, and poor visibility into the resolution process. Government agencies, on the other hand, struggle to process and route complaints efficiently.

**MBAZA** addresses this issue by delivering a centralized, transparent, and trackable engagement system.

---

## ✅ Core Features

### 👤 Citizen-Side

- **📝 Complaint Submission**

  - Citizens can submit complaints or feedback using the **"Send Your Complaint"** form.
  - Fields include name, email, category, and description.

- **💬 Live Chat Integration**

  - Floating chat (via `SheetDemo` component) on the right side of all pages.
  - Citizens can engage in real-time conversations or leave follow-ups.

- **🔎 Complaint Tracking**

  - Via the **"About Your Complaint"** page.
  - Check the current status (e.g., pending, resolved) of previously submitted complaints.

- **🌗 Dark/Light Mode**

  - Theme toggling via `ThemeProvider` from ShadCN for better accessibility and UX.

- **📱 Responsive Design**
  - Optimized for desktop and mobile viewing.

---

### 🛠️ Admin Interface

- **🔐 Login System**

  ### password for admin login is: username " octavenocta@gmail.com ", " admin?123 "

  - Secure login for admin personnel via the `/login` route.

- **📋 Dashboard Overview**

  - Accessible at `/dashboard`.
  - View all submitted complaints via a table interface.
  - Each complaint has metadata like submitter name, email, category, timestamp, and status.

- **📤 Complaint Forwarding**

  - Admins can send filtered complaints to another table (e.g., “main_table”) for further processing.

- **📈 Complaint Analytics Chart**

  - Track solved/unsolved complaints over time via a **monthly bar chart**.
  - Visual insights help institutions measure performance and public service response effectiveness.

- **🧾 Drawer UI for New Complaints**
  - A dynamic drawer opens via the **“Press here to see new Complaints”** button.
  - Lists complaints in real-time, organized by date and status.

---

## 🔧 Tech Stack

| Layer         | Technology                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Frontend      | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)          |
| Styling & UI  | [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/) |
| Routing       | [React Router](https://reactrouter.com/)                                                                           |
| State Mgmt    | React Hooks (`useState`, `useEffect`)                                                                              |
| Backend       | [Supabase](https://supabase.com/)                                                                                  |
| Notifications | [Sonner](https://sonner.emilkowal.ski/)                                                                            |
| Charts        | [Recharts](https://recharts.org/)                                                                                  |
| Tables        | [tanstack](https://tanstack.com/router/latest                                                                      |

---

## 🧭 Pages & Routes

| Route        | Description                                  |
| ------------ | -------------------------------------------- |
| `/home`      | Landing page with summary of features        |
| `/about-us`  | Info page about the MBAZA initiative         |
| `/history`   | Civic history or project background          |
| `/complaint` | Submit complaints or feedback form           |
| `/data`      | Complaint tracking page with analytics chart |
| `/login`     | Admin login                                  |
| `/dashboard` | Admin dashboard for complaint management     |

---

## 🗃️ Folder Structure

src/
├── app/ # Page routes and layouts
│ ├── home/
│ ├── login/
│ ├── dashboard/
│ ├── complaint/
│ ├── about-us/
│ ├── history/
│ └── data/
├── components/ # UI & shared logic
│ ├── theme-provider.tsx
│ ├── sidebar.tsx
│ ├── messages-table.tsx
│ ├── chart.tsx # Monthly complaint tracking chart
│ └── sheet.tsx # Floating live chat
├── lib/
│ └── supabase.ts # Supabase client config
├── App.tsx # Main routing + layout
└── main.tsx # React root entry

---

## 📊 Complaint Tracking Chart

Implemented using **Recharts**, the chart visualizes the number of **resolved** complaints per month. This helps admins and institutions:

- Track performance trends
- Identify bottlenecks
- Make data-informed decisions

Sample data displayed in a bar chart with monthly grouping, pulled dynamically from the Supabase database.

---

## 🛠️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mbaza.git
cd mbaza
npm install
VITE_SUPABASE_URL=https://my-project.supabase.co   // u can find it in git hub file called ".env"
VITE_SUPABASE_ANON_KEY=my-anon-key
npm run dev
Open http://localhost:5173 in your browser.



### here is a link for hosted web-app and githup repository
https://arch-mbaza.netlify.app/history
https://github.com/shadow-x-arch/mbaza.git

password for admin login is: username " octavenocta@gmail.com ",  " admin?123 "
```

# mbaza
