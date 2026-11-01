import React from "react";

export default function Footer() {
    return (
        <>
            <div className="flex justify-between py-10 border-t border-slate-800 text-slate-400 bg-slate-950 px-5">
                <div className="text-sm uppercase text-amber-500">Fitness club</div>
                <div>
                    <a href="linkedin.com" className="text-amber-500">
                       <i className="fa-brands fa-linkedin text-xl"></i> 
                    </a>
                </div>
            </div>
        </>
    )
}