# Mini Figures App

This project is a mobile-first web application built as part of a LIA application assignment. The goal was to create a simple interface where users can browse a list of mini-figures, view detailed information, and rate figures.

## Overview

The application consists of two main views:

* Catalog page:

  * Displays a grid of figures
  * Each figure shows image, name, and rating

* Details page:

  * Shows a larger image
  * Displays name and description
  * Includes a rating display
  * Allows the user to set a personal rating
  * Includes a "Back" button for navigation

Navigation between views is handled using React Router.

## Rating functionality

The rating system allows users to rate each figure using interactive stars.

* Ratings are saved in localStorage
* Ratings persist after page reload
* If a user rating exists, it is shown
* If no user rating exists, a default rating is used

To manage ratings across the application, React Context is used.

* Avoids duplicating localStorage logic
* Makes it easy to share rating state between pages
* Keeps components cleaner and more focused on UI

The context provides:

* A function to get a rating with a fallback value
* A function to update a rating

## Data handling

The figure data is stored locally in an array of objects.

* Each figure includes id, name, image, description, and rating
* No API is used

This approach was chosen because the assignment did not require backend functionality, allowing focus on frontend structure and interaction.

## Usage

Run the project with:

npm install
npm run dev

Once running, the user can:

* Browse the catalog
* Open a figure’s details
* Set a rating

The rating will be saved and reflected across the application.
