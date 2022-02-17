

export default function Admin() {
  return (
    <div className=" bg-gray-800 text-gray-50 min-h-screen pb-56">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <header className="px-4 flex justify-between items-center w-full mt-8 sm:mt-6">
          <div className="flex items-center space-x-2.5">
            <span className="rounded-full bg-gray-600 h-8 w-8"></span>
            <p className="font-semibold text-gray-500 hidden sm:block">"What's Gas Like?"</p>
          </div>
          <div className="flex items-center">
            <select value="USD" className="shadow-inner py-1 text-xs px-3 rounded-md bg-gray-700 border border-gray-600">USD</select>
            <span className="text-gray-400 font-medium text-sm border-l border-gray-700 ml-5 pl-4">Sign in</span>
          </div>
        </header>
        <h3 className="text-gray-400 mt-12 mb-6">Gas prices are...</h3>
        <h1 className="text-6xl sm:text-7xl font-bold mb-16"><span className="text-5xl sm:text-6xl mb-2">🤝</span> Normal</h1>
        {/* <h1 className="text-6xl sm:text-7xl font-bold mb-16"><span className="text-5xl sm:text-6xl mb-4">👍</span> Good</h1> */}
        {/* <h1 className="text-6xl sm:text-7xl font-bold mb-16"><span className="text-5xl sm:text-6xl mb-4">👎</span> Bad</h1> */}
        <section className="flex flex-col items-center text-gray-350 bg-gray-700 sm:rounded-xl shadow-md border border-gray-900 border-t-0 w-full sm:max-w-md p-6 sm:px-8 mb-5 ">
          <div className=" space-y-1 mb-6 w-full">
            <div className="flex justify-between items-center">
              <span className="w-2/3 leading-6">Send ETH</span>
              <div className="price flex self-start text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl font-medium">8</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-2/3 leading-6">Buy an NFT on OpenSea</span>
              <div className="price flex self-start text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl font-medium">92</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-2/3 leading-6">Swap a token on Uniswap</span>
              <div className="price flex self-start text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl font-medium">92</span>
              </div>
            </div>
          </div>
          <div className="text-sm divide-y divide-gray-600 w-full">
            <div className="py-2 flex justify-between">
              <span>Since last week</span>
              <span className="text-base leading-5">-2<span className="text-xs">%</span></span>
            </div>
            <div className="py-2 flex justify-between">
              <span>Since last month</span>
              <span className="text-base leading-5">-2<span className="text-xs">%</span></span>
            </div>
            <div className="py-2 flex justify-between">
              <span>Since last 3 months</span>
              <span className="text-base leading-5">-2<span className="text-xs">%</span></span>
            </div>
          </div>
          </section>
        <section className="text-gray-350 bg-gray-700 sm:rounded-xl shadow-md border border-gray-900 border-t-0 sm:max-w-md w-full p-6 sm:px-8">
          <div className="flex space-x-1.5 items-center text-gray-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>          
            <h4 className="uppercase text-xs font-bold tracking-wide">Settings</h4>
          </div>
          <div className=" space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="w-1/2">Get texts when gas is cheap</span>
              <input className="self-start mt-1" type="checkbox" checked />
            </div>
            <div className="flex justify-between">
              <span className="w-1/2">Phone Number</span>
              <div className="price flex flex-col items-end self-start">
                <span className=" text-gray-50">(416) 804-8644</span>
                <span className="text-xxs underline">Change</span>
              </div>
            </div>
          </div>
          <button className=" mt-1 text-sm border border-rose-800 bg-rose-900 hover:bg-rose-800 text-rose-100 hover:text-white font-medium py-2 px-3 rounded-md shadow-sm hover:shadow w-full">Delete account</button>
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps() {



  return {
    props: {
      //data
    }
  }
}
