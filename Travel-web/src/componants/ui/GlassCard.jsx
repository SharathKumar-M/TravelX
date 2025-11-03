import React from "react";

const GlassCard = () => {
  return (
    <div className="w-[350px] h-[200px] rounded-2xl 
      bg-white/10 border border-white/20 
      backdrop-blur-xl backdrop-saturate-150 
      shadow-lg flex flex-col justify-center items-center text-white">
      <h2 className="text-lg font-semibold">Glassy Card</h2>
      <p className="text-sm opacity-80">iPhone-style frosted glass effect</p>
    </div>
  );
};

export default GlassCard;
