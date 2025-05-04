# TripWise - Travel Budget Planning Tool

## Introduction
TripWise is a full-stack travel budget planning application designed to help individuals and groups effectively manage their travel expenses. It allows users to set budget goals, track expenses by category, monitor real-time spending, and generate insightful reports. With collaborative features, smart suggestions, and planned map integration, TripWise aims to be the ultimate companion for budget-conscious travelers.

## Project Type
Fullstack

## Deployed App
Frontend: [https://travel-budget-planning-tool.vercel.app/]
Backend (Firebase Realtime DB): [https://console.firebase.google.com/project/travel-budget-planning-tool/database](https://console.firebase.google.com/project/travel-budget-planning-tool/database)

## Directory Structure
```
tripwise/
├─ backend/ (Firebase handled)
├─ frontend/
│  ├─ components/
│  ├─ pages/
│  ├─ styles/
│  ├─ firebase/
```


## Video Walkthrough of the Codebase
[https://drive.google.com/file/d/153EYMnA0T_9AqkkZesxTsN0n7IlH6fFR/view]

## Features
- User authentication using Firebase
- Add, edit, delete and view expenses
- Set personal budget goals by category
- Visualize spending with Pie and Bar charts
- Export reports to PDF and CSV
- Collaborative expense tracking with shared trip IDs
- Currency conversion
- Real-time data sync with Firebase

## Design Decisions or Assumptions
- Firebase Realtime Database is used for lightweight, real-time syncing
- Users identified by Firebase Auth UID
- Collaborative trips managed via shared trip ID and common expense node
- Charts built with Recharts for visual clarity

## Installation & Getting Started
```bash
# Clone the repository
npm install
cd frontend
npm start
```

## Usage
```bash
# Example
- Register/Login
- Set your budget goals
- Add expenses categorized under Food, Transport, Entertainment, etc.
- View visual reports
- Export reports to PDF/CSV
```

## Credentials
You can use your Google account to sign in via Firebase Auth. No hardcoded credentials are used.

## APIs Used
- Firebase Realtime Database
- Firebase Authentication
- DiceBear Avatar API (for user avatars)

## API Endpoints (Handled by Firebase DB)
Example structure (Realtime Database paths):
```
/users/{userId}/budgets
/expenses/{expenseId}
/trips/{tripId}/expenses
```

## Technology Stack
- **Frontend**: React.js, JavaScript, HTML, CSS
- **Backend**: Firebase Realtime Database, Firebase Authentication
- **Charts**: Recharts
- **PDF/CSV Export**: jsPDF, react-csv
- **Avatar**: DiceBear API


<!-- ![User Flow Diagram](travel-budget-tool/src/assets/User%20Flow%20Diagram.png) -->
![User Flow Diagram](src/assets/User%20Flow%20Diagram.png)

