/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import ForeCastGrid from '../components/ForeCastGrid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// import FilterForm from '../components/FilterForm';
import axios from 'axios';
import ChartForeCast from '../components/Chart';


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

interface RequestBody {
  db_Id: number;                  // Veritabanı ID'si
  xRez_Sirket: number;           // Rezervasyon şirketi
  xBas_Tar: string;              // Başlangıç tarihi (ISO formatında string)
  xBit_Tar: string;              // Bitiş tarihi (ISO formatında string)
  xtip: number;                  // Tip (sayı)
  kon1: string;                  // Konum 1 (string)
  kon2: string;                  // Konum 2 (string)
  xchkFis_Fazla_otel_10: number; // Kontrol fişi fazla otel (sayı)
  bas_Yil: number;               // Başlangıç yılı (sayı)
  bit_Yil: number;               // Bitiş yılı (sayı)
  fisrci_Kapalioda_10: number;   // Kapalı oda sayısı (sayı)
  xRez_C_W: string;              // Rezervasyon C/W (string)
  xSistem_Tarihi: string;        // Sistem tarihi (ISO formatında string)
  xAlis_Tarihi: string;          // Alış tarihi (ISO formatında string)
  sistem_Bas1: string;           // Sistem başlangıç tarihi (ISO formatında string)
  sistem_Bit1: string;           // Sistem bitiş tarihi (ISO formatında string)
  pmdahil_10: number;            // PM dahil (sayı)
  tip_1: string;                 // Tip 1 (string)
  xFis_Bela_tutar_10: number;    // Fiili bela tutar (sayı)
  trace_Dus_10: number;          // Trace düşme sayısı (sayı)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cev_01: any | null;            // CEV 01 (herhangi bir tip veya null)
}


const Page = () => {
  const [value, setValue] = useState('1');
  const [data, setData] = useState<DataType[]>([]);
  const [requestBody, setRequestBody]= useState<RequestBody>(
    {
      "db_Id": 9,
      "xRez_Sirket": 9,
      "xBas_Tar": "2024-06-01",
      "xBit_Tar": "2024-06-16",
      "xtip": 1,
      "kon1": "ALL",
      "kon2": "BB",
      "xchkFis_Fazla_otel_10": 0,
      "bas_Yil": 2022,
      "bit_Yil": 2022,
      "fisrci_Kapalioda_10": 0,
      "xRez_C_W": "C",
      "xSistem_Tarihi": "2024-01-01",
      "xAlis_Tarihi": "2024-01-01",
      "sistem_Bas1": "2020-01-01",
      "sistem_Bit1": "2029-01-01",
      "pmdahil_10": 0,
      "tip_1": "001",
      "xFis_Bela_tutar_10": 0,
      "trace_Dus_10": 0,
      "cev_01": null
    }
  )
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [xBas, setXBas] = useState<any>(dayjs(requestBody.xBas_Tar));
  const [xBit, setxBit] = useState<any>(dayjs(requestBody.xBit_Tar));
  const [xSistem, setXSistem] = useState<any>(dayjs(requestBody.xSistem_Tarihi));
  const [xAlis, setXAlis] = useState<any>(dayjs(requestBody.xAlis_Tarihi));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://frontapi.rmosweb.com/api/Procedure/StpRmforKlasik_2', 
        requestBody, 
        
      ); 
      setData(response.data?.value);
    } catch (error) {
      console.error('Veri alma hatası:', error);
    } finally {
      setLoading(false); // Loading durumunu durdur
    }
  };

  useEffect(() => {
      fetchData()
  }, [requestBody]);

  // useEffect(() => {
  //   fetchData();
  // }, [requestBody]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSave = () => {
    setRequestBody((prevState) => ({
      ...prevState,
      xBas_Tar: xBas,
      xBit_Tar: xBit,
      xSistem_Tarihi: xSistem, 
      xAlis_Tarihi: xAlis
    }));
    setOpen(false);
  };

  if(loading){
    return(
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full height
        }}
      >
        <CircularProgress />
      </Box>
    )
    
  }
  
  return (
    <div className='flex flex-col w-full'>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab className='font-bold text-xs' label="Forecast List" value="1" />
            <Tab className='font-bold text-xs' label="Forecast Grafik" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
          {data.length>1 && (
            <div className='flex place-content-end mb-2'>
            <Button variant="outlined" onClick={handleClickOpen}>
              <FilterListIcon />
            </Button>
            </div>
          )}
        <ForeCastGrid data={data}/>
          </div>
          <div>
          <Dialog
            fullWidth
            
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle className='self-center'>
              Filtre
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              
                <div className='flex flex-col gap-3 place-items-center'>
                  <div className='flex -mx-6 gap-1'>
                    <div className='flex'>
                      <DatePicker 
                        value={xBas}
                        label="Başlangıç Tarihi" 
                        onChange={(newValue: any) => setXBas(newValue)}
                        format="DD/MM/YYYY" 
                      />
                    </div>
                    <div className='flex'>
                      <DatePicker 
                        value={xBit}
                        label="Bitiş Tarihi" 
                        onChange={(newValue: any) => setxBit(newValue)}
                        format="DD/MM/YYYY" 
                      />
                    </div>
                  </div>
                  <div className='flex -mx-6 gap-1'>
                    <DatePicker 
                      value={xSistem}
                      label="Sistem Tarihi" 
                      onChange={(newValue: any) => setXSistem(newValue)}
                      format="DD/MM/YYYY" 
                    />
                    <DatePicker 
                      value={xAlis}
                      label="Alış Tarihi" 
                      onChange={(newValue: any) => setXAlis(newValue)}
                      format="DD/MM/YYYY" 
                    />
                  </div>
                </div>
            
            </LocalizationProvider>
            </div>
            <DialogActions>
              <Button autoFocus onClick={handleSave}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className='flex w-full'>
          <ChartForeCast data={data}/>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default Page