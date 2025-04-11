"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const skills = [
    { name: "Web Development", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Social Media", level: 85 },
    { name: "Video Editing", level: 80 },
    { name: "Marketing", level: 85 },
    { name: "Project Management", level: 90 }
];

const projects = [
    {
        title: "E-commerce Platform",
        description: "Built a scalable e-commerce solution with Next.js and Stripe integration.",
        tech: ["Next.js", "Stripe", "Tailwind CSS"]
    },
    {
        title: "Social Media Dashboard",
        description: "Created a comprehensive social media management dashboard.",
        tech: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Video Production Suite",
        description: "Developed a video editing and production management system.",
        tech: ["Vue.js", "Python", "FFmpeg"]
    }
];

export default function AboutItai() {
    return (
        <div className="min-h-screen py-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <Avatar className="w-48 h-48">
                            <AvatarImage src="/placeholder-profile.jpg" alt="Itai Biton" />
                            <AvatarFallback>IB</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Itai Biton</h1>
                            <p className="text-xl text-gray-600 mb-4">
                                Full-Stack Developer & Digital Services Expert
                            </p>
                            <p className="text-gray-600">
                                Passionate about creating innovative digital solutions and helping businesses grow their online presence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Skills & Expertise
                </motion.h2>
                <div className="max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-6"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-gray-600">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Notable Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
} 