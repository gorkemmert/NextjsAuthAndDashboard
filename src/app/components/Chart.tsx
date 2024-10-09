/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState} from 'react';
import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip,
} from 'devextreme-react/chart';

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

// const dataSource = [{
//     state: 'Germany',
//     young: 5.3,
//     middle: 26,
//     older: 8,
//   }, {
//     state: 'Japan',
//     young: 6.45,
//     middle: 30.5,
//     older: 11.22,
//   }, {
//     state: 'Russia',
//     young: 12.56,
//     middle: 45.5,
//     older: 6.5,
//   }, {
//     state: 'USA',
//     young: 32,
//     middle: 87,
//     older: 15,
//   },
//   {
//     state: 'TR',
//     young: 32,
//     middle: 87,
//     older: 15,
//   },
//   {
//     state: 'BR',
//     young: 32,
//     middle: 87,
//     older: 15,
//   },
//   {
//     state: 'KZ',
//     young: 32,
//     middle: 87,
//     older: 15,
//   }

// ];

type Props = {
    data: DataType[];
  
  };

function customizeTooltip(arg: { seriesName: string; valueText: string; }) {
  return {
    text: `${arg.valueText}`,
  };
}

const ChartForeCast: React.FC<Props> = ({data}) => {

    const [dataSource , setDataSource] = useState<any>()

    function createNewList(data: any) {
        return data.map((item: any) => {
          const red = item.Oda;
          const green = item.Mevcut - red;
          const percent = (red / item.Mevcut) * 100;
          const state = item["Gun Tarih"];
      
          return {
            red: red,
            green: green,
            percent: percent.toFixed(2),
            state: state
          };
        });
      }
  
   useEffect(() => {
    const newList= createNewList(data)
    setDataSource(newList)
   },[data])


  return (
    <Chart
      className='w-full'
      id="chart"
      title="ForeCast Chart"
      dataSource={dataSource}
    >
      <CommonSeriesSettings argumentField="state" type="stackedbar" />
      <Series
        valueField="red"
        name="red"
      />
      <Series
        valueField="green"
        name="green"
      />
      {/* <Series
        valueField="older"
        name="65 and older"
      /> */}
      <ValueAxis position="left">
        <Title text="count" />
      </ValueAxis>
      <Legend
        columnCount={2}
        horizontalAlignment="right"
        position="inside"
      />
      <Export enabled={true} />
      <Tooltip
        enabled={true}
        location="edge"
        customizeTooltip={customizeTooltip}
      />
    </Chart>
  );
}

export default ChartForeCast;