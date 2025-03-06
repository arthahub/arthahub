export default function SymbolKeyData({ symbolData }) {
    console.log(symbolData);

    const data = [
        { label: "50 Day Avg. Daily Volume", value: "219,824" },
        { label: "Previous Close", value: "$71.29" },
        { label: "52 Week High/Low", value: "$75.62/$62.71" },
        { label: "Market Cap", value: symbolData && symbolData.marketCap },
        { label: "Annualized Dividend", value: "$2.27928" },
        { label: "Ex Dividend Date", value: symbolData && symbolData.exDividendDate },
        { label: "Dividend Pay Date", value: symbolData && symbolData.dividendPayDate
        },
        { label: "Current Yield", value: symbolData && symbolData.currentYield },
    ];

    const additionalData = [
        { label: "Weighted Alpha", value: "+10.99" },
        { label: "Beta", value: "1.02" },
        { label: "Standard Deviation", value: "+1.23" },
        { label: "Average Daily Volume 20 Days", value: "520,025" },
        { label: "Average Daily Volume 65 Days", value: "331,987" },
        { label: "Assets Under Management (,000)", value: "7,660,942" },
        { label: "Expense Ratio", value: "0.19%" },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold border-l-4 border-main-theme-2 pl-2 mb-4">Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                    </div>
                ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                {additionalData.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
  