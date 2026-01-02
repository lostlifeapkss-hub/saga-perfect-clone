interface DataTableRow {
  label: string;
  value: string;
}

interface DataTableProps {
  title?: string;
  data: DataTableRow[];
}

const DataTable = ({ title, data }: DataTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {title && (
        <div className="bg-primary px-4 py-3">
          <h3 className="font-bold text-primary-foreground">{title}</h3>
        </div>
      )}
      <table className="w-full">
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-secondary" : "bg-background"}
            >
              <td className="px-4 py-3 font-medium text-foreground border-r border-border w-1/3">
                {row.label}
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;