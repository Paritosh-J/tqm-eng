import React from "react";
// import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div
                className="container text-black-600  mx-auto flex items-center justify-center flex-col"
                id="overview"
            >
                <div className="text-justify lg:w-2/3 w-full">
                    <p className="text-justify">
                    Founded in 2007, TQM ENGINEERS & CONSULTANTS has accumulated substantial experience in providing comprehensive services such as Turnkey Projects for Sewage Treatment Plants and Effluent Plants. Situated in Haldwani, Uttarakhand, we deliver Turnkey Projects for Sewage Treatment Plants and Effluent Plants to our clients.
                    </p>
                </div>
            </div>

            <section className="text-black-600 body-font">
                <h1
                    style={{
                        fontSize: "x-large",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "1em",
                        marginBottom: "10px",
                        textDecoration: "underline 1px",
                    }}
                >
                    Skills
                </h1>
                <div className="container mx-auto">
                    <div className="flex items-center lg:w-3/5 mx-auto pb-3 border-b mb-3 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-lg title-font font-medium mb-2">
                                Coding Languages
                            </h2>
                            <ul
                                style={{
                                    listStyle: "disc inside",
                                    textAlign: "left",
                                    display: "inline-block",
                                }}
                            >
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-3 mb-3 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-lg title-font font-medium mb-2">
                                Web Development
                            </h2>
                            <ul
                                style={{
                                    listStyle: "disc inside",
                                    textAlign: "left",
                                    display: "inline-block",
                                }}
                            >
                                <li>Flask</li>
                                <li>Django</li>
                                <li>React JS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-3 mb-3 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-lg title-font font-medium mb-2">
                                Android Development
                            </h2>
                            <ul
                                style={{
                                    listStyle: "disc inside",
                                    textAlign: "left",
                                    display: "inline-block",
                                }}
                            >
                                <li>
                                    Java App <br /> Development
                                </li>
                                <li>Flutter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
