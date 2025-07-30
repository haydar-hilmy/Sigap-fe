import { useState } from "react";
import { CustomToast } from "../components/toast/CustomToast";
import PasswordForm from "../components/forms/PasswordForm";
import ProfileForm from "../components/forms/ProfileForm";
import { updatePassword, updateProfile } from "../services/userService";
import { useChangePasswordForm } from "../hooks/useChangePasswordForm";
import { useProfileForm } from "../hooks/useProfileForm";

const PengaturanPage = () => {
  const formProfile = useProfileForm();
  const formPassword = useChangePasswordForm();
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleSubmitProfile = async (data) => {
    try {
      setLoadingProfile(true);
      await updateProfile(data);
      CustomToast({ message: "Profil berhasil diperbarui!", type: "success" });
      formProfile.reset(data);
    } catch (err) {
      CustomToast({ message: "Gagal memperbarui profil.", type: "error" });
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleSubmitPassword = async ({ oldPassword, newPassword }) => {
    try {
      setLoadingPassword(true);
      await updatePassword({ oldPassword, newPassword });
      CustomToast({ message: "Password berhasil diubah!", type: "success" });
      formPassword.reset();
    } catch (err) {
      CustomToast({ message: "Gagal mengubah password.", type: "error" });
    } finally {
      setLoadingPassword(false);
    }
  };

  return (
    <div className="space-y-10">
      <ProfileForm form={formProfile} onSubmit={handleSubmitProfile} isLoading={loadingProfile} />
      <PasswordForm form={formPassword} onSubmit={handleSubmitPassword} isLoading={loadingPassword} />
    </div>
  );
};

export default PengaturanPage;
