import { Sparkles, LayoutTemplate, Download, Eye } from "lucide-react";
import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "AI-Powered",
    description: "Smart content suggestions and formatting recommendations",
    icon: Sparkles,
  },
  {
    title: "Professional Templates",
    description: "Choose from dozens of ATS-friendly templates",
    icon: LayoutTemplate,
  },
  {
    title: "Easy Export",
    description: "Download your resume in PDF, Word, or plain text format",
    icon: Download,
  },
  {
    title: "Real-Time Preview",
    description: "See changes instantly as you build your resume",
    icon: Eye,
  },
];