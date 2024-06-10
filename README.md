# WeatherApp

A React application that fetches and displays weather information based on the user's current location or a user-specified location (city name or coordinates). It utilizes the Weatherapi API to retrieve weather data and uses various React hooks and libraries for state management, API calls, and styling.

## Features

- Fetch and display current weather information for the user's location.
- Search and display weather information for a specified city or coordinates.
- Display the current date and time based on the weather data.
- Responsive design using Tailwind CSS.
- Error handling for geolocation and API requests.

## Technologies

- **React**: Framework for building the user interface.
- **Axios**: HTTP client for making API requests.
- **Weatherapi API**: Provides weather data.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Geolocation API**: Retrieves the user's current geographical location.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/WeatherApp.git
   cd WeatherApp

2. **Install dependencies**:
   ```bash
   npm install   

3. **Create a .env file in the root directory and add your OpenWeather API key**:
4. ```plaintext
   VITE_API_KEY=your_openweather_api_key

 4  **Run the Application**:
     ```bash 
     npm run dev


# Usage

-On initial load, the application will attempt to fetch and display the weather information for the user's current location.
-To search for weather information for a specific city or coordinates, enter the city name or coordinates (latitude,longitude) in the input field and click the "Search" button.
-The weather data, including temperature, real feel, wind speed, and air quality, will be displayed.
