import DataTableDocs from "../components/DataTableDocs";

function DocumentsPage({ documents }) {
  return (
    <section className="bg-gray-50 min-h-[717px]">
      <div className="my-container">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800 text-center">
          Dokumen Inspektorat
        </h2>
        <DataTableDocs data={documents.data} />
      </div>
    </section>
  );
}

export default DocumentsPage;
