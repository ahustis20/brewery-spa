# Breweries List

A full-stack web application for browsing and discovering breweries. Built with a **PHP backend API** and a **React TypeScript frontend**, both deployed on Heroku.

## Live Demo

- **Frontend:** https://breweries-list-frontend-7bb1c61abb67.herokuapp.com/
- **Backend API:** https://breweries-list-backend-a0053dd230af.herokuapp.com/api/breweries

## Project Structure

    breweries-list/
    ├── backend/          # PHP REST API
    │   ├── public/
    │   │   ├── index.php
    │   │   └── .htaccess
    │   ├── src/
    │   │   └── Classes/
    │   │       └── BreweryController.php
    │   ├── composer.json
    │   └── Procfile
    └── frontend/         # React TypeScript application
        ├── public/
        ├── src/
        │   ├── components/
        │   ├── services/
        │   ├── types/
        │   └── App.tsx
        ├── package.json
        └── Procfile


## Features

- **Browse Breweries:** View a complete list of breweries with detailed information
- **Brewery Details:** View comprehensive information including address, phone number, website, and coordinates
- **Responsive Design:** Works seamlessly on desktop and mobile devices

## API Endpoints

### Get All Breweries

`GET /api/breweries`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Brewery Name",
    "type": "Micro",
    "address": "123 Main St",
    "city": "Denver",
    "state_province": "Colorado",
    "country": "United States",
    "url": "https://brewery.com",
    "phone": "(555) 123-4567",
    "longitude": -104.9903,
    "latitude": 39.7392
  },
  {...}
]
```


## Challenge Requirements

### ✅ Minimum Requirements
- [x] Display list of breweries from a custom API
- [x] Show brewery information: name, type, address, website URL
- [x] Display brewery details with map integration
- [x] Navigation between list and detail views
- [x] Clickable brewery website links
- [x] Modern JavaScript framework (React)
- [x] Basic CSS styling

### ✅ Intermediate Requirements
- [x] TypeScript for type safety
- [x] Hosted on Heroku (both frontend and backend)

### ✅ Advanced Requirements
- [x] Custom PHP REST API backend
- [x] Brewery data served from custom API (not directly from OpenBreweryDB)

## Tech Stack

### Backend
- **PHP 8+** with Composer for dependency management
- **Apache** web server (via Heroku's PHP buildpack)
- RESTful API architecture

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Bootstrap 5** for styling
- **Fetch API** for backend communication
- **Serve** for static file serving

## Deployment

Both applications are deployed on **Heroku**.


