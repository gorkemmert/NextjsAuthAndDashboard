import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    
    const {username, password} = await request.json();


    const response = await axios.post(`${process.env.API_URL}/security/createToken`, {
        username,
        password
    })

    if(response){
        return NextResponse.json({token: response.data});
    }else {
        return NextResponse.json({error: 'Invalid credentials'}, { status: 401 });
    }
}

