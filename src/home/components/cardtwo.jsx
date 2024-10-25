// src/WelcomeCard.js
import React from "react";
import dalleimage from "../../assets/Dalle-dog.png"

function ChawalCard({setLogin}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md mx-auto items-center">
        <img
          src={dalleimage}
          alt="Dog"
          className="w-full h-fit"
        />
        
      </div>
    </div>
  );
}

export default ChawalCard;