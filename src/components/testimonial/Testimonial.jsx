/* eslint-disable react/no-unescaped-entities */

import AnimatedComponent from "../animatedComponent/AnimatedComponent"

const Testimonial = () => {
    return (
        <div>
            <AnimatedComponent>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-cyan-400'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/7981/7981359.png" />
                                <p className="leading-relaxed">The app is incredibly user-friendly and straightforward.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kanishk Arora</h2>
                                <p className="text-gray-500">Senior App Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">My orders always arrive on schedule. Super fast shipping. I received my items in no time.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anchal Mishra</h2>
                                <p className="text-gray-500">Full-Stack Dev</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/145/145867.png" />
                                <p className="leading-relaxed">This app has completely changed the way I shop. Highly recommend it.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Suresh Kumar</h2>
                                <p className="text-gray-500">Regular Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </AnimatedComponent>
        </div>
    )
}

export default Testimonial