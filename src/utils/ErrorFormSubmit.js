import { CustomToast } from "../components/toast/CustomToast";

const ErrorFormSubmit = (errors) => {
  const errorKeys = Object.keys(errors);

  if (errorKeys.length === 1) {
    const firstError = errors[errorKeys[0]];
    if (firstError?.message) {
      CustomToast({ message: firstError.message, type: "danger" });
    }
  } else if (errorKeys.length > 1) {
    CustomToast({
      message:
        "Formulir belum lengkap, periksa kembali semua data yang wajib diisi.",
      type: "danger",
    });
  }
};

export default ErrorFormSubmit;
