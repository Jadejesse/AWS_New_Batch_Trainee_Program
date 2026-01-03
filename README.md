# AWS Training Platform

A React + TypeScript based AWS training platform providing a friendly learning experience.

## Features

- 🏠 Welcome homepage with background image, date, weather, and location information
- 🎨 Cute light blue navigation bar
- 📚 Training topics: AWS vs Amazon, What is AWS
- ✨ Smooth page transition animations
- 📱 Responsive design

## Quick Start

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
aws-training-platform/
├── public/
│   └── Homepage_image.png
├── src/
│   ├── components/
│   │   ├── DateDisplay/
│   │   ├── WeatherWidget/
│   │   ├── LocationDisplay/
│   │   ├── InfoPanel/
│   │   └── NavigationBar/
│   ├── pages/
│   │   ├── Homepage/
│   │   ├── AwsVsAmazon/
│   │   └── WhatIsAws/
│   ├── hooks/
│   │   ├── useCurrentDate.ts
│   │   ├── useWeather.ts
│   │   └── useLocation.ts
│   ├── types/
│   │   ├── weather.ts
│   │   └── location.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── package.json
└── tsconfig.json
```

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Vite
- CSS Modules

## Development Notes

The project uses TypeScript strict mode to ensure type safety. All components use functional components and React Hooks.

## License

MIT
