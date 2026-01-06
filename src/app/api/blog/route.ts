/**
 * 全記事を取得するAPI
 */


import { supabase } from "@/utils/supabase/client";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

// 記事一覧を取得するAPI
export async function GET(req: Request, res: NextApiResponse) {

    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, { status: 200 });
}

// 記事を作成するAPI
export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();

    const { data, error } = await supabase
        .from("posts")
        .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, { status: 201 });
}