Men's Racing API - RESTful API for Managing Racing Data

This repository provides a RESTful API for managing data related to men's racing events. It allows you to create, retrieve, update, and delete records of participants in these events.

Supported Functionality:

    Create new men's racing records (POST /mens)
    View all men's racing data (GET /mens)
    View a specific men's racing record by ID (GET /mens/:id)
    Update a men's racing record by ID (PATCH /mens/:id)
    Delete a men's racing record by ID (DELETE /mens/:id)

Data Model:

The API manages data for each men's racing record using the following schema:

    rank: (Number, Required, Unique) - The rank achieved by the participant in the race.
    name: (String, Required) - The full name of the participant.
    dob: (Date, Required) - The participant's date of birth.
    country: (String, Required) - The participant's country of origin.
    score: (String, Required) - The participant's score or time achieved in the race.
    event: (String, Optional, Default: "100m") - The specific racing event (e.g., 100m dash, marathon).

Technology Stack:

    Backend: Node.js with Express framework
    Database: MongoDB

API Usage:

The API uses standard HTTP methods for CRUD operations:

    POST: Create a new record.
    GET: Retrieve data (all records or a specific record by ID).
    PATCH: Update an existing record by ID.
    DELETE: Delete a record by ID.

Authentication:

This basic example does not implement authentication.  In production environments, consider implementing a secure authentication mechanism (e.g., API keys, tokens) to control access to your API.

Error Handling:

The API returns appropriate HTTP status codes to indicate success or failure of operations. Refer to the specific route documentation for details.
