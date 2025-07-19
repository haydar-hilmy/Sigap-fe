import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRef } from "react";

// All input components are compatible with react-hook-form and Controller

const FieldInput = ({ children, variant, isError = false }) => {
    return (
        <div
            className={`${variant} flex flex-row items-center rounded-lg w-full bg-white outline outline-1 outline-[#D0D5DD] ${isError
                ? "focus-within:outline-[#ff0c0c] outline-[#fa6b6b] focus-within:shadow-[0_0_0_7px_rgba(255,0,0,0.15)]"
                : "focus-within:outline-[#0087FF] focus-within:shadow-[0_0_0_7px_rgba(74,157,236,0.15)]"
                } transition-all`}
        >
            {children}
        </div>
    );
};


export const TextInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
    readOnly = false,
    required = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`} htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${readOnly || disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};

export const TextAreaInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
    readOnly = false,
    required = false,
    rows = 4, // default tinggi textarea
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label
                    className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <textarea
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    rows={rows}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none resize-none ${readOnly || disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};


export const PasswordInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
    required = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex flex-col">
            {label && (
                <label className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`} htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type={showPassword ? "text" : "password"}
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
                <button
                    type="button"
                    onClick={togglePassword}
                    className="px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </button>
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};



export const NumberInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
    required = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`} htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type="text" // tetap text agar bisa filter manual angka
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        onChange(val);
                    }}
                    onBlur={onBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};


export const SelectInput = ({
    name,
    value,
    onChange,
    onBlur,
    label = "",
    errorMsg = "",
    options = [],
    disabled = false,
    required = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`} htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <select
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-white outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                >
                    <option value="">Pilih...</option>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};


export const FileInput = ({
    name,
    value,
    onChange,
    onBlur,
    label = "",
    errorMsg = "",
    placeholder = "Pilih file...",
    accept = "",
    disabled = false,
    required = false,
    multiple = false,
}) => {
    const fileInputRef = useRef(null);

    const fileName = value && value.length > 0
        ? Array.from(value).map((file) => file.name).join(", ")
        : "";

    return (
        <div className="flex flex-col">
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-base font-medium mb-1 ${required ? "required-input" : ""}`}
                >
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <div
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl cursor-pointer ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                    onClick={() => !disabled && fileInputRef.current.click()}
                >
                    <span className={`${fileName ? "text-gray-800" : "text-gray-400"}`}>
                        {fileName || placeholder}
                    </span>
                    <span className="text-blue-500 font-medium">Browse</span>
                </div>
                <input
                    type="file"
                    id={name}
                    name={name}
                    ref={fileInputRef}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.files)}
                    onBlur={onBlur}
                    className="hidden"
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};