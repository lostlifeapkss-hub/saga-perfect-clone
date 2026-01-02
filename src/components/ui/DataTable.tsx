import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-border shadow-lg"
    >
      {title && (
        <div className="gradient-primary px-6 py-4">
          <h3 className="font-bold text-primary-foreground text-lg">{title}</h3>
        </div>
      )}
      <table className="w-full">
        <tbody>
          {data.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${index % 2 === 0 ? "bg-muted/50" : "bg-card"} hover:bg-primary/5 transition-colors`}
            >
              <td className="px-6 py-4 font-medium text-foreground border-r border-border w-1/3">
                {row.label}
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {row.value}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default DataTable;