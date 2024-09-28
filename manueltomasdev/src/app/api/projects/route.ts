import { NextResponse } from "next/server";

export async function GET() {
	// Aqui você normalmente buscaria dados de um banco de dados
	const projects = [
		{
			title: "E-commerce App",
			description: "Aplicação React com carrinho de compras",
			technologies: ["React", "Node.js", "MongoDB"],
			github: "https://github.com",
			live: "https://example.com",
		},
		// Adicione mais projetos aqui
	];

	return NextResponse.json(projects);
}
