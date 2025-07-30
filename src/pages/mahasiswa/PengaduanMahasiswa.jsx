import { Controller, useForm } from "react-hook-form";
import { FileInput, SelectInput, TextAreaInput, TextInput } from "../../components/input/Input";
import AppLayout from "../../layouts/AppLayout";
import { Button } from "../../components/button/Button";
import { useState } from "react";
import FormBox from "../../components/form/FormBox";
import { CustomToast } from "../../components/toast/CustomToast";
import ErrorFormSubmit from "../../utils/errorFormSubmit";

const PengaduanMahasiswa = () => {
    const formPengaduan = useForm();
    const [btnLoading, setBtnLoading] = useState(false);

    const handleSubmitPengaduan = (data) => {
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
    }

    return (
        <>
            <FormBox onSubmit={formPengaduan.handleSubmit(handleSubmitPengaduan, ErrorFormSubmit)}>
                <div className="flex flex-row gap-6 w-full">
                    <div className="flex-1">
                        <Controller
                            name="nama"
                            control={formPengaduan.control}
                            rules={{ required: "Nama Lengkap wajib diisi", maxLength: { value: 100, message: "Nama tidak boleh lebih dari 100 karakter" } }}
                            render={({ field, fieldState: { error } }) => (
                                <TextInput
                                    {...field}
                                    label="Nama Lengkap"
                                    placeholder="Misal: John Doe"
                                    errorMsg={error?.message}
                                    required
                                />
                            )}
                        />
                    </div>
                    <div className="flex-1">
                        <Controller
                            name="nim"
                            control={formPengaduan.control}
                            rules={{
                                required: "NIM wajib diisi",
                                pattern: {
                                    value: /^A11\.\d{4}\.\d{5}$/,
                                    message: "Format NIM harus seperti A11.1234.56789"
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <TextInput
                                    {...field}
                                    label="NIM"
                                    placeholder="Misal: A11.1234.56789"
                                    errorMsg={error?.message}
                                    required
                                />
                            )}
                        />
                    </div>

                </div>
                <Controller
                    name="kategori"
                    control={formPengaduan.control}
                    rules={{ required: "Kategori wajib dipilih" }}
                    render={({ field, fieldState: { error } }) => (
                        <SelectInput
                            {...field}
                            label="Kategori Pengaduan"
                            options={[
                                { value: "dosen", label: "Dosen" },
                                { value: "mata_kuliah", label: "Mata Kuliah" },
                                { value: "jadwal_kuliah", label: "Jadwal Kuliah" },
                                { value: "administrasi_akademik", label: "Administrasi Akademik" },
                                { value: "tugas_akhir", label: "Tugas Akhir" },
                                { value: "layanan_prodi", label: "Layanan Prodi" },
                                { value: "magang_mbkm", label: "Magang/MBKM" },
                                { value: "lain_lain", label: "Lain-lain" }
                            ]}
                            errorMsg={error?.message}
                            required
                        />
                    )}
                />

                <Controller
                    name="deskripsi"
                    control={formPengaduan.control}
                    rules={{ required: "Deskripsi Pengaduan wajib diisi", maxLength: { value: 1000, message: "Deskripsi tidak boleh lebih dari 1000 karakter" } }}
                    render={({ field, fieldState: { error } }) => (
                        <TextAreaInput
                            {...field}
                            label="Deskripsi Pengaduan"
                            placeholder="Masukkan pengaduan Anda di sini..."
                            errorMsg={error?.message}
                            required
                        />
                    )}
                />

                <Controller
                    name="bukti"
                    control={formPengaduan.control}
                    rules={{
                        validate: {
                            maxFileSize: (files) => {
                                if (!files || files.length === 0) return true;
                                const maxSize = 2 * 1024 * 1024; // 2MB
                                for (let file of files) {
                                    if (file.size > maxSize) {
                                        return `Ukuran file ${file.name} melebihi 2MB`;
                                    }
                                }
                                return true;
                            }
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <FileInput
                            {...field}
                            label="Upload Bukti"
                            placeholder="Pilih file..."
                            errorMsg={error?.message}
                            accept=".pdf,.jpg,.png"
                            multiple
                        />
                    )}
                />

                <div className="flex w-fit">
                    <Button type="submit" variant="success">Kirim</Button>
                </div>
            </FormBox>
        </>
    );
}

export default PengaduanMahasiswa;