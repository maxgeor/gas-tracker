export default function Home() {
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
        <h3 className="text-gray-400 pt-12 mb-6 sm:mb-8">Gas prices are...</h3>
        <h1 className="text-6xl sm:text-7xl font-bold mb-12"><span className="text-6xl mb-2">🤝</span> Normal</h1>
        {/* <h1 className="text-6xl sm:text-7xl font-bold mb-16"><span className="text-6xl mb-4">👍</span> Good</h1> */}
        {/* <h1 className="text-6xl sm:text-7xl font-bold mb-16"><span className="text-6xl mb-4">👎</span> Bad</h1> */}
        <section className="flex flex-col items-center text-gray-350 bg-gray-700 sm:rounded-xl shadow-md border border-gray-900 border-t-0 w-full sm:max-w-md p-6 sm:px-8 mb-20">
          <div className=" space-y-1 mb-6 w-full">
            <div className="flex justify-between">
              <span>Send ETH</span>
              <div className="price flex text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl">8</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Buy an NFT on OpenSea</span>
              <div className="price flex text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl">92</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="mr-24">Swap a token on Uniswap</span>
              <div className="price flex text-gray-50">
                <span className="dollar-sign text-sm mt-0.5 mr-0.5">$</span>
                <span className="amount text-2xl">92</span>
              </div>
            </div>
          </div>
          <div className="text-sm divide-y divide-gray-600 w-full">
            <div className="py-1 flex justify-between">
              <span>Since last week</span>
              <span className="text-base">-2<span className="text-xs">%</span></span>
            </div>
            <div className="py-1 flex justify-between">
              <span>Since last month</span>
              <span className="text-base">-2<span className="text-xs">%</span></span>
            </div>
            <div className="py-1 flex justify-between">
              <span>Since last two months</span>
              <span className="text-base">-2<span className="text-xs">%</span></span>
            </div>
          </div>
        </section>
        <section className="max-w-sm">
          <label>
            <div className="flex items-center mb-3">
              <svg className="text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <p className="text-gray-400">Get a text when gas is cheap</p>
            </div>
            <div className="flex">
              <input type="text" paceholder="(911) 911-9111" className=" border-r-0 outline-none focus:ring focus:ring-green-600 bg-gray-700 text-gray-400 rounded-l-md py-2 px-3 w-full"></input>
              <button className="flex items-center justify-center border  border-green-600 h-11 w-12 bg-green-500 rounded-r-md">
                <svg className="-ml-0.5 transform rotate-12 text-green-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </label>
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
