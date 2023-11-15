import React, { useState } from "react";
import { BarcodeReader } from "dynamsoft-javascript-barcode";
BarcodeReader.license = "DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9";
BarcodeReader.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/";

const ImageBarcodeReader = () => {
  const [barcodeResults, setBarcodeResults] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const readBarcodeFromImage = async () => {
    if (!imageUrl) {
      alert("Please provide an image URL.");
      return;
    }
    try {
      const scanner = await BarcodeReader.createInstance();

      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const results = await scanner.decode(blob);
      setBarcodeResults(results);
      console.log("resultsresultsresults", results);
      scanner.destroy();
    } catch (error) {
      console.error("Error reading barcode from URL:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={readBarcodeFromImage}>Read Barcode from URL</button>

      <ul>
        {barcodeResults.map((result, index) => (
          <li key={index}>{result.barcodeText}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageBarcodeReader;
