import Topbar from "../../components/Admin/topbar/topbar";
import Sidebar from "../../components/Admin/sidebar/sidebar";
import "./HomeAdmin.scss"
import UserList from "../../components/Admin/UserManagement/UserManagement";
function HomeAdminPage() {
  return (
   <>
         <Topbar/>
      <div className="adm__container">
       <Sidebar/>
        <div >
          <UserList/>
        </div>
      </div>

        </>
  );
}
export default HomeAdminPage;
