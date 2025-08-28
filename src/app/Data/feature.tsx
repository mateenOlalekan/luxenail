import { Shield, Sparkles, Heart, Clock, Users, Star } from "lucide-react";
import {JSX} from "react";

interface FeatureType {
    icon: JSX.Element;
    title: string;
    description: string;
    stats: string;
  }

interface testimonial{
    text:string;
    author:string;
    rating:number;
}

export const features :FeatureType[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Sanitation",
      description:
        "Hospital-grade sterilization protocols and single-use tools ensure your safety and peace of mind.",
      stats: "100% Sterile",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Products",
      description:
        "We use only premium, vegan-friendly, and cruelty-free products from top luxury brands.",
      stats: "Premium Brands",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description:
        "Customized treatments tailored to your specific nail needs and personal style preferences.",
      stats: "Tailored Experience",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lasting Results",
      description:
        "Our techniques and products ensure your manicure stays flawless for weeks, not just days.",
      stats: "3+ Weeks Duration",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Technicians",
      description:
        "Our team consists of master nail artists with 10+ years of experience and continuous training.",
      stats: "10+ Years Experience",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Experience",
      description:
        "From the moment you walk in, enjoy a relaxing, customer-first atmosphere designed for your comfort and satisfaction.",
      stats: "Top Rated",
    },
  ];

  const testimonials = [
    {
      text: "The best nail experience I've ever had! The attention to detail is incredible.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Worth every penny. My nails still look perfect after three weeks!",
      author: "Michelle Rodriguez",
      rating: 5
    },
    {
      text: "The sanitation standards here are impeccable. I feel completely safe.",
      author: "Dr. Emily Chen",
      rating: 5
    }
  ];