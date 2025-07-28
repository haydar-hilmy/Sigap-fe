import { useState } from "react";
import PopupContainer from "../components/container/PopUpContainer";
import NotificationCard from "../components/card/NotificationCard";
import { Controller, useForm } from "react-hook-form";
import { FileInput, PasswordInput, TextInput } from "../components/input/Input";
import { Button } from "../components/button/Button";
import { CustomToast } from "../components/toast/CustomToast";
import ErrorFormSubmit from "../utils/ErrorFormSubmit";

const PengaturanPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);

    const formSubmitProfile = useForm({
        defaultValues: {
            photo: null,
            name: '',
            nim: '',
            prodi: 'Teknik Informatika',
            email: '',
            phone: '',
            oldPassword: '',
            newPassword: '',
            repeatPassword: ''
        }
    });

    const onSubmitProfile = (data) => {
        try {
            setBtnLoading(true);
            console.log("Data Pengaduan:", data);
            CustomToast({ message: "Pengaduan berhasil dikirim!", type: "success" });
        } catch (error) {
            console.error("Error submitting pengaduan: ", error);
        } finally {
            setBtnLoading(false);
            formPengaduan.reset();
        }
    };

    return (
        <form onSubmit={formSubmitProfile.handleSubmit(onSubmitProfile, ErrorFormSubmit)} className="space-y-6">
            {/* Upload Foto */}
            <Controller
                name="photo"
                control={formSubmitProfile.control}
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

            {/* Edit Nama */}
            <Controller
                name="name"
                control={formSubmitProfile.control}
                rules={{ required: "Nama wajib diisi" }}
                render={({ field, fieldState: { error } }) => (
                    <TextInput
                        {...field}
                        label="Edit Nama"
                        placeholder="Masukkan nama"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Edit NIM */}
            <Controller
                name="nim"
                control={formSubmitProfile.control}
                rules={{
                    required: "NIM wajib diisi", pattern: {
                        value: /^A11\.\d{4}\.\d{5}$/,
                        message: "Format NIM harus seperti A11.1234.56789"
                    }
                }}
                render={({ field, fieldState: { error } }) => (
                    <TextInput
                        {...field}
                        label="Edit NIM"
                        placeholder="Masukkan NIM"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Edit Program Studi */}
            <Controller
                name="prodi"
                control={formSubmitProfile.control}
                rules={{ required: "Program Studi wajib diisi" }}
                render={({ field, fieldState: { error } }) => (
                    <TextInput
                        {...field}
                        label="Edit Program Studi"
                        placeholder="Masukkan Program Studi"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Edit Email */}
            <Controller
                name="email"
                control={formSubmitProfile.control}
                rules={{
                    required: "Email wajib diisi",
                    pattern: { value: /^\S+@\S+$/, message: "Format email tidak valid" },
                }}
                render={({ field, fieldState: { error } }) => (
                    <TextInput
                        {...field}
                        label="Edit Email"
                        placeholder="Masukkan email"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Edit No Telepon */}
            <Controller
                name="phone"
                control={formSubmitProfile.control}
                rules={{ required: "No Telepon wajib diisi" }}
                render={({ field, fieldState: { error } }) => (
                    <TextInput
                        {...field}
                        label="Edit No Telepon"
                        placeholder="Masukkan nomor telepon"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            <p className="text-base font-semibold pt-2">Edit Password</p>

            {/* Password Lama */}
            <Controller
                name="oldPassword"
                control={formSubmitProfile.control}
                rules={{ required: "Password lama wajib diisi" }}
                render={({ field, fieldState: { error } }) => (
                    <PasswordInput
                        {...field}
                        label="Password Lama"
                        placeholder="Masukkan password lama"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Password Baru */}
            <Controller
                name="newPassword"
                control={formSubmitProfile.control}
                rules={{ required: "Password baru wajib diisi" }}
                render={({ field, fieldState: { error } }) => (
                    <PasswordInput
                        {...field}
                        label="Password Baru"
                        placeholder="Masukkan password baru"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Ulangi Password Baru */}
            <Controller
                name="repeatPassword"
                control={formSubmitProfile.control}
                rules={{
                    required: "Konfirmasi password wajib diisi",
                    validate: (value) =>
                        value === formSubmitProfile.watch("newPassword") || "Password tidak cocok"
                }}
                render={({ field, fieldState: { error } }) => (
                    <PasswordInput
                        {...field}
                        label="Ulangi Password Baru"
                        placeholder="Ulangi password baru"
                        errorMsg={error?.message}
                        required
                    />
                )}
            />

            {/* Tombol Submit */}
            <div className="flex justify-center pt-4">
                <Button isLoading={btnLoading} type="submit">Submit</Button>
            </div>
        </form>
    );
}

export default PengaturanPage;