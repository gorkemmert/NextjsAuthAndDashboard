// 'use client'
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import { Box, TextField, Select, MenuItem } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';

// const FilterForm = () => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box className="p-2 bg-white rounded shadow-md mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
//         <div className="flex flex-col sm:flex-row sm:items-center">
//           <TextField
//             label="DB ID"
//             type="number"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           />
//           <TextField
//             label="X Rez. Şirket"
//             type="number"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           />
//           <DatePicker
//             label="Başlangıç Tarihi"
//             renderInput={(params: any) => (
//               <TextField {...params} className="mb-2 sm:mb-0 sm:mr-2" size="small" />
//             )}
//           />
//           <DatePicker
//             label="Bitiş Tarihi"
//             renderInput={(params: any) => (
//               <TextField {...params} className="mb-2 sm:mb-0 sm:mr-2" size="small" />
//             )}
//           />
//         </div>

//         <div className="flex flex-col sm:flex-row sm:items-center mt-2 sm:mt-0">
//           <Select
//             label="Konu 1"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           >
//             <MenuItem value="ALL">ALL</MenuItem>
//             <MenuItem value="BB">BB</MenuItem>
//           </Select>
//           <TextField
//             label="X Çek Fiş Fazla Otel"
//             type="number"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           />
//           <TextField
//             label="Baş Yıl"
//             type="number"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           />
//           <TextField
//             label="Bit Yıl"
//             type="number"
//             className="mb-2 sm:mb-0 sm:mr-2"
//             variant="outlined"
//             size="small"
//           />
//         </div>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default FilterForm;
