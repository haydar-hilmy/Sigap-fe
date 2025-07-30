import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { FileInput, TextInput } from "../input/Input";
import { Button } from "../button/Button";
import ErrorFormSubmit from "../../utils/errorFormSubmit";
import { emailRegex, nimRegex } from "../../utils/validators";

const ProfileForm = ({ form, onSubmit, isLoading }) => (
  <form onSubmit={form.handleSubmit(onSubmit, ErrorFormSubmit)} className="space-y-6">
    <Controller
      name="photo"
      control={form.control}
      render={({ field, fieldState: { error } }) => (
        <FileInput
          {...field}
          label="Edit Profil"
          errorMsg={error?.message}
          placeholder="Pilih file foto"
          accept="image/jpeg, image/png"
        />
      )}
    />
    <Controller
      name="name"
      control={form.control}
      rules={{ required: "Nama wajib diisi" }}
      render={({ field, fieldState: { error } }) => (
        <TextInput {...field} label="Edit Nama" placeholder="Masukkan nama" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="nim"
      control={form.control}
      rules={{
        required: "NIM wajib diisi",
        pattern: { value: nimRegex, message: "Format NIM harus seperti A11.1234.56789" },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextInput {...field} label="Edit NIM" placeholder="Masukkan NIM" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="prodi"
      control={form.control}
      rules={{ required: "Program Studi wajib diisi" }}
      render={({ field, fieldState: { error } }) => (
        <TextInput {...field} label="Edit Program Studi" placeholder="Masukkan program studi" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="email"
      control={form.control}
      rules={{
        required: "Email wajib diisi",
        pattern: { value: emailRegex, message: "Format email tidak valid" },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextInput {...field} label="Edit Email" type="email" placeholder="Masukkan email" errorMsg={error?.message} required />
      )}
    />
    <Controller
      name="phone"
      control={form.control}
      rules={{ required: "No Telepon wajib diisi" }}
      render={({ field, fieldState: { error } }) => (
        <TextInput {...field} label="Edit No Telepon" placeholder="Masukkan no. telp" errorMsg={error?.message} required />
      )}
    />
    <div className="flex justify-center pt-4">
      <Button isLoading={isLoading} type="submit">Simpan Profil</Button>
    </div>
  </form>
);

ProfileForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ProfileForm;
