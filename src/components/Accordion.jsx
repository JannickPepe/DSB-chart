/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import VerticalChart from "./charts/Radar";
import BarGraph from "./charts/Bar";
import ErrorbarTwo from "./charts/ErrorbarTwo";


//
const AccordionSolutions = () => {

    const [open, setOpen] = useState(solutions[0].id);


    return (
        <section className=" bg-white my-10 lg:my-20">
            <div className="w-full max-w-7xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols">
                <div>
                    <h3 className="text-4xl font-bold mb-8 text-red-400">Graph Categories</h3>
                    <div className="flex flex-col gap-4">
                        {solutions.map((q) => {
                            return (
                                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

//
const Solution = ({ title, description, index, open, setOpen, graph }) => {

    const isOpen = index === open;

    return (
        <div onClick={() => setOpen(index)} className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer" >
            <motion.div
                initial={false}
                animate={{
                height: isOpen ? "640px" : "72px",
                }}
                className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
            >
                <div>
                    <motion.p
                        initial={false}
                        animate={{
                        color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
                        }}
                        className="text-xl font-medium w-fit bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text"
                    >
                        {title}
                    </motion.p>
                    <motion.p
                        initial={false}
                        animate={{
                        opacity: isOpen ? 1 : 0,
                        }}
                        className="mt-4 text-slate-500 text-transparent max-w-2xl"
                    >
                        {description}
                    </motion.p>
                    {graph}
                </div>
        
                <motion.button
                initial={false}
                animate={{
                    opacity: isOpen ? 1 : 0,
                }}
                className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-red-600 to-orange-600 text-white"
                >
                    <span>Learn more</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                opacity: isOpen ? 1 : 0,
                }}
                className="absolute inset-0 z-10 bg-gradient-to-r from-red-600 to-orange-600"
            />
            <div className="absolute inset-0 z-0 bg-slate-200" />
        </div>
    );

};

export default AccordionSolutions;

//
const solutions = [
    {
        id: 1,
        title: "Accidents Graph",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
        graph: <ErrorbarTwo />,
    },
    {
        id: 2,
        title: "Responsible damage Graph",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
        graph: <VerticalChart />,
    },
    {
        id: 3,
        title: "Arrivel late Graph",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
        graph: <BarGraph />,
    },
];