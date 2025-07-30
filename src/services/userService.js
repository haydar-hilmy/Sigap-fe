import { changeUserPassword, patchUserProfile } from "../api/userApi";

export const updateProfile = async (data) => {
  return patchUserProfile(data);
};

export const updatePassword = async ({ oldPassword, newPassword }) => {
  return changeUserPassword({ oldPassword, newPassword });
};
