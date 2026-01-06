/**
 * 指定IDの記事を取得するAPI
 */


import { supabase } from "@/utils/supabase/client";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

// 詳細情報取得API
export async function GET(req: Request, res: NextApiResponse) {

    const id = req.url.split("/blog/")[1];
    // console.log("-----------------------------------------***");
    // console.log(req.url);
    // console.log(req.url.split("/blog/"));

    const { data, error } = await supabase.from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return NextResponse.json(error);
    }

    if (!data) {
        notFound();
    }

    return NextResponse.json(data, { status: 200 });
}

// 削除
export async function DELETE(req: Request, res: NextApiResponse) {

    const id = req.url.split("/blog/")[1];


    const { error: deleteError } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);

    if (deleteError) {
        return NextResponse.json(deleteError);
    }



    return NextResponse.json({ status: 200 });
}