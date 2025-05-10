# Rem Waste: Skip Select page design


## Project Overview

This project is a redesign of the "skip select" page.The goal was to enhance the UI/UX while maintaining all original functionality, ensuring responsiveness across mobile and desktop.

## Features

- Redesigned UI with a modern, clean look  
- Fully responsive layout for mobile and desktop  
- Dynamic skip options populated from external data source  
- Accessible components with semantic HTML and ARIA roles  
- Maintainable code using React + functional components + hooks


## Tech Stack

- React
- TypeScript 
- Tailwind CSS for styling
- Axios for data fetching

## How to run

Create a .env in root directory and add
```
VITE_SKIP_API_URL=https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

```

```
git clone https://github.com/Isaacprogi/rem-waste.git
cd rem-waste
npm install
npm run dev

```

## Design Decisions and Approach

- Reverse Engineering: Since no Figma or design system was provided, I inspected the original page using browser developer tools to understand its layout, spacing, font sizes, and behavior. This helped guide the visual redesign while keeping core functionality intact.
- Responsiveness: Used CSS Flex/Grid in tailwind to ensure proper scaling on various screen sizes.
I also followed mobile-first design principles, ensuring the page looks great and functions smoothly across all screen sizes.
- Accessibility: Used alt tags, semantic tags, and ensured keyboard navigability.
- State Management:I used React Context API to manage and share state related to the selected skip option across multiple components such as the slider panel and the summary view.
This approach ensures centralized and consistent data flow without excessive prop drilling.
Context was kept simple and localized to just what's needed, maintaining performance and readability.
- Componentization: I split the UI into modular, reusable components for better maintainability and clarity.
- API Data Handling: Data from external source is fetched once and cached locally for better performance



## Improvements Made

- Ensured navbar items are properly spaced and responsive on both mobile and desktop screens
- Adjusted scrollbar visibility for better usability across devices
- Refined the "Not Allowed" banner to fit and display correctly on smaller screens
- Enhanced the loading spinner styling for a more consistent user experience
