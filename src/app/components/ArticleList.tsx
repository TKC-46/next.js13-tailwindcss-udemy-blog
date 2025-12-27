import Image from "next/image"
import Link from "next/link"

const ArticleList = () => {
    return (
        <div>
            <article>
                <Link href="#">
                    <Image
                        src="https://source.unsplash.com/collection/1346951/1000x500?sig=13"
                        alt=""
                        width={1280}
                        height={300}
                    />
                </Link>
                <div>
                    <Link href="#">Technology</Link>
                    <Link href="#">Next.jsの勉強中</Link>
                    <p>By tkcode, published on 2025/12/27</p>
                    <a href="#">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Eveniet vero nam adipisci,
                        architecto perspiciatis itaque illum necessitatibus,
                        minus quisquam nesciunt labore possimus sit quos esse a
                        magnam doloremque, totam aperiam.
                    </a>
                    <Link href="#">続きを読む</Link>
                </div>
            </article>
        </div>
    )
}

export default ArticleList