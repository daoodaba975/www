import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { LuMailbox } from "react-icons/lu";

const MdxSubscribe = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailInputRef.current?.value.trim();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
        emailInputRef.current!.value = "";
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
  };

  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        📬 Subscribe.
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-lico rounded-lg dark:border-eigengrau">
          <div className="relative w-full">
            <label htmlFor="hero-input" className="sr-only">
              Email
            </label>
            <div className="absolute text-eigengrau dark:text-silver inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <LuMailbox />
            </div>
            <input
              type="email"
              id="hero-input"
              name="email"
              required
              ref={emailInputRef}
              disabled={isLoading}
              className="py-2 ps-9 pe-3 block w-full border-lico rounded-lg text-sm focus:border-lico outline-pacific focus:ring-silver disabled:opacity-50 disabled:pointer-events-none bg-snow dark:bg-eigengrau dark:text-snow dark:placeholder-snow"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic text-snow hover:bg-pacific dark:text-snow hover:text-eigengrau dark:hover:text-eigengrau focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? (
              "Submitting..."
            ) : (
              <>
                Join
                <IoIosArrowForward />
              </>
            )}
          </button>
        </div>
      </form>

      {error && <p className="text-[#E54B4B] mt-2">{error}</p>}

      {/* Modal */}
      {showModal && (
        <div
          id="hs-basic-modal"
          className="fixed top-0 left-0 z-[80] w-full h-full bg-snow dark:bg-night bg-opacity-50 dark:bg-opacity-80 flex items-center justify-center"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-basic-modal-label"
        >
          <div className="bg-snow dark:bg-night border border-lico dark:border-gayvin shadow-sm rounded-xl p-4 w-[90%] max-w-md">
            <div className="flex justify-between items-center pb-3 border-b border-lico dark:border-gayvin">
              <h3
                id="hs-basic-modal-label"
                className="font-bold text-eigengrau dark:text-snow"
              >
                Subscription Successful
              </h3>
              <button
                type="button"
                aria-label="Close"
                onClick={handleCloseModal}
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent border-lico dark:border-gayvin bg-snow dark:bg-night text-eigengrau dark:text-snow focus:outline-none focus:bg-silver dark:focus:bg-eigengrau"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="mt-3 text-eigengrau dark:text-snow">
              Thanks for subscribing! Stay tuned for my latest updates.
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic text-snow hover:bg-pacific dark:text-snow hover:text-gayvin dark:hover:text-eigengrau focus:outline-none focus:bg-celtic"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MdxSubscribe;
