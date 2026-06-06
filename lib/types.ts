// Tipos compartidos para la aplicación

export interface Tour {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string[];
  audience: string;
  duration: string;
  physicalLevel: string;
  cta: string;
  priceEsBRL: string;
  priceUSD: string;
}

export interface BirdingSpot {
  id: number;
  name: string;
  number: string;
  description: string;
  features: string[];
  commonBirds: string[];
  accessibility: string;
}

export interface BirdCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  species: string[];
  season: string;
}

export interface IncludeItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhatToBringCategory {
  category: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface ContactInfo {
  name: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  website: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
}
