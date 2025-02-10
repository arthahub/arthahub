import AdvanceChart from "../tradingview/chart/AdvanceChart";

const StockAndCryptoPriceTableSection = () => {
    const stockData = [
      { symbol: "BBCA", name: "Bank BCA", last: 9_000.00, change: -100.00, percent: -1.10, type: "stock" },
      { symbol: "TLKM", name: "Telkom Indonesia", last: 4_800.00, change: -50.00, percent: -1.04, type: "stock" },
      { symbol: "UNVR", name: "Unilever Indonesia", last: 5_000.00, change: -75.00, percent: -1.48, type: "stock" },
    ];

    const cryptoData = [
      { symbol: "BTC", name: "Bitcoin", last: 468_500_000.00, change: 3_500_000.00, percent: 0.75, type: "crypto" },
      { symbol: "ETH", name: "Ethereum", last: 31_500_000.00, change: 850_000.00, percent: 2.77, type: "crypto" },
      { symbol: "XRP", name: "Ripple", last: 8_400.00, change: 250.00, percent: 3.06, type: "crypto" },
    ];

    return (
      <div className="w-full mt-6 p-8 bg-neutral-100">
          <div className="grid grid-cols-2 gap-x-14">
            <div>
              <div className="border-l-4 border-main-theme-1 pl-2">
                Saham
              </div>
              {/* table 1 */}
              <table className="w-full text-left mt-3">
                <thead>
                  <tr className="border-b">
                    <th className="w-[50%] py-2 text-slate-800 font-normal text-sm">Symbol</th>
                    <th className="w-[30%] py-2 text-slate-800 font-normal text-sm">Last</th>
                    <th className="w-[20%] py-2 text-slate-800 font-normal text-sm">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((stock, index) => (
                    <tr key={stock.symbol} className={`border-b ${index === 1 ? "bg-gray-100" : ""}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500">▼</span>
                          <div>
                            <p className="font-semibold">{stock.symbol}</p>
                            <p className="text-xs text-gray-500">{stock.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 font-normal">{stock.last.toLocaleString()}</td>
                      <td className="py-3 text-red-500 font-medium">
                        {stock.change.toFixed(2)}
                        <br />
                        <span className="text-xs">{stock.percent.toFixed(2)}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="border-l-4 border-main-theme-2 pl-2">
                Mata Uang Kripto
              </div>
              {/* table 2 */}
              <table className="w-full text-left mt-3">
                <thead>
                  <tr className="border-b">
                    <th className="w-[50%] py-2 text-slate-800 font-normal text-sm">Symbol</th>
                    <th className="w-[30%] py-2 text-slate-800 font-normal text-sm">Last</th>
                    <th className="w-[20%] py-2 text-slate-800 font-normal text-sm">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((stock, index) => (
                    <tr key={stock.symbol} className={`border-b ${index === 1 ? "bg-gray-100" : ""}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500">▼</span>
                          <div>
                            <p className="font-semibold">{stock.symbol}</p>
                            <p className="text-xs text-gray-500">{stock.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 font-normal">{stock.last.toLocaleString()}</td>
                      <td className="py-3 text-red-500 font-medium">
                        {stock.change.toFixed(2)}
                        <br />
                        <span className="text-xs">{stock.percent.toFixed(2)}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    )
}

export default StockAndCryptoPriceTableSection;