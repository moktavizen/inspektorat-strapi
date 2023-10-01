function Contact({ contact }) {
  const { data: dataContact } = contact;
  const { attributes } = dataContact;
  const { telepon, email } = attributes;

  return (
    <section className="contact bg-[#f6f8f7]">
      <div className="my-container">
        <div className="max-w-[592px] mx-auto text-center text-neutral800">
          <h2 className="font-bold text-2xl lg:text-4xl mb-2">Ada pertanyaan untuk kami?</h2>
          <div className="text-base lg:text-xl">
            Hubungi{" "}
            <a href={`tel:+62${telepon}`} className="hover:underline">
              {telepon}
            </a>{" "}
            atau isi formulir berikut untuk mengirim pesan ke email kami!
          </div>
          <form action={`mailto:${email}`} method="post" encType="text/plain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-4 my-6 text-sm lg:text-lg">
              <input
                className="rounded border p-2"
                type="text"
                name="nama"
                id="nama"
                placeholder="Nama"
              />
              <input
                className="rounded border p-2"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="rounded border p-2"
                type="text"
                name="perihal"
                id="perihal"
                placeholder="Perihal"
              />
              <input
                className="rounded border p-2"
                type="text"
                name="no.telp."
                id="no.telp."
                placeholder="No. Telp."
              />
              <textarea
                className="md:col-span-2 rounded border p-2"
                name="pesan"
                id="pesan"
                placeholder="Pesan"
                rows="4"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn text-white bg-primary px-20 md:px-24 hover:bg-primary/70"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
