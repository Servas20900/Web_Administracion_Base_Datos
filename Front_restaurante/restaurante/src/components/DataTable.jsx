import React from 'react';

const DataTable = ({ columns, data, actions }) => {
  return (
    <table className="table-auto border-collapse w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((col) => (
            <th key={col.key} className="border px-4 py-2 text-left">
              {col.header}
            </th>
          ))}
          {actions && <th className="border px-4 py-2">Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="border px-4 py-2">
                {row[col.key]}
              </td>
            ))}
            {actions && (
              <td className="border px-4 py-2">
                {actions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => action.onClick(row)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    {action.label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
