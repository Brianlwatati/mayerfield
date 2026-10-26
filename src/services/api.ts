const API_BASE_URL = "https://mayerfield-backend.onrender.com/api/v1";

// --- AUTH SERVICES ---
export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to sign in");
  }
  return data; // Returns { message, token, user }
}

export async function registerUser(userData: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to create account");
  }
  return data;
}

// --- MENU SERVICES (Protected with Bearer Token) ---
export async function fetchMenuItems() {
  // Retrieve token stored during login
  const token = localStorage.getItem("auth_token");

  const response = await fetch(`${API_BASE_URL}/menu`, {
    // Adjust endpoint route if your backend uses a different path
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Set the Bearer token authorization header if token exists
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch menu items");
  }
  return data;
}
