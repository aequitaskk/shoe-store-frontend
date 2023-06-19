const ContactPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          Contact Us
        </h2>

        <div className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name
            </label>
            <input
              name="first-name"
              className="required w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              for="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name
            </label>
            <input
              name="last-name"
              className="required w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email
            </label>
            <input
              name="email"
              className="required w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="subject"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Subject
            </label>
            <input
              name="subject"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Message
            </label>
            <textarea
              name="message"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              className="required inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
