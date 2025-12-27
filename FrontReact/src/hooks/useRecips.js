import { useEffect, useState } from "react";
import { fetchRecipsPagination} from "../services/recipApi";



export function useRecipsByPagination(initialPage = 1) {
    const [recettes, setRecettes] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetchRecipsPagination(page)
            .then(({ items, totalItems }) => {
                if (cancelled) return;

                setRecettes(items);
                setTotalPages(Math.ceil(totalItems / items.length));
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;

                setError(err);
                setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [page]);

    return { recettes, page, setPage, totalPages, loading, error };
}

