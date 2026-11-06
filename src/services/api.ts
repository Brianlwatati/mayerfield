// Dynamically fall back to localhost if VITE_API_BASE_URL is not set in .env
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

// const API_BASE_URL = "https://mayerfield-backend.onrender.com/api/v1";

// Helper function to handle auth headers automatically
const getAuthHeaders = () => {
  const token = localStorage.getItem("auth_token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

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

// --- MENU SERVICES ---
export async function fetchMenuItems() {
  const response = await fetch(`${API_BASE_URL}/menu`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch menu items");
  }
  return data;
}

// --- ORDER / CHECKOUT SERVICES ---
export async function createCheckoutSession(
  items: Array<{
    item_id: string;
    name: string;
    quantity: number;
    price_at_purchase: number;
  }>,
) {
  const response = await fetch(`${API_BASE_URL}/orders/checkout`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ items }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to create checkout session");
  }
  return data; // Returns { success, message, data: order, url: stripeCheckoutUrl }
}

export async function fetchOrderById(orderId: string) {
  const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch order details");
  }
  return data;
}
