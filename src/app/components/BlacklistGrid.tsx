/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import { Column, DataGrid,Paging, Pager, Export, FilterRow, SearchPanel, HeaderFilter, Summary, TotalItem, Editing, Toolbar, Item } from 'devextreme-react/data-grid';

interface DataType {
    Id: number | null;
    db_Id: number;
    Adi?: string;
    Soy?: string;
    Aciklama?: string;
    Tcno?: string;
    Kimlik_no?: string;
    Dogum_tarihi?: string; 
    Sistem_tarihi?: string | null;
    Sistem_grubu?: string;
    Otel_kodu?: string;
    Ulke_xml?: string;
    Kulanici?: string;
    Acenta?: string;
    XmlKodu?: string;
    ULkeAdi?: string;
  }

type Props = {
  data: DataType[];
  onRowUpdated: (updatedRow: any) => void;
  onRowInserted: (newRow: any) => void
};

const allowedPageSizes = [6, 12, 20];
const BlacklistGrid: React.FC<Props> = ({ data,  onRowUpdated, onRowInserted }) => {
  const [ dataSource , setDataSource ] = useState<DataType[]>(data)
  useEffect(()=>{
    setDataSource(data);
  },[data])


//   const customizeText = (cellInfo: { value : number}) => {
//     return `%${(cellInfo.value*100).toFixed(2)}`
//   }

//   const customizeText2 = (itemInfo: any) => `${itemInfo?.value}`


  return (
    <div>
      <DataGrid
        dataSource={dataSource} // Veriyi burada DataGrid'e gönder
        showBorders
        onRowUpdated={onRowUpdated}
        onRowInserted={onRowInserted}
      >
        <SearchPanel visible width={250} />
        <FilterRow visible />
        <Editing

            mode="row"
            allowUpdating
            allowAdding
          />
        <HeaderFilter visible />
        <Column dataField="Adi" dataType="string" caption="Ad" />
        <Column dataField="Soy" dataType="string" caption="Soyad"/>
        <Column dataField="Tcno" dataType="number" caption="TCKN"/>
        <Column dataField="Kimlik_no" dataType="number" caption="Kimlik No"/>
        <Column dataField="Dogum_tarihi" dataType="date" caption="Doğum Tarihi"/>
        <Column dataField="Aciklama" dataType="string" caption="Açıklama"/>
        <Summary>
          <TotalItem
            column="Adi"
            />
        </Summary>
        <Export enabled allowExportSelectedData />
        <Paging defaultPageSize={12} />
        <Pager showPageSizeSelector showInfo allowedPageSizes={allowedPageSizes} />
        <Toolbar>
            <Item
              name="addRowButton"
              showText="always"
              options={{
                text: "Kara Ekle",
                elementAttr: {
                  style: { backgroundColor: '#849DB5', color: 'white' },
                },
              }}
            />
            <Item name="exportButton" />
         </Toolbar>
      </DataGrid>
    </div>
  );
};

export default BlacklistGrid;