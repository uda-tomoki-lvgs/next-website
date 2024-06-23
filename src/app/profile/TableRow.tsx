type TableRowProps = {
    title: string,
    item: string,
}

const TableRow = ({title, item}: TableRowProps) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{item}</td>
        </tr>
    );
}

export default TableRow;