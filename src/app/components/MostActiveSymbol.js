export default function MostActiveStocks() {
    const stocks = [
      { name: "TSLA", change: "+2.63%", color: "text-green-600 bg-green-100" },
      { name: "NVDA", change: "-1.13%", color: "text-red-600 bg-red-100" },
      { name: "MSTR", change: "+14.98%", color: "text-green-600 bg-green-100" },
      { name: "AAPL", change: "-0.12%", color: "text-red-600 bg-red-100" },
      { name: "PLTR", change: "+4.36%", color: "text-green-600 bg-green-100" },
      { name: "COST", change: "+0.23%", color: "text-green-600 bg-green-100" },
      { name: "ITCI", change: "+2.43%", color: "text-green-600 bg-green-100" },
      { name: "COIN", change: "+7.86%", color: "text-green-600 bg-green-100" },
      { name: "GOOGL", change: "+0.92%", color: "text-green-600 bg-green-100" },
      { name: "INTC", change: "+5.44%", color: "text-green-600 bg-green-100" },
    ];
  
    return (
      <div className="w-full">
        <h2 className="text-lg font-semibold">Volume simbol paling aktif</h2>
        <p className="text-sm text-gray-500">Data as of Mar 3, 2025 9:30 AM ET</p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded ${stock.color}`}
            >
              <span className="text-xs font-semibold text-gray-700">{stock.name}</span>
              <span className="text-xs font-medium">{stock.change}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }