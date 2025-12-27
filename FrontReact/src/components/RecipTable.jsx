export function RecipTable({ recettes }) {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Slug</th>
            </tr>
            </thead>
            <tbody>
            {recettes.map(r => (
                <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.slug}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
