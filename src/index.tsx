import "./index.css";
import {createRoot} from "react-dom/client";


import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "@/layouts/AuthLayout";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUp";
import { Sidebar } from "./components/ui/sidebar";
import DashboardLayout from "./layouts/DashboardLayout";
import ApiKeysPage from "./pages/ApiKeys";
import VideosPage from "./pages/Videos";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/Profile";


const root = createRoot(document.getElementById("root")!!);

root.render(<BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="/api-keys" />} />
      <Route element={<AuthLayout />}  >
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        
        <Route path="/api-keys" element={<ApiKeysPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
