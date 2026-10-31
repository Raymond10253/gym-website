import React from "react";
import PricingCard from "./PricingCard";

export default function Membership() {
    const plans = [
        {
            title: "Basic Plan",
            price: "$29",
            benefits: ["Gym access", "Standard equipment", "1 Free trainer sessions"]
        },
        {
            title: "Standard Plan",
            price: "$49",
            benefits: ["Full Gym access", "All group classes", "Locker room", "3 trainer sessions"]
        },
        {
            title: "Premium Plan",
            price: "$79",
            benefits: ["24/7 VIP Access", "Unlimited Personal training", "Nuitrition Plan Included", "Guest Pass Included"]
        }
    ];
    return(
        <section id="membership" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-4">Membership Plans</h2>
            <div className="max-w-[100px] mx-auto py-1 rounded-full bg-amber-500 mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <PricingCard key={index} title={plan.title} price={plan.price} benefits={plan.benefits} />
                ))}
            </div>
        </section>
    )
}