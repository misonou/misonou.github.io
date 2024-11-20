import { classNames, useDataView } from "zeta-dom-react";
import data from "src/data/examples/sales.json";
import "./style.css";
import { Dropdown } from "src/components/controls";
import { repeat } from "zeta-dom/util";

export default function Component() {
    const dataView = useDataView(
        { productType: '' }, // default filter
        'contact', 'asc',    // default sorting
        10);                 // page size

    const [pageItems] = dataView.getView(data, (items, filters) => {
        if (filters.productType) {
            items = items.filter(v => v.productType === filters.productType);
        }
        return dataView.sort(items);
    });

    return (
        <div>
            {/* Filter controls */}
            <div className="table-filter">
                <Dropdown label="Product Type" items={['', 'Desktop', 'Laptop', 'Tablet']} allowUnselect variant="button"
                    value={dataView.filters.productType}
                    onChange={v => dataView.filters.productType = v} />
            </div>

            {/* Table */}
            <table className="app-demo-view-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product ID</th>
                        <th>Product Type</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map((v, i) => (
                        <tr key={i}>
                            <td>{v.contact}</td>
                            <td>{v.productId}</td>
                            <td>{v.productType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Simple pagination */}
            <div className="table-footer">
                <div>{dataView.itemCount} items</div>
                <div>
                    <i className={classNames({ disabled: dataView.pageIndex === 0 })} onClick={() => dataView.pageIndex--}>Prev</i>
                    {repeat(' ', dataView.pageCount).split('').map((v, i) => (
                        <i key={i} className={classNames({ active: i === dataView.pageIndex })} onClick={() => dataView.pageIndex = i}>{i + 1}</i>
                    ))}
                    <i className={classNames({ disabled: dataView.pageIndex === dataView.pageCount - 1 })} onClick={() => dataView.pageIndex++}>Next</i>
                </div>
            </div>
        </div>
    );
}