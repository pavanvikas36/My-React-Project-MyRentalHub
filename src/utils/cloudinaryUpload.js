// utils/cloudinaryUpload.js
export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "qpt9twrk"); // your unsigned preset
  data.append("cloud_name", "dtcam6kvz");

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/dtcam6kvz/image/upload", {
      method: "POST",
      body: data,
    });
    const result = await res.json();
    return result.secure_url; // Returns uploaded image URL
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};
