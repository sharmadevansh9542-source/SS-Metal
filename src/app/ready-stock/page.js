import ReadyStockTable from "../../components/ReadyStockTable";

export const metadata = {
  title: "Ready Stock Inventory",
  description: "Stainless steel circles, sheets, patta, patti and coil in JSLU, J4, 304, 316, 410 and 430 grades available for immediate dispatch."
};

export default function ReadyStockPage() {
  return (
    <>
      <section className="ready-stock-page-wrapper section-pad">
        <div className="container">
          <ReadyStockTable showHeader={true} />
        </div>
      </section>
    </>
  );
}
