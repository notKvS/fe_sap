import React from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const token = sessionStorage.getItem("token");

	if (!token) {
		return <Navigate to="/" />;
	}

	return children;
}

export default ProtectedRoute;
