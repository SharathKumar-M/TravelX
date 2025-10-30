import { Navigate } from "react-router";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const authStore = (set, get) => ({
  error: null,
  loading: false,
  token: localStorage.getItem("token") || null,
  user: null,
  getProfile: async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${get().token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        set({ user: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
  register: async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      set({ token: data.token });
      await get().getProfile();
    } catch (error) {
      console.log(error);
    }
  },
  login: async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      set({ token: data.token });
      await get().getProfile();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  },
  updateProfile: async (newName) => {
    set({ loading: true, error: null });
    try {
      const token = get().token;
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName }),
      });

      if (!res.ok) throw new Error("Update failed");
      const updatedUser = await res.json();

      set({ user: updatedUser });
    } catch (err) {
      console.error(err);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  handleOAuthToken: (tokenFromUrl) => {
    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      set({ token: tokenFromUrl });
      get().getProfile();
      return { success: true };
    }
    return { error: "No token in URL" };
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null, error: null, loading: false });
    Navigate("/");
  },
});

export const useAuthStore = create(devtools(authStore, { name: "AuthStore" }));
