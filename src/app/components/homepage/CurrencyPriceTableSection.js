import AdvanceChart from "../tradingview/chart/AdvanceChart";

const CurrencyPriceTableSection = () => {
    const currencyData = [
      { symbol: "USD/IDR", name: "Dolar terhadap Rupiah", last: 15_523.40, change: -268.59, percent: -1.36 },
      { symbol: "AUD/IDR", name: "Dolar Australia terhadap Rupiah", last: 10_491.31, change: -182.75, percent: -1.30 },
      { symbol: "EUR/IDR", name: "Euro terhadap Rupiah", last: 17_154.24, change: -128.79, percent: -0.90 },
      { symbol: "JPY/IDR", name: "Yen Jepang terhadap Rupiah", last: 105.75, change: -2.45, percent: -2.27 },
      { symbol: "GBP/IDR", name: "Poundsterling terhadap Rupiah", last: 19_431.60, change: -348.20, percent: -1.76 },
      { symbol: "SGD/IDR", name: "Dolar Singapura terhadap Rupiah", last: 11_546.90, change: -89.45, percent: -0.77 },
    ];

    return (
      <div>
        <div className="w-full mt-6 p-8 bg-neutral-100">
            <div className="border-l-4 border-main-theme-2 pl-2">
              Kurs Mata Uang
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-3">
              {/* table 1 */}
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="w-[50%] py-2 text-slate-800 font-normal text-sm">Symbol</th>
                    <th className="w-[30%] py-2 text-slate-800 font-normal text-sm">Last</th>
                    <th className="w-[20%] py-2 text-slate-800 font-normal text-sm">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {currencyData.slice(0,3).map((stock, index) => (
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
              {/* table 2 */}
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="w-[50%] py-2 text-slate-800 font-normal text-sm">Symbol</th>
                    <th className="w-[30%] py-2 text-slate-800 font-normal text-sm">Last</th>
                    <th className="w-[20%] py-2 text-slate-800 font-normal text-sm">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {currencyData.slice(3,6).map((stock, index) => (
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
        {/* chart */}
        <div className="w-full h-96 mt-6">
          <AdvanceChart/>
        </div>
      </div>
    )
}

export default CurrencyPriceTableSection;