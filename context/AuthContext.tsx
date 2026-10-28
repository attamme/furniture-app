
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { authStore } from "@/lib/authStore";
import {
  saveToken,
  getToken,
  clearToken,
} from "@/lib/tokenStorage";
import type { AuthResponse } from "@/lib/endpoints";

type User = AuthResponse["user"];

type AuthState = {
  token: string | null;
  user: User | null;
  isRestoring: boolean;
  signIn: (data: AuthResponse) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);

  useEffect(() => {
    let active = true;

    async function restoreSession() {
      try {
        const stored = await getToken();

        if (!active) return;

        if (stored) {
          setToken(stored);
          authStore.setToken(stored);
        }
      } catch (error) {
        console.error("Failed to restore session", error);
      } finally {
        if (active) {
          setIsRestoring(false);
        }
      }
    }

    restoreSession();

    return () => {
      active = false;
    };
  }, []);

  async function signIn(data: AuthResponse) {
    await saveToken(data.token);

    authStore.setToken(data.token);
    setToken(data.token);
    setUser(data.user);
  }

  async function signOut() {
    await clearToken();

    authStore.setToken(null);
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isRestoring,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
