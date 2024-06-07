

const ProgressBar = () => {

    return (
        <main>
            <div className=" flex justify-center items-center dark:bg-gray-800">
                <div className="max-w-2xl mx-auto w-full">

                    <h4 className="text-3xl md:text-2xl dark:text-white font-bold mb-6 mt-6">Additional Graph Data</h4>

                    <div className="mb-7">
                        <div className="flex justify-between py-1">
                            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Being Late on fault</span>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth="1" fillOpacity="0"
                                style={{strokeDasharray: '80px', strokeDashoffset: '0px'}}>
                            </path>
                        </svg>
                        <div>
                            <div className="grid grid-cols-10 grid-rows-1 ml-6">
                                <div>10</div>
                                <div>20</div>
                                <div>30</div>
                                <div>40</div>
                                <div>50</div>
                                <div>60</div>
                                <div>70</div>
                                <div>80</div>
                                <div>90</div>
                                <div>100</div>
                            </div>
                            <p className="border-b-2 border-red-400 max-w-[40px]">Days</p>
                        </div>
                    </div>

                    <div className="mb-7">
                        <div className="flex justify-between py-1">
                            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Blame it on others</span>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#5185D4" strokeWidth="1" fillOpacity="0"
                                style={{strokeDasharray: '95px', strokeDashoffset: '0px'}}>
                            </path>
                        </svg>
                        <div>
                            <div className="grid grid-cols-10 grid-rows-1 ml-6">
                                <div>10</div>
                                <div>20</div>
                                <div>30</div>
                                <div>40</div>
                                <div>50</div>
                                <div>60</div>
                                <div>70</div>
                                <div>80</div>
                                <div>90</div>
                                <div>100</div>
                            </div>
                            <p className="border-b-2 border-red-400 max-w-[40px]">Days</p>
                        </div>
                    </div>

                    <div className="mb-7">
                        <div className="flex justify-between py-1">
                            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Reperations weekly</span>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth="1" fillOpacity="0"
                                style={{strokeDasharray: '65px', strokeDashoffset: '0px'}}>
                            </path>
                        </svg>
                        <div>
                            <div className="grid grid-cols-10 grid-rows-1 ml-6">
                                <div>10</div>
                                <div>20</div>
                                <div>30</div>
                                <div>40</div>
                                <div>50</div>
                                <div>60</div>
                                <div>70</div>
                                <div>80</div>
                                <div>90</div>
                                <div>100</div>
                            </div>
                            <p className="border-b-2 border-red-400 max-w-[40px]">Days</p>
                        </div>
                    </div>

                    <div className="mb-7">
                        <div className="flex justify-between py-1">
                            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Damage Property</span>
                            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#5185D4" strokeWidth="1" fillOpacity="0"
                                style={{strokeDasharray: '75px', strokeDashoffset: '0px'}}>
                            </path>
                        </svg>
                        <div>
                            <div className="grid grid-cols-10 grid-rows-1 ml-6">
                                <div>10</div>
                                <div>20</div>
                                <div>30</div>
                                <div>40</div>
                                <div>50</div>
                                <div>60</div>
                                <div>70</div>
                                <div>80</div>
                                <div>90</div>
                                <div>100</div>
                            </div>
                            <p className="border-b-2 border-red-400 max-w-[40px]">Days</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );

};


export default ProgressBar;
