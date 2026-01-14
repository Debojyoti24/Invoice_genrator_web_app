// import axios from "axios";
//
// export const uploadInvoiceThumbnail = async (imageData) => {
//     const formData = new FormData();
//     formData.append("file", imageData);
//     formData.append("upload_preset", "Debojyoti"); // exact name from presets
//
//     const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/dcclassmn/image/upload",
//         formData,
//         {
//             headers: { "Content-Type": "multipart/form-data" },
//         }
//     );
//
//     return res.data.secure_url;
// };

import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoice_uploader"); // unsigned preset name

    try {
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dfibkcjgd/image/upload", // use your cloud name
            formData
        );
        return res.data.secure_url;
    } catch (error) {
        console.error(
            "Cloudinary upload error:",
            error.response?.data || error.message
        );
        throw error;
    }
};
