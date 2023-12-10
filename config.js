/*
All the code here are from a tutorial about a community-based prototype endorsed by the Amadeus API.
For full details, visit...
Tutorial page: https://developers.amadeus.com/blog/react-hotel-booking-app-part1
Github repository: https://github.com/amadeus4dev-examples/Building-a-Hotel-Booking-App-in-NodeJS-and-React-Part-1
*/

import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

export {API_KEY, API_SECRET};