## Introduction:

The application is deployed on **"Heroku"** as the `1st release`

The address to the heroku backend is:
[Phonebook](https://desolate-spire-47062.herokuapp.com/)

### HTTP Status Codes:

A valid HTTP status code depends on what happened. Here’s a list of common errors you should prepare for:

- 400 Bad Request Error:
  Used when user fails to include a field (like no credit card information in a payment form)
  Also used when user enters incorrect information (Example: Entering different passwords in a password field and password confirmation field).
- 401 Unauthorized Error: Used when user enters incorrect login information (like username, email or password).
- 403 Forbidden Error: Used when user is not allowed access the endpoint.
- 404 Not Found Error: Used when the endpoint cannot be found.
- 500 Internal Server Error: Used the request sent by the frontend is correct, but there was an error from the backend.

### Notes:

- Always makes sure that you are on the `master` branch when merging branches before depolying to heroku
  > I made commits and merges on the part3-server branch, so when I deployed to heroku no changes > where made there