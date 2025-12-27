import { useRecipsByPagination } from "../hooks/useRecips";
import { RecipTable } from "../components/RecipTable";
import {Pagination} from "../components/Pagination.jsx";

export function RecipPage() {
    const { recettes, loading, error ,page ,  setPage, totalPages   } = useRecipsByPagination();

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur</p>;

    return (
        <>
            <h4>Liste des recettes</h4>
            <RecipTable recettes={recettes} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
}
