const TitleLogo = () => {
  return (
    <svg 
      viewBox="0 0 800 200" 
      className="w-full h-auto max-w-2xl"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* A */}
      <path 
        d="M 50 150 L 80 50 L 110 150 M 65 110 L 95 110" 
        stroke="hsl(194 100% 15%)" 
        strokeWidth="8" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* ROTINA */}
      <text 
        x="130" 
        y="145" 
        fontFamily="Trajan Pro, serif" 
        fontSize="85" 
        fontWeight="700" 
        fill="hsl(194 100% 15%)"
        letterSpacing="2"
      >
        ROTINA
      </text>
      
      {/* QUE - com Q modificado */}
      <g transform="translate(0, 165)">
        {/* Q customizado - cauda mais suave */}
        <g transform="translate(20, 0)">
          <circle 
            cx="50" 
            cy="30" 
            r="32" 
            stroke="hsl(188 99% 39%)" 
            strokeWidth="8" 
            fill="none"
          />
          <path 
            d="M 70 48 L 80 58" 
            stroke="hsl(188 99% 39%)" 
            strokeWidth="7" 
            strokeLinecap="round"
          />
        </g>
        
        <text 
          x="130" 
          y="55" 
          fontFamily="Trajan Pro, serif" 
          fontSize="85" 
          fontWeight="700" 
          fill="hsl(188 99% 39%)"
          letterSpacing="2"
        >
          UE
        </text>
      </g>
      
      {/* CURA */}
      <text 
        x="20" 
        y="285" 
        fontFamily="Trajan Pro, serif" 
        fontSize="85" 
        fontWeight="700" 
        fill="hsl(188 99% 39%)"
        letterSpacing="2"
      >
        CURA
      </text>
    </svg>
  );
};

export default TitleLogo;