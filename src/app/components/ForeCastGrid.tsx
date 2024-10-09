/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';

import { Column, DataGrid,Paging, Pager, Export, FilterRow, SearchPanel, HeaderFilter, Summary, TotalItem } from 'devextreme-react/data-grid';

type DataType = {
  Tarih: string;                // Tarih, ISO 8601 formatında bir string
  Oda: number;                  // Oda, sayı
  Pax: number;                  // Pax, sayı
  Free: number;                 // Free, sayı
  Yetişkin: number;             // Yetişkin, sayı
  Çocuk: number;                // Çocuk, sayı
  "Toplam Kişi": number;        // Toplam Kişi, sayı
  "Yüzde%": number;             // Yüzde%, sayı
  Mevcut: number;               // Mevcut, sayı
  Konum1: number;               // Konum1, sayı
  Konum2: number;               // Konum2, sayı
  Konum3: number;               // Konum3, sayı
  Konum4: number;               // Konum4, sayı
  Konum5: number;               // Konum5, sayı
  Konum6: number;               // Konum6, sayı
  "Konum1%": number;            // Konum1%, sayı
  "Konum2%": number;            // Konum2%, sayı
  "Konum3%": number;            // Konum3%, sayı
  "Konum4%": number;            // Konum4%, sayı
  "Konum5%": number;            // Konum5%, sayı
  Forecast: number;             // Forecast, sayı
  "Forecast Satılan ": number;  // Forecast Satılan, sayı
  "Forecast Kalan": number;     // Forecast Kalan, sayı
  "Son Durum": number;          // Son Durum, sayı
  "Yuzde%(Sondurum)": number;   // Yüzde%(Sondurum), sayı
  "Yuzde%(Net)": number;        // Yüzde%(Net), sayı
  "Mevcut(Net)": number;        // Mevcut(Net), sayı
  Kalan_1: number;              // Kalan_1, sayı
  Kalan_2: number;              // Kalan_2, sayı
  Kalan_3: number;              // Kalan_3, sayı
  Kalan_4: number;              // Kalan_4, sayı
  Kalan_5: number;              // Kalan_5, sayı
  Kalan_6: number;              // Kalan_6, sayı
  "Gelen Oda": number;          // Gelen Oda, sayı
  "Gelen Yetişkin": number;     // Gelen Yetişkin, sayı
  "Gelen Çocuk": number;        // Gelen Çocuk, sayı
  "Gelen Free": number;         // Gelen Free, sayı
  "Gelen Pax": number;          // Gelen Pax, sayı
  "Gelen Top Kişi": number;     // Gelen Top Kişi, sayı
  "Giden Oda": number;          // Giden Oda, sayı
  "Giden Yetişkin": number;     // Giden Yetişkin, sayı
  "Giden Çocuk": number;        // Giden Çocuk, sayı
  "Giden Free": number;         // Giden Free, sayı
  "Giden Pax": number;          // Giden Pax, sayı
  "Giden Toplam Kişi": number;  // Giden Toplam Kişi, sayı
  "Arızalı Oda": number;        // Arızalı Oda, sayı
  "Kapalı Oda": number;         // Kapalı Oda, sayı
  "Yatak(Mevcut)": number;      // Yatak(Mevcut), sayı
  "Yatak(%)": number;           // Yatak(%), sayı
  "Doviz Tutar": number;        // Doviz Tutar, sayı
  "Doviz Gerçek": number;       // Doviz Gerçek, sayı
  "TL Gerçek": number;          // TL Gerçek, sayı
  "Brut Tutar": number;         // Brut Tutar, sayı
  "Birleşme": number;           // Birleşme, sayı
  "Birleşme Trace": number;     // Birleşme Trace, sayı
  Stop: number;                 // Stop, sayı
  "Yatak%": number;             // Yatak%, sayı
  "Pm Sanal": number;           // Pm Sanal, sayı
  "Pax(P)": number;             // Pax(P), sayı
  Bebek: number;                // Bebek, sayı
  "Paxp Yetişkin": number;     // Paxp Yetişkin, sayı
  "Paxp Çocuk": number;        // Paxp Çocuk, sayı
  "Paxp Free": number;         // Paxp Free, sayı
  "Kontenjan Oda": number;      // Kontenjan Oda, sayı
  "Kontenjan Satılan ": number;  // Kontenjan Satılan, sayı
  "Kontenjan Kalan": number;     // Kontenjan Kalan, sayı
  "Tentative Oda": number;       // Tentative Oda, sayı
  "Müşteri Tipi(1)": number;     // Müşteri Tipi(1), sayı
  "Müşteri Tipi(2)": number;     // Müşteri Tipi(2), sayı
  "Müşteri Tipi(3)": number;     // Müşteri Tipi(3), sayı
  "Müşteri Tipi(4)": number;     // Müşteri Tipi(4), sayı
  "Müşteri Tipi(5)": number;     // Müşteri Tipi(5), sayı
  "Müşteri Tipi(6)": number;     // Müşteri Tipi(6), sayı
  "Müşteri Tipi(7)": number;     // Müşteri Tipi(7), sayı
  "Müşteri Tipi(8)": number;     // Müşteri Tipi(8), sayı
  "Comp Oda": number;            // Comp Oda, sayı
  "Info Oda": number;            // Info Oda, sayı
  "House Use Oda": number;       // House Use Oda, sayı
  "Net Oda": number;             // Net Oda, sayı
  "NoShow": number;              // NoShow, sayı
  "Day Use": number;             // Day Use, sayı
  "Forecasttan Kalan(Tek)": number; // Forecasttan Kalan(Tek), sayı
  "Blokajsız Oda": number;       // Blokajsız Oda, sayı
  "Forecast Gelir": number;      // Forecast Gelir, sayı
  "Gun Tarih": string;           // Gün Tarih, string
  "Package Tutar": number;       // Package Tutar, sayı
  "Package Kdvsiz": number;      // Package Kdvsiz, sayı
  "Package Kdv ": number;        // Package Kdv, sayı
  "Package Kon.Vergisi": number; // Package Kon.Vergisi, sayı
  "Arızalı Toplam": number;      // Arızalı Toplam, sayı
  "Pax(Prm)": number;            // Pax(Prm), sayı
  "Ort.Pax(Prm)": number;        // Ort.Pax(Prm), sayı
  "Satılan-Birleşme": number;    // Satılan-Birleşme, sayı
  "Pax(Y/C2)": number;           // Pax(Y/C2), sayı
  "His_For": string;             // His_For, string
  "Otel Kodu": number;           // Otel Kodu, sayı
  "Otel Adı": string;            // Otel Adı, string
  "Son_Yuzdem": number;          // Son Yüzdem, sayı
  "Ort_Oda_Brut": number;        // Ort_Oda_Brut, sayı
  "Ort_Paxp_Brut": number;       // Ort_Paxp_Brut, sayı
  "Fark_Yuzde": number;          // Fark Yüzde, sayı
  "Kdv%": number;                // Kdv%, sayı
  "Kon.Vergisi%": number;        // Kon.Vergisi%, sayı
  "TarihAy": string;             // TarihAy, string
};

type Props = {
  data: DataType[];

};



const allowedPageSizes = [6, 12, 20];
const ForeCastGrid: React.FC<Props> = ({ data }) => {
  const [ dataSource , setDataSource ] = useState<DataType[]>(data)
  useEffect(()=>{
    setDataSource(data);
  },[data])
  

  const customizeText = (cellInfo: { value : number}) => {
    return `%${(cellInfo.value*100).toFixed(2)}`
  }

  const customizeText2 = (itemInfo: any) => `${itemInfo?.value}`


  return (
    <div>
      <DataGrid
        dataSource={dataSource} // Veriyi burada DataGrid'e gönder
        showBorders
        
      >
        <SearchPanel visible width={250} />
        <FilterRow visible />
        <HeaderFilter visible />
        <Column dataField="Tarih" dataType="date" caption="Tarih" />
        <Column dataField="Mevcut" dataType="number" caption="Mevcut"/>
        <Column dataField="Oda" dataType="number" caption="Oda"/>
        <Column dataField="Yetişkin" dataType="number" caption="Yetişkin"/>
        <Column dataField="Çocuk" dataType="number" caption="Çocuk"/>
        <Column dataField="Free" dataType="number" caption="Free"/>
        <Column dataField="Toplam Kişi" dataType="number" caption="Top Kişi"/>
        <Column dataField="Pax" dataType="number" caption="Pax"/>
        <Column dataField="Yuzde%(Net)" dataType="number" caption="Net(%)" format='percent'/>
        <Column dataField="Son Durum" dataType="number" caption="Son Durum"/>
        <Column dataField="Package Tutar" dataType="number" caption="Package"/>
        <Column dataField="Tarih" dataType="date" caption="Tarih"/>
        <Column dataField="Pax(Y/C2)" dataType="number" caption="Pax(Y/C2)"/>
        <Summary>
          <TotalItem
            column="Mevcut"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Oda"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Yetişkin"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Çocuk"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Free"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Toplam Kişi"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Pax"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Yuzde%(Net)"
            summaryType="sum"
            customizeText={customizeText}
            valueFormat="percent"
            />
            <TotalItem
            column="Son Durum"
            summaryType="sum"
            customizeText={customizeText2}
            />
            <TotalItem
            column="Package Tutar"
            summaryType="sum"
            customizeText={customizeText2}
        
            />
        </Summary>
        <Export enabled allowExportSelectedData />
        <Paging defaultPageSize={12} />
        <Pager showPageSizeSelector showInfo allowedPageSizes={allowedPageSizes} />
      </DataGrid>
    </div>
  );
};

export default ForeCastGrid;
