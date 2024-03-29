import "./Disease.css";
import React, { useState, useEffect } from 'react';


const Disease = () => {
   // State variables to store disease data and search query
   const [diseaseData, setDiseaseData] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
 
   // Fetch disease data from an API (example)
   useEffect(() => {
     const fetchDiseaseData = async () => {
       try {
         const response = await fetch('https://api.example.com/diseases');
         const data = await response.json();
         setDiseaseData(data);
       } catch (error) {
         console.error('Error fetching disease data:', error);
       }
     };
 
     fetchDiseaseData();
   }, []);
 
   // Function to handle search query change
   const handleSearchChange = (event) => {
     setSearchQuery(event.target.value);
   };
 
   // Filter disease data based on search query
   const filteredDiseases = diseaseData.filter(disease =>
     disease.name.toLowerCase().includes(searchQuery.toLowerCase())
   );
  return (
<div>
      <h2>Disease Solutions</h2>
      {/* Platform for farmers to post complaints (not implemented in this example) */}
      <p>If you have a complaint about a crop disease, please contact our support team.</p>
      
      {/* Search functionality */}
      <div>
        <input type="text" placeholder="Search for a disease..." value={searchQuery} onChange={handleSearchChange} />
      </div>
      
      {/* Expert solutions and advice for common crop diseases */}
      <div>
        <h3>Common Crop Diseases</h3>
        {filteredDiseases.length === 0 ? (
          <p>No diseases found.</p>
        ) : (
          <ul>
            {filteredDiseases.map((disease, index) => (
              <li key={index}>
                <h4>{disease.name}</h4>
                <p>{disease.solution}</p>
                {/* Add more details about the disease as needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Disease