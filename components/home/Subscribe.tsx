import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { LuMailbox } from "react-icons/lu";

const Subscribe = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();

    if (email) {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setShowModal(true);
          setError(null);
          if (emailInputRef.current) {
            emailInputRef.current.value = "";
          }
        } else {
          const data = await response.json();
          setError(data.error || "Something went wrong");
        }
      } catch (err) {
        setError("Failed to subscribe. Please try again.");
      }
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
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        📬 Subscribe.
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-silver rounded-lg dark:border-raisin">
          <div className="relative w-full">
            <label className="sr-only">Subscribe</label>
            <div className="absolute text-raisin dark:text-silver inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <LuMailbox />
            </div>
            <input
              type="email"
              id="hero-input"
              name="email"
              required
              ref={emailInputRef}
              className="py-2 ps-9 pe-3 block w-full border-silver rounded-lg text-sm focus:border-silver outline-pacific dark:outline-mint focus:ring-silver disabled:opacity-50 disabled:pointer-events-none bg-snow dark:bg-raisin dark:text-snow dark:placeholder-snow"
              placeholder="Enter your email"
            />
          </div>
          <button
            className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
            type="submit"
          >
            Join
            <IoIosArrowForward />
          </button>
        </div>
      </form>

      {error && <p className="text-red mt-2">{error}</p>}

      {/* Modal */}
      {showModal && (
        <div
          id="hs-basic-modal"
          className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-0 left-0 z-[80] w-full h-full overflow-x-hidden overflow-y-auto bg-snow dark:bg-night bg-opacity-50 flex items-center justify-center"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-basic-modal-label"
        >
          <div className="bg-snow dark:bg-night border border-silver dark:border-silver shadow-sm rounded-xl p-4">
            <div className="flex justify-between items-center pb-3 border-b border-silver dark:border-silver">
              <h3
                id="hs-basic-modal-label"
                className="font-bold text-raisin dark:text-snow"
              >
                Subscription Successful
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-snow dark:bg-raisin text-raisin dark:text-snow focus:outline-none focus:bg-silver dark:focus:bg-raisin"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span className="sr-only">Close</span>
                <IoMdClose />
              </button>
            </div>
            <div className="mt-3 text-raisin dark:text-snow">
              Thanks for subscribing! Stay tuned for my latest updates.{" "}
            </div>
            <div className="mt-4 flex justify-end items-center gap-x-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50"
                onClick={handleCloseModal}
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

export default Subscribe;
