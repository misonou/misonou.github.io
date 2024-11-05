import { classNames, useDataView } from "zeta-dom-react";
import { useRouteState } from "brew-js-react";
import { ToggleButtonGroup } from "src/components/controls";
import { repeat } from "zeta-dom/util";
import data from "src/data/examples/sales.json";
import "./style.css";

const laptopData = data.filter(v => v.productType === 'Laptop');
const tabletData = data.filter(v => v.productType === 'Tablet');

export default function Component() {
    const [tab, setTab] = useRouteState('tab', 'Laptop', true);

    const dataView = useDataView(`dv${tab}`, {}, 'contact', 'asc', 10);
    const items = tab === 'Laptop' ? laptopData : tabletData;
    const [pagedItems] = dataView.getView(items);

    function getSortClassNames(column: string) {
        return dataView.sortBy === column ? classNames({ sort: dataView.sortOrder }) : '';
    }

    return (
        <div>
            <ToggleButtonGroup items={['Laptop', 'Tablet']} onChange={setTab} />

            <table className="app-demo-view-table">
                <thead>
                    <tr>
                        <th className={getSortClassNames('contact')} onClick={() => dataView.toggleSort('contact')}>Name</th>
                        <th className={getSortClassNames('productId')} onClick={() => dataView.toggleSort('productId')}>Product ID</th>
                        <th className={getSortClassNames('productType')} onClick={() => dataView.toggleSort('productType')}>Product Type</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedItems.map((v, i) => (
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
