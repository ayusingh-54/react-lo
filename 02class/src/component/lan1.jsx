import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */



export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="relative bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401')] bg-cover bg-center min-h-screen">
    	  <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/95 to-neutral-100/95 backdrop-blur-[2px]"></div>
    	  <nav className="bg-white/90 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50">
    	    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    	      <div className="flex justify-between items-center">
    	        <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-neutral-800 hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer animate-pulse">
    	          HAPSCALE
    	        </h1>
    	        <details className="md:hidden relative z-50">
    	          <summary className="list-none">
    	            <span className="material-symbols-outlined text-2xl text-neutral-700 hover:scale-110 hover:rotate-180 transition-all duration-500">menu</span>
    	          </summary>
    	          <div className="absolute right-0 mt-4 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-lg py-2 border border-neutral-100 animate-slideDown">
    	            <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:translate-x-2 transition-all duration-300">What we do?</a>
    	            <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:translate-x-2 transition-all duration-300">What we see?</a>
    	            <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:translate-x-2 transition-all duration-300">What are high?</a>
    	            <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:translate-x-2 transition-all duration-300">Contact</a>
    	            <button className="bg-neutral-800 text-white font-medium px-4 py-2 rounded-lg w-11/12 mx-2 mt-2 hover:bg-neutral-900 hover:shadow-md hover:scale-105 transition-all duration-300">
    	              SIGN UP
    	            </button>
    	          </div>
    	        </details>
    	        <div className="hidden md:flex items-center space-x-8">
    	          <a href="#" className="text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:scale-105 transition-all duration-300">What we do?</a>
    	          <a href="#" className="text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:scale-105 transition-all duration-300">What we see?</a>
    	          <a href="#" className="text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:scale-105 transition-all duration-300">What are high?</a>
    	          <a href="#" className="text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:scale-105 transition-all duration-300">Contact</a>
    	          <button className="bg-neutral-800 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-neutral-900 hover:shadow-md hover:scale-110 transition-all duration-300 animate-bounce">
    	            SIGN UP
    	          </button>
    	        </div>
    	      </div>
    	    </div>
    	  </nav>
    	
    	  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
    	    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 items-center">
    	      <div className="relative z-30 text-center md:text-left lg:col-span-2 order-2 md:order-1">
    	        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-neutral-800 mb-8 md:mb-10 hover:scale-105 transition-all duration-500 animate-pulse">
    	          LIVE HAPPY<br />BE HAPPY
    	        </h2>
    	        <p className="text-lg md:text-xl mb-8 leading-relaxed text-neutral-600 hover:translate-x-2 hover:scale-105 transition-all duration-300">
    	          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
    	        </p>
    	        <p className="text-lg md:text-xl mb-10 leading-relaxed text-neutral-600 hover:translate-x-2 hover:scale-105 transition-all duration-300">
    	          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    	        </p>
    	        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
    	          <button className="bg-neutral-800 text-white font-medium text-base px-8 py-3.5 rounded-lg hover:bg-neutral-900 hover:shadow-lg hover:-translate-y-1 hover:scale-110 transition-all duration-300 animate-bounce">
    	            REGISTER
    	          </button>
    	          <button className="bg-white/90 backdrop-blur-sm border border-neutral-300 text-neutral-800 font-medium text-base px-8 py-3.5 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-lg hover:-translate-y-1 hover:scale-110 transition-all duration-300 group">
    	            <span className="group-hover:rotate-12 inline-block transition-transform duration-300">Learn More</span>
    	          </button>
    	        </div>
    	      </div>
    	      <div className="relative order-1 md:order-2 w-full group animate-float">
    	        <div className="absolute -top-8 -left-8 z-40 animate-spin-slow"></div>
    	        <div className="absolute -bottom-8 -right-8 z-40 animate-bounce"></div>
    	      </div>
    	    </div>
    	  </main>
    	</div> 
            </div>
  )
}

export default MyPlugin;