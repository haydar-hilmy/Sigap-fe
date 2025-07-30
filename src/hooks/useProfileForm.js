import { useForm } from "react-hook-form";

export const useProfileForm = () => {
  return useForm({
    defaultValues: {
      photo: null,
      name: "",
      nim: "",
      prodi: "Teknik Informatika",
      email: "",
      phone: "",
    },
    mode: "onSubmit",
  });
};
