import {
  ReactNode, Children, isValidElement,
} from 'react';

interface TableProps {
  children: ReactNode;
}

interface TableRowProps {
  values: string[];
}

function Table({ children }: TableProps) {
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type !== Table.Head && child.type !== Table.Body) {
        throw new Error("Table only accepts 'Head' and 'Body' as child components.");
      }
    }
  });

  return <table className="min-w-full divide-y divide-gray-200">{children}</table>;
}

Table.Head = function TableHead({ children }: TableProps) {
  return <thead className="bg-gray-50">{children}</thead>;
};

Table.Body = function TableBody({ children }: TableProps) {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

Table.Row = function TableRow({ values }: TableRowProps) {
  return (
    <tr>
      {values.map((value, index) => (
        <td key={`${value}${index}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default Table;
