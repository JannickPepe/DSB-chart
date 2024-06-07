/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {

    return (
        <div className="mx-auto max-w-3xl px-4 py-4 md:py-6 mb-6">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat
                    num={45}
                    suffix="%"
                    subheading="Lorem ipsum dolor sit amet consectetur"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={15.5}
                    decimals={1}
                    suffix="K+"
                    subheading="Lorem ipsum dolor sit amet consectetur"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={20}
                    suffix="B+"
                    subheading="Lorem ipsum dolor sit amet consectetur"
                />
            </div>
        </div>
    );

};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
    
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center text-lg font-semibold sm:text-2xl">
                <span ref={ref}></span>
                {suffix}
            </p>
            <p className="max-w-48 text-center text-neutral-600">
                {subheading}
            </p>
        </div>
    );

};