function Job() {
  return (
    <section>
      <div className="my-container">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800 text-center mb-7 md:mb-9">
          Tugas
        </h2>

        <div className="flex flex-col sm:flex-row justify-between gap-3 max-w-[398px] sm:max-w-5xl mx-auto">
          <div className="p-5 border-2 rounded-md sm:max-w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mb-4 text-secondary"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>

            <h3 className="font-semibold text-sm lg:text-xl text-neutral800 mb-4">
              Membantu
            </h3>
            <div className="text-neutral-500 text-sm lg:text-base">
              Membantu bupati dalam urusan pemerintahan.
            </div>
          </div>
          <div className="p-5 border-2 rounded-md sm:max-w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mb-4 text-secondary"
            >
              <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="font-semibold text-sm lg:text-xl text-neutral800 mb-4">
              Mengawasi
            </h3>
            <div className="text-neutral-500 text-sm lg:text-base">
              Mengawasi pelakasanaan urusan pemerintahan.
            </div>
          </div>
          <div className="p-5 border-2 rounded-md sm:max-w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mb-4 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="font-semibold text-sm lg:text-xl text-neutral800 mb-4">
              Membina
            </h3>
            <div className="text-neutral-500 text-sm lg:text-base">
              Membina pelakasanaan urusan pemerintahan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Job;
