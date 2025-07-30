import { USER_ENDPOINTS } from "./endpoints/userEndpoints";

export const patchUserProfile = async (data) => {
  const response = await fetch(USER_ENDPOINTS.profile, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to update profile");
  return response.json();
};

export const changeUserPassword = async (data) => {
  const response = await fetch(USER_ENDPOINTS.changePassword, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to change password");
  return response.json();
};
