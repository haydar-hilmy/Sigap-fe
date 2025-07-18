import { Controller, useForm } from "react-hook-form";
import { NumberInput, PasswordInput, SelectInput, TextInput } from "../components/input/Input";
import AuthLayout from "../layouts/AuthLayout";
import { Button } from "../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const formLogin = useForm();
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const navigate = useNavigate();
  
  
  const handleSubmitLogin = (data) => {
    try {
      setIsBtnLoading(true);
      console.log("Form Data:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error: ", error);
    } finally {
      setIsBtnLoading(false);
    }
  }

  return (
    <AuthLayout title="Login">
      <div className="container mx-auto max-w-5xl shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">

        <div className="p-10 gap-5 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold">Selamat Datang Kembali!</h2>
            <h3 className="text-base font-normal">Masukkan NIM/NPP dan kata sandi Anda untuk melanjutkan.</h3>
          </div>

          <form className="flex flex-col gap-6" onSubmit={formLogin.handleSubmit(handleSubmitLogin)}>
            <Controller
              name="username"
              control={formLogin.control}
              rules={{ required: "NIM / NPP wajib diisi" }}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  {...field}
                  label="NIM / NPP"
                  placeholder="Masukkan NIM / NPP"
                  errorMsg={error?.message}
                  />
                )}
            />

            <Controller
              name="password"
              control={formLogin.control}
              rules={{ required: "Kata Sandi wajib diisi" }}
              render={({ field, fieldState: { error } }) => (
                <PasswordInput
                  {...field}
                  label="Kata Sandi"
                  placeholder="Masukkan Password"
                  errorMsg={error?.message}
                />
              )}
            />

            <Controller
              name="role"
              control={formLogin.control}
              rules={{ required: "Hak Akses wajib dipilih" }}
              render={({ field, fieldState: { error } }) => (
                <SelectInput
                  {...field}
                  label="Hak Akses"
                  options={[
                    { value: "mahasiswa", label: "Mahasiswa" },
                    { value: "dosen", label: "Dosen" },
                    { value: "admin", label: "Admin" },
                  ]}
                  errorMsg={error?.message}
                />
              )}
            />

            <Button isLoading={isBtnLoading} variant="primary" type="submit">Masuk</Button>
          </form>
        </div>

        <div className="bg-[#B66EDC] flex items-center justify-center p-6">
          <img loading="lazy" src="images/logo_hmti.webp" alt="Logo HM-TI" className=" drop-shadow-xl w-40" />
        </div>
      </div>
    </AuthLayout>
  );
}


export default LoginPage;