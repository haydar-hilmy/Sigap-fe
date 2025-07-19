import { AccessTimeOutlined, EditNoteOutlined, MarkEmailReadOutlined } from "@mui/icons-material";
import Navbar from "../../components/navbar/Navbar";
import AppLayout from "../../layouts/AppLayout";
import { StatBox } from "../../components/box/StatBox";

const SectionDashboardPage = ({ children }) => {
  return (
    <section className="mb-6">
      {children}
    </section>
  )
}

const DashboardMahasiswa = () => {
  return (
    <>
      <SectionDashboardPage>
        <div>
          <h1 className="text-xl font-bold">About SIGAP</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi delectus ad molestiae aliquam eveniet eum, voluptatum quaerat minus dolor facilis et obcaecati eaque officia similique ipsam consequatur expedita excepturi.
          </p>
        </div>
      </SectionDashboardPage>

      <SectionDashboardPage>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StatBox
            color="#581c87"
            value={19}
            label="Surat Ditulis"
            icon={<EditNoteOutlined sx={{ color: "#581c87" }} />}
          />
          <StatBox
            color="#16a34a"
            value={5}
            label="Surat Disetujui"
            icon={<MarkEmailReadOutlined sx={{ color: "#16a34a" }} />}
          />
          <StatBox
            color="#5579e0"
            value={14}
            label="Surat Pending"
            icon={<AccessTimeOutlined sx={{ color: "#5579e0" }} />}
          />
        </div>
      </SectionDashboardPage>
    </>
  );
}

export default DashboardMahasiswa;