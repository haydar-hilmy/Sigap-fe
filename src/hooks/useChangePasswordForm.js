import { useForm } from "react-hook-form";

export const useChangePasswordForm = () => {
  return useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
    mode: "onSubmit",
  });
};
