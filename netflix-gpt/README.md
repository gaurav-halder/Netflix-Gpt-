...
# Netflix GPT
- Create react app
- Configured tailwind Css
- Header
- Routing of App using reactRouter
- Login Form
- Sign Up form
- Form validation
- useRef hook 
- setup firebase
- deploy to prod everytime we push main
- Create sign up user account firebase
- Created redux store for user with userSlice
- Added logout & user logo on header in browse page
- update profile
- Bugfix - signup user display name, if user not logged in redirect to / else /browse page of logged in
- Register at TMDB API & GET API from browse page
- fetch and store data in slice app store
- shift fetch call from browse.tsx to a hook useNowPlayingMovies

# Features
- Login/Sign Up
  - Sign In / Sign Up form
  - redirect to browse page
- Browser
  - Header
  - Main Movie
    - Trailer in background
    - Title and description
    - Buttons to play and more info
    - Movie Suggestions
      - Movie Lists * N
- NetflixGPT
  - Search Bar
  - Movie Suggestions
  