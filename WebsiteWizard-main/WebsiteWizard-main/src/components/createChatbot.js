"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Create = () => {
  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showRedirectButton, setShowRedirectButton] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before generating ChatBOT");
      return;
    }

    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3001/chatbot",
        requestOptions
      );

      if (response.ok) {
        toast.success("Data added successfully");
        setShowRedirectButton(true);
      } else {
        const errorData = await response.json();
        toast.error(
          `Error deleting data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Error adding data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUpdateData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before updating data");
      return;
    }

    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3001/chatbot",
        requestOptions
      );

      if (response.ok) {
        toast.success("Data updated successfully");
      } else {
        const errorData = await response.json();
        toast.error(
          `Error deleting data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data");
    }

    setIsLoading(false);
  };

  const fetchDeleteData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before deleting data");
      return;
    }

    setIsLoading(true);

    // ... (remaining code)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3001/chatbot",
        requestOptions
      );

      if (response.ok) {
        toast.success("Data deleted successfully");
        setInputValue("");
      } else {
        const errorData = await response.json();
        toast.error("Error deleting data:");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting data");
    }

    setIsLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-lg border-4 border-dashed border-gray-200 p-8 rounded-lg">
      <DialogHeader className="bg-white">
        <DialogTitle>Create Chatbot</DialogTitle>
      </DialogHeader>
      <span className="text-gray-500">
        Enter your website&apos;s URL to get your chatbot
      </span>
      <div className="pt-4 pb-8">
        <input
          type="url"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 block w-full rounded-md sm:text-lg border border-black px-4 py-2"
          placeholder="https://example.com"
        />
      </div>
      <DialogFooter>
        <div className="text-right gap-2">
          {isLoading ? (
            <Button
              disabled
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </Button>
          ) : (
            <div className="flex justify-center space-x-2">
              <Button
                variant="primary"
                onClick={fetchUpdateData}
                className="w-36 h-12 rounded-full border bg-gradient-to-r from-violet-800 to-violet-600 text-white shadow-md hover:bg-violet-400 flex items-center justify-center"
              >
                Update
              </Button>
              <Button
                variant="primary"
                onClick={fetchDeleteData}
                className="w-36 h-12 rounded-full border bg-gradient-to-r from-violet-800 to-violet-600 text-white shadow-md hover:bg-violet-400 flex items-center justify-center"
              >
                Delete
              </Button>
              {showRedirectButton ? (
                <Link href="/chatbot">
                  <Button
                    variant="primary"
                    className="w-36 h-12 rounded-full border bg-gradient-to-r from-violet-800 to-violet-600 text-white shadow-md hover:bg-violet-400 flex items-center justify-center"
                  >
                    Redirect
                  </Button>{" "}
                </Link>
              ) : (
                <Button
                  variant="primary"
                  onClick={fetchData}
                  className="w-36 h-12 rounded-full border bg-gradient-to-r from-violet-800 to-violet-600 text-white shadow-md hover:bg-violet-400 flex items-center justify-center"
                >
                  Generate
                </Button>
              )}
            </div>
          )}
          <ToastContainer />
        </div>
      </DialogFooter>
    </div>
  );
};
export default Create;
