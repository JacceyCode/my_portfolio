import { ReactNode } from "react";
import { IconType } from "react-icons";

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
  card: Experience | { review: string };
  index: number;
}

export interface TechIcons {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export interface TechImages {
  name: string;
  imgPath: string;
}

export interface TechIconProps {
  model: TechIcons;
}

export interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface SocialContact {
  name: string;
  url: string;
  iconName: IconType;
  iconColor: string;
  animation: string;
}
