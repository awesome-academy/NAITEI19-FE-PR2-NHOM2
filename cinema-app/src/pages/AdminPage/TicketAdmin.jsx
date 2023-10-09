import Topbar from "../../components/Admin/topbar/topbar";
import Sidebar from "../../components/Admin/sidebar/sidebar";
import "./HomeAdmin.scss"
import TicketAdmin from "../../components/Admin/TicketManagement/TicketAdmin";
function FilmAdminPage() {
  return (
   <>
    <Topbar/>
      <div className="adm__container">
       <Sidebar/>
       <div >
          <TicketAdmin/>
        </div>
      </div>

        </>
  );
}
export default FilmAdminPage;
