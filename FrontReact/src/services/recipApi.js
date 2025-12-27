
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchRecips() {
    const res = await fetch(`${API_URL}/api/recips`);  // nassima : içi j'utilise l'URL par defaut de l'API plateform
    const data = await res.json();
    return data.member;
}




export async function fetchRecipsPagination(page = 1) {
    const res = await fetch(`${API_URL}/api/recips?page=${page}`);
    if (!res.ok) throw new Error("Erreur API");
    const data = await res.json();

    return {
        items: data.member,
        totalItems: data.totalItems
    };
}
