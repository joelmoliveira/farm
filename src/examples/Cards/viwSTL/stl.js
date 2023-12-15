import React, { useState } from "react";
import { STLLoader } from "three/addons/loaders/STLLoader";
import { Box3, Vector3 } from "three";
import * as THREE from "three";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dimensions, setDimensions] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file.name.endsWith(".stl")) {
      const loader = new STLLoader();

      loader.load(
        URL.createObjectURL(file),
        (geometry) => {
          // Create a mesh from the loaded STL geometry
          const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
          const mesh = new THREE.Mesh(geometry, material);

          // Calculate bounding box
          const box = new Box3().setFromObject(mesh);
          const dimensionsInMm = box.getSize(new Vector3()).multiplyScalar(1000);

          setDimensions(dimensionsInMm);
        },
        undefined, // Pass undefined for the progress callback when not used
        (error) => {
          console.error("Error loading STL file:", error);
          alert("Error loading STL file. Please check the file and try again.");
        }
      );
    } else {
      alert("Invalid file type. Please upload an STL file.");
    }

    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" accept=".stl" onChange={handleFileUpload} />
      {selectedFile && dimensions && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>Dimensions (mm):</p>
          <ul>
            <li>X: {dimensions.x.toFixed(2)} mm</li>
            <li>Y: {dimensions.y.toFixed(2)} mm</li>
            <li>Z: {dimensions.z.toFixed(2)} mm</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
