import jsPDF from "jspdf";

export default function GeneratePDF({ person }) {
  function generate() {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#print"), {
      callback: function (pdf) {
        const pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("persons.pdf");
      },
    });
  }

  return (
    <div>
      <button onClick={generate} type="primary">
        Download PDF
      </button>
    </div>
  );
}
