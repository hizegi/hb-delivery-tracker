# Delivery Tracker App

Video walkthrough: https://youtu.be/-KLWX-RzvMI

To use: clone or download and you will have to run a simple server. I recommend running `python -m SimpleHTTPServer 8000` on terminal. You can visit the app on `localhost:8000` in your browser.

## Technologies
  - AngularJS
  - Angular-Ui
  - Bootstrap for responsive design

## Description and Features:
  - SPA (Front-end ONLY)
  - No back-end
  - View all deliveries, filter, and search by date
  - Mark complete for pending deliveries

## Future Implementations
  - Authentication to let drivers log in and out:
    - can view completed tickets by Driver
    - can have profile
    - can view history
    - can be assigned to Driver
  - Verification:
    - Before marking order as complete with a click of a button, alert the user if they are sure they want to mark it as complete.
    - Give option to (admin?) to revert back to incomplete
  - Extra features:
    - Add Maps
    - Add more info
    - Add a DATABASE for CRUD
  - Search Features:
    - Calendar range not implemented. Only returns 1 day results.
    - Display range results.
  - Refactoring:
    - Code isn't as DRY as it can be.
    - Create a Directive for all orders instead of using the same code for all 4 states
    
