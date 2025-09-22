import React from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import sparkles from "../../assets/icons/sparkles.svg";

type IconProps = {
  size: number;
};

export const Moon: React.FC<IconProps> = ({ size }) => (
  <img src={moon} alt="Moon Icon" width={size} height={size} />
);

export const Sun: React.FC<IconProps> = ({ size }) => (
  <img src={sun} alt="Sun Icon" width={size} height={size} />
);

export const Sparkles: React.FC<IconProps> = ({ size }) => (
  <img src={sparkles} alt="Sparkles Icon" width={size} height={size} />
);
