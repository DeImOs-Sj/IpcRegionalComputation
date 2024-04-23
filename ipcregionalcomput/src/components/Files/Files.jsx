import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Files = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      setError("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const response = await fetch("https://api.nftport.xyz/v0/files", {
        method: 'POST',
        body: formData,
        headers: {
          "Authorization": "23c23851-1777-488b-8e47-cb676a6437df",
        },
      });
      if (response.ok) {
        toast.success("File uploaded successfully!");
      } else {
        setError("An error occurred while uploading the file.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setError("An error occurred while uploading the file.");
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };
    
  return (
    <>
      <ToastContainer />
      <form className="mt-8 space-y-3  mx-auto w-[50vw] h-[50vh]" onSubmit={(e) => { e.preventDefault(); uploadFile(); }}>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                </div>
                <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
              </div>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          <span>File type: doc, pdf, types of images</span>
        </p>
        <div>
          <button type="submit" className="my-5 mx-auto w-[10rem] flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}

export default Files;
