// src/Service/swal.js
import Swal from "sweetalert2";
import '../Styles/swal.css';

const showSuccess = (title, text) => {
    Swal.fire({
        icon: 'success',
        title: title || 'Success',
        text: text || '',
    });
};

const showError = (title, text) => {
    Swal.fire({
        icon: "error",
        title: title || "Error",
        text: text || "",
    });
};

const showWarning = (title, text) => {
    Swal.fire({
        icon: "warning",
        title: title || "Warning",
        text: text || "",
    });
};

export { showSuccess, showError, showWarning };