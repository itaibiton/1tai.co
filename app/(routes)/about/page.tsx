"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timeline = [
    {
        year: "2020",
        title: "Company Founded",
        description: "Started with a vision to transform digital presence for businesses."
    },
    {
        year: "2021",
        title: "Expanded Services",
        description: "Added social media management and marketing services."
    },
    {
        year: "2022",
        title: "Video Production",
        description: "Launched professional video editing services."
    },
    {
        year: "2023",
        title: "Global Reach",
        description: "Expanded to serve clients worldwide."
    }
];

const values = [
    {
        title: "Innovation",
        description: "Constantly evolving and adopting new technologies."
    },
    {
        title: "Quality",
        description: "Delivering excellence in every project."
    },
    {
        title: "Integrity",
        description: "Building trust through transparent communication."
    },
    {
        title: "Growth",
        description: "Focused on client success and continuous improvement."
    }
];

export default function About() {
    return (
        <div className="min-h-screen py-20">
            {/* Vision Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About 1tai.co</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        We&apos;re dedicated to helping businesses thrive in the digital age through innovative solutions and expert services.
                    </p>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Our Values
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{value.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Our Journey
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="2020" className="w-full">
                        <TabsList className="grid grid-cols-4 mb-8">
                            {timeline.map((item) => (
                                <TabsTrigger key={item.year} value={item.year}>
                                    {item.year}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {timeline.map((item) => (
                            <TabsContent key={item.year} value={item.year}>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base">{item.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </div>
    );
} 