``
# 🐱 Cat Facts API (Express.js)

A simple Node.js + Express server that returns basic user info along with a random cat fact from [CatFact Ninja API](https://catfact.ninja/).

---

## Features
- Returns user information and a random cat fact  
- Handles request timeouts and errors gracefully  
- Supports CORS for external clients  
- Includes simple request logging  
- Configurable via environment variables  

---

## 🛠️ Tech Stack
- **Node.js** (v18+ recommended)
- **Express.js**
- **node-fetch** (for API requests)
- **cors** (for Cross-Origin support)
- **dotenv** (for environment variables)
- **morgan** (for logging)
- **express-rate-limit** (protect your API from multiple requests (spamming))

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Amazingmercy/HNG-stage0.git
cd cat-facts-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```bash
PORT=5000
CATFACT_URL=https://catfact.ninja/fact
REQUEST_TIMEOUT=5000
```

### 4. Run locally

```bash
npm start
```

or with nodemon (for development):

```bash
npm run dev
```

---

## Testing the Endpoint

### Endpoint

**GET** `http://localhost:5000/me`

### Example Response

```json
{
  "status": "success",
  "user": {
    "email": "amaefulemercy499@gmail.com",
    "name": "Mercy Chimnonso Amaefule",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T10:30:00.000Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

### Status Codes

| Code | Meaning                                |
| ---- | -------------------------------------- |
| 200  | Successful response                    |
| 500  | Server error                           |
| 504  | Timeout when fetching from CatFact API |

---

## Available Scripts

| Script        | Description                             |
| ------------- | --------------------------------------- |
| `npm start`   | Start server                            |
| `npm run dev` | Start server with auto-reload (nodemon) |

---

## 🧩 Dependencies

```bash
npm install express cors express-rate-limit dotenv morgan
npm install nodemon -D
```

---

## Notes

* Make sure your Node version supports **fetch** (v18+).
  If not, install `node-fetch`.
* You can change timeout and API URL via `.env`.
* Response format strictly follows `{ status, user, timestamp, fact }`.

---

## Quick Test

Test with `curl`:

```bash
curl http://localhost:5000/me
```

Or open in browser:
👉 [http://localhost:5000/me](http://localhost:5000/me)

---

## Author

**Mercy Chimnonso Amaefule**
Stack: Node.js / Express
Email: [amaefulemercy499@gmail.com](mailto:amaefulemercy499@gmail.com)

```


