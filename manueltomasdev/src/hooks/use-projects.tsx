/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr'

// Função fetcher para buscar os dados
const fetcher = (url: string) => fetch(url).then((res) => {
    if (!res.ok) {
        throw new Error("Erro ao buscar os dados");
    }
    return res.json();
})

// Definimos o hook como genérico, aceitando tanto o tipo dos dados quanto o do erro
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function useProjects<T, E = any>() {
    const { data, error, isLoading } = useSWR<T, E>('/api/projects', fetcher)

    return {
        projects: data,
        isLoading,
        isError: error
    }
}

export { useProjects }
