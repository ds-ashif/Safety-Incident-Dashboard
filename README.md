# AI Safety Incident Dashboard

A React-based dashboard for viewing and reporting AI safety incidents, created as a take-home assignment for HumanChain.

## See Live Demo: https://incidash.netlify.app/

## Features

- View list of AI safety incidents with title, severity, and date
- Filter incidents by severity level (All, Low, Medium, High)
- Sort incidents by reported date (newest or oldest first)
- Expand incident items to view full descriptions
- Report new incidents with form validation
- Toggle between light and dark mode
- Responsive design that works on all devices

## Technologies Used

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: CSS with Flexbox/Grid
- **State Management**: React Context API
- **Build Tool**: Create React App

## Installation

1. Clone this repository
      ```bash
   git clone https://github.com/your-username/Safety-Incident-Dashboard.git
   cd Safety-Incident-Dashboard
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
    npm start
4. Open in browser:
The app will automatically open in your default browser at http://localhost:3000

## Design Decisions

1. **Component Structure**
   - Created reusable components (IncidentItem, FilterControls, etc.) for better maintainability.
   - Separated concerns with container/presentational components.

2. **State Management**
   - Used React Context for theme management to avoid prop drilling.
   - Local component state for form and filtering logic.

3. **Type Safety**
   - Defined strict TypeScript interfaces for all data structures.
   - Added prop types for all components.

4. **User Experience**
   - Added form validation for required fields.
   - Included visual feedback for interactive elements.
   - Implemented persistent theme preference.

## Challenges Faced

1. **TypeScript Integration**
   - Initially struggled with proper type definitions for complex state shapes.
   - Solved by creating detailed interfaces and leveraging TypeScript generics.

2. **Theme Persistence**
   - Implementing localStorage synchronization while avoiding hydration mismatches.
   - Solved with useEffect and careful state initialization.
