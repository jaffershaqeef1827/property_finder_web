// import React, { useEffect, useState } from "react";
// import SearchForm from "../../components/common/SearchForm";
// import People from "../../assets/people.jpg";
// import Building from "../../assets/building.jpg";
// import PropertyImage from "../../assets/unsplash_DRkknTgT1ak.png";

// const Dashboard = () => {
//   const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [properties, setProperties] = useState([]);

//   const fetchProperties = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(`${baseUrl}/api/properties`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Properties API raw data:", data);

//       // Handle different shapes of API responses
//       let propertiesArray = [];

//       if (Array.isArray(data)) {
//         propertiesArray = data; // API returned an array directly
//       } else if (Array.isArray(data.properties)) {
//         propertiesArray = data.properties; // API returned { properties: [...] }
//       } else if (Array.isArray(data.data)) {
//         propertiesArray = data.data; // API returned { data: [...] }
//       }

//       setProperties(propertiesArray);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//       setError(error.message);
//       setProperties([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);
//   return (
//     <div className="h-full w-full bg-gray-50">
//       <div className="relative flex h-full w-full">
//         {/* left section */}
//         <div className="w-1/2  flex flex-col justify-center pl-32 gap-10 relative z-10">
//           <div>
//             <h1 className="text-[56px] font-bold  leading-tight">
//               Buy, rent, or sell your property easily
//             </h1>
//             <p className="text-[18px] text-gray-600 mt-4 max-w-[450px]">
//               A great platform to buy, sell, or even rent your properties
//               without any commissions.
//             </p>
//           </div>

//           <div className="absolute top-[60%] translate-y-[-50%] -right-48 z-20">
//             <SearchForm />
//           </div>

//           {/* Stats */}
//           <div className="flex gap-10  mt-[200px]">
//             <div className="flex flex-col gap-5">
//               <img src={People} alt="People" className="w-10 h-10 " />
//               <div>
//                 <h1 className="text-[24px] font-bold text-[#F06565]">
//                   50k+ renters{" "}
//                 </h1>
//                 <p className="text-gray-700 font-medium">
//                   believe in our service
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-5 ">
//               <img src={Building} alt="Building" className="w-10 h-10 " />
//               <div>
//                 <h1 className="text-[24px] font-bold text-[#F06565]">
//                   10k+ properties{" "}
//                 </h1>
//                 <p className="text-gray-700 font-medium">
//                   houses ready for occupancy
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right section */}
//         <div className="w-1/2">
//           <img
//             src={PropertyImage}
//             alt="Property"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* properties */}
//       <div>
//         {Array.isArray(properties) &&
//           properties.map((property) => (
//             <div key={property._id}>{property?.bathrooms}</div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";

export default function BulkUpload() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const baseUrl = "http://localhost:5000/api"; // Your API base URL

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      alert("Please select at least one Excel file");
      return;
    }

    setLoading(true);

    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTE5NWFmNmU3MWQzNzg5N2IzMGUxYyIsInJvbGUiOiJhZ2VudCIsInVzZXJJZCI6IjJlMzIyYTIyLWU2NDQtNDY0Yy1iZGY3LWRmMThkNjE5NzhjNyIsIm5hbWUiOiJBZ2VudDEiLCJlbWFpbCI6ImFnZW50MUBnbWFpbC5jb20iLCJpYXQiOjE3NTUxNjk2NTIsImV4cCI6MTc2Mjk0NTY1Mn0.Zlo8LCuFwQI9FVOxGL6FkYDqR6tjmixA2ob6QYCoqf0"
      const formData = new FormData();

      // Append all selected files
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("uploadFiles", selectedFiles[i]);
      }

      const response = await fetch(`${baseUrl}/upload/bulkupload`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
        },
        body: formData,
      });

      const data = await response.json();
      setResult(data);

      if (!response.ok) {
        console.error("Error:", data);
        alert(data.message || "Upload failed");
      } else {
        alert("Upload successful!");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Bulk Property Upload</h2>
      <input
        type="file"
        accept=".xlsx,.xls"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Excel"}
      </button>

      {result && (
        <pre style={{ background: "#f0f0f0", padding: "1rem" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
