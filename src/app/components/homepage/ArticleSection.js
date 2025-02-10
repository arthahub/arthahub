const ArticleSection = () => {
    return (
        <div className="space-y-10 mt-6">
            <article>
                <div className="w-full h-64">
                <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                </div>
                <h1 className="text-slate-800 text-2xl mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, soluta?
                </h1>
                <p className="text-slate-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas eius obcaecati, dignissimos.
                </p>
                <p className="text-sm font-medium mt-3">
                2 Febuari 2025
                </p>
            </article>

            <article>
                <div className="w-full h-64">
                <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                </div>
                <h1 className="text-slate-800 text-2xl mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, soluta?
                </h1>
                <p className="text-slate-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas eius obcaecati, dignissimos.
                </p>
                <p className="text-sm font-medium mt-3">
                2 Febuari 2025
                </p>
            </article>
        </div>
    )
}

export default ArticleSection;