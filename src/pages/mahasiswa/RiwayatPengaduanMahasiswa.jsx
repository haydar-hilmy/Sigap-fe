import Table from "../../components/table/Table";

const RiwayatPengaduanMahasiswa = () => {
    const columns = [
        { header: "Nama", accessor: "nama" },
        { header: "Email", accessor: "email" },
        { header: "Email", accessor: "email" },
        { header: "Aksi", accessor: "aksi" },
    ];

    const data = Array.from({ length: 500 }, (_, i) => ({
        nama: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        aksi: () => (
            <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Detail
            </button>
        ),
    }));

    return (
        <>
            <Table columns={columns} data={data} count={data.length} />
        </>
    );
}

export default RiwayatPengaduanMahasiswa;