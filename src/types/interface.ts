import { ReactNode } from "react";

export interface Words {
  text: string;
  imgPath: string;
}

export interface ButtonProp {
  className: string;
  text: string;
  id: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIcons {
  imgPath: string;
}

export interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

export interface Experience {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface GlowCardProps {
  children: ReactNode;
  card: Experience;
  index: number;
}
