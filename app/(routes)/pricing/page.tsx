"use client";

import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic",
        price: "499",
        description: "Perfect for small businesses starting their digital journey",
        features: [
            "Basic Website Development",
            "Social Media Setup",
            "Basic SEO Optimization",
            "Monthly Performance Report",
            "Email Support"
        ],
        highlighted: false
    },
    {
        name: "Professional",
        price: "999",
        description: "Ideal for growing businesses seeking comprehensive digital presence",
        features: [
            "Advanced Website Development",
            "Social Media Management",
            "Content Creation",
            "SEO Optimization",
            "Analytics Dashboard",
            "Priority Support",
            "Monthly Strategy Call"
        ],
        highlighted: true
    },
    {
        name: "Enterprise",
        price: "1999",
        description: "Complete digital solution for established businesses",
        features: [
            "Custom Web Application",
            "Full Social Media Strategy",
            "Video Production",
            "Advanced SEO",
            "Marketing Campaign",
            "24/7 Priority Support",
            "Weekly Strategy Calls",
            "Custom Analytics"
        ],
        highlighted: false
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen py-20">
            {/* Header Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
                    <p className="text-xl text-gray-600">
                        Choose the perfect plan for your business needs. All plans include our core services with varying levels of support and features.
                    </p>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 flex flex-col justify-between rounded-2xl ${plan.highlighted
                                ? "bg-black text-white shadow-xl scale-105"
                                : "bg-white border border-gray-200"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">${plan.price}</span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                                <p className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                                    {plan.description}
                                </p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg
                                            className={`w-5 h-5 mr-2 ${plan.highlighted ? "text-white" : "text-black"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full 
                                     py-3 rounded-full font-semibold ${plan.highlighted
                                        ? "bg-white text-black hover:bg-gray-100"
                                        : "bg-black text-white hover:bg-gray-800"
                                    } transition-colors`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 mt-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        {
                            question: "Can I change my plan later?",
                            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                        },
                        {
                            question: "What payment methods do you accept?",
                            answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
                        },
                        {
                            question: "Do you offer custom plans?",
                            answer: "Yes, we can create custom plans for businesses with specific needs. Contact us to discuss your requirements."
                        }
                    ].map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-gray-50"
                        >
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
} 