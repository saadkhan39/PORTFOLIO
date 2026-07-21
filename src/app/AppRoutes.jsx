import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Work from "../pages/Work/components/Work";
import ProjectDetail from "../pages/Work/components/ProjectDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/work" element={<Work/>}/>
       <Route
          path="/work/:slug"
          element={<ProjectDetail />}
        />
    </Routes>
  );
}