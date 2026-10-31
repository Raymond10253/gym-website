export default function Programs() {
    const programs = [
        {
            title: "weight loss",
            description: "high-density interval training and fat burning circuits designed to accelerate metabolism and shed pounds safely",
            duration: "45 mins/session",
            difficulty: "intermediate"
        },
        {
            title: "muscle building",
            description: "Targeted hypertrophy training focusing on progressive overload, compound lifts and structured muscle isolation",
            duration: "60 min/session",
            difficulty: "advanced"
        },
        {
            title: "Cardio & endurance",
            description: "Build stamina, improve heart health, and improve overall lung capacity through running, rowing and agility drills.",
            duration: "40 min/session",
            difficulty: "All level"
        },
        {
            title: "Yoga and flexibility",
            description: "Improve core stability, joint mobility, and mental focus through restorative flow and deep-stretch routines.",
            duration: "50 min/session",
            difficulty: "Beginner"
        },
        {
            title: "Crossfit",
            description: "Constant varied functional movements performed at high intensity to build raw power and physical readiness.",
            duration: "50 min/session",
            difficulty: "Advanced"
        },
        {
            title: "Personal Training",
            description: "One-on-one coaching customized to your body type, medical background, and unique fitness milestones.",
            duration: "flexible",
            difficulty: "customized"
        }

    ];

    return (
        <section id="programs" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em]">
                    Our offering
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                    Find the program that fits your goals
                </h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                    Choose from expert-led training designed to help you build strength, improve fitness, and feel your best.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                    <article
                        key={program.title}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-amber-500 transition hover:scale-105"
                    >
                        <h3 className="text-lg font-bold text-white uppercase">
                            {program.title}
                        </h3>
                        <p className="text-slate-400 mt-3 leading-relaxed">
                            {program.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6 text-sm">
                            <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                                {program.duration}
                            </span>
                            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-500 capitalize">
                                {program.difficulty}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}