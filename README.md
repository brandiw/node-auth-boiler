# Node Auth Boilerplate

This is a boilerplate for an Express app with local user authentication. It exists so I have a customized boilerplate and don't have to start from scratch on all my projects.

## What It Includes

* Local Auth (email and password)
* Passport and passport-local
* Sessions for saving user info and displaying flash messages
* Settings for PostgreSQL and Sequelize
* Hashed passwords
* EJS templating and EJS layouts
* Sequelize User model
* Materialize styling - nav and footer

## Included Models

**User Model**

| Column | Type | Notes |
| ----------- | ---------- | ---------------------------- |
| id | Integer | Serial primary key |
| firstname | String | Required length > 1 |
| lastname | String | - |
| email | String | Unique Login |
| password | String | Hash |
| birthday | Date | - |
| admin | Boolean | Defaulted to False |
| pic | String | - |
| bio | Text | - |
| createdAt | Date | Automatically added by Sequelize |
| updatedAt | Date | Automatically added by Sequelize |

## Included Routes

**Routes in index.js (main)**

| Method | Path | Purpose |
| ------ | ---------------------- | ---------------------------- |
| GET | `/` | Home page |
| GET | `*` | Catch-all for 404s |

**Routes in controllers/auth.js**

| Method | Path | Purpose |
| ------ | ---------------------- | ---------------------------- |
| GET | `/auth/login` | Render login form |
| POST | `/auth/login` | Process login data |
| GET | `/auth/signup` | Render signup form |
| POST | `/auth/signup` | Process signup data |
| GET | `/auth/logout` | Remove user from session + redirect |

## Directions For Use
