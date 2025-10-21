export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Free Public Upload");

  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dfdpuithv/image/upload', {
      method: 'POST',
      body: formData
    })

    if (!res.ok) {
      throw new Error('Failed to upload image to Cloudinary');
    }

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.log(error)
    throw error;
  }
}