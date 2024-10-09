/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react";
import BlacklistGrid from "@/app/components/BlacklistGrid";
import axios from "axios";

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


interface RequestBody {
  db_Id: number;                  
  Adi: string;          
}

const Blacklist = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [requestBody, setRequestBody]= useState<RequestBody>(
    {
      "db_Id": 9,
      "Adi": "ALL?"
  }
  )

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://frontapi.rmosweb.com/api/Kara/Getir_Kod', 
        requestBody, 
        
      ); 
      setData(response.data?.value);
    } catch (error) {
      console.error('Veri alma hatası:', error);
    } 
  };


  const fetchInsert = async (body : DataType) => {
    try {
      const response = await axios.post(
        'https://frontapi.rmosweb.com/api/Kara/Ekle', 
        body,  
      ); 
      fetchData()
    } catch (error) {
      fetchData()
      console.error('Veri alma hatası:', error);
    } 
  };


  const onRowInserted = (e: any) => {
    const tempObject: DataType= { 
        db_Id: 9,
        Id: 0, 
    };
    tempObject.Adi = e.data.Adi;
    tempObject.Soy = e.data.Soy;
    tempObject.Tcno = e.data.Tcno;
    tempObject.Kimlik_no = e.data.Kimlik_no;
    tempObject.Dogum_tarihi = e.data.Dogum_tarihi;
    tempObject.Aciklama = e.data.Aciklama;
    fetchInsert(tempObject);
  }

  const onRowUpdated = (e: any) => {
    const tempObject: DataType= { 
        db_Id: 9,
        Id: e.data.Id, 
    };
    tempObject.Adi = e.data.Adi;
    tempObject.Soy = e.data.Soy;
    tempObject.Tcno = e.data.Tcno;
    tempObject.Kimlik_no = e.data.Kimlik_no;
    tempObject.Dogum_tarihi = e.data.Dogum_tarihi;
    tempObject.Aciklama = e.data.Aciklama;
    fetchInsert(tempObject)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-full p-6">
        <BlacklistGrid data={data} onRowInserted={onRowInserted} onRowUpdated={onRowUpdated}/>
    </div>
  )
}

export default Blacklist