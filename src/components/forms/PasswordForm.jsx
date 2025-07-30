import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { PasswordInput } from "../input/Input";
import { Button } from "../button/Button";
import ErrorFormSubmit from "../../utils/errorFormSubmit";

const PasswordForm = ({ form, onSubmit, isLoading }) => (
  <form onSubmit={form.handleSubmit(onSubmit, ErrorFormSubmit)} className="space-y-6">
    <p className="text-base font-semibold">Ubah Password</p>

    <Controller
      name="oldPassword"
      control={form.control}
      rules={{ required: "Password lama wajib diisi" }}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput {...field} label="Password Lama" placeholder="Masukkan password lama" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="newPassword"
      control={form.control}
      rules={{ required: "Password baru wajib diisi" }}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput {...field} label="Password Baru" placeholder="Masukkan password baru" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="repeatPassword"
      control={form.control}
      rules={{
        required: "Konfirmasi password wajib diisi",
        validate: value => value === form.watch("newPassword") || "Password tidak cocok",
      }}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput {...field} label="Ulangi Password Baru" placeholder="Ulangi password baru" errorMsg={error?.message} required />
      )}
    />
    <div className="flex justify-center pt-2">
      <Button isLoading={isLoading} type="submit">Ubah Password</Button>
    </div>
  </form>
);

PasswordForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default PasswordForm;
