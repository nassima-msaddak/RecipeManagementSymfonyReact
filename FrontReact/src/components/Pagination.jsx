export function Pagination({ page, setPage, totalPages }) {
    return (
        <div style={{ marginTop: '1rem' }}>
            <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
            >
                Précédent
            </button>

            <span style={{ margin: '0 1rem' }}>
                Page {page} / {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
            >
                Suivant
            </button>
        </div>
    );
}
