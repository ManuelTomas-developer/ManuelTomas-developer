import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();

	// Aqui você normalmente enviaria um email ou salvaria em um banco de dados
	console.log("Mensagem recebida:", body);

	return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
}
