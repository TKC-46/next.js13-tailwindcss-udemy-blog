import Link from "next/link"

const ArticleList = () => {
    return (
        <div>
            <article className="shadow my-4 flex-col">
                <Link href="#" className="hover:opacity-75">
                    {/* <Image
                        src="https://source.unsplash.com/collection/1346951/1000x500?sig=13"
                        alt=""
                        width={1280}
                        height={300}
                    /> */}
                </Link>
                <div className="bg-white flex flex-col">
                    <Link href="#" className="text-blue-700 pd-4 font-bold">
                        Technology
                    </Link>
                    <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
                        Next.jsの勉強中
                    </Link>
                    <p className="text-sm pb-3 text-slate-900"> published on 2025/12/27</p>
                    <a href="#" className="text-slate-900 pd-6">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Eveniet vero nam adipisci,
                        architecto perspiciatis itaque illum necessitatibus,
                        minus quisquam nesciunt labore possimus sit quos esse a
                        magnam doloremque, totam aperiam.
                    </a>
                    <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
                </div>
            </article>
            <article className="shadow my-4 flex-col">
                <Link href="#" className="hover:opacity-75">
                    {/* <Image
                        src="https://source.unsplash.com/collection/1346951/1000x500?sig=13"
                        alt=""
                        width={1280}
                        height={300}
                    /> */}
                </Link>
                <div className="bg-white flex flex-col">
                    <Link href="#" className="text-blue-700 pd-4 font-bold">
                        Technology
                    </Link>
                    <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
                        Next.jsの勉強中
                    </Link>
                    <p className="text-sm pb-3 text-slate-900"> published on 2025/12/27</p>
                    <a href="#" className="text-slate-900 pd-6">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Eveniet vero nam adipisci,
                        architecto perspiciatis itaque illum necessitatibus,
                        minus quisquam nesciunt labore possimus sit quos esse a
                        magnam doloremque, totam aperiam.
                    </a>
                    <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
                </div>
            </article>
        </div>
    )
}

export default ArticleList