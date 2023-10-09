import Topbar from "../../components/Admin/topbar/topbar";
import Sidebar from "../../components/Admin/sidebar/sidebar";
import "./HomeAdmin.scss"
import FilmList from "../../components/Admin/FilmManagement/FilmManagement";
function FilmAdminPage() {
  return (
   <>
         <Topbar/>
      <div className="adm__container">
       <Sidebar/>
        <FilmList/>
      </div>

        </>
  );
}
export default FilmAdminPage;
