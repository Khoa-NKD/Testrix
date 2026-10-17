import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ExamPage from "@/pages/ExamPage";
import HistoryPage from "@/pages/HistoryPage";
import ReviewPage from "@/pages/ReviewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam/:id" element={<ExamPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/review/:attemptId" element={<ReviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
