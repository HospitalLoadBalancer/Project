import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const HospitalDataTable = (props) => {
    const columns = [
        {field: 'id', header: 'Id'},
        {field: 'name', header: 'Name'},
        {field: 'location.lat', header: 'Latitude'},
		{field: 'location.lng', header: 'Longitude'},
        {field: 'address', header: 'Address'},
		{field: 'number_of_beds', header: 'Number of Beds'},
		{field: 'occupation', header: 'Occupation'}
    ];

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div className="card border border-primary rounded">
				<div className="card">
					<DataTable value={props.hospitals} responsiveLayout="scroll">
						{dynamicColumns}
					</DataTable>
				</div>
            </div>
    )
}

export default HospitalDataTable